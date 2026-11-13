import { triggerUnrollOnScroll } from './codrops/unroll.js';

const frameDirectory = new URL('./gallery-frames/', import.meta.url);
let frameManifest;
const frames = new Map();

function readManifest() {
  return frameManifest ??= fetch(new URL('manifest.json', frameDirectory))
    .then(response => response.ok ? response.json() : [])
    .then(files => Array.isArray(files) ? files.filter(file => typeof file === 'string' && /^frame-\d+\.webp$/.test(file)) : [])
    .catch(() => []);
}

function readFrame(file) {
  if (!frames.has(file)) {
    const frame = new Image();
    frame.src = new URL(file, frameDirectory);
    frames.set(file, frame);
    if (frames.size > 24) frames.delete(frames.keys().next().value);
  }
  return frames.get(file);
}

export function setupShopGallery() {
  const { gsap, Flip } = window;
  if (!Flip) return;
  gsap.registerPlugin(Flip);
  const gallery = document.querySelector('.gallery--carousel');
  const frame = document.getElementById('gallery-frame');
  const items = [...gallery.querySelectorAll('.gallery__item, .caption')];
  const styles = items.map(item => item.getAttribute('style'));
  let files = [];
  let featureProgress = 0;
  let manifestRequested = false;
  let requested;
  let disposed = false;

  function render(progress) {
    if (progress <= 0) {
      requested = undefined;
      frame.hidden = true;
      return;
    }
    if (!files.length) return;
    const index = Math.round(progress * (files.length - 1));
    const file = files[index];
    if (file === requested) return;
    requested = file;
    const image = readFrame(file);
    image.decode().then(() => {
      if (disposed || file !== requested) return;
      frame.src = image.src;
      frame.hidden = false;
    }).catch(() => {});
    for (const offset of [-2, -1, 1, 2]) {
      const nearby = files[index + offset];
      if (nearby) readFrame(nearby);
    }
  }

  let context;
  function mount() {
    gallery.classList.remove('gallery--switch');
    context = gsap.context(() => {
      triggerUnrollOnScroll(gallery, {
        start: 'center center',
        end: '+=225%',
        onFeatureProgress: progress => {
          featureProgress = progress;
          render(progress);
          if (progress > 0 && !manifestRequested) {
            manifestRequested = true;
            readManifest().then(manifest => {
              if (disposed) return;
              files = manifest;
              render(featureProgress);
            });
          }
        },
      });
    });
  }

  function reset() {
    context.revert();
    items.forEach((item, index) => {
      if (styles[index] === null) item.removeAttribute('style');
      else item.setAttribute('style', styles[index]);
    });
  }

  mount();
  let width = innerWidth;
  let height = innerHeight;
  let resizeTimer;
  function resize() {
    if (innerWidth === width && (innerHeight === height || matchMedia('(pointer: coarse)').matches)) return;
    width = innerWidth;
    height = innerHeight;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      reset();
      mount();
      window.ScrollTrigger.sort();
      window.ScrollTrigger.refresh();
    }, 200);
  }
  addEventListener('resize', resize);
  return () => {
    disposed = true;
    clearTimeout(resizeTimer);
    removeEventListener('resize', resize);
    reset();
    frame.hidden = true;
    gallery.classList.add('gallery--switch');
  };
}
