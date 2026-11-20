// An embedded book initializes once, then sleeps until its parent opens it.
if (window.parent !== window && new URLSearchParams(location.search).has('warm')) {
  const nativeFrame = window.requestAnimationFrame.bind(window);
  const nativeCancel = window.cancelAnimationFrame.bind(window);
  const pending = new Map();
  let serial = 0, paused = false, active = false, ready = false;
  function enqueue(token, entry) {
    entry.native = nativeFrame(time=>{
      entry.native = 0;
      if(paused)return;
      pending.delete(token);entry.callback(time);
    });
  }
  window.requestAnimationFrame = callback=>{
    const token=++serial, entry={callback,native:0};pending.set(token,entry);
    if(!paused)enqueue(token,entry);return token;
  };
  window.cancelAnimationFrame = token=>{
    const entry=pending.get(token);if(entry?.native)nativeCancel(entry.native);pending.delete(token);
  };
  function setPaused(value) {
    if(paused===value)return;paused=value;
    for(const [token,entry] of pending){
      if(paused){if(entry.native)nativeCancel(entry.native);entry.native=0;}
      else if(!entry.native)enqueue(token,entry);
    }
    document.documentElement.dataset.warmPaused=String(paused);
  }
  window.addEventListener('message',event=>{
    if(event.origin!==location.origin||event.source!==window.parent||event.data?.type!=='pattu-visibility')return;
    active=event.data.active===true;if(ready)setPaused(!active);
  });
  const observer=new MutationObserver(()=>{
    if(!document.documentElement.classList.contains('gallery-ready'))return;
    observer.disconnect();
    // Finish the opening reveal offscreen before reporting that the book is warm.
    setTimeout(()=>{ready=true;setPaused(!active);window.parent.postMessage({type:'pattu-ready'},location.origin);},1200);
  });
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['class']});
}
