// src/options.ts
var DEFAULT_SPREAD_QUERY = "(min-width: 768px) and (orientation: landscape)";
var DEFAULT_PAGE_ASPECT = 1.377;
function defaultPageLabel({ visiblePages, pageCount }) {
  if (!visiblePages.length) return `Closed, ${pageCount} pages`;
  const [first, last] = [visiblePages[0] + 1, visiblePages[visiblePages.length - 1] + 1];
  return first === last ? `Page ${first} of ${pageCount}` : `Pages ${first}\u2013${last} of ${pageCount}`;
}
function isPageDescriptor(page) {
  return typeof page === "object" && page !== null && Object.getPrototypeOf(page) === Object.prototype && "src" in page;
}
var pageImage = (page) => isPageDescriptor(page) ? page.src : page;
function resolveSettings(options, layout, prefersReducedMotion) {
  const spread2 = layout === "spread";
  const paper = options.paper ?? {};
  const lighting = options.lighting ?? {};
  const motion = options.motion ?? {};
  const interaction = options.interaction ?? {};
  const reduced = motion.reducedMotion === "auto" || motion.reducedMotion === void 0 ? prefersReducedMotion : motion.reducedMotion;
  return {
    layout,
    pageAspect: options.pageAspect ?? DEFAULT_PAGE_ASPECT,
    loop: options.loop ?? true,
    bleed: options.bleed ?? true,
    paper: {
      grain: paper.grain ?? true,
      grainScale: paper.grainScale ?? 1.46,
      grainStrength: paper.grainStrength ?? 0.17,
      showThrough: paper.showThrough ?? (spread2 ? 0.04 : 0.3),
      inkGloss: paper.inkGloss ?? 0.33,
      roughness: paper.roughness ?? 0.5,
      metalness: paper.metalness ?? 0.17,
      backColor: paper.backColor ?? "#fcfcf9",
      wrinkles: paper.wrinkles ?? 1,
      bulge: paper.bulge ?? 1,
      cutout: paper.cutout ?? false,
      sheetGap: Math.max(0, paper.sheetGap ?? 0),
      depthBias: paper.depthBias ?? true
    },
    deform: null,
    lighting: {
      ambient: {
        sky: lighting.ambient?.sky ?? "#ffffff",
        ground: lighting.ambient?.ground ?? "#a1aeaf",
        intensity: lighting.ambient?.intensity ?? (spread2 ? 1.5 : 1.7)
      },
      sun: {
        color: lighting.sun?.color ?? "#ffffff",
        intensity: lighting.sun?.intensity ?? 2,
        position: lighting.sun?.position ?? (spread2 ? [-3.5, 1.3, 4.1] : [0.689, -1.15, 2.15])
      },
      shadows: lighting.shadows ?? true,
      shadowMapSize: lighting.shadowMapSize ?? 2048,
      floorShadow: lighting.floorShadow ?? 0.15
    },
    motion: {
      speed: Math.max(0.05, motion.speed ?? 1),
      dragDistance: motion.dragDistance ?? (spread2 ? 0.8 : 1.2),
      commitThreshold: motion.commitThreshold ?? (spread2 ? 0.2 : 0.1),
      curl: motion.curl ?? 1,
      maxTilt: motion.maxTilt ?? (spread2 ? 45 : 35),
      jitter: reduced ? false : motion.jitter ?? true,
      hoverLift: reduced ? 0 : motion.hoverLift ?? 0.03,
      reduced
    },
    interaction: {
      drag: interaction.drag ?? true,
      click: interaction.click ?? true,
      hold: interaction.hold ?? true,
      hover: interaction.hover ?? true,
      keyboard: interaction.keyboard ?? true
    },
    maxPixelRatio: options.maxPixelRatio ?? 3
  };
}
var LIVE_OPTIONS = /* @__PURE__ */ new Set([
  "onPageChange",
  "onReady",
  "onPageLoad",
  "onError",
  "formatPageLabel",
  "label",
  "startPage",
  "preload",
  "pages"
]);
function preloadRadius(preload) {
  const radius = preload ?? 6;
  return Number.isNaN(radius) ? 6 : Math.max(0, radius);
}
function snapshot(value) {
  if (typeof value !== "object" || value === null) return value;
  if (Array.isArray(value)) return value.map(snapshot);
  if (Object.getPrototypeOf(value) !== Object.prototype) return value;
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, snapshot(item)]));
}
function deepEqual(a, b) {
  if (Object.is(a, b)) return true;
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const protoA = Object.getPrototypeOf(a);
  if (protoA !== Object.prototype && protoA !== Array.prototype) return false;
  if (protoA !== Object.getPrototypeOf(b)) return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every((key) => deepEqual(a[key], b[key]));
}
function changedOptions(previous, next) {
  const keys = /* @__PURE__ */ new Set([...Object.keys(previous), ...Object.keys(next)]);
  return [...keys].filter((key) => !deepEqual(previous[key], next[key]));
}

