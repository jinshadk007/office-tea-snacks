# Chaya Kada and Office Tea & Snacks

Serve the repository over HTTPS or on localhost. For local development, run `python3 -m http.server 8765 --bind 127.0.0.1`.

- `/` opens the Chaya Kada landing page.
- `/demos/codrops/` opens the original Codrops animation demos. Use **01** and **02** at the top to switch collections.
- `/shop.html` opens the tea shop preview.
- `/order.html` opens the office ordering app, which uses Supabase for shared workspaces, orders, and photos.
- `/order.html?demo=1` opens the local-only demo with a sample company and phone number.

## Supabase setup

1. For a new Supabase project, run [supabase/setup.sql](supabase/setup.sql) once in the SQL Editor. The schema has already been applied to `chaya-kada` (project ref `ufumdavqbqkrllgbjcev`).
2. In **Authentication → Sign In / Providers**, make sure **Allow anonymous sign-ins** is enabled. The app uses these sessions to identify coworkers without requiring a separate login.
3. To point the app at a different project, replace the URL and publishable key in the `createClient` call in `order.html`.

The ordering app is for the Orattice office only. Members join automatically with anonymous Supabase sessions and select their photo/name when ordering. No email is required. Admins use **Admin sign in** with the office password; access expires after eight hours and can be signed out explicitly.

Apply `supabase/migrations/20261120_single_office.sql` after the base schema. Set the admin password privately in the Supabase SQL Editor using `extensions.crypt` and `extensions.gen_salt('bf', 12)` on `office_tea_private.office_config.password_hash`. Do not put the password in frontend JavaScript or commit it. The database enforces admin permissions, verifies the password hash, and throttles failed attempts. Existing orders are retained. Workspace creation is disabled.

Apply `supabase/migrations/20261120_menu_prices.sql` next. **Admin panel → Menu prices** saves shared prices for each menu item and drink strength. The server checks admin access and captures unit prices when an order is saved. Past orders and payment receipts use those recorded prices. Prices refresh for everyone with the shared order data.

## Animations

The site ships with [Animate.css 4.1.1](https://github.com/animate-css/animate.css/tree/v4.1.1) under the [MIT license](assets/vendor/animate.LICENSE), plus custom styles in `assets/motion.css`. Keep the `assets/` directory alongside both HTML files when hosting the site.

The shop uses [GSAP 3.13 and ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) under the [GSAP Standard License](https://gsap.com/standard-license/), and vendors [Lenis 1.3.11](assets/shop/vendor/lenis.LICENSE), [Motion 12.23.24](assets/shop/vendor/motion.LICENSE), and [Three.js r180](assets/shop/vendor/three.LICENSE). Shop and preparation images are generated illustrations stored as WebP under `assets/shop/`.

The ritual video is a split-screen preview rendered from the nine illustrative stills. To use Google Flow footage, export an H.264 MP4, cut it into nine equal-duration chapters in the order shown on the site, and replace `assets/shop/ritual-film.mp4`. Frequent keyframes (about every quarter second) help the video scrub smoothly in both directions. On desktop the video follows scroll position, and the chapter buttons work at all screen sizes.

The shop also uses [Animate On Scroll 2.3.4](https://github.com/michalsnik/aos/tree/v2.3.4) for entrances. Its original distribution files and [MIT license](assets/shop/vendor/aos.LICENSE) are in `assets/shop/vendor/`.

The gallery uses the 3D ring and Flip transition from [Codrops ScrollBasedLayoutAnimations](https://github.com/codrops/ScrollBasedLayoutAnimations/tree/729029a0f2c31e7c39e15d5c6433a0f4f2bac498) under its [MIT license](assets/shop/codrops/LICENSE). The featured panel plays frames from `assets/shop/gallery-frames/` during the final part of the scroll. To swap in a new video, export sequential WebP frames named `frame-001.webp`, `frame-002.webp`, and so on. List the filenames in playback order in `manifest.json`. The current sequence uses frames from the existing tea preview.

The original demo pages and assets are copied from [Codrops ScrollBasedLayoutAnimations](https://github.com/codrops/ScrollBasedLayoutAnimations/tree/729029a0f2c31e7c39e15d5c6433a0f4f2bac498). The upstream license is in [demos/codrops/LICENSE](demos/codrops/LICENSE).

### Member names and Pattu Book covers

The office roster now contains 12 member books. Team Member 12 has a placeholder cover until an admin uploads a photo. In **Admin → Pattu Book cover photos**, admins can change each cover and save a unique member name (1–60 characters). These names and covers also appear in the order member selector. Existing purchase records retain the name recorded when ordered.

Apply `supabase/migrations/20261120_member_covers.sql` for a new database. Member names and published book covers are readable for the public gallery; only signed-in office admins can change them. Uploaded images use the existing photo storage and 500 KB limit.

The landing page reveals the scene after startup portraits decode (with an 8-second safety limit). Pattu Book warms after the initial shop scene is ready, so the two renderers do not compete during the first scene setup.

The yellow-shirt preparation character now performs a Google Flow porotta stretching and flipping loop, generated in the VenVision account with Veo 3.1 Lite. Its 96 transparent WebP frames play at 12 fps only while that part of the scene is active; the player retains a small frame window rather than decoding the whole sequence at startup. Generation details and prompt are in `assets/shop/actors/team-workers/porotta-motion/generation.json`.
