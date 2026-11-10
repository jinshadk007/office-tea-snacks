# Office Tea & Snacks

This static app uses Supabase for shared workspaces, orders, and photos. Serve `index.html` over HTTPS or on localhost.

## Supabase setup

1. For a new Supabase project, run [supabase/setup.sql](supabase/setup.sql) once in the SQL Editor. The schema has already been applied to `chai_kada`.
2. In **Authentication → Sign In / Providers**, make sure **Allow anonymous sign-ins** is enabled. The app uses these sessions to identify coworkers without requiring a separate login.
3. To point the app at a different project, replace the URL and publishable key in the `createClient` call in `index.html`.

Enter a company name and WhatsApp number to create a workspace. Share the resulting page URL or the displayed invite code with coworkers. Anyone with the code can join and see shared orders, so share it only with the people who should have access.

The creator's browser session owns the workspace. Keep that session if you need to administer it later. Orders refresh every five seconds. Photos refresh when the page loads. Workspaces and orders previously saved through Claude do not appear automatically in Supabase.