// src/paper/paperMaterial.ts
import * as THREE from "three";
var glslFloat = (n) => Number.isInteger(n) ? `${n}.0` : `${n}`;
function createPaperMaterials(uniforms, shader, settings) {
  const { paper, pageAspect } = settings;
  const blank = new THREE.Color(paper.backColor);
  const constants = (
    /* glsl */
    `
    const float SHEET_ASPECT = ${glslFloat(pageAspect)};
    const float NORMAL_EPSILON = ${glslFloat(shader.epsilon)};
    const float PATTERN_SIZE = ${glslFloat(paper.grainScale)};
    const float PATTERN_DARKEN = ${glslFloat(paper.grain === false ? 0 : paper.grainStrength)};
    const float PATTERN_ROUGHNESS = 0.33;
    const float SHOW_THROUGH = ${glslFloat(paper.showThrough)};
    const float INK_GLOSS = ${glslFloat(paper.inkGloss)};
    const float SHADOW_OFFSET_X = ${glslFloat(shader.shadowOffsetX)};
    const float CONTACT_REACH = 0.04;
    const vec3 BLANK_PAPER = vec3(${glslFloat(blank.r)}, ${glslFloat(blank.g)}, ${glslFloat(blank.b)});
  `
  );
  const noiseAt = (component) => shader.noise ? `aNoise.${component}` : "0.0";
  const deform = settings.deform;
  const deformChunk = deform ? `#include <common>
      uniform vec3 uSheetOrigin;
      ${deform.glsl}
      vec3 sheetDeformed(vec3 p, vec2 uv) {
        return deformSheet(p + uSheetOrigin, uv) - uSheetOrigin;
      }` : "#include <common>";
  const deformed = (p, uv) => deform ? `sheetDeformed(${p}, ${uv})` : p;
  const deformUniforms = deform ? { ...deform.uniforms, uSheetOrigin: uniforms.uSheetOrigin } : {};
  const material = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    metalness: paper.metalness,
    roughness: paper.roughness
  });
  material.onBeforeCompile = (program) => {
    Object.assign(program.uniforms, uniforms, deformUniforms);
    program.vertexShader = constants + shader.vertexChunk + "varying vec2 vSheetUv;\nvarying vec3 vSheetPosition;\n" + program.vertexShader;
    program.vertexShader = program.vertexShader.replace("#include <common>", deformChunk).replace(
      "#include <beginnormal_vertex>",
      `#include <beginnormal_vertex>
        vec2 sheetStep = vec2(NORMAL_EPSILON, NORMAL_EPSILON / SHEET_ASPECT);
        vec3 sheetShaped = sheetPosition(uv, ${noiseAt("x")});
        vec3 sheetP = ${deformed("sheetShaped", "uv")};
        vec3 sheetPx = ${deformed(`sheetPosition(uv + vec2(sheetStep.x, 0.0), ${noiseAt("y")})`, "uv + vec2(sheetStep.x, 0.0)")};
        vec3 sheetPy = ${deformed(`sheetPosition(uv + vec2(0.0, sheetStep.y), ${noiseAt("z")})`, "uv + vec2(0.0, sheetStep.y)")};
        objectNormal = normalize(cross(sheetPx - sheetP, sheetPy - sheetP));`
    ).replace(
      "#include <begin_vertex>",
      `vec3 transformed = sheetP;
        vSheetUv = uv;
        vSheetPosition = sheetShaped;`
    );
    program.fragmentShader = constants + `uniform sampler2D uFront;
      uniform sampler2D uBack;
      uniform sampler2D uPattern;
      uniform vec3 uSpineContact;
      uniform vec3 uLightDirection;
      varying vec2 vSheetUv;
      varying vec3 vSheetPosition;
      ${shader.fragmentChunk ?? ""}

      // Right where a turning sheet leaves the spine it all but touches the pages under it, and
      // the shadow map's depth bias can't tell them apart: a thin strip next to the spine stays
      // lit, which reads as a light seam. There the sheet is a plane through the spine
      // (uSpineContact.xy is its direction across, z says whether a sheet is turning), so test
      // the way to the light against that plane directly.
      float sheetContactShadow(vec3 p, float intensity) {
        if (uSpineContact.z < 0.5) return 1.0;
        vec3 across = vec3(uSpineContact.x, 0.0, uSpineContact.y);
        vec3 normal = vec3(-uSpineContact.y, 0.0, uSpineContact.x);
        float facing = dot(normal, uLightDirection);
        if (abs(facing) < 1e-4) return 1.0;
        float t = -dot(normal, p) / facing;
        if (t <= 1e-4) return 1.0;
        vec3 hit = p + t * uLightDirection;
        float along = dot(hit, across);
        if (along <= 0.0 || along > CONTACT_REACH || abs(hit.y) > SHEET_ASPECT * 0.5) return 1.0;
        return 1.0 - intensity;
      }
      ` + program.fragmentShader;
    program.fragmentShader = program.fragmentShader.replace(
      "#include <clipping_planes_fragment>",
      `#include <clipping_planes_fragment>
        ${shader.fragmentChunk ? "if (sheetHidden(vSheetPosition)) discard;" : ""}`
    ).replace(
      "#include <normal_fragment_begin>",
      `vec3 normal = normalize(vNormal);
        float faceDirection = gl_FrontFacing ? 1.0 : -1.0;
        normal *= faceDirection;
        vec3 nonPerturbedNormal = normal;`
    ).replace(
      "#include <map_fragment>",
      `vec4 frontColor = texture2D(uFront, vSheetUv);
        vec4 backColor = texture2D(uBack, vec2(1.0 - vSheetUv.x, vSheetUv.y));
        ${paper.cutout ? `// Cut to the front page: no paper where it's transparent. The edge that's left
        // keeps its own colour (page images are premultiplied, so divide the alpha out) rather
        // than fading to paper, which would leave a pale fringe.
        if (frontColor.a < 0.5) discard;
        frontColor = vec4(frontColor.rgb / frontColor.a, 1.0);
        backColor = backColor.a > 0.01 ? vec4(backColor.rgb / backColor.a, 1.0) : vec4(BLANK_PAPER, 1.0);` : `// Transparent artwork is unprinted paper, not a hole in the sheet. Page images are
        // premultiplied, so this is "over" compositing onto the paper colour.
        frontColor = vec4(frontColor.rgb + BLANK_PAPER * (1.0 - frontColor.a), 1.0);
        backColor = vec4(backColor.rgb + BLANK_PAPER * (1.0 - backColor.a), 1.0);`}
        vec4 faceColor = gl_FrontFacing ? frontColor : backColor;
        vec4 otherColor = gl_FrontFacing ? backColor : frontColor;
        // thin paper lets some of the other side through
        vec4 sheetColor = faceColor;
        sheetColor.rgb *= mix(vec3(1.0), otherColor.rgb, SHOW_THROUGH);
        diffuseColor *= sheetColor;
        float inkAmount = 1.0 - dot(faceColor.rgb, vec3(0.299, 0.587, 0.114));`
    ).replace("#include <lights_fragment_begin>", withContactShadow(THREE.ShaderChunk.lights_fragment_begin)).replace(
      "#include <roughnessmap_fragment>",
      `#include <roughnessmap_fragment>
        // ink sits glossier than bare paper; fibres are rougher
        roughnessFactor *= 1.0 - inkAmount * INK_GLOSS;
        float pattern = texture2D(uPattern, vSheetUv * PATTERN_SIZE * vec2(1.0, SHEET_ASPECT)).r;
        pattern = 2.0 * pow(pattern, 7.0);
        roughnessFactor = clamp(mix(roughnessFactor, 1.0, clamp(pattern * PATTERN_ROUGHNESS, 0.0, 1.0)), 0.0, 1.0);`
    ).replace(
      "#include <opaque_fragment>",
      `#include <opaque_fragment>
        gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.0), pattern * PATTERN_DARKEN);`
    );
    program.fragmentShader = withSoftBasicShadows(program.fragmentShader);
  };
  const depthMaterial = new THREE.MeshDepthMaterial({
    depthPacking: THREE.RGBADepthPacking,
    side: THREE.DoubleSide
  });
  const distanceMaterial = new THREE.MeshDistanceMaterial({ side: THREE.DoubleSide });
  depthMaterial.onBeforeCompile = distanceMaterial.onBeforeCompile = (program) => {
    Object.assign(program.uniforms, uniforms, deformUniforms);
    program.vertexShader = constants + shader.vertexChunk + "varying vec2 vSheetUv;\nvarying vec3 vSheetPosition;\n" + program.vertexShader;
    program.vertexShader = program.vertexShader.replace("#include <common>", deformChunk).replace(
      "#include <begin_vertex>",
      `vSheetUv = uv;
      vSheetPosition = sheetPosition(uv, ${noiseAt("x")});
      vec3 transformed = ${deformed("vSheetPosition - vec3(SHADOW_OFFSET_X, 0.0, 0.0)", "uv")};`
    );
    program.fragmentShader = constants + `
      uniform sampler2D uFront;
      varying vec2 vSheetUv;
      varying vec3 vSheetPosition;
      ${shader.fragmentChunk ?? ""}
    ` + program.fragmentShader;
    program.fragmentShader = program.fragmentShader.replace(
      "#include <clipping_planes_fragment>",
      `#include <clipping_planes_fragment>
      ${paper.cutout ? "if (texture2D(uFront, vSheetUv).a < 0.5) discard;" : ""}
      ${shader.fragmentChunk ? "if (sheetHidden(vSheetPosition)) discard;" : ""}`
    );
  };
  const cacheKey = constants + shader.vertexChunk + (shader.fragmentChunk ?? "") + (paper.cutout ? "cutout" : "") + (deform?.glsl ?? "");
  material.customProgramCacheKey = () => cacheKey;
  depthMaterial.customProgramCacheKey = () => cacheKey;
  distanceMaterial.customProgramCacheKey = () => cacheKey;
  return { material, depthMaterial, distanceMaterial };
}
function withSoftBasicShadows(fragmentShader) {
  const chunk = softShadowChunk();
  return chunk ? fragmentShader.replace("#include <shadowmap_pars_fragment>", chunk) : fragmentShader;
}
function softensBasicShadows() {
  return softShadowChunk() !== null;
}
function softShadowChunk() {
  const chunk = THREE.ShaderChunk.shadowmap_pars_fragment;
  if (!chunk.includes("sampler2DShadow")) return null;
  const start = chunk.search(/#else\s+float\s+getShadow\(\s*sampler2D\s+shadowMap\b/);
  const end = start < 0 ? -1 : closingEndif(chunk, start);
  if (end < 0) return null;
  const basic = (
    /* glsl */
    `#else
    float interleavedGradientNoise( vec2 position ) {
      return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
    }
    vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
      const float goldenAngle = 2.399963229728653;
      float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
      float theta = float( sampleIndex ) * goldenAngle + phi;
      return vec2( cos( theta ), sin( theta ) ) * r;
    }
    float shadowTexelLit( sampler2D shadowMap, ivec2 texel, ivec2 last, float depth ) {
      float stored = texelFetch( shadowMap, clamp( texel, ivec2( 0 ), last ), 0 ).r;
      #ifdef USE_REVERSED_DEPTH_BUFFER
        return step( stored, depth );
      #else
        return step( depth, stored );
      #endif
    }
    float shadowBilinearLit( sampler2D shadowMap, vec2 shadowMapSize, vec2 uv, float depth ) {
      vec2 p = uv * shadowMapSize - 0.5;
      ivec2 texel = ivec2( floor( p ) );
      ivec2 last = ivec2( shadowMapSize ) - 1;
      vec2 f = fract( p );
      return mix(
        mix( shadowTexelLit( shadowMap, texel, last, depth ), shadowTexelLit( shadowMap, texel + ivec2( 1, 0 ), last, depth ), f.x ),
        mix( shadowTexelLit( shadowMap, texel + ivec2( 0, 1 ), last, depth ), shadowTexelLit( shadowMap, texel + ivec2( 1, 1 ), last, depth ), f.x ),
        f.y );
    }
    float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
      float shadow = 1.0;
      shadowCoord.xyz /= shadowCoord.w;
      #ifdef USE_REVERSED_DEPTH_BUFFER
        shadowCoord.z -= shadowBias;
      #else
        shadowCoord.z += shadowBias;
      #endif
      bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
      if ( inFrustum && shadowCoord.z <= 1.0 ) {
        vec2 radius = shadowRadius / shadowMapSize;
        float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
        shadow = 0.0;
        for ( int i = 0; i < 5; i ++ ) {
          shadow += shadowBilinearLit( shadowMap, shadowMapSize, shadowCoord.xy + vogelDiskSample( i, 5, phi ) * radius, shadowCoord.z );
        }
        shadow *= 0.2;
      }
      return mix( 1.0, shadow, shadowIntensity );
    }
  `
  );
  return chunk.slice(0, start) + basic + chunk.slice(end);
}
function closingEndif(chunk, from) {
  const directive = /^[ \t]*#\s*(if|ifdef|ifndef|endif)\b/gm;
  directive.lastIndex = from;
  let depth = 0;
  for (let match; match = directive.exec(chunk); ) {
    if (match[1] !== "endif") depth++;
    else if (depth-- === 0) return match.index;
  }
  return -1;
}
var DIRECTIONAL_SHADOW = "getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] )";
function withContactShadow(chunk) {
  if (!chunk.includes(DIRECTIONAL_SHADOW)) return chunk;
  return chunk.replace(
    DIRECTIONAL_SHADOW,
    `min( ${DIRECTIONAL_SHADOW}, sheetContactShadow( vSheetPosition, directionalLightShadow.shadowIntensity ) )`
  );
}
function createSheetMesh(geometry, uniforms, shader, settings) {
  const { material, depthMaterial, distanceMaterial } = createPaperMaterials(uniforms, shader, settings);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.customDepthMaterial = depthMaterial;
  mesh.customDistanceMaterial = distanceMaterial;
  mesh.castShadow = settings.lighting.shadows;
  mesh.receiveShadow = settings.lighting.shadows;
  mesh.frustumCulled = false;
  return mesh;
}
function layerSheet(mesh, depth, count, moving, bias) {
  const material = mesh.material;
  material.polygonOffset = bias;
  material.polygonOffsetFactor = 0;
  material.polygonOffsetUnits = bias ? moving ? -(count + 4) : -(count - Math.min(depth, count)) : 0;
  mesh.renderOrder = depth;
}
function disposeSheetMesh(mesh) {
  mesh.material.dispose();
  mesh.customDepthMaterial?.dispose();
  mesh.customDistanceMaterial?.dispose();
}
function solidTexture(color) {
  const c = new THREE.Color(color);
  const srgb = c.clone().convertLinearToSRGB();
  const texture = new THREE.DataTexture(
    new Uint8Array([Math.round(srgb.r * 255), Math.round(srgb.g * 255), Math.round(srgb.b * 255), 255]),
    1,
    1
  );
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

// src/LeafThrough.ts
import * as THREE13 from "three";

// src/content.ts
import * as THREE2 from "three";
var KEPT_IMAGES = 8;
var VISUALLY_HIDDEN = "position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap";
var PageContent = class {
  constructor(events) {
    this.events = events;
    this.element.dataset.leafthroughContent = "";
    this.element.style.cssText = VISUALLY_HIDDEN;
  }
  events;
  element = document.createElement("div");
  key = "";
  shown = 0;
  // plain view: recently shown page images by source and alt, oldest first
  images = /* @__PURE__ */ new Map();
  /** Brings the DOM up to date; cheap when nothing changed. */
  show(state) {
    const { pages, visiblePages, layout, plain } = state;
    const key = [
      plain,
      layout,
      state.paper,
      ...visiblePages.map((i) => {
        const page = pages[i];
        const info = isPageDescriptor(page) ? page : {};
        return [i, sourceKey(pageImage(page)), info.alt, info.text, state.label(i)].join("\0");
      })
    ].join("");
    if (key === this.key) return;
    this.key = key;
    const token = ++this.shown;
    const used = /* @__PURE__ */ new Set();
    let pending = 0;
    const settle = () => {
      if (token === this.shown && --pending === 0) this.events.onShown();
    };
    const figures = visiblePages.flatMap((i) => {
      const page = pages[i];
      const { alt, text } = isPageDescriptor(page) ? page : { alt: void 0, text: void 0 };
      if (!plain && !alt && !text) return [];
      const figure = document.createElement("figure");
      figure.dataset.page = String(i);
      figure.setAttribute("aria-label", state.label(i));
      figure.style.cssText = "margin:0";
      if (plain) {
        const spread2 = layout === "spread";
        const x = spread2 && i % 2 === 0 ? "50%" : "0";
        figure.style.cssText = `margin:0;position:absolute;top:0;left:${x};width:${spread2 ? "50%" : "100%"};height:100%;background:${state.paper};box-shadow:0 1px 6px rgba(0,0,0,.18)`;
        const image = this.imageFor(i, pageImage(page), alt, used);
        if (image instanceof HTMLImageElement && !image.complete) {
          pending++;
          image.addEventListener("load", settle, { once: true });
          image.addEventListener("error", settle, { once: true });
        }
        figure.append(image);
      } else if (alt) {
        const image = document.createElement("span");
        image.setAttribute("role", "img");
        image.setAttribute("aria-label", alt);
        figure.append(image);
      }
      if (text) figure.append(paragraphs(text, plain));
      return [figure];
    });
    this.element.replaceChildren(...figures);
    if (!pending) queueMicrotask(() => token === this.shown && this.events.onShown());
  }
  /** Rebuilds the DOM on the next show(), loading the images again. */
  refresh() {
    this.key = "";
    this.images.clear();
  }
  // a page image for the plain view, reused if it was shown recently (and isn't already in
  // `used`, as when two visible pages share an image)
  imageFor(page, source, alt = "", used) {
    const key = `${sourceKey(source)}\0${alt}`;
    let image = this.images.get(key);
    if (image && !used.has(image)) this.images.delete(key);
    else {
      const created = image = displayImage(source, alt);
      if (created instanceof HTMLImageElement && !created.complete) {
        created.addEventListener("load", () => this.events.onLoad(page), { once: true });
        created.addEventListener("error", () => this.events.onError(page, new Error(`Failed to load page image: ${created.src}`)), {
          once: true
        });
      } else queueMicrotask(() => this.events.onLoad(page));
    }
    used.add(image);
    this.images.set(key, image);
    if (this.images.size > KEPT_IMAGES) this.images.delete(this.images.keys().next().value);
    return image;
  }
  /** Plain view: where the pages go, in px relative to the root. `null` hides the content again. */
  place(box) {
    if (!box) {
      this.element.style.cssText = VISUALLY_HIDDEN;
      return;
    }
    const px = (n) => `${Math.round(n * 100) / 100}px`;
    this.element.style.cssText = `position:absolute;left:${px(box.x)};top:${px(box.y)};width:${px(box.width)};height:${px(box.height)};pointer-events:none`;
  }
};
var ids = /* @__PURE__ */ new WeakMap();
var nextId = 1;
function sourceKey(source) {
  if (typeof source === "string") return source;
  let id = ids.get(source);
  if (!id) ids.set(source, id = nextId++);
  return `#${id}`;
}
function paragraphs(text, hidden) {
  const block = document.createElement("div");
  if (hidden) block.style.cssText = VISUALLY_HIDDEN;
  for (const paragraph of text.split(/\n\s*\n/)) {
    const p = document.createElement("p");
    p.textContent = paragraph.trim();
    block.append(p);
  }
  return block;
}
function displayImage(source, alt = "") {
  const url = typeof source === "string" ? source : source instanceof HTMLImageElement ? source.currentSrc || source.src : null;
  const drawable = source instanceof THREE2.Texture ? source.image : source;
  const style = "display:block;width:100%;height:100%";
  if (url === null && drawable instanceof HTMLImageElement) return displayImage(drawable, alt);
  if (url !== null) {
    const img = document.createElement("img");
    img.decoding = "async";
    img.alt = alt;
    img.draggable = false;
    img.style.cssText = style;
    img.src = url;
    return img;
  }
  if (typeof HTMLCanvasElement !== "undefined" && (drawable instanceof HTMLCanvasElement || drawable instanceof ImageBitmap)) {
    const canvas2 = document.createElement("canvas");
    canvas2.width = drawable.width;
    canvas2.height = drawable.height;
    canvas2.getContext("2d")?.drawImage(drawable, 0, 0);
    return describe(canvas2, alt, style);
  }
  return describe(document.createElement("div"), alt, style);
}
function describe(element, alt, style) {
  element.style.cssText = style;
  if (alt) {
    element.setAttribute("role", "img");
    element.setAttribute("aria-label", alt);
  } else element.setAttribute("aria-hidden", "true");
  return element;
}

// src/engine.ts
import * as THREE3 from "three";
var floor = new THREE3.Plane(new THREE3.Vector3(0, 0, 1), 0);
var inverse = new THREE3.Matrix4();
var localRay = new THREE3.Ray();
function floorPoint(object, ray, target) {
  object.updateWorldMatrix(true, false);
  localRay.copy(ray).applyMatrix4(inverse.copy(object.matrixWorld).invert());
  return localRay.intersectPlane(floor, target);
}
var raycaster = new THREE3.Raycaster();
var ndc = new THREE3.Vector2();
function rayThrough(camera, element, clientX, clientY, ray) {
  const rect = element.getBoundingClientRect();
  if (!rect.width || !rect.height) return false;
  ndc.set((clientX - rect.left) / rect.width * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
  camera.updateWorldMatrix(true, false);
  raycaster.setFromCamera(ndc, camera);
  ray.copy(raycaster.ray);
  return true;
}

// src/framing.ts
var REFERENCE_ASPECT = 1.377;
var SPREAD_OVERSCAN = 0.27975;
function framingFor(layout, aspect) {
  const k = aspect / REFERENCE_ASPECT;
  if (layout === "spread") {
    const box2 = { x: -1, y: -aspect / 2, width: 2, height: aspect };
    const view2 = {
      x: box2.x - SPREAD_OVERSCAN * box2.width,
      y: box2.y - SPREAD_OVERSCAN * box2.height,
      width: box2.width * (1 + 2 * SPREAD_OVERSCAN),
      height: box2.height * (1 + 2 * SPREAD_OVERSCAN)
    };
    const distance = view2.height / 2 / Math.tan(20 * Math.PI / 180);
    return {
      box: box2,
      view: view2,
      eye: { x: 0, y: 0 },
      distance,
      dragWidth: view2.width,
      shadow: { left: -0.8, right: 1, top: 0.85 * k, bottom: -1.05 * k }
    };
  }
  const box = { x: -0.34, y: -1.2 * k, width: 1.56, height: 2.4 * k };
  const view = { x: -1.15, y: box.y, width: box.x + box.width + 1.15, height: box.height };
  return {
    box,
    view,
    eye: { x: box.x + box.width / 2, y: 0 },
    distance: 3.1 * k,
    dragWidth: box.width,
    shadow: { left: -1.1, right: 1.1, top: 0.8 * k, bottom: -0.8 * k }
  };
}
function plainFramingFor(layout, aspect) {
  const box = layout === "spread" ? { x: -1, y: -aspect / 2, width: 2, height: aspect } : { x: 0, y: -aspect / 2, width: 1, height: aspect };
  return {
    box,
    view: box,
    eye: { x: box.x + box.width / 2, y: 0 },
    distance: 1,
    dragWidth: box.width,
    shadow: { left: 0, right: 0, top: 0, bottom: 0 }
  };
}
function fit(framing, width, height, bleed) {
  const fitted = bleed ? framing.box : framing.view;
  const scale = height > 0 ? Math.min(width / fitted.width, height / fitted.height) : width / fitted.width;
  const boxHeight = height > 0 ? height : fitted.height * scale;
  const left = (width - fitted.width * scale) / 2 - fitted.x * scale;
  const top = (boxHeight - fitted.height * scale) / 2 + (fitted.y + fitted.height) * scale;
  const toPx = (r) => ({
    x: left + r.x * scale,
    y: top - (r.y + r.height) * scale,
    width: r.width * scale,
    height: r.height * scale
  });
  return { scale, view: toPx(framing.view), box: toPx(framing.box), height: boxHeight };
}

// src/navigation.ts
import * as THREE4 from "three";
function pageToPosition(page, layout, count) {
  const p = THREE4.MathUtils.clamp(Math.round(page) || 0, 0, Math.max(count - 1, 0));
  return layout === "spread" ? Math.ceil(p / 2) : p;
}
function positionToPage(position, layout) {
  return layout === "spread" ? Math.max(0, 2 * position - 1) : position;
}
function pagesAt(position, layout, count) {
  const candidates = layout === "spread" ? [2 * position - 1, 2 * position] : [position];
  return candidates.filter((p) => p >= 0 && p < count);
}
function pageDetail(position, layout, count) {
  const visiblePages = pagesAt(position, layout, count);
  const page = visiblePages.length ? visiblePages[0] : Math.max(0, Math.min(positionToPage(position, layout), count - 1));
  return { page, visiblePages, pageCount: count, layout };
}
var Riffle = class {
  state = null;
  get active() {
    return this.state !== null;
  }
  start(target, speed) {
    this.state = { target, interval: 140 / speed, last: -Infinity };
  }
  stop() {
    this.state = null;
  }
  step(now, engine) {
    const riffle = this.state;
    if (!riffle || now - riffle.last < riffle.interval) return;
    if (engine.position === riffle.target) {
      this.state = null;
      return;
    }
    riffle.last = now;
    if (!engine.flip(engine.position < riffle.target)) this.state = null;
  }
};
function bindKeyboard(element, mode, actions, signal) {
  const handler = (e) => {
    const current = mode();
    if (!current || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    if (current === "global") {
      const target = e.target;
      if (target?.closest?.('input, textarea, select, [contenteditable=""], [contenteditable="true"]')) return;
    } else if (e.currentTarget !== element) return;
    const keys = {
      ArrowRight: actions.next,
      PageDown: actions.next,
      ArrowLeft: actions.prev,
      PageUp: actions.prev,
      Home: actions.first,
      End: actions.last
    };
    const action = keys[e.key];
    if (!action) return;
    e.preventDefault();
    action();
  };
  element.addEventListener("keydown", handler, { signal });
  window.addEventListener(
    "keydown",
    (e) => {
      if (mode() === "global" && !element.contains(e.target)) handler(e);
    },
    { signal }
  );
}

// src/paper/paperTextures.ts
import * as THREE7 from "three";

// src/textures.ts
import * as THREE5 from "three";
var CONCURRENCY = 4;
var NEAR = 1;
var UPLOADS_PER_FRAME = 1;
var IDLE_SPARE = 8;
var UPLOAD_TIMEOUT = 100;
var PageLoader = class {
  constructor(sources, renderer, radius, events) {
    this.sources = sources;
    this.renderer = renderer;
    this.radius = radius;
    this.events = events;
    this.textures = new Array(sources.length);
  }
  sources;
  renderer;
  radius;
  events;
  /** Loaded textures by page; missing pages are still loading, unloaded or failed. */
  textures;
  owned = /* @__PURE__ */ new Set();
  inFlight = /* @__PURE__ */ new Map();
  failed = /* @__PURE__ */ new Set();
  // decoded pages waiting for their turn on the GPU
  pending = /* @__PURE__ */ new Map();
  cancelUploads = null;
  // `first` pages load before the rest; the rest go nearest first
  first = [];
  // the pages in view, and the one being read, which loads first among them
  from = 0;
  to = 0;
  around = 0;
  // whether the magazine loops, putting the cover right after the last page
  wrap = false;
  waiting = /* @__PURE__ */ new Set();
  settleFirst = () => {
  };
  disposed = false;
  /**
   * Starts loading around the visible pages `from`–`to`. Resolves once the `first` pages
   * within reach are in (or failed).
   */
  start(from, to, first) {
    this.from = from;
    this.to = to;
    this.first = first.filter((i) => i >= 0 && i < this.sources.length && this.distance(i) <= this.radius);
    this.waiting = new Set(this.first.filter((i) => !this.textures[i]));
    const ready = new Promise((resolve) => this.settleFirst = resolve);
    this.showReadyTextures();
    this.focus(from, to);
    if (!this.waiting.size) this.settleFirst();
    return ready;
  }
  /** Changes page sources while keeping decoded textures for sources still in the magazine. */
  setSources(sources) {
    if (this.disposed) return;
    const old = this.sources;
    if (old.length === sources.length && old.every((source, i) => sourceKey(source) === sourceKey(sources[i]))) return;
    const sameAt = (i) => i < sources.length && sourceKey(old[i]) === sourceKey(sources[i]);
    for (const [i, request] of this.inFlight) {
      if (sameAt(i)) continue;
      request.abort();
      this.inFlight.delete(i);
    }
    for (const [i, texture] of this.pending) {
      if (sameAt(i)) continue;
      this.pending.delete(i);
      if (this.owned.delete(texture)) texture.dispose();
    }
    if (!this.pending.size) {
      this.cancelUploads?.();
      this.cancelUploads = null;
    }
    const available = /* @__PURE__ */ new Map();
    old.forEach((source, i) => {
      const texture = this.textures[i];
      if (!texture) return;
      const key = sourceKey(source);
      const matches = available.get(key) ?? [];
      matches.push(texture);
      available.set(key, matches);
    });
    const retained = sources.map((source) => available.get(sourceKey(source))?.shift());
    const keep = /* @__PURE__ */ new Set([...retained, ...this.pending.values()]);
    for (const texture of this.owned) if (!keep.has(texture)) {
      this.owned.delete(texture);
      texture.dispose();
    }
    const previous = this.textures;
    this.sources = sources;
    this.textures = retained;
    for (const i of this.failed) if (!sameAt(i)) this.failed.delete(i);
    this.first = [];
    this.settleFirst();
    this.settleFirst = () => {
    };
    this.waiting.clear();
    previous.forEach((texture, i) => {
      if (texture && texture !== retained[i]) this.events.onUnload(i);
    });
    retained.forEach((texture, i) => {
      if (texture && texture !== previous[i]) this.events.onLoad(i, texture);
    });
    this.showReadyTextures();
    this.focus(this.from, this.to, this.around);
    this.scheduleUploads();
  }
  // A caller-supplied Texture has already been decoded. Put it on its sheet in this task,
  // even when that page is far from the reader or a rebuild is about to draw it.
  showReadyTextures() {
    this.sources.forEach((source, i) => {
      if (!(source instanceof THREE5.Texture) || this.textures[i] === source) return;
      this.show(i, source);
      if (this.waiting.delete(i) && !this.waiting.size) this.settleFirst();
    });
  }
  /**
   * Follows the reader: loads around the pages in view (`from`–`to`), the page being read
   * (`around`) first, and unloads pages left far behind.
   */
  focus(from, to = from, around = from) {
    if (this.disposed) return;
    this.from = from;
    this.to = to;
    this.around = around;
    const keep = 2 * this.radius;
    for (const [i, request] of this.inFlight) {
      if (this.distance(i) <= keep) continue;
      request.abort();
      this.inFlight.delete(i);
    }
    this.textures.forEach((texture, i) => {
      if (!texture || this.distance(i) <= keep || !this.owned.has(texture)) return;
      this.textures[i] = void 0;
      this.events.onUnload(i);
      this.owned.delete(texture);
      texture.dispose();
    });
    for (const [i, texture] of this.pending) {
      if (this.distance(i) > keep) {
        this.pending.delete(i);
        if (this.owned.delete(texture)) texture.dispose();
      } else if (this.distance(i) <= NEAR) {
        this.pending.delete(i);
        this.show(i, texture);
      }
    }
    this.pump();
  }
  setWrap(wrap) {
    if (wrap === this.wrap) return;
    this.wrap = wrap;
    this.focus(this.from, this.to, this.around);
  }
  setRadius(radius) {
    this.radius = radius;
    this.focus(this.from, this.to, this.around);
  }
  /** Loads the pages that failed again. */
  retry() {
    this.failed.clear();
    this.pump();
  }
  dispose() {
    this.disposed = true;
    this.cancelUploads?.();
    this.cancelUploads = null;
    this.pending.clear();
    for (const request of this.inFlight.values()) request.abort();
    for (const texture of this.owned) texture.dispose();
    this.owned.clear();
  }
  // pages away from the visible ones
  distance(page) {
    const straight = page < this.from ? this.from - page : page > this.to ? page - this.to : 0;
    if (!this.wrap) return straight;
    const count = this.sources.length;
    return Math.min(straight, page + count - this.to, this.from + count - page);
  }
  // starts the most wanted pages while there's room
  pump() {
    if (this.disposed || this.inFlight.size >= CONCURRENCY) return;
    const wanted = (i) => !this.textures[i] && !this.inFlight.has(i) && !this.pending.has(i) && !this.failed.has(i) && this.distance(i) <= this.radius;
    const queue = [
      ...this.first.filter((i) => this.waiting.has(i)),
      ...this.sources.map((_, i) => i).sort((a, b) => this.distance(a) - this.distance(b) || Math.abs(a - this.around) - Math.abs(b - this.around))
    ];
    for (const page of queue) {
      if (this.inFlight.size >= CONCURRENCY) return;
      if (wanted(page)) this.load(page);
    }
  }
  load(page) {
    const request = new AbortController();
    this.inFlight.set(page, request);
    this.createTexture(this.sources[page], request.signal).then((texture) => {
      if (this.disposed || request.signal.aborted) {
        if (this.owned.delete(texture)) texture.dispose();
        return;
      }
      if (this.owned.has(texture)) {
        texture.colorSpace = THREE5.SRGBColorSpace;
        texture.premultiplyAlpha = true;
        texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
        texture.needsUpdate = true;
      }
      if (this.waiting.has(page) || this.distance(page) <= NEAR) this.show(page, texture);
      else {
        this.pending.set(page, texture);
        this.scheduleUploads();
      }
    }).catch((error) => {
      if (this.disposed || request.signal.aborted) return;
      this.failed.add(page);
      this.events.onError(page, error);
    }).finally(() => {
      if (this.inFlight.get(page) !== request) return;
      this.inFlight.delete(page);
      if (this.waiting.delete(page) && !this.waiting.size) this.settleFirst();
      this.pump();
    });
  }
  // Puts the page's texture on the GPU and hands it over. A texture passed in is taken as it
  // is, so one that's on the GPU already, or shared with the caller's own material, isn't
  // uploaded again: initTexture only uploads what the renderer hasn't got.
  show(page, texture) {
    this.renderer.initTexture(texture);
    this.textures[page] = texture;
    this.events.onLoad(page, texture);
  }
  // the next pending pages, in idle time where the browser offers it, else before the next frame
  scheduleUploads() {
    if (this.cancelUploads || !this.pending.size) return;
    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback((deadline) => this.uploadSome(deadline), { timeout: UPLOAD_TIMEOUT });
      this.cancelUploads = () => cancelIdleCallback(id);
    } else {
      const id = requestAnimationFrame(() => this.uploadSome());
      this.cancelUploads = () => cancelAnimationFrame(id);
    }
  }
  // nearest the reader first
  uploadSome(deadline) {
    this.cancelUploads = null;
    const queue = [...this.pending.keys()].sort(
      (a, b) => this.distance(a) - this.distance(b) || Math.abs(a - this.around) - Math.abs(b - this.around)
    );
    let count = 0;
    for (const page of queue) {
      if (count >= UPLOADS_PER_FRAME && !(deadline && deadline.timeRemaining() > IDLE_SPARE)) break;
      const texture = this.pending.get(page);
      this.pending.delete(page);
      this.show(page, texture);
      count++;
    }
    this.scheduleUploads();
  }
  async createTexture(source, signal) {
    if (source instanceof THREE5.Texture) return source;
    const own = (texture) => (this.owned.add(texture), texture);
    if (typeof source === "string") return own(new THREE5.Texture(await loadImage(source, signal)));
    if (typeof HTMLCanvasElement !== "undefined" && source instanceof HTMLCanvasElement) return own(new THREE5.CanvasTexture(source));
    if (typeof HTMLImageElement !== "undefined" && source instanceof HTMLImageElement) {
      if (!source.complete || !source.naturalWidth) await source.decode();
      return own(new THREE5.Texture(source));
    }
    const canvas2 = document.createElement("canvas");
    canvas2.width = source.width;
    canvas2.height = source.height;
    canvas2.getContext("2d").drawImage(source, 0, 0);
    return own(new THREE5.CanvasTexture(canvas2));
  }
};
function loadImage(url, signal) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.decoding = "async";
    const onAbort = () => {
      done();
      img.src = "";
      reject(new DOMException("Page no longer needed", "AbortError"));
    };
    const done = () => {
      img.onload = img.onerror = null;
      signal?.removeEventListener("abort", onAbort);
    };
    signal?.addEventListener("abort", onAbort, { once: true });
    img.onload = () => {
      done();
      img.decode().then(() => resolve(img), () => resolve(img));
    };
    img.onerror = () => {
      done();
      reject(new Error(`Failed to load page image: ${url}`));
    };
    img.src = url;
  });
}
async function loadGrain(source) {
  let texture;
  if (typeof source === "string") texture = new THREE5.Texture(await loadImage(source));
  else if (source instanceof HTMLCanvasElement) texture = new THREE5.CanvasTexture(source);
  else {
    if (!source.complete || !source.naturalWidth) await source.decode();
    texture = new THREE5.Texture(source);
  }
  texture.wrapS = texture.wrapT = THREE5.RepeatWrapping;
  texture.needsUpdate = true;
  return texture;
}

