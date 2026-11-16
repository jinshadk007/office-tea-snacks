import { mountHeroSequence } from './hero-sequence.js?v=scroll-performance';

const motion = matchMedia('(prefers-reduced-motion: no-preference)');
let unmountSequence;

function syncSequence() {
  unmountSequence?.();
  unmountSequence = motion.matches
    ? mountHeroSequence(document.getElementById('home'), document.querySelector('.top'))
    : undefined;
}

motion.addEventListener('change', syncSequence);
syncSequence();

const { gsap, ScrollTrigger } = window;
if (gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    gsap.from('.fresh-chai-copy', {
      y: 36,
      opacity: 0,
      scrollTrigger: { trigger: '#fresh-chai', start: 'top 90%', end: 'top 50%', scrub: true },
    });
  });
}
