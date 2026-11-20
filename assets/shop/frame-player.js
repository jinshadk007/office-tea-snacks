// Decode a small moving window rather than retaining an entire film in memory.
export function createFramePlayer(canvas, { folder, count, cacheSize = 32, onDraw }) {
  const context = canvas.getContext('2d');
  const cache = new Map();
  const pending = new Set();
  const failed = new Set();
  let target = 1, displayed = 0, direction = 1, active = false, disposed = false;
  const url = n => new URL(`frame-${String(n).padStart(4, '0')}.webp`, folder).href;
  function candidates() {
    const list = [target];
    for (let i = 1; i <= 12; i++) {
      list.push(target + i * direction);
      if (i <= 5) list.push(target - i * direction);
    }
    return list.filter(n => n >= 1 && n <= count);
  }
  function draw() {
    if (!context || !cache.size) return;
    let nearest;
    for (const n of cache.keys()) {
      if (nearest === undefined || Math.abs(n - target) < Math.abs(nearest - target)) nearest = n;
    }
    if (nearest === displayed) return;
    const image = cache.get(nearest);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    displayed = nearest;
    canvas.dataset.frame = String(nearest);
    canvas.hidden = false;
    canvas.parentElement.classList.add('has-frame');
    onDraw?.(image, nearest);
  }
  function pump() {
    if (disposed || !active) return;
    for (const n of candidates()) {
      if (pending.size >= 3) break;
      if (cache.has(n) || pending.has(n) || failed.has(n)) continue;
      pending.add(n);
      const image = new Image();
      image.src = url(n);
      image.decode().then(() => {
        if (disposed) return;
        cache.set(n, image);
        if (cache.size > cacheSize) {
          const distant = [...cache.keys()].sort((a,b) => Math.abs(b-target)-Math.abs(a-target));
          cache.delete(distant[0]);
        }
        draw();
      }).catch(() => failed.add(n)).finally(() => {
        pending.delete(n);
        pump();
      });
    }
  }
  return {
    setProgress(progress) {
      const next = 1 + Math.round(Math.max(0, Math.min(1, progress)) * (count - 1));
      if (next !== target) direction = Math.sign(next-target);
      target = next;
      if (active) { draw(); pump(); }
    },
    setActive(value) { active = value; if (active) pump(); else cache.clear(); },
    destroy() { disposed = true; cache.clear(); }
  };
}