// src/shared.ts
var SharedResources = class {
  entries = /* @__PURE__ */ new Map();
  /** The resource under `key`, made by `make` for the first user. Pair every call with `release`. */
  acquire(key, make) {
    let entry = this.entries.get(key);
    if (!entry) {
      entry = { value: make(), users: 0 };
      this.entries.set(key, entry);
    }
    entry.users++;
    return entry.value;
  }
  /** Lets go of `key`; the last user's release frees it. */
  release(key) {
    const entry = this.entries.get(key);
    if (!entry || --entry.users > 0) return;
    this.entries.delete(key);
    entry.value.dispose();
  }
};
var byRenderer = /* @__PURE__ */ new WeakMap();
function sharedResources(renderer) {
  let shared = byRenderer.get(renderer);
  if (!shared) {
    shared = new SharedResources();
    byRenderer.set(renderer, shared);
  }
  return shared;
}

// src/paper/paperPattern.ts
import * as THREE6 from "three";
var SIZE = 384;
var KERNEL = [
  [1, 0.108, -0.049, 0.022],
  [0.131, 0.016, -0.014, 8e-3],
  [-0.039, -0.018, 0, 9e-3],
  [0.021, 5e-3, 4e-3, 9e-3]
];
var CLOUD = 0.07;
var CLOUD_PERIOD = 32;
var LEVELS = [
  [0, 0.537],
  [1e-3, 0.624],
  [0.01, 0.675],
  [0.05, 0.714],
  [0.1, 0.733],
  [0.25, 0.761],
  [0.5, 0.788],
  [0.75, 0.816],
  [0.9, 0.835],
  [0.95, 0.847],
  [0.99, 0.867],
  [0.999, 0.89],
  [1, 0.914]
];
function periodicNoise(period, random) {
  const grid = new Float32Array(period * period);
  for (let i = 0; i < grid.length; i++) grid[i] = random();
  const at = (x, y) => grid[(y % period + period) % period * period + (x % period + period) % period];
  return (x, y) => {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const fx = x - xi;
    const fy = y - yi;
    const sx = fx * fx * (3 - 2 * fx);
    const sy = fy * fy * (3 - 2 * fy);
    const a = at(xi, yi) + (at(xi + 1, yi) - at(xi, yi)) * sx;
    const b = at(xi, yi + 1) + (at(xi + 1, yi + 1) - at(xi, yi + 1)) * sx;
    return a + (b - a) * sy;
  };
}
function spread(values) {
  let mean = 0;
  for (const v of values) mean += v;
  mean /= values.length;
  let variance = 0;
  for (const v of values) variance += (v - mean) ** 2;
  return Math.sqrt(variance / values.length) || 1;
}
var canvas = null;
function paperPatternCanvas() {
  if (canvas) return canvas;
  let s = 7;
  const random = () => (s = s * 1664525 + 1013904223 >>> 0) / 4294967296;
  const noise = new Float32Array(SIZE * SIZE);
  for (let i = 0; i < noise.length; i++) {
    noise[i] = Math.sqrt(-2 * Math.log(1 - random())) * Math.cos(2 * Math.PI * random());
  }
  const at = (x, y) => noise[(y + SIZE) % SIZE * SIZE + (x + SIZE) % SIZE];
  const reach = KERNEL.length - 1;
  const grain = new Float32Array(SIZE * SIZE);
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      let v = 0;
      for (let dy = -reach; dy <= reach; dy++) {
        const row = KERNEL[Math.abs(dy)];
        for (let dx = -reach; dx <= reach; dx++) v += row[Math.abs(dx)] * at(x + dx, y + dy);
      }
      grain[y * SIZE + x] = v;
    }
  }
  const cloudNoise = periodicNoise(CLOUD_PERIOD, random);
  const cloud = new Float32Array(SIZE * SIZE);
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) cloud[y * SIZE + x] = cloudNoise(x / SIZE * CLOUD_PERIOD, y / SIZE * CLOUD_PERIOD);
  }
  const cloudScale = CLOUD * spread(grain) / spread(cloud);
  for (let i = 0; i < grain.length; i++) grain[i] += cloud[i] * cloudScale;
  const order = Array.from(grain.keys()).sort((a, b) => grain[a] - grain[b]);
  canvas = document.createElement("canvas");
  canvas.width = canvas.height = SIZE;
  const ctx = canvas.getContext("2d");
  const image = ctx.createImageData(SIZE, SIZE);
  let level = 1;
  order.forEach((pixel, rank) => {
    const share = rank / (order.length - 1);
    while (LEVELS[level][0] < share) level++;
    const [fromShare, from] = LEVELS[level - 1];
    const [toShare, to] = LEVELS[level];
    const g = Math.round(255 * (from + (to - from) * (share - fromShare) / (toShare - fromShare)));
    const o = pixel * 4;
    image.data[o] = image.data[o + 1] = image.data[o + 2] = g;
    image.data[o + 3] = 255;
  });
  ctx.putImageData(image, 0, 0);
  return canvas;
}
function createPaperPattern(renderer) {
  const texture = new THREE6.CanvasTexture(paperPatternCanvas());
  texture.wrapS = texture.wrapT = THREE6.RepeatWrapping;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
}

// src/paper/paperTextures.ts
var BUILTIN_PATTERN = "paper-pattern";
var PaperTextures = class {
  constructor(backColor, events) {
    this.events = events;
    this.backBlank = { texture: solidTexture(backColor), color: colorKey(backColor) };
  }
  events;
  /** Plain paper, for missing pages and the spread's unprinted sides. */
  blank = solidTexture("#fcfcf9");
  backBlank;
  pattern = null;
  disposed = false;
  /** The blank backs of single-layout pages, in `paper.backColor`. */
  back(color) {
    const key = colorKey(color);
    if (key !== this.backBlank.color) {
      this.backBlank.texture.dispose();
      this.backBlank = { texture: solidTexture(color), color: key };
    }
    return this.backBlank.texture;
  }
  grain(settings, renderer) {
    const grain = settings.paper.grain;
    const key = grain === true || grain === void 0 ? "builtin" : grain === false ? "none" : grain;
    if (this.pattern?.key === key) return this.pattern.texture;
    this.pattern?.release();
    if (key === "builtin") {
      const shared = sharedResources(renderer);
      const texture = shared.acquire(BUILTIN_PATTERN, () => createPaperPattern(renderer));
      this.pattern = { texture, key, release: () => shared.release(BUILTIN_PATTERN) };
      return texture;
    }
    const pattern = { texture: solidTexture("#000000"), key, release: () => pattern.texture.dispose() };
    this.pattern = pattern;
    if (key !== "none") {
      loadGrain(key).then(
        (loaded) => {
          if (this.pattern !== pattern || this.disposed) return loaded.dispose();
          pattern.texture.dispose();
          pattern.texture = loaded;
          this.events.onGrain();
        },
        (error) => {
          if (this.pattern === pattern && !this.disposed) this.events.onError(error);
        }
      );
    }
    return pattern.texture;
  }
  dispose() {
    this.disposed = true;
    this.pattern?.release();
    this.pattern = null;
    this.blank.dispose();
    this.backBlank.texture.dispose();
  }
};
function colorKey(color) {
  return new THREE7.Color(color).getHexString();
}

// src/plain/PlainEngine.ts
import * as THREE8 from "three";
var SWIPE_PX = 30;
var PlainEngine = class {
  group = new THREE8.Group();
  maxPosition;
  spread;
  settings;
  hitArea;
  abort = new AbortController();
  current;
  dirty = true;
  // the pointer that started the gesture; other pointers are ignored until it lifts
  press = null;
  constructor(ctx) {
    this.settings = ctx.settings;
    this.hitArea = ctx.hitArea;
    this.spread = ctx.settings.layout === "spread";
    this.maxPosition = this.spread ? Math.ceil(ctx.pageCount / 2) : ctx.pageCount;
    this.current = this.clamp(ctx.position);
    this.bindInput();
  }
  get position() {
    return this.current;
  }
  get turning() {
    return false;
  }
  pagesInView() {
    return this.spread ? { from: Math.max(2 * this.current - 1, 0), to: 2 * this.current } : { from: this.current, to: this.current };
  }
  // closed, only the cover side can be clicked
  get activeSide() {
    if (!this.spread) return "both";
    if (this.current === 0) return "right";
    if (this.current === this.maxPosition) return "left";
    return "both";
  }
  update() {
    const moved = this.dirty;
    this.dirty = false;
    return moved;
  }
  flip(forward) {
    if (!forward) {
      if (this.current <= 0) return false;
      this.current--;
    } else if (this.spread) {
      if (this.current >= this.maxPosition) return false;
      this.current++;
    } else if (this.current < this.maxPosition - 1) {
      this.current++;
    } else if (this.settings.loop && this.current > 0) {
      this.current = 0;
    } else return false;
    this.dirty = true;
    return true;
  }
  jumpTo(position) {
    this.current = this.clamp(position);
    this.dirty = true;
  }
  setPageTexture() {
  }
  dispose() {
    this.abort.abort();
  }
  clamp(position) {
    const last = this.spread ? this.maxPosition : this.maxPosition - 1;
    return Math.min(Math.max(Math.round(position), 0), Math.max(last, 0));
  }
  // a click on the left half goes back, on the right half forward; a swipe goes its way
  bindInput() {
    const el = this.hitArea;
    const signal = this.abort.signal;
    const { interaction } = this.settings;
    el.addEventListener(
      "pointerdown",
      (e) => {
        if (this.press && !e.isPrimary) return;
        if (e.button !== 0 || !(interaction.drag || interaction.click)) return;
        this.press = { id: e.pointerId, x: e.clientX, y: e.clientY };
      },
      { signal }
    );
    el.addEventListener(
      "pointerup",
      (e) => {
        const press = this.press;
        if (!press || e.pointerId !== press.id) return;
        this.press = null;
        const dx = e.clientX - press.x;
        if (Math.abs(dx) > SWIPE_PX) {
          if (interaction.drag) this.flip(dx < 0);
          return;
        }
        if (!interaction.click) return;
        const rect = el.getBoundingClientRect();
        const side = this.activeSide;
        this.flip(side === "both" ? e.clientX >= rect.left + rect.width / 2 : side === "right");
      },
      { signal }
    );
    const cancel = (e) => {
      if (this.press?.id === e.pointerId) this.press = null;
    };
    el.addEventListener("pointercancel", cancel, { signal });
  }
};

// src/single/SingleEngine.ts
import * as THREE10 from "three";

