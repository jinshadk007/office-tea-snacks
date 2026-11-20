(() => {
 const loader=document.querySelector('.world-loading');
 if(!loader)return;
 loader.dataset.cinemaIntro='true';
 const preview=document.body.dataset.loaderPreview==='true';
 const caption=loader.querySelector('.cinema-caption');
 const video=loader.querySelector('.cinema-roar');
 if(!video)return;
 video.volume=1;
 let sceneReady=false,finished=false,opened=false,watchdog;
 let attempt=0,gesturePending=false,soundEnabled=false;
 const gestureEvents=['pointerdown','touchstart','click','keydown'];
 function removeGestureListeners(){for(const event of gestureEvents)removeEventListener(event,gesture,true)}
 function enter(){
  if(!sceneReady||!finished||opened||preview)return;
  opened=true;clearTimeout(watchdog);video.pause();loader.classList.add('is-ready');
  document.body.classList.remove('shop-booting');removeGestureListeners();
 }
 function finish(){clearTimeout(watchdog);finished=true;loader.classList.remove('is-playing');enter()}
 function ready(){sceneReady=true;loader.dataset.sceneReady='true';enter()}
 function markPlaying(){loader.dataset.playback='playing';loader.classList.add('is-playing')}
 function enableSound(){
  soundEnabled=true;gesturePending=false;loader.dataset.sound='playing';
  caption.textContent='Opening the chayakkada…';markPlaying();removeGestureListeners();
 }
 function gesture(event){
  if(opened||soundEnabled||gesturePending)return;
  if(event.type==='keydown'&&event.key==='Tab')return;
  // Invalidate the older autoplay promise. Its late rejection must never mute
  // playback that a trusted tap has just enabled.
  const id=++attempt;gesturePending=true;finished=false;
  clearTimeout(watchdog);watchdog=setTimeout(finish,6500);
  if(video.readyState>=1)video.currentTime=1.65;
  video.muted=false;video.defaultMuted=false;
  video.play().then(()=>{if(id===attempt&&!opened)enableSound()}).catch(()=>{
   if(id!==attempt||opened)return;
   gesturePending=false;video.muted=true;loader.dataset.sound='blocked';
   caption.textContent='Tap anywhere to hear the roar';video.play().catch(finish);
  });
 }
 for(const event of gestureEvents)addEventListener(event,gesture,{capture:true,passive:true});
 video.addEventListener('loadeddata',()=>video.classList.add('is-ready'),{once:true});
 video.addEventListener('ended',()=>{loader.dataset.playback='ended';finish()});
 video.addEventListener('error',()=>{loader.dataset.playback='unavailable';finish()},{once:true});
 addEventListener('shop-ready',ready,{once:true});
 if(preview||document.querySelector('.is-world-ready'))ready();
 watchdog=setTimeout(finish,9000);
 if(new URLSearchParams(location.search).get('intro')==='quiet'){finish();return}
 // Attempt audible playback on every opening; browsers may require a tap.
 const id=++attempt;video.muted=false;video.defaultMuted=false;
 video.play().then(()=>{if(id===attempt&&!opened)enableSound()}).catch(()=>{
  if(id!==attempt||opened)return;
  video.muted=true;loader.dataset.sound='blocked';caption.textContent='Tap anywhere to hear the roar';
  video.play().then(()=>{if(id===attempt&&!opened)markPlaying()}).catch(()=>{if(id===attempt)finish()});
 });
 addEventListener('pagehide',()=>{++attempt;clearTimeout(watchdog);video.pause();removeGestureListeners()},{once:true});
})();
