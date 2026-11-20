import * as THREE from './vendor/three.module.min.js';
import { buildTeaShop } from './tea-world.js';
import { createFramePlayer } from './frame-player.js';
import { illustrateShop } from './illustrated-world.js?v=front-bench-11';

const track=document.querySelector('.walkthrough');
const stage=document.querySelector('.world-stage');
const canvas=document.querySelector('.world-canvas');
const cacheHost=document.querySelector('.actor-cache');
const motion=matchMedia('(prefers-reduced-motion: no-preference)');
const narrow=matchMedia('(max-width:650px)');
const title=document.querySelector('.journey-title');
const label=document.querySelector('.journey-label');
const hint=document.querySelector('.journey-hint');
const progressBar=document.querySelector('.journey-progress span');
const chapterButtons=[...document.querySelectorAll('[data-progress]')];
const replay=document.querySelector('.journey-replay');
const loader=document.querySelector('.world-loading');
const clamp=n=>Math.max(0,Math.min(1,n));
const smooth=n=>{n=clamp(n);return n*n*(3-2*n);};
let renderer,scene,camera,world,raf=0,progress=0,target=0,lastTime=0,disposed=false;
let currentChapter=-1,contextLost=false,hasRendered=false;
const actors=[];
// Looking is an offset from the scroll route; it never locks page scrolling.
const view={yaw:0,pitch:0,targetYaw:0,targetPitch:0,pointer:null,x:0,y:0};
const viewRotation=new THREE.Quaternion();
const viewEuler=new THREE.Euler(0,0,0,'YXZ');
const exploreButton=document.querySelector('.journey-explore');
function resetView(){view.targetYaw=0;view.targetPitch=0;schedule();}
exploreButton.addEventListener('click',resetView);
canvas.addEventListener('pointerdown',event=>{
  if(event.button!==0||!hasRendered)return;
  view.pointer=event.pointerId;view.x=event.clientX;view.y=event.clientY;
  canvas.setPointerCapture(event.pointerId);stage.classList.add('is-looking');
});
canvas.addEventListener('pointermove',event=>{
  if(event.pointerId!==view.pointer)return;
  const dx=event.clientX-view.x,dy=event.clientY-view.y;
  view.x=event.clientX;view.y=event.clientY;
  view.targetYaw=THREE.MathUtils.clamp(view.targetYaw+dx*.0015,-.30,.30);
  // Vertical touch gestures remain native page scrolling.
  if(event.pointerType!=='touch')view.targetPitch=THREE.MathUtils.clamp(view.targetPitch+dy*.0012,-.16,.16);
  schedule();
});
function stopLooking(event){
  if(event.pointerId!==view.pointer)return;
  view.pointer=null;stage.classList.remove('is-looking');
}
canvas.addEventListener('pointerup',stopLooking);
canvas.addEventListener('pointercancel',stopLooking);
canvas.addEventListener('lostpointercapture',stopLooking);
addEventListener('keydown',event=>{if(event.key==='Escape')resetView();});
const look=new THREE.Vector3();
const route=[
 {p:0,position:[.35,3.1,16],look:[.35,2.5,0],fov:46},
 {p:.14,position:[.2,2.6,13.5],look:[.15,2,-.5],fov:44},
 {p:.34,position:[-.28,1.7,1.4],look:[-.1,1.62,-4],fov:46},
 {p:.45,position:[-.25,1.66,-2.7],look:[.5,1.57,-5.7],fov:46},
 {p:.56,position:[.1,1.65,-5.3],look:[3.5,1.55,-6.3],fov:45},
 {p:.65,position:[1.6,1.55,-6.15],look:[3.75,1.53,-6.5],fov:43},
 {p:.78,position:[1.63,1.57,-6.2],look:[3.75,1.53,-6.5],fov:43},
 {p:.85,position:[.2,1.65,-6.25],look:[0,1.5,-10.7],fov:47},
 {p:.88,position:[0,1.65,-6.25],look:[0,1.5,-10.7],fov:47},
 {p:.92,position:[-.2,1.65,-6.25],look:[-.3,1.5,-10.7],fov:47},
 {p:.96,position:[0,1.65,-6.25],look:[0,1.5,-10.7],fov:47},
 {p:1,position:[.2,1.65,-6.25],look:[.3,1.5,-10.7],fov:47},
];
const chapters=[
 {until:.145,label:'01 / OUTSIDE THE CHAYAKKADA',title:'Oru chaya.\nA little pause.',hint:'Scroll to step inside ↓'},
 {until:.38,label:'02 / THROUGH THE DOORWAY',title:'Step inside.',hint:'Keep scrolling to enter'},
 {until:.55,label:'03 / INSIDE THE SHOP',title:'The familiar warmth.',hint:'The kitchen is just ahead'},
 {until:.81,label:'04 / AT THE KADAI',title:'Pazhampori.',hint:'Scroll slowly to watch it turn golden'},
 {until:.885,label:'05 / THE PREPARATION COUNTER',title:'Together, in the kitchen.',hint:'Three familiar hands. One shared space.'},
 {until:.93,label:'06 / CHAYA ADIKKAL',title:'The long pour.',hint:'Keep scrolling to shift focus'},
 {until:.97,label:'06 / ULLIVADA',title:'A little onion. A little care.',hint:'Keep scrolling to shift focus'},
 {until:1.01,label:'06 / PARIPPUVADA',title:'Made by hand.',hint:'You’re inside the chayakkada.'},
];