// src/single/singleSheet.ts
import * as THREE9 from "three";
var NORMAL_EPSILON = 0.02;
var vertexChunk = (
  /* glsl */
  `
  uniform vec3 uPileLift; // x: where the bulge peaks, y: its height, z: how much it drops at the edge
  uniform float uConeTaper; // bulge difference between top and bottom of the pile
  uniform vec2 uPileReach; // horizontal squeeze at the top/bottom so the bulged page keeps its length
  uniform vec4 uTailCurl; // fold direction (cos, sin), where the curl starts, curl length
  uniform float uTailBend; // how far the free end bows back
  uniform vec3 uCone; // radius change per unit of y, radius at the top, how far to wrap
  uniform vec2 uFlipRotation;
  uniform float uStackGap; // how far the sheet stands off the spine, along its own normal

  float sheetPileLift(float x) {
    float t = 1.0 - min(x / uPileLift.x, 1.0);
    float fall = uPileLift.z * smoothstep(uPileLift.x, 1.0, x);
    return uPileLift.y * sqrt(1.0 - t * t) * (1.0 - fall);
  }

  // Roll a flat point around a cone whose axis is the spine. The radius grows from the
  // top of the page to the bottom (spread), so pages roll up tighter at one end.
  vec3 sheetConeWrap(float x, float y, float spread, float topRadius, float maxWrap) {
    float apexY = SHEET_ASPECT * 0.5;
    float rowRadius = max(1e-5, topRadius + (apexY - y) * spread);
    float cosCone = sqrt(max(0.0, 1.0 - spread * spread));

    float slant = x * spread / rowRadius;
    float lean = abs(slant) < 1e-3 ? 1.0 - slant * slant / 3.0 : atan(slant) / slant;
    float wrap = (x / rowRadius) * lean;

    if (wrap <= maxWrap) {
      float reach = length(vec2(rowRadius, x * spread));
      return vec3(
        reach * sin(wrap),
        y + spread * (reach * (1.0 - cos(wrap)) - x * x / (rowRadius + reach)),
        reach * cosCone * (1.0 - cos(wrap))
      );
    }

    // past the wrap angle the sheet leaves the cone and carries on straight
    float fan = spread * maxWrap;
    float fanSin = abs(fan) < 1e-3 ? 1.0 - fan * fan / 6.0 : sin(fan) / fan;
    float fanVers = abs(fan) < 1e-3 ? fan * (0.5 - fan * fan / 24.0) : (1.0 - cos(fan)) / fan;

    float along = x * spread * sin(fan) + rowRadius * cos(fan);
    float past = x * cos(fan) - rowRadius * maxWrap * fanSin;
    float lift = along * (1.0 - cos(maxWrap)) + past * sin(maxWrap);

    return vec3(
      along * sin(maxWrap) + past * cos(maxWrap),
      y + rowRadius * maxWrap * fanVers - x * sin(fan) + spread * lift,
      cosCone * lift
    );
  }

  vec3 sheetShape(float x, float y) {
    return sheetConeWrap(x, y, uCone.x, uCone.y, uCone.z);
  }

  // the unread pile bulges up off the spine
  vec3 sheetPile(float u, float y) {
    float row = y / SHEET_ASPECT;
    float taper = 1.0 + uConeTaper * row;
    float x = u * mix(uPileReach.x, uPileReach.y, row + 0.5);
    return vec3(x, y, sheetPileLift(x) * taper);
  }

  // the free end of a turning page bows back past the roll
  vec3 sheetTailCurl(vec2 p) {
    float cosTilt = uTailCurl.x;
    float sinTilt = uTailCurl.y;
    float along = p.x * cosTilt + p.y * sinTilt;
    float across = -p.x * sinTilt + p.y * cosTilt;
    float beyond = max(0.0, along - uTailCurl.z);
    float angle = beyond / uTailCurl.w * uTailBend;
    float sinc = abs(angle) < 1e-4 ? 1.0 : sin(angle) / angle;
    float versine = abs(angle) < 1e-4 ? 0.0 : (1.0 - cos(angle)) / angle;
    float curledAlong = along - beyond + beyond * sinc;
    return vec3(
      curledAlong * cosTilt - across * sinTilt,
      curledAlong * sinTilt + across * cosTilt,
      beyond * versine
    );
  }

  vec3 sheetPosition(vec2 uv, float noise) {
    vec3 pile = sheetPile(uv.x, (uv.y - 0.5) * SHEET_ASPECT);
    vec3 curled = sheetTailCurl(pile.xy);
    vec3 shape = sheetShape(curled.x, curled.y);
    // the curl lifts off the cone surface, along its normal
    if (curled.z != 0.0) {
      vec3 alongX = sheetShape(curled.x + 1e-3, curled.y) - shape;
      vec3 alongY = sheetShape(curled.x, curled.y + 1e-3) - shape;
      shape += normalize(cross(alongX, alongY)) * curled.z;
    }

    // spin about the spine
    float z = shape.z + pile.z + uStackGap;
    return vec3(
      shape.x * uFlipRotation.x - z * uFlipRotation.y,
      shape.y,
      shape.x * uFlipRotation.y + z * uFlipRotation.x
    );
  }
`
);
var fragmentChunk = (
  /* glsl */
  `
  uniform vec3 uTrim; // x: whether to trim, y/z: the top page's right edge at its bottom/top

  // Right of the spine, a page under the top one only shows where the top page is: whatever
  // reaches past its right or bottom edge is trimmed away.
  bool sheetHidden(vec3 p) {
    if (uTrim.x < 0.5 || p.x <= 0.0) return false;
    float row = clamp(p.y / SHEET_ASPECT + 0.5, 0.0, 1.0);
    return p.x > mix(uTrim.y, uTrim.z, row) || p.y < -0.5 * SHEET_ASPECT;
  }
`
);
function createSingleGeometry(aspect) {
  return new THREE9.PlaneGeometry(1, aspect, 64, Math.round(64 * aspect));
}
function sharedSingleGeometry(shared, aspect) {
  const key = `single-geometry:${aspect}`;
  return { geometry: shared.acquire(key, () => createSingleGeometry(aspect)), release: () => shared.release(key) };
}
function createSingleSheet(geometry, front, back, pattern, settings, shading) {
  const uniforms = {
    uPileLift: { value: new THREE9.Vector3(1, 0, 0) },
    uPileReach: { value: new THREE9.Vector2(1, 1) },
    uConeTaper: { value: 0 },
    uTailCurl: { value: new THREE9.Vector4(1, 0, 1, 1) },
    uTailBend: { value: 0 },
    uCone: { value: new THREE9.Vector3(0, 1, 0) },
    uFlipRotation: { value: new THREE9.Vector2(1, 0) },
    uTrim: { value: new THREE9.Vector3(0, 1, 1) },
    uStackGap: { value: 0 },
    uFront: { value: front },
    uBack: { value: back },
    uPattern: { value: pattern },
    uSpineContact: shading.spineContact,
    uLightDirection: shading.lightDirection,
    uSheetOrigin: shading.origin
  };
  const mesh = createSheetMesh(
    geometry,
    uniforms,
    { vertexChunk, fragmentChunk, epsilon: NORMAL_EPSILON, shadowOffsetX: -4e-3 },
    settings
  );
  return { mesh, uniforms };
}

