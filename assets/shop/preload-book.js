const bookLink = document.querySelector('nav a[href="./demos/pattu-book/#/"]');

if (bookLink && !navigator.connection?.saveData) {
  const bookUrl = new URL(bookLink.href);
  const landing = document.querySelectorAll('body > :is(header, main, footer, .skip)');
  const frame = document.createElement('iframe');
  frame.className = 'pattu-preview';
  frame.title = 'Pattu Book';
  frame.inert = true;
  frame.setAttribute('aria-hidden', 'true');

  function showBook(open) {
    frame.classList.toggle('is-open', open);
    frame.inert = !open;
    frame.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('pattu-open', open);
    for (const element of landing) element.inert = open;
    if (open) frame.focus();
    else bookLink.focus({ preventScroll: true });
  }

  frame.addEventListener('load', () => {
    const back = frame.contentDocument?.querySelector('.landing-link');
    back?.addEventListener('click', event => {
      if (!history.state?.pattuBook) return;
      event.preventDefault();
      history.back();
    });
  });

  frame.src = bookUrl.href;
  document.body.append(frame);
  window.addEventListener('popstate', () => showBook(Boolean(history.state?.pattuBook)));

  for (const link of document.querySelectorAll('a[href="./demos/pattu-book/#/"]')) {
    link.addEventListener('click', event => {
      if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      history.pushState({ pattuBook: true }, '', '#pattu-book');
      showBook(true);
    });
  }
  if (history.state?.pattuBook) showBook(true);
}
