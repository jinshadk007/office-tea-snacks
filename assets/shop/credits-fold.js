const pages = [
  ['Chaya Kada', 'Credits Book · Our team', 'team-cover.jpeg'],
  ['The shop', 'Chaya Kada · Kerala tea shop experience', 'ritual-9.webp'],
  ['Photography', 'Illustrative tea shop scenes', 'ritual-7.webp'],
  ['Motion', 'Codrops · Scroll-Based Layout Animations', 'ritual-8.webp'],
  ['Shop team', 'Sample credits · Asha Nair, manager · Manu Thomas, tea maker', 'ritual-1.webp'],
  ['Creative team', 'Sample credits · Nila Menon, art direction · Ravi Das, sound', 'ritual-6.webp'],
  ['Page turns', '3D cover and page animation', 'product-1.webp'],
  ['Chaya Kada', 'Thank you for visiting', 'product-4.webp'],
];

const stack = document.querySelector('.credit-stack');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const status = document.querySelector('#page');
let index = 0;

const sheets = pages.map(([title, caption, filename], pageIndex) => {
  const page = document.createElement('article');
  page.className = 'credit-sheet';
  page.style.zIndex = pages.length - pageIndex;
  const heading = document.createElement('h2');
  heading.textContent = title;
  const photo = document.createElement('img');
  photo.src = new URL(filename, import.meta.url);
  photo.alt = pageIndex === 0 ? 'Chaya Kada team group photo' : '';
  const copy = document.createElement('p');
  copy.textContent = caption;
  page.append(heading, photo, copy);
  stack.append(page);
  return page;
});

function turn(destination) {
  index = Math.max(0, Math.min(sheets.length - 1, destination));
  sheets.forEach((sheet, number) => {
    sheet.classList.toggle('turned', number < index);
    sheet.inert = number !== index;
    sheet.setAttribute('aria-hidden', String(number !== index));
  });
  stack.classList.toggle('opened', index > 0);
  prev.disabled = index === 0;
  next.disabled = index === sheets.length - 1;
  next.setAttribute('aria-label', index === 0 ? 'Open book' : 'Next page');
  status.textContent = index === 0 ? 'Cover' : `Page ${index + 1} of ${sheets.length}`;
}
prev.onclick = () => turn(index - 1);
next.onclick = () => turn(index + 1);
stack.onclick = () => turn(index + 1);
document.querySelector('main').addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  turn(index + (event.key === 'ArrowRight' ? 1 : -1));
});
turn(0);