// src/single/SingleEngine.ts
var HOLD = {
  startTime: 0.22,
  firstFlipTime: 1.4,
  fastestFlipTime: 1,
  speedUpSheets: 7,
  firstGapShare: 0.16,
  fastestGapShare: 0.1,
  moveSlopPx: 40
};
var DRAG = {
  progressSmoothTime: 0.9,
  clickSlopPx: 5,
  claimSteepness: 1.6,
  // a touch swipe this much flatter than vertical turns pages instead of scrolling
  claimAfterPx: 4,
  fallTime: 1.3,
  fallTimeExponent: 0.5
};
var CLICK = { flipTime: 1.2, settlePower: 0.8 };
var GRAB = { smoothTime: 0.05 };
var WOBBLE = { tiltDeg: 8, flipTimeMin: 0.95, flipTimeMax: 1.08 };
var ROLL = {
  spineOpenStartDeg: 100,
  // how far read pages swing round before they start rolling
  spineOpenEndDeg: 190,
  spineOpenPower: 4,
  coneEvenPower: 6,
  lastPageEven: 0.98,
  // how close to even the roll gets by the last page, before the power
  coverTopRadius: 0.04,
  backTopRadius: 0.18,
  coverBottomRadius: 0.01,
  backBottomRadius: 0.05,
  radiusSpacingClump: 7.5,
  radiusSpacingSeed: 41.5,
  fallDelayPages: 15,
  // read pages this far back settle flat behind everything (fewer in short magazines)
  fallDurationPages: 3
};
var SHAPE = { midLeadPower: 2, midBow: 2, midBowFlatFrom: 0.3, midBowFlatTo: 0.8, midRollScale: 2.5 };
var PILE = {
  liftHeight: 0.08,
  liftPeakX: 0.4,
  liftEdgeDrop: 0.5,
  liftShutShare: 0.67,
  liftDepthFalloff: 0.5,
  coneTaper: -0.6,
  renderDepth: 3
};
var BOOK = { pushBack: 0.05, pushRight: 0.02 };
var CATCH_UP = { clump: 1.6, seed: 41 };
var TAU = Math.PI * 2;
var clamp = THREE10.MathUtils.clamp;
var smooth = (x) => {
  const t = clamp(x, 0, 1);
  return t * t * (3 - 2 * t);
};
var hash = (a, b) => {
  const s = 43758.5453 * Math.sin(12.9898 * a + 78.233 * b);
  return s - Math.floor(s);
};
var SingleEngine = class {
  group = new THREE10.Group();
  // the book, nudged back and right as you read
  maxPosition;
  settings;
  halfHeight;
  liftHeight;
  input;
  metrics;
  requestFrame;
  geometry;
  releaseGeometry;
  sheets;
  count;
  radiusSpacing;
  catchUp;
  fallDelay;
  fallDuration;
  abort = new AbortController();
  shading;
  current;
  turned = 0;
  // sum of every sheet's progress, as of the last update
  flights = [];
  drag = null;
  // the pointer that started the gesture; other pointers are ignored until it lifts
  press = null;
  hold = null;
  touch = null;
  dirty = true;
  last = 0;
  ray = new THREE10.Ray();
  hit = new THREE10.Vector3();
  constructor(ctx) {
    this.settings = ctx.settings;
    this.halfHeight = ctx.settings.pageAspect / 2;
    this.liftHeight = PILE.liftHeight * ctx.settings.paper.bulge;
    this.input = ctx.input;
    this.metrics = ctx.metrics;
    this.requestFrame = ctx.requestFrame;
    this.shading = ctx.shading;
    this.count = ctx.textures.length;
    this.maxPosition = this.count;
    this.current = clamp(Math.round(ctx.position), 0, Math.max(this.count - 1, 0));
    const { geometry, release } = sharedSingleGeometry(ctx.shared, ctx.settings.pageAspect);
    this.geometry = geometry;
    this.releaseGeometry = release;
    this.sheets = ctx.textures.map((front, index) => {
      const { mesh, uniforms } = createSingleSheet(this.geometry, front, ctx.blank, ctx.pattern, ctx.settings, ctx.shading);
      this.group.add(mesh);
      return {
        index,
        mesh,
        uniforms,
        progress: index < this.current ? 1 : 0,
        grabX: 1,
        grabXTarget: 1,
        grabY: 0,
        grabYTarget: 0,
        wobble: { tiltDeg: 0, flipTime: 1 }
      };
    });
    const P = this.count;
    const gaps = [];
    for (let i = 0; i < P - 1; i++) gaps.push(Math.pow(hash(i + 1, ROLL.radiusSpacingSeed), ROLL.radiusSpacingClump));
    const gapSum = gaps.reduce((a, b) => a + b, 0);
    this.radiusSpacing = [0];
    let acc = 0;
    for (const g of gaps) {
      acc += 0.1 / gaps.length + 0.9 * (gapSum > 0 ? g / gapSum : 1 / gaps.length);
      this.radiusSpacing.push(acc);
    }
    const steps = [];
    for (let i = 0; i < P; i++) steps.push(Math.pow(hash(i + 1, CATCH_UP.seed + 0.5), CATCH_UP.clump));
    const stepSum = steps.reduce((a, b) => a + b, 0);
    this.catchUp = [0];
    acc = 0;
    for (const s of steps) {
      acc += stepSum > 0 ? s / stepSum * P : 1;
      this.catchUp.push(acc);
    }
    const settleBy = P - 2 - PILE.renderDepth;
    this.fallDuration = clamp(settleBy / 2, 1, ROLL.fallDurationPages);
    this.fallDelay = clamp(settleBy - this.fallDuration, 0, ROLL.fallDelayPages);
    this.bindInput();
  }
  get position() {
    return this.current;
  }
  get turning() {
    return this.flights.length > 0 || this.drag !== null;
  }
  activeSide = "both";
  pagesInView() {
    const settled = Math.floor(this.paced(this.turned) - 1 - this.fallDelay - this.fallDuration);
    let from = clamp(settled + 1, 0, Math.max(this.current - 1, 0));
    let to = Math.max(Math.min(this.current, this.count - 1), this.pileTop()?.index ?? 0);
    const turning = this.flights.map((flight) => flight.sheet);
    if (this.drag) turning.push(this.drag.sheet);
    for (const sheet of turning) {
      from = Math.min(from, sheet.index);
      to = Math.max(to, sheet.index);
    }
    return { from, to: Math.max(from, to) };
  }
  // the page on top of the pile, the one a turning page reveals
  pileTop() {
    return this.sheets.find((sheet) => sheet.index >= this.current && !this.busy(sheet));
  }
  setPageTexture(page, texture) {
    const sheet = this.sheets[page];
    if (!sheet) return;
    sheet.uniforms.uFront.value = texture;
    this.wake();
  }
  cancelInput() {
    this.cancelHold();
    this.touch = null;
    if (this.press) this.release(new PointerEvent("pointercancel", { pointerId: this.press.id }));
    this.wake();
  }
  setShadows(on) {
    this.settings.lighting.shadows = on;
    for (const sheet of this.sheets) sheet.mesh.castShadow = sheet.mesh.receiveShadow = on;
    this.wake();
  }
  dispose() {
    this.cancelHold();
    this.abort.abort();
    for (const sheet of this.sheets) disposeSheetMesh(sheet.mesh);
    this.releaseGeometry();
  }
  // --- helpers ----------------------------------------------------------------
  randomWobble() {
    if (!this.settings.motion.jitter) return { tiltDeg: 0, flipTime: 1 };
    return {
      tiltDeg: THREE10.MathUtils.lerp(-WOBBLE.tiltDeg, WOBBLE.tiltDeg, Math.random()),
      flipTime: THREE10.MathUtils.lerp(WOBBLE.flipTimeMin, WOBBLE.flipTimeMax, Math.random())
    };
  }
  seconds(time) {
    return time / this.settings.motion.speed;
  }
  // something changed between frames
  wake() {
    this.dirty = true;
    this.requestFrame();
  }
  // pile lift for a sheet this many pages below the top
  pileHeight(depth) {
    return this.liftHeight / (1 + depth * PILE.liftDepthFalloff) * (1 - 2e-3 * depth);
  }
  // A bulged page is longer than it is wide; squeeze it so its arc stays one page long.
  pileReach(height) {
    if (height <= 1e-6) return 1;
    const curve = (x) => {
      const t = 1 - Math.min(x / PILE.liftPeakX, 1);
      return height * Math.sqrt(1 - t * t) * (1 - PILE.liftEdgeDrop * smooth((x - PILE.liftPeakX) / (1 - PILE.liftPeakX)));
    };
    let length = 0;
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) ** 2;
      const b = ((i + 1) / 6) ** 2;
      length += Math.hypot(b - a, curve(b) - curve(a));
    }
    return Math.max(2 - length, 0.5);
  }
  // turned pages, reshaped by the uneven catch-up pace
  paced(turned) {
    const i = Math.min(Math.floor(turned), this.count);
    if (i >= this.count) return this.count;
    return this.catchUp[i] + (this.catchUp[i + 1] - this.catchUp[i]) * (turned - i);
  }
  // 0..1 while the last page is turning
  closing(turned) {
    return clamp(turned - (this.count - 1), 0, 1);
  }
  shutting(turned) {
    return smooth((this.closing(turned) - 0.6) / 0.4);
  }
  // how far a read page has settled flat under the pile: 0 still on the roll, 1 flat
  fallOf(sheet, paced, shut) {
    return Math.max(smooth((paced - (sheet.index + 1) - this.fallDelay) / this.fallDuration), shut);
  }
  inFlight(sheet) {
    return this.flights.some((f) => f.sheet === sheet);
  }
  busy(sheet) {
    return this.inFlight(sheet) || this.drag?.sheet === sheet;
  }
  // floor point under the pointer, relative to the book
  pointAt(clientX, clientY) {
    if (!this.input.ray(clientX, clientY, this.ray)) return null;
    return floorPoint(this.group, this.ray, this.hit);
  }
  // where on the page the hand is, steering how the page tilts as it turns
  grab(sheet, point, snap) {
    if (!point) return;
    sheet.grabXTarget = Math.min(Math.abs(point.x), 1);
    sheet.grabYTarget = clamp(point.y / this.halfHeight, -1, 1);
    if (snap) {
      sheet.grabX = sheet.grabXTarget;
      sheet.grabY = sheet.grabYTarget;
    }
  }
  // the last page only turns when the magazine loops back to the cover
  canTurn(forward) {
    if (!forward) return this.current > 0;
    return this.current < (this.settings.loop ? this.count : this.count - 1);
  }
  // which page a press here would pick up: right of the spine turns forward
  sheetAt(point) {
    if (!point) return null;
    const forward = point.x >= 0;
    if (!this.canTurn(forward)) return null;
    return { sheet: this.sheets[forward ? this.current : this.current - 1], forward };
  }
  // moves the turned count when a page is sent one way or the other
  commit(forward, toProgress) {
    if (forward && toProgress === 1) this.current++;
    else if (!forward && toProgress === 0) this.current--;
    this.wake();
  }
  fly(sheet, forward, toProgress, flipTime = CLICK.flipTime) {
    this.commit(forward, toProgress);
    const from = sheet.progress;
    this.flights = this.flights.filter((f) => f.sheet !== sheet);
    this.flights.push({
      sheet,
      from,
      to: toProgress,
      start: performance.now(),
      duration: 1e3 * this.seconds(flipTime) * sheet.wobble.flipTime * Math.max(0.2, Math.abs(toProgress - from))
    });
  }
  flip(forward) {
    if (!this.canTurn(forward)) return false;
    const sheet = this.sheets[forward ? this.current : this.current - 1];
    if (this.drag?.sheet === sheet) return false;
    if (!this.inFlight(sheet)) sheet.wobble = this.randomWobble();
    this.fly(sheet, forward, forward ? 1 : 0);
    return true;
  }
  jumpTo(position) {
    this.cancelHold();
    this.drag = null;
    this.flights = [];
    this.current = clamp(Math.round(position), 0, Math.max(this.count - 1, 0));
    for (const sheet of this.sheets) sheet.progress = sheet.index < this.current ? 1 : 0;
    this.wake();
  }
  // --- input ------------------------------------------------------------------
  bindInput() {
    const el = this.input.element;
    const signal = this.abort.signal;
    const { interaction } = this.settings;
    el.addEventListener(
      "pointermove",
      (e) => {
        if (this.press && e.pointerId !== this.press.id) return;
        if (this.hold && this.moved(e, this.hold.fired ? HOLD.moveSlopPx : void 0)) this.cancelHold();
        if (!this.drag || !this.press || !interaction.drag) return;
        const dx = this.metrics.dragDelta?.(e.clientX - this.press.x, e.clientY - this.press.y) ?? e.clientX - this.press.x;
        this.drag.progress = clamp(this.drag.base - dx / this.drag.rectWidth / this.settings.motion.dragDistance, 0, 1);
        this.grab(this.drag.sheet, this.pointAt(e.clientX, e.clientY), false);
        this.wake();
      },
      { signal }
    );
    el.addEventListener(
      "pointerdown",
      (e) => {
        if (this.press && !e.isPrimary) return;
        if (e.button !== 0 || !(interaction.drag || interaction.click || interaction.hold)) return;
        if (!this.input.covers(e.clientX, e.clientY)) return;
        const point = this.pointAt(e.clientX, e.clientY);
        const target = this.sheetAt(point);
        if (!target) return;
        const sheet = target.sheet;
        if (!this.inFlight(sheet)) sheet.wobble = this.randomWobble();
        this.grab(sheet, point, true);
        this.flights = this.flights.filter((f) => f.sheet !== sheet);
        this.press = { id: e.pointerId, x: e.clientX, y: e.clientY };
        this.drag = {
          sheet,
          forward: target.forward,
          base: sheet.progress,
          progress: sheet.progress,
          rectWidth: this.metrics.dragWidth,
          speed: 0
        };
        this.cancelHold();
        if (interaction.hold) {
          this.hold = {
            forward: target.forward,
            x: e.clientX,
            y: e.clientY,
            count: 0,
            fired: false,
            timer: setTimeout(() => this.holdTick(), 1e3 * HOLD.startTime)
          };
        }
        try {
          el.setPointerCapture(e.pointerId);
        } catch {
        }
        this.wake();
      },
      { signal }
    );
    el.addEventListener("pointerup", (e) => this.release(e), { signal });
    el.addEventListener("pointercancel", (e) => this.release(e), { signal });
    el.addEventListener("lostpointercapture", (e) => this.release(e), { signal });
    if (!interaction.drag) return;
    el.addEventListener(
      "touchstart",
      (e) => {
        const t = e.touches[0];
        const single = e.touches.length === 1 && this.input.covers(t.clientX, t.clientY);
        this.touch = single ? { x: t.clientX, y: t.clientY, claimed: false } : null;
      },
      { passive: true, signal }
    );
    el.addEventListener(
      "touchmove",
      (e) => {
        if (!this.touch || e.touches.length !== 1) return;
        if (this.touch.claimed) {
          if (e.cancelable) e.preventDefault();
          return;
        }
        if (!e.cancelable) {
          this.touch = null;
          return;
        }
        const t = e.touches[0];
        const dx = Math.abs(t.clientX - this.touch.x);
        const dy = Math.abs(t.clientY - this.touch.y);
        if (dx >= DRAG.claimAfterPx && dy < dx * DRAG.claimSteepness) {
          this.touch.claimed = true;
          e.preventDefault();
        }
      },
      { passive: false, signal }
    );
  }
  moved(e, slop = DRAG.clickSlopPx) {
    return this.press !== null && (e.clientX - this.press.x) ** 2 + (e.clientY - this.press.y) ** 2 > slop * slop;
  }
  cancelHold() {
    if (this.hold) clearTimeout(this.hold.timer);
    this.hold = null;
  }
  // press and hold keeps turning pages, a little faster each time
  holdTick() {
    const hold = this.hold;
    if (!hold) return;
    if (!hold.fired) {
      hold.fired = true;
      this.drag = null;
    }
    if (!this.canTurn(hold.forward)) return this.cancelHold();
    const sheet = this.sheets[hold.forward ? this.current : this.current - 1];
    const ramp = (from, to) => from + (to - from) * Math.min(hold.count / HOLD.speedUpSheets, 1);
    if (!this.inFlight(sheet)) sheet.wobble = this.randomWobble();
    this.grab(sheet, this.pointAt(hold.x, hold.y), true);
    const flipTime = ramp(HOLD.firstFlipTime, HOLD.fastestFlipTime);
    this.fly(sheet, hold.forward, hold.forward ? 1 : 0, flipTime);
    hold.count++;
    hold.timer = setTimeout(
      () => this.holdTick(),
      1e3 * this.seconds(flipTime) * ramp(HOLD.firstGapShare, HOLD.fastestGapShare)
    );
  }
  // pointercancel and lostpointercapture put the page back; only pointerup completes a turn
  release(e) {
    if (!this.press || e.pointerId !== this.press.id) return;
    const cancelled = e.type !== "pointerup";
    const wasMoved = this.moved(e);
    this.cancelHold();
    const drag = this.drag;
    this.drag = null;
    this.press = null;
    try {
      this.input.element.releasePointerCapture(e.pointerId);
    } catch {
    }
    this.wake();
    if (!drag) return;
    const { interaction } = this.settings;
    if (!wasMoved || !interaction.drag) {
      if (!cancelled && interaction.click) this.fly(drag.sheet, drag.forward, drag.forward ? 1 : 0);
      else this.settleBack(drag);
      return;
    }
    let to;
    if (cancelled) to = drag.forward ? 0 : 1;
    else {
      const travelled = drag.forward ? drag.progress - drag.base : drag.base - drag.progress;
      to = drag.forward === travelled >= this.settings.motion.commitThreshold ? 1 : 0;
    }
    this.commit(drag.forward, to);
    const sheet = drag.sheet;
    const speed = to === 1 ? drag.speed : -drag.speed;
    const remaining = Math.max(Math.abs(to - sheet.progress), 1e-3);
    const duration = this.seconds(DRAG.fallTime) * sheet.wobble.flipTime * Math.pow(remaining, DRAG.fallTimeExponent);
    this.flights = this.flights.filter((f) => f.sheet !== sheet);
    this.flights.push({
      sheet,
      from: sheet.progress,
      to,
      start: performance.now(),
      duration: 1e3 * duration,
      launch: clamp(speed * duration / remaining, 0, 2)
    });
  }
  // a press that didn't turn anything: put the page back where it was
  settleBack(drag) {
    const to = drag.forward ? 0 : 1;
    if (drag.sheet.progress === to) return;
    this.flights.push({ sheet: drag.sheet, from: drag.sheet.progress, to, start: performance.now(), duration: 300 });
    this.wake();
  }
  // --- simulation ---------------------------------------------------------------
  update(now) {
    for (let i = this.flights.length - 1; i >= 0; i--) {
      const f = this.flights[i];
      const t = clamp((now - f.start) / f.duration, 0, 1);
      let k;
      if (f.launch === void 0) {
        k = 0.5 * (1 - Math.cos((1 - Math.pow(1 - t, CLICK.settlePower)) * Math.PI));
      } else {
        const t2 = t * t;
        const t3 = t2 * t;
        k = (t3 - 2 * t2 + t) * f.launch + (3 * t2 - 2 * t3);
      }
      f.sheet.progress = f.from + (f.to - f.from) * k;
      if (now >= f.start + f.duration) {
        this.flights.splice(i, 1);
        this.dirty = true;
      }
    }
    if (this.count && this.current >= this.count && !this.flights.length && !this.drag) {
      this.current = 0;
      for (const sheet of this.sheets) sheet.progress = 0;
      this.dirty = true;
    }
    const dt = this.last ? clamp((now - this.last) / 1e3, 0, 0.1) : 1 / 60;
    this.last = now;
    if (this.drag) {
      const sheet = this.drag.sheet;
      const step = (this.drag.progress - sheet.progress) * (1 - Math.pow(0.01, dt / DRAG.progressSmoothTime));
      sheet.progress += step;
      this.drag.speed = dt > 0 ? step / dt : 0;
    }
    let moving = this.flights.length > 0 || this.drag !== null;
    const grabStep = 1 - Math.pow(1e-3, dt / GRAB.smoothTime);
    for (const sheet of this.sheets) {
      for (const key of ["grabX", "grabY"]) {
        const target = key === "grabX" ? sheet.grabXTarget : sheet.grabYTarget;
        const d = target - sheet[key];
        if (Math.abs(d) < 1e-4) sheet[key] = target;
        else {
          sheet[key] += d * grabStep;
          moving = true;
        }
      }
      if (!this.busy(sheet)) {
        const rest = sheet.index < this.current ? 1 : 0;
        if (sheet.progress !== rest) {
          sheet.progress = rest;
          this.dirty = true;
        }
      }
    }
    if (!moving && !this.dirty) return false;
    let turned = 0;
    for (const sheet of this.sheets) turned += sheet.progress;
    this.turned = turned;
    const edge = this.pileEdge(turned);
    const top = this.pileTop();
    for (const sheet of this.sheets) {
      this.applyUniforms(sheet, turned, edge);
      sheet.uniforms.uTrim.value.set(sheet === top || this.busy(sheet) ? 0 : 1, edge.bottom, edge.top);
    }
    const closing = this.closing(turned) > 0;
    const paced = this.paced(turned);
    const shut = this.shutting(turned);
    const pileFrom = Math.max(this.current, top?.index ?? this.current);
    for (const sheet of this.sheets) {
      const i = sheet.index;
      sheet.mesh.visible = closing || i <= pileFrom + PILE.renderDepth || this.busy(sheet);
      const depth = i >= this.current ? i - this.current : this.fallOf(sheet, paced, shut) >= 1 ? this.count - this.current + i : this.current - 1 - i;
      layerSheet(sheet.mesh, depth, this.count, this.busy(sheet), this.settings.paper.depthBias);
    }
    const read = smooth(this.count > 1 ? this.paced(turned) / (this.count - 1) : 0) * (1 - this.shutting(turned));
    this.group.position.x = BOOK.pushRight * read;
    this.group.position.z = -BOOK.pushBack * read;
    this.shading.origin.value.copy(this.group.position);
    this.dirty = false;
    return true;
  }
  // How far the top of the pile reaches at its bottom and top edges. Pages under it would
  // reach further, being flatter, and show a sliver of whatever is printed there; instead
  // they stop at its edge, and whatever still gets past is trimmed in the shader.
  pileEdge(turned) {
    const share = PILE.liftShutShare + (1 - PILE.liftShutShare) * (this.count ? this.paced(turned) / this.count : 0);
    const topShare = share + (PILE.liftShutShare - share) * this.shutting(turned);
    const height = this.pileHeight(0) * Math.max(topShare, 1e-3);
    return {
      bottom: this.pileReach(height * (1 - 0.5 * PILE.coneTaper)),
      top: this.pileReach(height * (1 + 0.5 * PILE.coneTaper))
    };
  }
  applyUniforms(sheet, turned, edge) {
    const u = sheet.uniforms;
    const P = this.count;
    const T = sheet.progress;
    const paced = this.paced(turned);
    const lastPage = this.catchUp[Math.max(P - 1, 0)];
    const through = lastPage > 0 ? paced / lastPage : 1;
    const openFraction = Math.min(through, 1);
    const spineOpen = (ROLL.spineOpenStartDeg + (ROLL.spineOpenEndDeg - ROLL.spineOpenStartDeg) * Math.pow(openFraction, ROLL.spineOpenPower)) * Math.PI / 180;
    const shut = this.shutting(turned);
    const closed = this.closing(turned) >= 1 ? 1 : 0;
    const fall = this.fallOf(sheet, paced, shut);
    const spacing = this.radiusSpacing[sheet.index] ?? 0;
    const topR = ROLL.coverTopRadius + (ROLL.backTopRadius - ROLL.coverTopRadius) * spacing;
    const bottomR = ROLL.coverBottomRadius + (ROLL.backBottomRadius - ROLL.coverBottomRadius) * spacing;
    const even = Math.pow(Math.min(through * ROLL.lastPageEven, 1), ROLL.coneEvenPower);
    const midR = (topR + bottomR) / 2;
    const radii = {
      top: (topR + (midR - topR) * even) * (1 - fall),
      bottom: (bottomR + (midR - bottomR) * even) * (1 - fall)
    };
    const fallen = fall >= 1;
    const readShare = P ? paced / P : 0;
    const depth = fallen ? Math.max(0, P - turned) + sheet.index : Math.max(0, sheet.index - turned);
    const presence = fallen ? Math.max(smooth(paced - (sheet.index + 1) - this.fallDelay - this.fallDuration), closed) : (1 - T) * (1 - shut);
    const share = PILE.liftShutShare + (1 - PILE.liftShutShare) * readShare;
    const open = this.pileHeight(depth) * (fallen ? PILE.liftShutShare : share);
    const lift = (open + (this.pileHeight(sheet.index) * PILE.liftShutShare - open) * shut) * presence;
    u.uPileLift.value.set(PILE.liftPeakX, lift, PILE.liftEdgeDrop);
    const topShare = share + (PILE.liftShutShare - share) * shut;
    const reference = Math.max(this.pileHeight(0) * Math.max(topShare, 1e-3), 1e-6);
    u.uConeTaper.value = PILE.coneTaper * lift / reference;
    const reachFade = 1 - 0.5 * Math.max(sheet.grabY, 0) * sheet.grabX;
    const tiltDeg = sheet.grabY * (0.5 + 0.5 * sheet.grabX) * this.settings.motion.maxTilt + sheet.wobble.tiltDeg;
    if (fallen) {
      u.uCone.value.set(0, 1, 0);
      u.uTailBend.value = 0;
      const angle = TAU * T;
      u.uFlipRotation.value.set(Math.cos(angle), Math.sin(angle));
    } else {
      this.shapeTurn(sheet, T, spineOpen, radii, tiltDeg * reachFade * Math.PI / 180);
    }
    const height = u.uPileLift.value.y;
    const taper = u.uConeTaper.value;
    let bottomReach = this.pileReach(height * (1 - 0.5 * taper));
    let topReach = this.pileReach(height * (1 + 0.5 * taper));
    if (!this.busy(sheet) && (fallen || sheet.index >= this.current)) {
      bottomReach = Math.min(bottomReach, edge.bottom);
      topReach = Math.min(topReach, edge.top);
    }
    u.uPileReach.value.set(bottomReach, topReach);
    const under = P - 1 - sheet.index;
    const before = Math.max(0, turned - 1 - sheet.index);
    const around = smooth(T);
    const offset = fallen ? -(sheet.index + 1) : under + (before - under) * around;
    u.uStackGap.value = this.settings.paper.sheetGap * (offset + (under - offset) * shut);
  }
  // a turning page: swing round the spine up to the open angle, then roll round the cone
  shapeTurn(sheet, T, spineOpen, radii, tilt) {
    const u = sheet.uniforms;
    const half = this.halfHeight;
    const aspect = this.settings.pageAspect;
    const curl = this.settings.motion.curl;
    const lead = TAU * (1 - Math.pow(1 - T, SHAPE.midLeadPower));
    const even = TAU * T;
    const swing = Math.min(lead, spineOpen);
    const wrap = lead - swing;
    const wrapShare = wrap / Math.max(TAU - spineOpen, 1e-3);
    const rollScale = 1 + (SHAPE.midRollScale - 1) * (1 - smooth(wrapShare));
    const topRadius = Math.max(radii.top * rollScale, 1e-4);
    const spread2 = clamp((radii.bottom * rollScale - topRadius) / aspect, -0.999, 0.999);
    const rolled = (y) => {
      const r = Math.max(1e-5, topRadius + (half - y) * spread2);
      const a = clamp(spread2 * wrap, -1.5, 1.5);
      return Math.abs(spread2) < 1e-4 ? r * wrap : r * Math.tan(a) / spread2;
    };
    const angle = tilt + (Math.atan2(rolled(-half) - rolled(half), aspect) - tilt) * smooth(T);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const curlStart = Math.max(rolled(half) * cos + half * sin, rolled(-half) * cos - half * sin);
    const curlLength = cos + half * Math.abs(sin) - curlStart;
    const letGo = 1 - smooth(lead / spineOpen);
    u.uPileLift.value.y *= letGo;
    u.uConeTaper.value *= letGo;
    u.uCone.value.set(spread2, topRadius, wrap);
    u.uTailCurl.value.set(cos, sin, curlStart, Math.max(curlLength, 1e-3));
    const flat = 1 - smooth((T - SHAPE.midBowFlatFrom) / (SHAPE.midBowFlatTo - SHAPE.midBowFlatFrom));
    u.uTailBend.value = Math.max(SHAPE.midBow * curl * flat * Math.min(even - lead, 0), -lead);
    u.uFlipRotation.value.set(Math.cos(swing), Math.sin(swing));
  }
};

