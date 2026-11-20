const bookLinks = [...document.querySelectorAll('a[href]')].filter(link => new URL(link.href).pathname.endsWith('/demos/pattu-book/'));
if (bookLinks.length) {
  const bookLink = bookLinks[0];
  const frame = document.createElement('iframe');
  const bookUrl = new URL(bookLink.href);
  bookUrl.searchParams.set('warm', '1');
  frame.className = 'pattu-preview';
  frame.title = 'Pattu Book';
  frame.inert = true;
  frame.tabIndex = -1;
  frame.setAttribute('aria-hidden', 'true');
  const landing = [...document.querySelectorAll('body > :is(header, main, footer, .skip)')];
  let opened = false;
  let returnUrl = location.href;
  function notifyBook() {
    frame.contentWindow?.postMessage({type:'pattu-visibility', active:opened}, location.origin);
  }
  function mount() {
    if (frame.isConnected) return;
    frame.src = bookUrl.href;
    document.body.append(frame);
  }
  function showBook(open) {
    mount();opened = open;
    frame.classList.toggle('is-open',open);
    frame.inert = !open;
    frame.tabIndex = open ? 0 : -1;
    frame.setAttribute('aria-hidden',String(!open));
    document.body.classList.toggle('pattu-open',open);
    for (const element of landing) element.inert = open;
    notifyBook();
    window.dispatchEvent(new Event('pattu-visibility'));
    if (open) frame.focus(); else bookLink.focus({preventScroll:true});
  }
  frame.addEventListener('load',()=>{
    notifyBook();
    frame.contentDocument?.querySelector('.landing-link')?.addEventListener('click',event=>{
      event.preventDefault();event.stopImmediatePropagation();
      history.replaceState(null,'',returnUrl);showBook(false);
    },true);
  });
  window.addEventListener('message',event=>{
    if(event.origin===location.origin&&event.source===frame.contentWindow&&event.data?.type==='pattu-ready')frame.dataset.ready='true';
  });
  for (const link of bookLinks) link.addEventListener('click',event=>{
    if(event.button||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    event.preventDefault();
    if(!opened){returnUrl=location.href;const openUrl=new URL(location.href);openUrl.hash='pattu-book';history.pushState({pattuBook:true},'',openUrl.href);}
    showBook(true);
  });
  window.addEventListener('popstate',()=>showBook(Boolean(history.state?.pattuBook)));
  // Start the actual book during website startup; keep its initialized renderer for reuse.
  if(document.querySelector('.world-loading')&&!document.querySelector('.is-world-ready')){
    window.addEventListener('shop-ready',mount,{once:true});
  }else mount();
  if(history.state?.pattuBook)showBook(true);
}