function actorMaterial(texture,width,height) {
  return new THREE.ShaderMaterial({
    uniforms:{map:{value:texture},texel:{value:new THREE.Vector2(1/width,1/height)},focus:{value:1},warmth:{value:new THREE.Color(1,.96,.88)}},
    vertexShader:`varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`uniform sampler2D map; uniform vec2 texel; uniform float focus; uniform vec3 warmth; varying vec2 vUv;
      void main(){
        vec4 sharp=texture2D(map,vUv); float radius=(1.-focus)*1.8;
        vec4 soft=sharp*.28;
        soft+=texture2D(map,vUv+vec2(texel.x*radius,0.))*.12;
        soft+=texture2D(map,vUv-vec2(texel.x*radius,0.))*.12;
        soft+=texture2D(map,vUv+vec2(0.,texel.y*radius))*.12;
        soft+=texture2D(map,vUv-vec2(0.,texel.y*radius))*.12;
        soft+=texture2D(map,vUv+texel*radius)*.06;
        soft+=texture2D(map,vUv-texel*radius)*.06;
        soft+=texture2D(map,vUv+vec2(texel.x,-texel.y)*radius)*.06;
        soft+=texture2D(map,vUv+vec2(-texel.x,texel.y)*radius)*.06;
        if(soft.a<.035) discard;
        gl_FragColor=vec4(soft.rgb*warmth*(.76+.24*focus),soft.a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    transparent:true,depthWrite:true,side:THREE.DoubleSide,
  });
}
function addActor({name,folder,still,count,width,height,size,position,rotation=0}) {
  const source=document.createElement('canvas');source.width=width;source.height=height;source.hidden=true;cacheHost.append(source);
  const texture=new THREE.CanvasTexture(source);texture.colorSpace=THREE.SRGBColorSpace;texture.generateMipmaps=false;texture.minFilter=THREE.LinearFilter;texture.magFilter=THREE.LinearFilter;
  const material=actorMaterial(texture,width,height);
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(size*width/height,size),material);mesh.position.set(...position);mesh.rotation.y=rotation;mesh.name=name;mesh.frustumCulled=false;scene.add(mesh);
  const player=still?null:createFramePlayer(source,{folder:new URL(folder,import.meta.url),count,cacheSize:18,onDraw(){texture.needsUpdate=true;mesh.visible=true;schedule();}});
  mesh.visible=false;
  const actor={name,player,mesh,material,texture,source,base:mesh.position.clone(),active:false};actors.push(actor);
  // First frames are also the static fallback while nearby animation frames decode.
  const poster=new Image();poster.src=still?new URL(still,import.meta.url):new URL('frame-0001.webp',new URL(folder,import.meta.url));poster.decode().then(()=>{
    const context=source.getContext('2d');
    if(still){
      const scale=Math.min(width/poster.naturalWidth,height/poster.naturalHeight);
      const w=poster.naturalWidth*scale,h=poster.naturalHeight*scale;
      context.drawImage(poster,(width-w)/2,(height-h)/2,w,h);
    }else context.drawImage(poster,0,0,width,height);
    texture.needsUpdate=true;mesh.visible=true;schedule();
  }).catch(()=>{});
  return actor;
}
function activate(actor,active,p) {
  if(actor.active!==active){actor.active=active;actor.player?.setActive(active);}
  actor.player?.setProgress(motion.matches?p:(p>.5?1:0));
}
function cameraAt(p) {
  let next=route.findIndex(key=>key.p>=p);if(next<1)next=1;
  const a=route[next-1],b=route[next];const t=smooth((p-a.p)/(b.p-a.p));
  camera.position.set(...a.position).lerp(new THREE.Vector3(...b.position),t);
  look.set(...a.look).lerp(new THREE.Vector3(...b.look),t);
  let fov=THREE.MathUtils.lerp(a.fov,b.fov,t);
  if(narrow.matches){
    const outside=1-smooth((p-.12)/.21);
    camera.position.z+=outside*4.1;
    if(p>.53&&p<.81){camera.position.x-=1.4*smooth((p-.53)/.1)*(1-smooth((p-.78)/.03));}
    fov+=THREE.MathUtils.lerp(27,49,smooth((p-.45)/.4));
    camera.position.z+=1.1*smooth((p-.80)/.06);
  }
  camera.fov=fov;camera.updateProjectionMatrix();camera.lookAt(look);
}
function copyAt(p) {
  const index=chapters.findIndex(chapter=>p<chapter.until);
  if(index!==currentChapter){
    currentChapter=index;const chapter=chapters[index];
    label.textContent=chapter.label;title.textContent=chapter.title;hint.textContent=chapter.hint;
    stage.dataset.chapter=String(index);
    chapterButtons.forEach(button=>button.setAttribute('aria-current',String(Math.abs(Number(button.dataset.progress)-p)<.065)));
  }
  title.style.opacity=String(p<.145?1:.94);
  document.querySelector('.journey-copy').classList.toggle('is-intro',p<.145);
  progressBar.style.transform=`scaleX(${p})`;
  replay.hidden=p<.985;
}
function render(time) {
  raf=0;if(disposed||contextLost||!renderer)return;
  const distance=Math.max(1,track.offsetHeight-stage.offsetHeight);
  target=clamp(-track.getBoundingClientRect().top/distance);
  const elapsed=Math.min(50,time-lastTime||16);lastTime=time;
  const difference=target-progress;
  progress=!motion.matches||Math.abs(difference)<.00015?target:progress+difference*(1-Math.exp(-elapsed/100));
  cameraAt(progress);
  const easing=motion.matches?1-Math.exp(-elapsed/75):1;
  view.yaw+= (view.targetYaw-view.yaw)*easing;
  view.pitch+= (view.targetPitch-view.pitch)*easing;
  const viewSettled=Math.abs(view.targetYaw-view.yaw)+Math.abs(view.targetPitch-view.pitch)<.0001;
  if(viewSettled){view.yaw=view.targetYaw;view.pitch=view.targetPitch;}
  viewEuler.set(view.pitch,view.yaw,0,'YXZ');viewRotation.setFromEuler(viewEuler);
  camera.quaternion.multiply(viewRotation);
  copyAt(progress);
  activate(actors[0],progress<.42,clamp(progress/.145));
  const cook=clamp((progress-.565)/.225);
  activate(actors[1],progress>.36&&progress<.88,cook);
  world.updateCooking(cook);
  const ensemble=clamp((progress-.81)/.19);
  const focusT=clamp((progress-.88)/.12)*3;
  actors.slice(2).forEach((actor,i)=>{
    activate(actor,progress>.70,ensemble);
    const prominence=progress<.88?.68:smooth(1-Math.abs(focusT-(i+.5)));
    actor.material.uniforms.focus.value=prominence;
    actor.mesh.position.z=actor.base.z+.42*prominence;
  });
  renderer.render(scene,camera);
  stage.dataset.progress=progress.toFixed(4);canvas.dataset.drawCalls=String(renderer.info.render.calls);canvas.dataset.triangles=String(renderer.info.render.triangles);canvas.dataset.camera=camera.position.toArray().map(n=>n.toFixed(2)).join(',');
  if(!hasRendered){hasRendered=true;loader.classList.add('is-ready');stage.classList.add('is-world-ready');}
  if(progress!==target||!viewSettled)schedule();
}
function schedule(){if(!raf&&!disposed&&!document.hidden)raf=requestAnimationFrame(render);}
function resize(){if(!renderer)return;renderer.setPixelRatio(Math.min(devicePixelRatio||1,narrow.matches?1.35:1.6));renderer.setSize(stage.clientWidth,stage.clientHeight,false);camera.aspect=stage.clientWidth/stage.clientHeight;camera.updateProjectionMatrix();schedule();}
function jump(p){const top=scrollY+track.getBoundingClientRect().top+(track.offsetHeight-stage.offsetHeight)*p;scrollTo({top,behavior:motion.matches?'smooth':'instant'});}
chapterButtons.forEach(button=>button.addEventListener('click',()=>jump(Number(button.dataset.progress))));
replay.addEventListener('click',()=>jump(0));
function fallback(error){
  stage.classList.add('is-still');loader.classList.add('is-ready');
  document.querySelector('.still-notice').hidden=false;
  track.style.minHeight='100svh';
  chapterButtons.forEach(button=>{button.disabled=true;});
  console.warn('The virtual shop is using its static fallback.',error?.message||'');
}
try {
  renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance'});
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  scene=new THREE.Scene();scene.background=new THREE.Color('#aaa38c');scene.fog=new THREE.Fog('#aaa38c',19,45);
  camera=new THREE.PerspectiveCamera(42,1,.06,90);
  world=buildTeaShop(scene,renderer);
  illustrateShop(world,scene,renderer,schedule);
  addActor({name:'entrance-chai-maker',folder:'../flow-frames/chai-pour-712fcdb4/',count:119,width:960,height:540,size:1.65,position:[2.7,1.44,.56]});
  addActor({name:'pazhampori-cook',still:'./actors/new-cook/new-cook.png',width:960,height:540,size:1.75,position:[3.85,1.47,-6.55],rotation:-Math.PI/2});
  for(const [i,role] of ['chai','onion','vada'].entries())addActor({name:role,still:`./actors/team-workers/${role}.png`,width:640,height:960,size:3.2,position:[-2+i*2,.9,-10.65]});
  // No continuous render loop when scrolling is settled.
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',resize);motion.addEventListener('change',schedule);
  document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;}else schedule();});
  canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();contextLost=true;stage.classList.add('is-context-paused');});
  canvas.addEventListener('webglcontextrestored',()=>{contextLost=false;stage.classList.remove('is-context-paused');actors.forEach(actor=>actor.texture.needsUpdate=true);resize();});
  resize();
} catch(error){fallback(error);}
addEventListener('pagehide',()=>{disposed=true;cancelAnimationFrame(raf);actors.forEach(actor=>{actor.player?.destroy();actor.texture.dispose();actor.material.dispose();actor.mesh.geometry.dispose();});renderer?.dispose();},{once:true});