// src/spread/SpreadEngine.ts
import * as THREE12 from "three";

// src/spread/spreadSheet.ts
import * as THREE11 from "three";
var NORMAL_EPSILON2 = 0.03;
var WRINKLE_SCALE = 1.2;
var WRINKLE_SEED = 46;
var vertexChunk2 = (settings) => (
  /* glsl */
  `
  // resting bulge across the page: up off the spine, a slight dip, up again, down at the edge
  const float LIFT_MAX_X = 0.14;
  const float LIFT_MAX_Z = 0.04;
  const float LIFT_DIP_X = 0.58;
  const float LIFT_DIP_Z = 0.035;
  const float LIFT_MID_X = 0.72;
  const float LIFT_MID_Z = 0.04;
  const float LIFT_EDGE_Z = 0.03;

  const float BULGE = ${settings.paper.bulge.toFixed(4)};
  const float WRINKLE = ${(0.13 * settings.paper.wrinkles).toFixed(4)};
  const bool NESTED = ${settings.paper.depthBias ? "false" : "true"};

  uniform float uFlipProgress;
  uniform float uWrinkleSide;
  uniform float uBendAngle;
  uniform vec2 uFold;
  uniform vec2 uCurl;
  uniform vec2 uFlipRotation;
  uniform float uDirection;
  uniform float uStackLift;
  uniform float uStackGap;

  attribute vec3 aNoise;

  float sheetRestingLift(float x) {
    if (x <= LIFT_MAX_X) return LIFT_MAX_Z * sin(x / LIFT_MAX_X * 1.57079633);
    if (x <= LIFT_DIP_X) return mix(LIFT_MAX_Z, LIFT_DIP_Z, smoothstep(LIFT_MAX_X, LIFT_DIP_X, x));
    if (x <= LIFT_MID_X) return mix(LIFT_DIP_Z, LIFT_MID_Z, smoothstep(LIFT_DIP_X, LIFT_MID_X, x));
    float t = (x - LIFT_MID_X) / (1.0 - LIFT_MID_X);
    return mix(LIFT_MID_Z, LIFT_EDGE_Z, 1.0 - cos(t * 1.57079633));
  }

  vec3 sheetPosition(vec2 uv, float noise) {
    float x = uv.x;
    float y = (uv.y - 0.5) * SHEET_ASPECT;

    // Every sheet shares the same wrinkles and bulge, scaled by its place in the stack,
    // so stacked sheets nest inside each other instead of crossing. Where a wrinkle dips, a
    // bigger one dips below the sheets under it, which only the depth bias hides; without it
    // the dips are the same on every sheet.
    float wrinkle = uWrinkleSide * (mix(noise, 1.0 - noise, uFlipProgress) - 0.5) * smoothstep(0.0, 0.35, x) * WRINKLE;
    wrinkle *= NESTED && wrinkle < 0.0 ? 1.0 : uStackLift;
    float lift = sheetRestingLift(x) * BULGE * uStackLift;

    // bend with constant curvature past the fold line, trailing against the turn
    float u = x * uFold.x + y * uFold.y;
    float v = -x * uFold.y + y * uFold.x;
    float beyond = max(0.0, u - uCurl.x);
    float angle = beyond / uCurl.y * uBendAngle;
    float sinc = abs(angle) < 1e-4 ? 1.0 : sin(angle) / angle;
    float versine = abs(angle) < 1e-4 ? 0.0 : (1.0 - cos(angle)) / angle;
    float bentU = u - beyond + beyond * sinc;
    float bentZ = -uDirection * beyond * versine;

    vec3 p = vec3(bentU * uFold.x - v * uFold.y, bentU * uFold.y + v * uFold.x, bentZ);

    // turn about the spine
    p = vec3(p.x * uFlipRotation.x - p.z * uFlipRotation.y, p.y, p.x * uFlipRotation.y + p.z * uFlipRotation.x);

    p.z += lift + wrinkle + uStackGap;
    return p;
  }
`
);
function hash2(x, y) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}
function valueNoise(x, y) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const fx = x - xi;
  const fy = y - yi;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const a = hash2(xi, yi) + (hash2(xi + 1, yi) - hash2(xi, yi)) * sx;
  const b = hash2(xi, yi + 1) + (hash2(xi + 1, yi + 1) - hash2(xi, yi + 1)) * sx;
  return a + (b - a) * sy;
}
function wrinkleNoise(u, v, aspect) {
  let x = u / WRINKLE_SCALE + WRINKLE_SEED * 13.37;
  let y = (v - 0.5) * aspect / WRINKLE_SCALE + WRINKLE_SEED * 7.77;
  let value = 0;
  let amplitude = 0.5;
  for (let octave = 0; octave < 3; octave++) {
    value += amplitude * valueNoise(x, y);
    amplitude *= 0.5;
    x *= 2;
    y *= 2;
  }
  return value;
}
var noiseByAspect = /* @__PURE__ */ new Map();
function createSpreadGeometry(aspect) {
  const geometry = new THREE11.PlaneGeometry(1, aspect, 64, Math.round(64 * aspect));
  let noise = noiseByAspect.get(aspect);
  if (!noise) {
    const uv = geometry.attributes.uv;
    noise = new Float32Array(uv.count * 3);
    for (let i = 0; i < uv.count; i++) {
      const u = uv.getX(i);
      const v = uv.getY(i);
      noise[i * 3] = wrinkleNoise(u, v, aspect);
      noise[i * 3 + 1] = wrinkleNoise(u + NORMAL_EPSILON2, v, aspect);
      noise[i * 3 + 2] = wrinkleNoise(u, v + NORMAL_EPSILON2 / aspect, aspect);
    }
    noiseByAspect.set(aspect, noise);
  }
  geometry.setAttribute("aNoise", new THREE11.BufferAttribute(noise, 3));
  return geometry;
}
function sharedSpreadGeometry(shared, aspect) {
  const key = `spread-geometry:${aspect}`;
  return { geometry: shared.acquire(key, () => createSpreadGeometry(aspect)), release: () => shared.release(key) };
}
function createSpreadSheet(geometry, front, back, pattern, settings, shading) {
  const uniforms = {
    uFlipProgress: { value: 0 },
    uWrinkleSide: { value: -1 },
    uBendAngle: { value: 0 },
    uFold: { value: new THREE11.Vector2(1, 0) },
    uCurl: { value: new THREE11.Vector2(0, 1) },
    uFlipRotation: { value: new THREE11.Vector2(1, 0) },
    uDirection: { value: 1 },
    uStackLift: { value: 1 },
    uStackGap: { value: 0 },
    uFront: { value: front },
    uBack: { value: back },
    uPattern: { value: pattern },
    uSpineContact: shading.spineContact,
    uLightDirection: shading.lightDirection,
    uSheetOrigin: shading.origin
  };
  const mesh = createSheetMesh(
    geometry,
    uniforms,
    { vertexChunk: vertexChunk2(settings), epsilon: NORMAL_EPSILON2, noise: true, shadowOffsetX: 4e-3 },
    settings
  );
  return { mesh, uniforms };
}

