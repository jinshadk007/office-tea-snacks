const frameCount = 119;
const frameFolder = new URL('../flow-frames/chaya-adi-scroll/', import.meta.url);
const maxConcurrent = 4;
const cacheSize = 24;

export function mountHeroSequence(track, header) {
  const hero = track.querySelector('.hero');
  const scene = hero.querySelector('.pour-scene');
  const steps = [...hero.querySelectorAll('.pour-step')];
  const canvas = hero.querySelector('.hero-sequence');
  const context = canvas.getContext('2d');
  if (!context) return () => {};

  const cache = new Map();
  const pending = new Set();
  const failed = new Set();
  let target = 1;
  let scrollTarget = 1;
  let displayed = 1;
  let animationFrame = null;
  let progress = null;
  let previousTime = null;
  let direction = 1;
  let disposed = false;

  function drawClosest() {
    let closest = displayed;
    for (const frame of cache.keys()) {
      if (Math.abs(frame - target) < Math.abs(closest - target)) closest = frame;
    }
    if (closest === displayed) return;
    const image = cache.get(closest);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    displayed = closest;
    canvas.dataset.frame = String(displayed);
    canvas.hidden = false;
  }

  function loadNearby() {
    if (disposed) return;
    const offsets = [0, direction, 2 * direction, 3 * direction, 4 * direction, -direction, -2 * direction];
    const candidates = [target, scrollTarget, ...offsets.map(offset => target + offset)];
    for (const number of candidates) {
      if (pending.size >= maxConcurrent) break;
      if (number < 1 || number > frameCount || cache.has(number) || pending.has(number) || failed.has(number)) continue;
      const image = new Image();
      image.src = new URL(`frame-${String(number).padStart(4, '0')}.webp`, frameFolder);
      pending.add(number);
      image.decode().then(() => {
        if (disposed) return;
        cache.set(number, image);
        if (cache.size > cacheSize) {
          let furthest = target;
          for (const frame of cache.keys()) {
            if (Math.abs(frame - target) > Math.abs(furthest - target)) furthest = frame;
          }
          cache.delete(furthest);
        }
        drawClosest();
      }).catch(() => failed.add(number)).finally(() => {
        pending.delete(number);
        loadNearby();
      });
    }
  }

  function update(time) {
    animationFrame = null;
    const distance = track.offsetHeight - hero.offsetHeight;
    const traveled = header.offsetHeight - track.getBoundingClientRect().top;
    const scrollProgress = distance > 0 ? Math.max(0, Math.min(1, traveled / distance)) : 0;
    const nextScrollTarget = 1 + Math.round(scrollProgress * (frameCount - 1));
    if (nextScrollTarget !== scrollTarget) direction = nextScrollTarget > scrollTarget ? 1 : -1;
    scrollTarget = nextScrollTarget;
    const elapsed = previousTime === null ? 16 : Math.min(time - previousTime, 50);
    progress ??= scrollProgress;
    const difference = scrollProgress - progress;
    const settled = Math.abs(difference) < .001 || traveled >= distance + 80;
    progress = settled ? scrollProgress : progress + difference * (1 - Math.exp(-elapsed / 120));
    previousTime = settled ? null : time;
    const travel = progress * progress * (3 - 2 * progress);
    scene.style.setProperty('--scene-position', 2 * travel - 1);
    scene.style.setProperty('--scene-tilt', `${-23 + 43 * travel}deg`);
    scene.style.setProperty('--scene-roll', `${-7 + 12 * travel}deg`);
    scene.style.setProperty('--scene-scale', .98 + .08 * Math.sin(Math.PI * travel));
    const stage = progress < .2 ? 0 : progress < .61 ? 1 : 2;
    steps.forEach((step, index) => step.classList.toggle('is-current', index === stage));
    target = 1 + Math.round(progress * (frameCount - 1));
    drawClosest();
    loadNearby();
    if (!settled) scheduleUpdate();
  }

  function scheduleUpdate() {
    if (animationFrame === null) animationFrame = requestAnimationFrame(update);
  }

  track.classList.add('is-scrubbing');
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  scheduleUpdate();

  return () => {
    disposed = true;
    window.removeEventListener('scroll', scheduleUpdate);
    window.removeEventListener('resize', scheduleUpdate);
    if (animationFrame !== null) cancelAnimationFrame(animationFrame);
    track.classList.remove('is-scrubbing');
    scene.style.removeProperty('--scene-position');
    scene.style.removeProperty('--scene-tilt');
    scene.style.removeProperty('--scene-roll');
    scene.style.removeProperty('--scene-scale');
    cache.clear();
    canvas.hidden = true;
    steps.forEach((step, index) => step.classList.toggle('is-current', index === 0));
  };
}
