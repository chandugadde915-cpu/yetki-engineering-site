# Yetki Engineering website

## Run locally on Windows

Install Node.js 24 LTS. Extract the ZIP, open the `yetki-engineering-site-main`
folder, and double-click `start-website.cmd`. It builds and serves the optimized
website. Keep its terminal open, wait for the local address, then visit
http://127.0.0.1:8080. Press Ctrl+C in the terminal to stop the server.
The launcher selects the correct directory automatically to avoid the previous
missing `package.json` error.

Alternatively, open a terminal **inside the folder containing package.json**:

```sh
npm ci
npm run build
npm run preview -- --host 127.0.0.1 --port 8080
```

For editing with automatic reload, use the development server instead:

```sh
npm run dev -- --host 127.0.0.1
```

## Check the project

```sh
npx tsc --noEmit
npm run lint
npm run build
```

The default production build targets Cloudflare. For Vercel, set `VERCEL=1`
in the build environment. In PowerShell:

```powershell
$env:VERCEL = '1'
npm run build
```

## Contact email setup

The website runs without email credentials, but sending contact enquiries requires
a real `RESEND_API_KEY` and a verified sender in Resend. Set these server-side
environment variables in your hosting provider:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` (verified sender)
- `CONTACT_TO_EMAIL` (recipient)

For local development, create a `.env` file containing these values and restart
the server. Never commit real credentials. `.dev.vars.example` documents the
Cloudflare variables. Email delivery was not tested because no API key was supplied.

## Repairs

- Added the required Vercel build configuration version.
- Stabilized decorative SVG coordinates across server/browser rendering.
- Fixed the navigation quote link on inner pages.
- Deferred the Vercel email client until credentials are checked, and handle
  email-provider errors without reporting false success.
- Corrected formatting errors without changing page content or styling.
- Added a Windows launcher that always runs from the application folder.
- Made all page content visible in the server-rendered HTML instead of hiding it
  until JavaScript animation code loads. Decorative engineering artwork remains.
- Removed the animation library from the page imports: the shared sections
  JavaScript bundle fell from 154.45 KB to 31.20 KB (about 80% smaller).
- Replaced broken external font URLs with bundled Inter and Space Grotesk fonts.
- Added a transparent WebP logo for the header/footer, reducing its download
  from 469,843 to 37,488 bytes. Original PNG artwork is preserved.
- Fixed production preview for the Cloudflare Worker build. The Windows launcher
  now serves this optimized build instead of the slower development version.
- Respect reduced-motion preferences for decorative animations.
- Replaced live backdrop blur and large blurred glow layers with static navy
  panels and radial gradients, retaining the website's blue engineering style.
- Stopped continuous decorative animation loops and per-frame counter updates.
- Throttled the header's scroll handler and made its listener passive.
- Preload routes when links are hovered/focused and cache preloaded data briefly.
- Load the Google Maps iframe only after pressing "Show interactive map"; the
  address and external Google Maps link remain available immediately.

Installed dependencies and generated build folders are excluded from the repaired ZIP.