// src/spread/SpreadEngine.ts
var CURVE = {
  arc: 0.88,
  // share of a half turn the sheet bends by mid-flip
  arcJitter: 0.2,
  angleJitter: 0.3,
  tiltJitterDeg: 6,
  cornerRollMax: 2.3,
  directionSmoothTime: 0.4,
  smoothTime: 0.5,
  settleEpsilon: 1e-4
};
var HOVER = { smoothTime: 2, gapToSheetAbove: 0.1 };
var HOLD2 = {
  startTime: 0.22,
  firstFlipTime: 1.2,
  fastestFlipTime: 0.5,
  speedUpSheets: 20,
  firstGapShare: 0.15,
  fastestGapShare: 0.05,
  moveSlopPx: 40
};
var DRAG2 = { progressSmoothTime: 0.9, fallTime: 1, fallTimeExponent: 0.5, landingSpeed: 0.5, clickSlopPx: 5 };
var CLICK2 = { flipTime: 0.85, followArcGainMin: 1, followArcGainMax: 1.08 };
var clamp2 = THREE12.MathUtils.clamp;
var approach = (smoothTime, dt) => 1 - Math.pow(1e-3, dt / smoothTime);
function stackLift(index, count, progress) {
  if (count <= 1) return 1;
  return 0.31 + 0.69 * (index + (count - 1 - 2 * index) * (1 - progress)) / (count - 1);
}
function sheetsUnder(index, count, progress) {
  const t = clamp2((progress - 0.25) / 0.5, 0, 1);
  return count - 1 - index + (2 * index - count + 1) * t * t * (3 - 2 * t);
}
var SpreadEngine = class {
  group = new THREE12.Group();
  maxPosition;
  settings;
  halfHeight;
  input;
  metrics;
  requestFrame;
  geometry;
  releaseGeometry;
  sheets;
  abort = new AbortController();
  shading;
  current;
  flights = [];
  drag = null;
  // the pointer that started the gesture; other pointers are ignored until it lifts
  press = null;
  hold = null;
  hover = { active: false, x: 0, y: 0 };
  hovered = -1;
  leader = -1;
  // the sheet most recently sent flying
  dirty = true;
  last = 0;
  ray = new THREE12.Ray();
  hit = new THREE12.Vector3();
  constructor(ctx) {
    this.settings = ctx.settings;
    this.halfHeight = ctx.settings.pageAspect / 2;
    this.input = ctx.input;
    this.metrics = ctx.metrics;
    this.requestFrame = ctx.requestFrame;
    this.shading = ctx.shading;
    const count = Math.ceil(ctx.textures.length / 2);
    this.maxPosition = count;
    this.current = clamp2(Math.round(ctx.position), 0, count);
    const { geometry, release } = sharedSpreadGeometry(ctx.shared, ctx.settings.pageAspect);
    this.geometry = geometry;
    this.releaseGeometry = release;
    this.sheets = [];
    for (let i = 0; i < count; i++) {
      const front = ctx.textures[2 * i];
      const back = ctx.textures[2 * i + 1] ?? ctx.blank;
      const { mesh, uniforms } = createSpreadSheet(this.geometry, front, back, ctx.pattern, ctx.settings, ctx.shading);
      this.sheets.push({
        index: i,
        mesh,
        uniforms,
        progress: i < this.current ? 1 : 0,
        direction: 1,
        directionSmooth: 1,
        curve: { arc: 0, angleDeg: 0 },
        curveTarget: { arc: 0, angleDeg: 0 },
        wobble: { arc: 0.5, angle: 0.5, tilt: 0 },
        liftBase: stackLift(i, count, 0),
        liftSpan: stackLift(i, count, 1) - stackLift(i, count, 0)
      });
      this.group.add(mesh);
    }
    this.bindInput();
  }
  get position() {
    return this.current;
  }
  get turning() {
    return this.flights.length > 0 || this.drag !== null;
  }
  pagesInView() {
    let from = Math.max(2 * this.current - 1, 0);
    let to = 2 * this.current;
    for (const sheet of this.sheets) {
      if (sheet.progress <= 0 || sheet.progress >= 1) continue;
      from = Math.min(from, 2 * sheet.index);
      to = Math.max(to, 2 * sheet.index + 1);
    }
    return { from, to };
  }
  // closed, only the cover side can be grabbed
  get activeSide() {
    const busy = this.flights.length > 0 || this.drag !== null || this.hold !== null;
    if (busy) return "both";
    if (this.current === 0) return "right";
    if (this.current === this.sheets.length) return "left";
    return "both";
  }
  setPageTexture(page, texture) {
    const sheet = this.sheets[page >> 1];
    if (!sheet) return;
    if (page % 2 === 0) sheet.uniforms.uFront.value = texture;
    else sheet.uniforms.uBack.value = texture;
    this.wake();
  }
  cancelInput() {
    this.cancelHold();
    this.hover.active = false;
    if (this.press) this.release(new PointerEvent("pointercancel", { pointerId: this.press.id }));
    this.wake();
  }
  setShadows(on) {
    this.settings.lighting.shadows = on;
    for (const sheet of this.sheets) sheet.mesh.receiveShadow = on;
    this.wake();
  }
  dispose() {
    this.cancelHold();
    this.abort.abort();
    for (const sheet of this.sheets) disposeSheetMesh(sheet.mesh);
    this.releaseGeometry();
  }
  // --- helpers ----------------------------------------------------------------
  randomWobble() {
    if (!this.settings.motion.jitter) return { arc: 0.5, angle: 0.5, tilt: 0 };
    return { arc: Math.random(), angle: Math.random(), tilt: 2 * Math.random() - 1 };
  }
  seconds(time) {
    return time / this.settings.motion.speed;
  }
  // something changed between frames
  wake() {
    this.dirty = true;
    this.requestFrame();
  }
  // the point on the floor under the pointer, the spine at x = 0
  pointAt(clientX, clientY) {
    if (!this.input.ray(clientX, clientY, this.ray)) return null;
    return floorPoint(this.group, this.ray, this.hit);
  }
  // how far a sheet may bend before its far corner rolls over itself
  arcLimit(angleDeg) {
    const t = Math.abs(angleDeg) * Math.PI / 180;
    const reach = Math.cos(t) / (1 - this.halfHeight * Math.sin(t));
    return CURVE.cornerRollMax / (Math.PI * reach);
  }
  restingArc(wobble, angleDeg) {
    return Math.min(CURVE.arc * this.settings.motion.curl * (1 - wobble.arc * CURVE.arcJitter), this.arcLimit(angleDeg));
  }
  inFlight(index) {
    return this.flights.some((f) => f.index === index);
  }
  // which sheet a press here would pick up
  sheetAt(clientX, clientY) {
    const point = this.pointAt(clientX, clientY);
    if (!point) return null;
    const forward = point.x >= 0;
    if (forward ? this.current >= this.sheets.length : this.current <= 0) return null;
    return { index: forward ? this.current : this.current - 1, forward };
  }
  // Where the hand is around the spine shapes the bend: near the top or bottom the fold
  // tilts, and further from the spine it tilts more.
  curveFor(clientX, clientY, index) {
    const wobble = this.sheets[index].wobble;
    const maxTilt = this.settings.motion.maxTilt;
    const hit = this.pointAt(clientX, clientY);
    let angleDeg = 0;
    if (hit) {
      let deg = Math.atan2(hit.y, hit.x) * 180 / Math.PI;
      if (deg > 90) deg = 180 - deg;
      if (deg < -90) deg = -180 - deg;
      const jitter = 1 - wobble.angle * CURVE.angleJitter;
      angleDeg = clamp2(
        -(deg / 90) * maxTilt * Math.hypot(hit.x, hit.y) * jitter + wobble.tilt * CURVE.tiltJitterDeg,
        -maxTilt,
        maxTilt
      );
    }
    const leader = this.sheets[this.leader];
    const following = leader && this.leader !== index && this.inFlight(this.leader) && !(leader.direction > 0 ? leader.progress > 0.5 : leader.progress < 0.5);
    if (!following) return { arc: this.restingArc(wobble, angleDeg), angleDeg };
    const lead = leader.curveTarget;
    angleDeg = clamp2(angleDeg, Math.min(0, lead.angleDeg), Math.max(0, lead.angleDeg));
    const gain = THREE12.MathUtils.lerp(CLICK2.followArcGainMin, CLICK2.followArcGainMax, wobble.arc);
    return { arc: clamp2(lead.arc * gain, lead.arc, this.arcLimit(angleDeg)), angleDeg };
  }
  setCurve(sheet, curve, snap) {
    sheet.curveTarget.arc = curve.arc;
    sheet.curveTarget.angleDeg = curve.angleDeg;
    if (snap) {
      sheet.curve.arc = curve.arc;
      sheet.curve.angleDeg = curve.angleDeg;
    }
  }
  commit(index, toProgress) {
    this.leader = index;
    this.sheets[index].wobble = this.randomWobble();
    this.current = toProgress === 1 ? index + 1 : index;
    this.wake();
  }
  fly(index, forward, toProgress, flipTime = CLICK2.flipTime) {
    this.commit(index, toProgress);
    const from = this.sheets[index].progress;
    this.flights = this.flights.filter((f) => f.index !== index);
    this.flights.push({
      index,
      from,
      to: toProgress,
      direction: forward ? 1 : -1,
      start: performance.now(),
      duration: 1e3 * this.seconds(flipTime) * Math.max(0.2, Math.abs(toProgress - from))
    });
  }
  flip(forward) {
    if (forward ? this.current >= this.sheets.length : this.current <= 0) return false;
    const index = forward ? this.current : this.current - 1;
    if (this.drag?.index === index) return false;
    const sheet = this.sheets[index];
    if (!this.inFlight(index)) {
      sheet.wobble = this.randomWobble();
      const angleDeg = sheet.wobble.tilt * CURVE.tiltJitterDeg;
      this.setCurve(sheet, { arc: this.restingArc(sheet.wobble, angleDeg), angleDeg }, true);
    }
    sheet.direction = forward ? 1 : -1;
    this.fly(index, forward, forward ? 1 : 0);
    return true;
  }
  jumpTo(position) {
    this.cancelHold();
    this.drag = null;
    this.flights = [];
    this.current = clamp2(Math.round(position), 0, this.sheets.length);
    for (const sheet of this.sheets) {
      sheet.progress = sheet.index < this.current ? 1 : 0;
      sheet.direction = sheet.directionSmooth = 1;
    }
    this.wake();
  }
  // --- input ------------------------------------------------------------------
  bindInput() {
    const el = this.input.element;
    const signal = this.abort.signal;
    const { interaction } = this.settings;
    el.addEventListener(
      "pointermove",
      (e) => {
        if (this.press && e.pointerId !== this.press.id) return;
        if (this.hold && this.moved(e, this.hold.fired ? HOLD2.moveSlopPx : void 0)) this.cancelHold();
        if (this.drag && this.press) {
          if (!interaction.drag) return;
          const dx = this.metrics.dragDelta?.(e.clientX - this.press.x, e.clientY - this.press.y) ?? e.clientX - this.press.x;
          this.drag.progress = clamp2(this.drag.base - dx / this.drag.rectWidth / this.settings.motion.dragDistance, 0, 1);
          this.drag.targetCurve = this.curveFor(e.clientX, e.clientY, this.drag.index);
        } else if (e.pointerType === "mouse") {
          this.hover = { active: this.input.covers(e.clientX, e.clientY), x: e.clientX, y: e.clientY };
        }
        this.wake();
      },
      { signal }
    );
    el.addEventListener(
      "pointerleave",
      () => {
        this.hover.active = false;
        this.wake();
      },
      { signal }
    );
    el.addEventListener(
      "pointerdown",
      (e) => {
        if (this.press && !e.isPrimary) return;
        if (e.button !== 0 || !(interaction.drag || interaction.click || interaction.hold)) return;
        if (!this.input.covers(e.clientX, e.clientY)) return;
        const target = this.sheetAt(e.clientX, e.clientY);
        if (!target) return;
        const sheet = this.sheets[target.index];
        if (!this.inFlight(target.index)) this.setCurve(sheet, this.curveFor(e.clientX, e.clientY, target.index), true);
        this.flights = this.flights.filter((f) => f.index !== target.index);
        this.press = { id: e.pointerId, x: e.clientX, y: e.clientY };
        this.drag = {
          index: target.index,
          forward: target.forward,
          base: sheet.progress,
          progress: sheet.progress,
          rectWidth: this.metrics.dragWidth,
          targetCurve: { ...sheet.curveTarget },
          speed: 0
        };
        sheet.direction = target.forward ? 1 : -1;
        this.cancelHold();
        if (interaction.hold) {
          this.hold = {
            forward: target.forward,
            x: e.clientX,
            y: e.clientY,
            count: 0,
            fired: false,
            timer: setTimeout(() => this.holdTick(), 1e3 * HOLD2.startTime)
          };
        }
        try {
          el.setPointerCapture(e.pointerId);
        } catch {
        }
        this.wake();
      },
      { signal }
    );
    el.addEventListener("pointerup", (e) => this.release(e), { signal });
    el.addEventListener("pointercancel", (e) => this.release(e), { signal });
    el.addEventListener("lostpointercapture", (e) => this.release(e), { signal });
  }
  moved(e, slop = DRAG2.clickSlopPx) {
    return this.press !== null && (e.clientX - this.press.x) ** 2 + (e.clientY - this.press.y) ** 2 > slop * slop;
  }
  cancelHold() {
    if (this.hold) clearTimeout(this.hold.timer);
    this.hold = null;
  }
  // press and hold keeps turning pages, faster and faster
  holdTick() {
    const hold = this.hold;
    if (!hold) return;
    if (!hold.fired) {
      hold.fired = true;
      this.drag = null;
    }
    if (hold.forward ? this.current >= this.sheets.length : this.current <= 0) return this.cancelHold();
    const ramp = (from, to) => from + (to - from) * Math.min(hold.count / HOLD2.speedUpSheets, 1);
    const index = hold.forward ? this.current : this.current - 1;
    const sheet = this.sheets[index];
    this.setCurve(sheet, hold.count === 0 ? sheet.curveTarget : this.curveFor(hold.x, hold.y, index), true);
    sheet.direction = hold.forward ? 1 : -1;
    const flipTime = ramp(HOLD2.firstFlipTime, HOLD2.fastestFlipTime);
    this.fly(index, hold.forward, hold.forward ? 1 : 0, flipTime);
    hold.count++;
    hold.timer = setTimeout(
      () => this.holdTick(),
      1e3 * this.seconds(flipTime) * ramp(HOLD2.firstGapShare, HOLD2.fastestGapShare)
    );
  }
  // pointercancel and lostpointercapture put the page back; only pointerup completes a turn
  release(e) {
    if (!this.press || e.pointerId !== this.press.id) return;
    const cancelled = e.type !== "pointerup";
    const wasMoved = this.moved(e);
    this.cancelHold();
    const drag = this.drag;
    this.drag = null;
    this.press = null;
    try {
      this.input.element.releasePointerCapture(e.pointerId);
    } catch {
    }
    this.wake();
    if (!drag) return;
    const { interaction } = this.settings;
    if (!wasMoved || !interaction.drag) {
      if (!cancelled && interaction.click) this.fly(drag.index, drag.forward, drag.forward ? 1 : 0);
      return;
    }
    const travelled = drag.forward ? drag.progress - drag.base : drag.base - drag.progress;
    const committed = !cancelled && travelled >= this.settings.motion.commitThreshold;
    const to = drag.forward === committed ? 1 : 0;
    this.commit(drag.index, to);
    const sheet = this.sheets[drag.index];
    const speed = to === 1 ? drag.speed : -drag.speed;
    const remaining = Math.max(Math.abs(to - sheet.progress), 1e-3);
    const duration = this.seconds(DRAG2.fallTime) * Math.pow(remaining, DRAG2.fallTimeExponent);
    this.flights = this.flights.filter((f) => f.index !== drag.index);
    this.flights.push({
      index: drag.index,
      from: sheet.progress,
      to,
      direction: drag.forward ? 1 : -1,
      start: performance.now(),
      duration: 1e3 * duration,
      launch: clamp2(speed * duration / remaining, 0, 2)
    });
  }
  // --- simulation ---------------------------------------------------------------
  update(now) {
    for (let i = this.flights.length - 1; i >= 0; i--) {
      const f = this.flights[i];
      const sheet = this.sheets[f.index];
      const t = clamp2((now - f.start) / f.duration, 0, 1);
      let k;
      if (f.launch === void 0) {
        k = 0.5 * (1 - Math.cos(t * Math.PI));
      } else {
        const t2 = t * t;
        const t3 = t2 * t;
        k = (t3 - 2 * t2 + t) * f.launch + (3 * t2 - 2 * t3) + (t3 - t2) * DRAG2.landingSpeed;
      }
      sheet.progress = f.from + (f.to - f.from) * k;
      sheet.direction = f.direction;
      if (now >= f.start + f.duration) {
        this.flights.splice(i, 1);
        this.dirty = true;
      }
    }
    const dt = this.last ? clamp2((now - this.last) / 1e3, 0, 0.1) : 1 / 60;
    this.last = now;
    let moving = this.flights.length > 0 || this.drag !== null;
    if (this.drag) {
      const sheet = this.sheets[this.drag.index];
      const step = (this.drag.progress - sheet.progress) * (1 - Math.pow(0.01, dt / DRAG2.progressSmoothTime));
      sheet.progress += step;
      this.drag.speed = dt > 0 ? step / dt : 0;
      this.setCurve(sheet, this.drag.targetCurve, false);
    }
    const { hoverLift } = this.settings.motion;
    const previous = this.hovered;
    const canHover = this.settings.interaction.hover && hoverLift > 0;
    const target = canHover && this.hover.active && !this.drag && !this.hold ? this.sheetAt(this.hover.x, this.hover.y) : null;
    this.hovered = target && !this.inFlight(target.index) ? target.index : -1;
    if (this.hovered !== -1) {
      const sheet = this.sheets[this.hovered];
      this.setCurve(sheet, this.curveFor(this.hover.x, this.hover.y, this.hovered), this.hovered !== previous);
    }
    const toward = approach(HOVER.smoothTime, dt);
    const directionStep = approach(CURVE.directionSmoothTime, dt);
    const curveStep = approach(CURVE.smoothTime, dt);
    for (const sheet of this.sheets) {
      const i = sheet.index;
      if (!this.inFlight(i) && this.drag?.index !== i) {
        const rest = i >= this.current ? 0 : 1;
        const goal = i === this.hovered ? Math.abs(rest - hoverLift) : rest;
        const diff = goal - sheet.progress;
        if (Math.abs(diff) < CURVE.settleEpsilon) {
          if (sheet.progress !== goal) {
            sheet.progress = goal;
            this.dirty = true;
          }
        } else {
          sheet.progress += diff * toward;
          moving = true;
        }
        const above = this.sheets[rest === 0 ? i - 1 : i + 1];
        if (above) {
          const bounded = rest === 0 ? Math.min(sheet.progress, Math.max(0, above.progress - HOVER.gapToSheetAbove)) : Math.max(sheet.progress, Math.min(1, above.progress + HOVER.gapToSheetAbove));
          if (bounded !== sheet.progress) {
            sheet.progress = bounded;
            moving = true;
          }
        }
        sheet.direction = rest === 1 && sheet.progress !== rest ? -1 : 1;
        sheet.directionSmooth = sheet.direction;
      }
      const dd = sheet.direction - sheet.directionSmooth;
      if (Math.abs(dd) < CURVE.settleEpsilon) {
        if (sheet.directionSmooth !== sheet.direction) {
          sheet.directionSmooth = sheet.direction;
          this.dirty = true;
        }
      } else {
        sheet.directionSmooth += dd * directionStep;
        moving = true;
      }
      for (const key of ["arc", "angleDeg"]) {
        const d = sheet.curveTarget[key] - sheet.curve[key];
        if (Math.abs(d) < CURVE.settleEpsilon) sheet.curve[key] = sheet.curveTarget[key];
        else {
          sheet.curve[key] += d * curveStep;
          moving = true;
        }
      }
      this.applyUniforms(sheet);
    }
    if (!moving && !this.dirty) return false;
    let contact = null;
    let upright = 0;
    for (const sheet of this.sheets) {
      const i = sheet.index;
      const depth = i >= this.current ? i - this.current : this.current - 1 - i;
      const turning = this.inFlight(i) || this.drag?.index === i;
      sheet.mesh.castShadow = this.settings.lighting.shadows && (depth < 3 || turning);
      layerSheet(sheet.mesh, depth, this.sheets.length, turning, this.settings.paper.depthBias);
      const lift = Math.abs(sheet.uniforms.uFlipRotation.value.y);
      if (turning && lift > upright) {
        upright = lift;
        contact = sheet;
      }
    }
    const rotation = contact?.uniforms.uFlipRotation.value;
    if (rotation) this.shading.spineContact.value.set(rotation.x, rotation.y, 1);
    else this.shading.spineContact.value.set(1, 0, 0);
    this.dirty = false;
    return true;
  }
  applyUniforms(sheet) {
    const u = sheet.uniforms;
    const half = this.halfHeight;
    const turn = sheet.progress * Math.PI;
    const bend = Math.sin(turn) * Math.PI * sheet.curve.arc;
    const tilt = sheet.curve.angleDeg * Math.PI / 180;
    const cos = Math.cos(tilt);
    const sin = Math.sin(tilt);
    const curlLength = 1 - half * Math.sin(Math.abs(tilt));
    const curlStart = 1 - curlLength;
    const reach = Math.max(0, cos + sin * half * Math.sign(sin) - curlStart);
    const tipAngle = reach / curlLength * bend;
    const tipLift = reach * (Math.abs(tipAngle) < 1e-4 ? 0 : (1 - Math.cos(tipAngle)) / tipAngle);
    const rotation = turn + 0.5 * sheet.directionSmooth * tipLift;
    u.uFlipProgress.value = sheet.progress;
    u.uWrinkleSide.value = -Math.cos(turn);
    u.uDirection.value = sheet.directionSmooth;
    u.uStackLift.value = sheet.liftBase + sheet.liftSpan * sheet.progress;
    u.uStackGap.value = this.settings.paper.sheetGap * sheetsUnder(sheet.index, this.sheets.length, sheet.progress);
    u.uBendAngle.value = bend;
    u.uFold.value.set(cos, sin);
    u.uCurl.value.set(curlStart, curlLength);
    u.uFlipRotation.value.set(Math.cos(rotation), Math.sin(rotation));
  }
};

