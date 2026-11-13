import './vendor/leafthrough/element.js';

const credits = [
  { title: 'Chaya Kada', subtitle: 'Credits Book · Our team', image: 'team-cover.jpeg' },
  { title: 'The shop', subtitle: 'Chaya Kada · Kerala tea shop experience', image: 'ritual-9.webp' },
  { title: 'Photography', subtitle: 'AI-generated illustrative tea shop scenes', image: 'ritual-7.webp' },
  { title: 'Motion', subtitle: 'Codrops · Scroll-Based Layout Animations', image: 'ritual-8.webp' },
  { title: 'Page turns', subtitle: 'Dmytro Barylo · LeafThrough', image: 'product-1.webp' },
  { title: 'Shop team', subtitle: 'Sample credits · Asha Nair, manager · Manu Thomas, tea maker', image: 'ritual-1.webp' },
  { title: 'Creative team', subtitle: 'Sample credits · Nila Menon, art direction · Ravi Das, sound', image: 'ritual-6.webp' },
  { title: 'Chaya Kada', subtitle: 'Thank you for visiting', image: 'product-4.webp' },
];

async function makePage({title, subtitle, image}, index) {
  const canvas = document.createElement('canvas');
  canvas.width = 660;
  canvas.height = 900;
  const context = canvas.getContext('2d');
  const cover = index === 0 || index === credits.length - 1;
  context.fillStyle = cover ? '#282f26' : '#efe6d2';
  context.fillRect(0, 0, 660, 900);
  const photo = new Image();
  photo.src = new URL(image, import.meta.url);
  try {
    await photo.decode();
    const fit = index === 0 ? Math.min : Math.max;
    const scale = fit(548 / photo.width, 530 / photo.height);
    context.save();
    context.beginPath();
    context.rect(56, 168, 548, 530);
    context.clip();
    context.drawImage(photo, 330 - photo.width * scale / 2, 433 - photo.height * scale / 2, photo.width * scale, photo.height * scale);
    context.restore();
  } catch {
    context.fillStyle = '#a58b68';
    context.fillRect(56, 168, 548, 530);
  }
  context.fillStyle = cover ? '#f0e2c2' : '#28251e';
  context.font = 'italic 62px Georgia';
  context.fillText(title, 56, 118, 548);
  context.font = '25px Georgia';
  subtitle.split(' · ').forEach((line, lineIndex) => {
    context.fillText(line, 56, 738 + lineIndex * 32, 548);
  });
  context.fillText(String(index + 1).padStart(2, '0'), 56, 845);
  return { src: canvas.toDataURL('image/jpeg', .9), alt: title, text: subtitle };
}

const book = document.getElementById('credits');
const previous = document.getElementById('prev');
const next = document.getElementById('next');
const status = document.getElementById('page');

function updateControls() {
  if (!book.pageCount) return;
  status.textContent = `Page ${book.page + 1} of ${book.pageCount}`;
  previous.disabled = book.page <= 0;
  next.disabled = book.page >= book.pageCount - 1;
}
book.addEventListener('ready', updateControls);
book.addEventListener('pagechange', updateControls);
previous.addEventListener('click', () => book.prev());
next.addEventListener('click', () => book.next());

try {
  book.pages = await Promise.all(credits.map(makePage));
  updateControls();
} catch {
  status.textContent = 'The book could not load.';
}
