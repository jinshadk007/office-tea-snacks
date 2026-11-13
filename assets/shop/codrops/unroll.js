// Adapted from Codrops ScrollBasedLayoutAnimations, commit 729029a. See LICENSE.
// Function to unroll a ring of pictures into the gallery's own row (or column) when scrolling.
// It's 3D, which Flip doesn't record, so the pictures are placed here on every update instead
export const triggerUnrollOnScroll = (galleryEl, options = {}) => {
	// Default settings, merged with the options provided when calling the function
	const settings = { start: 'center center', end: '+=450%', unrollStart: 'top 40%', tilt: 22, scale: 1.5, turns: 0.4, overlap: 0.3, onFeatureProgress: null, ...options };

	// Select elements within the gallery that will be animated
	const galleryCaption = galleryEl.querySelector('.caption');
	const galleryItems = [...galleryEl.querySelectorAll('.gallery__item')];

	// Where the middle of each picture lies along the row (or column on phones, as in css/base.css), from the middle of the row
	const vertical = !window.matchMedia('(min-width: 53em)').matches;
	const centers = galleryItems.map(item => {
		const rect = item.getBoundingClientRect();
		return vertical ? rect.top + rect.height / 2 : rect.left + rect.width / 2;
	});
	const middle = (centers[0] + centers[centers.length - 1]) / 2;
	const offsets = centers.map(center => center - middle);

	// Once flat, the row switches with Flip to a feature view (.gallery--switch): the card at the front large, the others thumbnails.
	// Recorded now, while the row still has no 3D on it and the gallery isn't tilted or scaled
	galleryEl.classList.add('gallery--switch');
	const featureState = Flip.getState(galleryItems, {props: 'borderRadius'});
	galleryEl.classList.remove('gallery--switch');
	const featureTl = Flip.to(featureState, {
		duration: 1,
		ease: 'power2.inOut',
		scale: false,
		simple: true,
		stagger: 0.03,
	});

	// Rolled up, the row closes into a ring exactly as long as itself, its two ends meeting at the back
	const rowLength = galleryItems.length * Math.abs(offsets[1] - offsets[0]);
	const fullBend = 2 * Math.PI / rowLength;

	// Place every picture on the ring for the current amount of unrolling (0 rolled up, 1 flat).
	// The pictures can also slide along the ring (shift, a distance along the row): while it's closed that turns the ring,
	// and as it opens the same slide becomes the row gliding into place
	const state = { unroll: 0, shift: 0 };
	const render = () => {
		const bend = (1 - state.unroll) * fullBend;
		galleryItems.forEach((item, pos) => {
			const angle = bend * (offsets[pos] + state.shift);
			const along = bend ? Math.sin(angle) / bend : offsets[pos] + state.shift;
			gsap.set(item, {
				[vertical ? 'y' : 'x']: along - offsets[pos],
				z: bend ? (Math.cos(angle) - 1) / bend : 0,
				[vertical ? 'rotationX' : 'rotationY']: (vertical ? -1 : 1) * angle * 180 / Math.PI,
				// Lit from the front, darker towards the back of the ring
				'--light': 0.35 + 0.65 * (1 + Math.cos(angle)) / 2
			});
		});
	};

	// Pin the gallery while it unrolls. The wrapper is the trigger, since the gallery itself is tilted and scaled when the positions are measured
	const pin = ScrollTrigger.create({
		trigger: galleryEl.parentNode,
		start: settings.start,
		end: settings.end,
		pin: galleryEl.parentNode,
	});

	// Create the timeline: the ring unrolls, levels out and comes down to size, then switches to the feature view and the caption rises.
	// It starts a little before the pin (unrollStart), while the gallery is still rising into place, and ends with it
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: galleryEl.parentNode,
			start: settings.unrollStart,
			end: () => pin.end,
			onUpdate: self => settings.onFeatureProgress?.(Math.max(0, (self.progress - 0.68) / 0.32)),
			scrub: true,
		}
	});
	tl.fromTo(state, { unroll: 0 }, { unroll: 1, duration: 1, ease: 'power1.inOut', onUpdate: render }, 0)
	.fromTo(galleryEl, { [vertical ? 'rotationY' : 'rotationX']: vertical ? settings.tilt : -settings.tilt, scale: settings.scale }, { [vertical ? 'rotationY' : 'rotationX']: 0, scale: 1, duration: 1, ease: 'power1.inOut' }, 0)
	.add(featureTl, 1.1)
	.fromTo(galleryCaption, { opacity: 0, y: '25vh' }, { opacity: 1, y: 0, duration: 0.5, ease: 'power1.out' }, 1.6);

	// While the gallery comes into view, the ring turns around its axis, and it keeps sliding
	// into the first part of the unrolling (overlap), slowing down, so the two run as one motion
	gsap.fromTo(state, { shift: -settings.turns * rowLength }, {
		shift: 0,
		ease: 'power1.out',
		onUpdate: render,
		scrollTrigger: {
			trigger: galleryEl.parentNode,
			start: 'top bottom',
			// The unrolling is the timeline's first second
			end: () => tl.scrollTrigger.start + settings.overlap * (tl.scrollTrigger.end - tl.scrollTrigger.start) / tl.duration(),
			scrub: true,
		}
	});

	render();
};