// src/LeafThrough.ts
var isClient = typeof window !== "undefined";
var LeafThrough = class extends EventTarget {
  container;
  /** The element the magazine renders into; focusable, labelled, and styleable via `[data-leafthrough]`. */
  element;
  options;
  canvas;
  hitArea;
  live;
  content;
  // null when the browser can't run WebGL; the magazine then shows plain pages
  renderer;
  frameRequest = 0;
  paper;
  loader = null;
  view = null;
  spreadMedia = null;
  motionMedia;
  abort = new AbortController();
  resizeObserver;
  metrics = { dragWidth: 1 };
  hitBox = null;
  hitSide = "both";
  intersection;
  visible = true;
  needsRender = true;
  running = false;
  riffle = new Riffle();
  lastPagesKey = "";
  loadVersion = 0;
  ready = false;
  disposed = false;
  constructor(container, options) {
    super();
    if (!isClient) throw new Error("LeafThrough needs a browser; create it on the client.");
    this.container = container;
    this.options = snapshot(options);
    const element = this.element = document.createElement("div");
    element.dataset.leafthrough = "";
    element.dataset.state = "loading";
    element.tabIndex = 0;
    element.setAttribute("role", "region");
    element.setAttribute("aria-roledescription", "magazine");
    element.style.cssText = "position:relative;width:100%;height:100%;outline-offset:4px;touch-action:pan-y pinch-zoom;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none";
    this.canvas = document.createElement("canvas");
    this.canvas.style.cssText = "position:absolute;display:block;pointer-events:none;opacity:0;transition:opacity .4s";
    this.canvas.setAttribute("aria-hidden", "true");
    this.hitArea = document.createElement("div");
    this.hitArea.dataset.leafthroughHitArea = "";
    this.hitArea.style.cssText = "position:absolute;cursor:grab;touch-action:pan-y pinch-zoom";
    this.live = document.createElement("div");
    this.live.setAttribute("aria-live", "polite");
    this.live.style.cssText = VISUALLY_HIDDEN;
    this.content = new PageContent({
      onLoad: (page) => !this.disposed && this.pageLoaded(page),
      onError: (page, error) => !this.disposed && this.fail(error, page),
      onShown: () => {
        if (!this.plain) return;
        this.ready = true;
        this.needsRender = true;
      }
    });
    element.append(this.canvas, this.content.element, this.hitArea, this.live);
    this.renderer = createRenderer(this.canvas);
    container.append(element);
    this.paper = new PaperTextures(options.paper?.backColor ?? "#fcfcf9", {
      onGrain: () => this.remount(),
      onError: (error) => this.fail(error)
    });
    const signal = this.abort.signal;
    this.watchSpreadQuery();
    this.motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.motionMedia.addEventListener("change", () => this.remount(), { signal });
    this.resizeObserver = new ResizeObserver(() => this.layoutBox());
    this.resizeObserver.observe(container);
    this.intersection = new IntersectionObserver(
      (entries) => {
        this.visible = entries[entries.length - 1].isIntersecting;
        this.syncLoop();
      },
      { rootMargin: "50% 0px" }
    );
    this.intersection.observe(element);
    document.addEventListener("visibilitychange", () => this.syncLoop(), { signal });
    window.addEventListener("resize", () => this.layoutBox(), { signal });
    window.addEventListener("online", () => this.retry(), { signal });
    this.canvas.addEventListener("webglcontextlost", (e) => e.preventDefault(), { signal });
    this.canvas.addEventListener("webglcontextrestored", () => this.needsRender = true, { signal });
    this.bindKeyboard();
    this.applyLabel();
    this.remount(options.startPage ?? 0);
    this.syncLoop();
  }
  // --- public API -----------------------------------------------------------------
  /** First visible page, 0-based. */
  get page() {
    return this.detail().page;
  }
  get pageCount() {
    return this.options.pages.length;
  }
  get layout() {
    return this.view?.settings.layout ?? this.pickLayout();
  }
  get visiblePages() {
    return this.detail().visiblePages;
  }
  /** True while showing flat pages: the `plain` option is on, or the browser can't run WebGL. */
  get plain() {
    return !this.renderer || !!this.options.plain;
  }
  /** True while a page is being dragged or is completing its turn. */
  get turning() {
    return this.view?.engine.turning ?? false;
  }
  /** Turns to the next page. Returns false at the end. */
  next() {
    this.riffle.stop();
    return this.view?.engine.flip(true) ?? false;
  }
  /** Turns to the previous page. Returns false at the start. */
  prev() {
    this.riffle.stop();
    return this.view?.engine.flip(false) ?? false;
  }
  /** Shows `page` (0-based), jumping there or turning the pages one by one. */
  goTo(page, { animate = false } = {}) {
    if (!this.view || Number.isNaN(page)) return;
    this.riffle.stop();
    const engine = this.view.engine;
    const target = this.pageToPosition(page, this.view.settings.layout);
    if (!animate) {
      engine.jumpTo(target);
      return;
    }
    if (engine.position === target) return;
    this.riffle.start(target, this.view.settings.motion.speed);
    this.needsRender = true;
  }
  /** Loads the pages that failed again. Also happens by itself when the browser comes back online. */
  retry() {
    this.loader?.retry();
    if (this.plain) this.content.refresh();
  }
  /** Changes some options and keeps the rest. Structural changes rebuild the scene and keep the current page. */
  update(options) {
    this.applyOptions({ ...this.options, ...options });
  }
  /**
   * Replaces every option at once: anything left out goes back to its default. Bindings
   * use this, since props describe the whole state. Structural changes rebuild the scene
   * and keep the current page.
   */
  setOptions(options) {
    this.applyOptions(options);
  }
  applyOptions(options) {
    if (this.disposed) return;
    const previous = this.options;
    const next = this.options = snapshot(options);
    const changed = changedOptions(previous, next);
    if (!changed.length) return;
    if (changed.includes("label") || changed.includes("formatPageLabel")) this.applyLabel();
    if (changed.includes("spreadQuery")) this.watchSpreadQuery();
    const page = this.page;
    let rebuild = changed.some((key) => !LIVE_OPTIONS.has(key));
    const imagesChanged = changed.includes("pages") && this.pagesKey(next) !== this.lastPagesKey;
    if (imagesChanged && next.pages.length !== previous.pages.length) rebuild = true;
    if (imagesChanged && !rebuild) {
      this.loader?.setSources(next.pages.map(pageImage));
      this.lastPagesKey = this.pagesKey(next);
      if (this.loader && !this.ready) this.startPages(this.loader, page, this.pickLayout());
      this.needsRender = true;
    }
    if (changed.includes("preload")) this.loader?.setRadius(preloadRadius(this.options.preload));
    if (rebuild) this.remount(page);
  }
  addEventListener(type, listener, options) {
    super.addEventListener(type, listener, options);
  }
  removeEventListener(type, listener, options) {
    super.removeEventListener(type, listener, options);
  }
  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    this.riffle.stop();
    this.setLoop(null);
    this.abort.abort();
    this.spreadMedia?.abort.abort();
    this.resizeObserver.disconnect();
    this.intersection.disconnect();
    this.view?.dispose();
    this.view = null;
    this.loader?.dispose();
    this.paper.dispose();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.element.remove();
  }
  // --- layout and scene -------------------------------------------------------------
  pickLayout() {
    const layout = this.options.layout ?? "auto";
    if (layout !== "auto") return layout;
    return this.spreadMedia?.list.matches ? "spread" : "single";
  }
  watchSpreadQuery() {
    this.spreadMedia?.abort.abort();
    const list = window.matchMedia(this.options.spreadQuery ?? DEFAULT_SPREAD_QUERY);
    const abort = new AbortController();
    list.addEventListener("change", () => this.remount(), { signal: abort.signal });
    this.spreadMedia = { list, abort };
  }
  remount(page = this.page) {
    if (this.disposed) return;
    this.riffle.stop();
    const wasPlain = this.view?.engine instanceof PlainEngine;
    this.view?.dispose();
    this.view = null;
    const layout = this.pickLayout();
    const settings = resolveSettings(this.options, layout, this.motionMedia.matches);
    this.element.dataset.layout = layout;
    const sourcesChanged = this.lastPagesKey !== this.pagesKey(this.options);
    this.lastPagesKey = this.pagesKey(this.options);
    this.loader?.setSources(this.options.pages.map(pageImage));
    if (sourcesChanged && this.loader && this.renderer && !this.options.plain) {
      this.resetReady();
      this.startPages(this.loader, page, layout);
    }
    this.view = this.renderer && !this.options.plain ? this.createScene(this.renderer, page, layout, settings) : this.createPlain(page, layout, settings, wasPlain);
    this.layoutBox();
    this.needsRender = true;
  }
  createPlain(page, layout, settings, wasPlain) {
    this.loader?.dispose();
    this.loader = null;
    if (!wasPlain) this.resetReady();
    this.element.dataset.plain = "";
    this.canvas.style.display = "none";
    const { drag, click } = settings.interaction;
    this.hitArea.style.cursor = drag || click ? "pointer" : "default";
    const engine = new PlainEngine({
      hitArea: this.hitArea,
      settings,
      pageCount: this.options.pages.length,
      position: this.pageToPosition(page, layout)
    });
    return {
      engine,
      scene: null,
      camera: null,
      framing: plainFramingFor(layout, settings.pageAspect),
      settings,
      dispose: () => engine.dispose()
    };
  }
  createScene(renderer, page, layout, settings) {
    delete this.element.dataset.plain;
    this.canvas.style.display = "block";
    this.content.place(null);
    if (!this.loader) this.loadPages(renderer, page, layout);
    this.loader?.setWrap(layout === "single" && settings.loop);
    const framing = framingFor(layout, settings.pageAspect);
    const { drag, click, hold } = settings.interaction;
    this.hitArea.style.cursor = drag ? "grab" : click || hold ? "pointer" : "default";
    const scene = new THREE13.Scene();
    const camera = new THREE13.PerspectiveCamera(40, 1, Math.max(0.1, framing.distance - 1.8), framing.distance + 2);
    camera.position.set(framing.eye.x, framing.eye.y, framing.distance);
    camera.lookAt(framing.eye.x, framing.eye.y, 0);
    const { ambient, sun: sunOptions, shadows } = settings.lighting;
    scene.add(new THREE13.HemisphereLight(ambient.sky, ambient.ground, ambient.intensity));
    const sun = new THREE13.DirectionalLight(sunOptions.color, sunOptions.intensity);
    sun.position.set(...sunOptions.position);
    sun.castShadow = shadows;
    if (layout === "single") sun.shadow.intensity = 0.4;
    sun.shadow.mapSize.set(settings.lighting.shadowMapSize, settings.lighting.shadowMapSize);
    Object.assign(sun.shadow.camera, framing.shadow, { near: 0.5, far: 12 });
    sun.shadow.camera.updateProjectionMatrix();
    sun.shadow.bias = -1e-3;
    scene.add(sun, sun.target);
    const shading = {
      spineContact: { value: new THREE13.Vector3(1, 0, 0) },
      lightDirection: { value: sun.position.clone().sub(sun.target.position).normalize() },
      origin: { value: new THREE13.Vector3() }
    };
    let floor2 = null;
    if (layout === "spread" && shadows && settings.lighting.floorShadow > 0) {
      floor2 = new THREE13.Mesh(new THREE13.PlaneGeometry(8, 8), new THREE13.ShadowMaterial({ opacity: settings.lighting.floorShadow }));
      floor2.material.onBeforeCompile = (program) => {
        program.fragmentShader = withSoftBasicShadows(program.fragmentShader);
      };
      floor2.position.z = -1e-5;
      floor2.receiveShadow = true;
      scene.add(floor2);
    }
    const blank = this.paper.blank;
    const textures = this.options.pages.map((_, i) => this.loader?.textures[i] ?? blank);
    const ctx = {
      input: {
        element: this.hitArea,
        ray: (x, y, ray) => rayThrough(camera, this.canvas, x, y, ray),
        // the hit area itself covers just the pages
        covers: () => true
      },
      settings,
      textures,
      blank: layout === "single" ? this.paper.back(settings.paper.backColor) : blank,
      pattern: this.paper.grain(settings, renderer),
      shared: sharedResources(renderer),
      position: this.pageToPosition(page, layout),
      metrics: this.metrics,
      shading,
      // the loop draws every frame the engine asks for while the magazine is on screen
      requestFrame: () => {
      }
    };
    const engine = layout === "spread" ? new SpreadEngine(ctx) : new SingleEngine(ctx);
    scene.add(engine.group);
    engine.update(performance.now());
    return {
      engine,
      scene,
      camera,
      framing,
      settings,
      dispose: () => {
        engine.dispose();
        sun.shadow.dispose();
        floor2?.geometry.dispose();
        floor2?.material.dispose();
      }
    };
  }
  // sizes the canvas and hit area to the container
  layoutBox() {
    if (!this.view) return;
    const { element } = this;
    const { framing, settings, camera } = this.view;
    element.style.height = "100%";
    const width = element.clientWidth;
    const height = element.clientHeight;
    if (!width) return;
    const placed = fit(framing, width, height, settings.bleed);
    if (!height) element.style.height = `${Math.round(placed.height)}px`;
    this.metrics.dragWidth = framing.dragWidth * placed.scale;
    this.hitBox = placed.box;
    this.placeHitArea();
    this.needsRender = true;
    if (!camera || !this.renderer) {
      this.content.place(placed.box);
      return;
    }
    const root = element.getBoundingClientRect();
    const scaleX = root.width / element.offsetWidth || 1;
    const scaleY = root.height / element.offsetHeight || 1;
    const pageLeft = root.left + window.scrollX;
    const pageTop = root.top + window.scrollY;
    const documentWidth = document.documentElement.clientWidth;
    const left = Math.max(placed.view.x, -pageLeft / scaleX);
    const right = Math.min(placed.view.x + placed.view.width, (documentWidth - pageLeft) / scaleX);
    const top = Math.max(placed.view.y, -pageTop / scaleY);
    const bottom = placed.view.y + placed.view.height;
    const canvas2 = { x: left, y: top, width: Math.max(1, right - left), height: Math.max(1, bottom - top) };
    const px = (n) => `${Math.round(n * 100) / 100}px`;
    Object.assign(this.canvas.style, {
      left: px(canvas2.x),
      top: px(canvas2.y),
      width: px(canvas2.width),
      height: px(canvas2.height)
    });
    const maxRatio = Math.min(devicePixelRatio, settings.maxPixelRatio);
    const budget = Math.sqrt(15e6 / Math.max(1, canvas2.width * canvas2.height));
    this.renderer.setPixelRatio(Math.min(maxRatio, budget));
    this.renderer.setSize(Math.max(1, Math.round(canvas2.width)), Math.max(1, Math.round(canvas2.height)), false);
    const { eye, view, distance } = framing;
    const halfWidth = Math.max(eye.x - view.x, view.x + view.width - eye.x);
    const halfHeight = Math.max(eye.y - view.y, view.y + view.height - eye.y);
    const scale = placed.scale;
    camera.fov = 2 * Math.atan(halfHeight / distance) * 180 / Math.PI;
    camera.aspect = halfWidth / halfHeight;
    const frustumLeft = placed.view.x + (eye.x - halfWidth - view.x) * scale;
    const frustumTop = placed.view.y + (view.y + view.height - (eye.y + halfHeight)) * scale;
    camera.setViewOffset(
      2 * halfWidth * scale,
      2 * halfHeight * scale,
      canvas2.x - frustumLeft,
      canvas2.y - frustumTop,
      canvas2.width,
      canvas2.height
    );
    camera.updateProjectionMatrix();
  }
  // --- pages ---------------------------------------------------------------------
  // what the pages show; their alt and text don't count
  pagesKey(options) {
    return options.pages.map((p) => sourceKey(pageImage(p))).join("\n");
  }
  loadPages(renderer, around, layout) {
    this.loader?.dispose();
    const loader = new PageLoader(this.options.pages.map(pageImage), renderer, preloadRadius(this.options.preload), {
      onLoad: (page, texture) => {
        if (this.loader !== loader) return;
        this.view?.engine.setPageTexture(page, texture);
        this.needsRender = true;
        queueMicrotask(() => {
          if (this.loader === loader && !this.disposed) this.pageLoaded(page);
        });
      },
      onUnload: (page) => {
        if (this.loader !== loader) return;
        this.view?.engine.setPageTexture(page, this.paper.blank);
        this.needsRender = true;
      },
      onError: (page, error) => this.fail(error, page)
    });
    this.loader = loader;
    this.inView = "";
    this.resetReady();
    this.startPages(loader, around, layout);
  }
  startPages(loader, around, layout) {
    const version = ++this.loadVersion;
    const first = [around - 1, around, around + 1, around + 2];
    const visible = this.pagesAt(this.pageToPosition(around, layout), layout);
    loader.start(visible[0] ?? around, visible[visible.length - 1] ?? around, first).then(() => {
      if (this.loader !== loader || this.disposed || version !== this.loadVersion) return;
      this.ready = true;
      this.needsRender = true;
    });
  }
  // loads around what's on screen, pages mid-turn included, the page being read first
  inView = "";
  followReader(engine, layout) {
    if (!this.loader) return;
    const { from, to } = engine.pagesInView();
    const around = this.pagesAt(engine.position, layout)[0] ?? to;
    const key = `${from}:${to}:${around}`;
    if (key === this.inView) return;
    this.inView = key;
    this.loader.focus(from, to, around);
  }
  resetReady() {
    this.ready = false;
    this.element.dataset.state = "loading";
  }
  pageLoaded(page) {
    this.options.onPageLoad?.(page);
    this.dispatchEvent(new CustomEvent("pageload", { detail: { page } }));
  }
  fail(error, page) {
    if (this.options.onError) this.options.onError(error, page);
    else console.warn("[leafthrough]", error);
    this.dispatchEvent(new CustomEvent("error", { detail: { error, page } }));
  }
  // --- pages ↔ engine positions -------------------------------------------------------
  pageToPosition(page, layout) {
    return pageToPosition(page, layout, this.options.pages.length);
  }
  pagesAt(position, layout) {
    return pagesAt(position, layout, this.options.pages.length);
  }
  detail() {
    const layout = this.view?.settings.layout ?? this.pickLayout();
    return pageDetail(this.view?.engine.position ?? 0, layout, this.options.pages.length);
  }
  lastDetailKey = "";
  emitPageChange() {
    const detail = this.detail();
    const key = `${detail.layout}:${detail.visiblePages.join(",")}/${detail.pageCount}`;
    if (key === this.lastDetailKey) return;
    const first = !this.lastDetailKey;
    this.lastDetailKey = key;
    this.live.textContent = (this.options.formatPageLabel ?? defaultPageLabel)(detail);
    if (first) return;
    this.options.onPageChange?.(detail);
    this.dispatchEvent(new CustomEvent("pagechange", { detail }));
  }
  // the visible pages' content, for screen readers and the plain view
  syncContent(view) {
    const { visiblePages, pageCount, layout } = this.detail();
    const format = this.options.formatPageLabel ?? defaultPageLabel;
    this.content.show({
      pages: this.options.pages,
      visiblePages,
      layout,
      plain: this.plain,
      label: (page) => format({ page, visiblePages: [page], pageCount, layout }),
      paper: `#${colorKey(view.settings.paper.backColor)}`
    });
  }
  applyLabel() {
    this.element.setAttribute("aria-label", this.options.label ?? "Magazine");
    this.lastDetailKey = "";
  }
  // --- input and loop -----------------------------------------------------------------
  bindKeyboard() {
    bindKeyboard(
      this.element,
      () => this.view?.settings.interaction.keyboard,
      { next: () => this.next(), prev: () => this.prev(), first: () => this.goTo(0), last: () => this.goTo(this.pageCount - 1) },
      this.abort.signal
    );
  }
  // only animate while the magazine is on screen and the tab is visible
  syncLoop() {
    const run = this.visible && !document.hidden && !this.disposed;
    if (run === this.running) return;
    this.running = run;
    this.setLoop(run ? (now) => this.frame(now) : null);
    if (run) this.needsRender = true;
  }
  // the renderer's animation loop, or plain requestAnimationFrame without one
  setLoop(callback) {
    if (this.renderer) return this.renderer.setAnimationLoop(callback);
    cancelAnimationFrame(this.frameRequest);
    if (!callback) return;
    const tick = (now) => {
      this.frameRequest = requestAnimationFrame(tick);
      callback(now);
    };
    this.frameRequest = requestAnimationFrame(tick);
  }
  // The hit area covers the pages; a closed magazine only takes input on its cover side.
  // This is the only place that positions it.
  placeHitArea() {
    const box = this.hitBox;
    const side = this.view?.engine.activeSide ?? "both";
    if (!box) return;
    this.hitSide = side;
    const half = side === "both" ? 1 : 0.5;
    const px = (n) => `${Math.round(n * 100) / 100}px`;
    Object.assign(this.hitArea.style, {
      left: px(side === "right" ? box.x + box.width / 2 : box.x),
      top: px(box.y),
      width: px(box.width * half),
      height: px(box.height)
    });
  }
  frame(now) {
    const view = this.view;
    if (!view) return;
    this.riffle.step(now, view.engine);
    const moved = view.engine.update(now);
    this.followReader(view.engine, view.settings.layout);
    if (view.engine.activeSide !== this.hitSide) this.placeHitArea();
    if (moved || this.needsRender) {
      if (this.renderer && view.scene && view.camera) {
        this.renderer.shadowMap.needsUpdate = true;
        this.renderer.render(view.scene, view.camera);
      }
      this.needsRender = false;
      if (this.ready && this.element.dataset.state !== "ready") {
        this.element.dataset.state = "ready";
        this.canvas.style.opacity = "1";
        this.options.onReady?.();
        this.dispatchEvent(new CustomEvent("ready"));
      }
    }
    this.emitPageChange();
    this.syncContent(view);
  }
};
function createRenderer(canvas2) {
  let renderer;
  try {
    renderer = new THREE13.WebGLRenderer({ canvas: canvas2, antialias: true, alpha: true });
  } catch {
    return null;
  }
  renderer.outputColorSpace = THREE13.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = softensBasicShadows() ? THREE13.BasicShadowMap : THREE13.PCFShadowMap;
  renderer.shadowMap.autoUpdate = false;
  return renderer;
}

export {
  DEFAULT_SPREAD_QUERY,
  DEFAULT_PAGE_ASPECT,
  defaultPageLabel,
  pageImage,
  resolveSettings,
  LIVE_OPTIONS,
  preloadRadius,
  snapshot,
  deepEqual,
  changedOptions,
  sourceKey,
  floorPoint,
  rayThrough,
  framingFor,
  plainFramingFor,
  pageToPosition,
  pagesAt,
  pageDetail,
  Riffle,
  bindKeyboard,
  PageLoader,
  withSoftBasicShadows,
  sharedResources,
  PaperTextures,
  SingleEngine,
  SpreadEngine,
  LeafThrough
};
//# sourceMappingURL=chunk-MJSK3A5O.js.map