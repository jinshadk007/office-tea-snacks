# Chaya Kada and Office Tea & Snacks

Serve the repository over HTTPS or on localhost. For local development, run `python3 -m http.server 8765 --bind 127.0.0.1`.

- `/` opens the Chaya Kada landing page.
- `/demos/codrops/` opens the original Codrops animation demos. Use **01** and **02** at the top to switch collections.
- `/shop.html` opens the tea shop preview.
- `/order.html` opens the office ordering app, which uses Supabase for shared workspaces, orders, and photos.
- `/order.html?demo=1` opens the local-only demo with a sample company and phone number.

## Supabase setup

1. For a new Supabase project, run [supabase/setup.sql](supabase/setup.sql) once in the SQL Editor. The schema has already been applied to `chai_kada`.
2. In **Authentication → Sign In / Providers**, make sure **Allow anonymous sign-ins** is enabled. The app uses these sessions to identify coworkers without requiring a separate login.
3. To point the app at a different project, replace the URL and publishable key in the `createClient` call in `order.html`.

Enter a company name and WhatsApp number to create a workspace. Share the resulting page URL or the displayed invite code with coworkers. Anyone with the code can join and see shared orders, so share it only with the people who should have access.

The creator's browser session owns the workspace. Keep that session if you need to administer it later. Orders refresh every five seconds. Photos refresh when the page loads. Workspaces and orders previously saved through Claude do not appear automatically in Supabase.

## Animations

The site ships with [Animate.css 4.1.1](https://github.com/animate-css/animate.css/tree/v4.1.1) under the [MIT license](assets/vendor/animate.LICENSE), plus custom styles in `assets/motion.css`. Keep the `assets/` directory alongside both HTML files when hosting the site.

The shop uses [GSAP 3.13 and ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) under the [GSAP Standard License](https://gsap.com/standard-license/), and vendors [Lenis 1.3.11](assets/shop/vendor/lenis.LICENSE), [Motion 12.23.24](assets/shop/vendor/motion.LICENSE), and [Three.js r180](assets/shop/vendor/three.LICENSE). Shop and preparation images are generated illustrations stored as WebP under `assets/shop/`.

The ritual video is a split-screen preview rendered from the nine illustrative stills. To use Google Flow footage, export an H.264 MP4, cut it into nine equal-duration chapters in the order shown on the site, and replace `assets/shop/ritual-film.mp4`. Frequent keyframes (about every quarter second) help the video scrub smoothly in both directions. On desktop the video follows scroll position, and the chapter buttons work at all screen sizes.

The shop also uses [Animate On Scroll 2.3.4](https://github.com/michalsnik/aos/tree/v2.3.4) for entrances. Its original distribution files and [MIT license](assets/shop/vendor/aos.LICENSE) are in `assets/shop/vendor/`.

The gallery uses the 3D ring and Flip transition from [Codrops ScrollBasedLayoutAnimations](https://github.com/codrops/ScrollBasedLayoutAnimations/tree/729029a0f2c31e7c39e15d5c6433a0f4f2bac498) under its [MIT license](assets/shop/codrops/LICENSE). The featured panel plays frames from `assets/shop/gallery-frames/` during the final part of the scroll. To swap in a new video, export sequential WebP frames named `frame-001.webp`, `frame-002.webp`, and so on. List the filenames in playback order in `manifest.json`. The current sequence uses frames from the existing tea preview.

The original demo pages and assets are copied from [Codrops ScrollBasedLayoutAnimations](https://github.com/codrops/ScrollBasedLayoutAnimations/tree/729029a0f2c31e7c39e15d5c6433a0f4f2bac498). The upstream license is in [demos/codrops/LICENSE](demos/codrops/LICENSE).
