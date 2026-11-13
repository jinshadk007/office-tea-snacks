import {
  LeafThrough
} from "./chunk-MJSK3A5O.js";

// src/element.ts
var ATTRIBUTES = {
  "start-page": "startPage",
  layout: "layout",
  "spread-query": "spreadQuery",
  "page-aspect": "pageAspect",
  loop: "loop",
  bleed: "bleed",
  label: "label",
  keyboard: "keyboard",
  preload: "preload",
  plain: "plain"
};
var NUMBERS = /* @__PURE__ */ new Set(["startPage", "pageAspect", "preload"]);
var BOOLEANS = /* @__PURE__ */ new Set(["loop", "bleed", "plain"]);
var BaseElement = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
var LeafThroughElement = class extends BaseElement {
  static observedAttributes = ["pages", ...Object.keys(ATTRIBUTES)];
  magazine = null;
  extra = {};
  explicitPages = null;
  mount;
  childObserver = null;
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = ":host{display:block;position:relative}:host([hidden]){display:none}div{width:100%;height:100%}";
    this.mount = document.createElement("div");
    shadow.append(style, this.mount);
    const self = this;
    for (const key of ["pages", "options"]) {
      if (!Object.hasOwn(this, key)) continue;
      const value = self[key];
      delete self[key];
      self[key] = value;
    }
  }
  /** The pages, in reading order. */
  get pages() {
    return this.explicitPages ?? this.pagesFromMarkup();
  }
  set pages(pages) {
    this.explicitPages = pages;
    this.sync();
  }
  /** Any other options, merged over the attributes. */
  get options() {
    return this.extra;
  }
  set options(options) {
    this.extra = { ...options };
    if (options.pages) this.explicitPages = options.pages;
    this.sync();
  }
  get page() {
    return this.magazine?.page ?? 0;
  }
  get pageCount() {
    return this.pages.length;
  }
  get layout() {
    return this.magazine?.layout;
  }
  /** The underlying instance, once connected. */
  get instance() {
    return this.magazine;
  }
  next() {
    return this.magazine?.next() ?? false;
  }
  prev() {
    return this.magazine?.prev() ?? false;
  }
  goTo(page, options) {
    this.magazine?.goTo(page, options);
  }
  addEventListener(type, listener, options) {
    super.addEventListener(type, listener, options);
  }
  removeEventListener(type, listener, options) {
    super.removeEventListener(type, listener, options);
  }
  connectedCallback() {
    this.childObserver = new MutationObserver(() => {
      if (!this.explicitPages) this.sync();
    });
    this.childObserver.observe(this, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["src", "alt"] });
    this.sync();
  }
  disconnectedCallback() {
    this.childObserver?.disconnect();
    this.magazine?.dispose();
    this.magazine = null;
  }
  attributeChangedCallback() {
    this.sync();
  }
  pagesFromMarkup() {
    const attribute = this.getAttribute("pages");
    if (attribute) {
      const trimmed = attribute.trim();
      if (trimmed.startsWith("[")) {
        try {
          return JSON.parse(trimmed);
        } catch {
          return [];
        }
      }
      return trimmed.split(",").map((s) => s.trim()).filter(Boolean);
    }
    return Array.from(this.querySelectorAll("img")).flatMap((img) => {
      const src = img.currentSrc || img.src;
      if (!src) return [];
      const text = img.closest("figure")?.querySelector("figcaption")?.textContent?.trim();
      return img.alt || text ? [{ src, alt: img.alt || void 0, text: text || void 0 }] : [src];
    });
  }
  optionsFromAttributes() {
    const out = {};
    for (const [attribute, key] of Object.entries(ATTRIBUTES)) {
      const value = this.getAttribute(attribute);
      if (value === null) continue;
      if (NUMBERS.has(key)) out[key] = Number(value);
      else if (BOOLEANS.has(key)) out[key] = value !== "false";
      else if (key === "keyboard") {
        out.interaction = { keyboard: value === "global" ? "global" : value !== "false" };
      } else out[key] = value;
    }
    return out;
  }
  sync() {
    if (!this.isConnected) return;
    const pages = this.pages;
    const attributes = this.optionsFromAttributes();
    const options = {
      ...attributes,
      ...this.extra,
      interaction: { ...attributes.interaction, ...this.extra.interaction },
      pages,
      onPageChange: (detail) => {
        this.extra.onPageChange?.(detail);
        this.dispatchEvent(new CustomEvent("pagechange", { detail, bubbles: true, composed: true }));
      },
      onReady: () => {
        this.extra.onReady?.();
        this.dispatchEvent(new CustomEvent("ready", { bubbles: true, composed: true }));
      },
      onPageLoad: (page) => {
        this.extra.onPageLoad?.(page);
        this.dispatchEvent(new CustomEvent("pageload", { detail: { page }, bubbles: true, composed: true }));
      },
      onError: (error, page) => {
        this.extra.onError?.(error, page);
        this.dispatchEvent(new CustomEvent("pageerror", { detail: { error, page }, bubbles: true, composed: true }));
      }
    };
    if (!pages.length) {
      this.magazine?.dispose();
      this.magazine = null;
      return;
    }
    if (this.magazine) this.magazine.setOptions(options);
    else this.magazine = new LeafThrough(this.mount, options);
  }
};
function defineLeafThrough(tagName = "leaf-through") {
  if (typeof customElements === "undefined" || customElements.get(tagName)) return;
  customElements.define(tagName, class extends LeafThroughElement {
  });
}
defineLeafThrough();
export {
  LeafThroughElement,
  defineLeafThrough
};
//# sourceMappingURL=element.js.map