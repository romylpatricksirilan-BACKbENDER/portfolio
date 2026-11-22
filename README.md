# Romyl Patrick Sirilan · Portfolio

Personal portfolio of Romyl Patrick Sirilan, a fourth-year BS Information Systems student at West Visayas State University focused on web and mobile development.

Built with [Next.js](https://nextjs.org) 16 (App Router, Cache Components), React 19, and TypeScript. No UI framework: the styles are plain CSS in `app/globals.css`.

## What's on the page

- **Intro:** name, what I do, on-site availability in Iloilo, Copy email, résumé, GitHub and LinkedIn.
- **Selected work:** a project browser. Wide screens show a list beside a live preview; phones get an accordion.
- **How TANAW works:** an interactive system map. Hover, tap, or tab to a part to see what it does and what it connects to.
- **Experience:** education, work, and training as dated rows.
- **Stack:** skills in four groups. Each one used on this page shows which projects used it.
- **On GitHub:** the last year of contributions.
- **Contact:** email with a copy button, links, and what I'm looking for.
- **[/work/tanaw](app/work/tanaw/page.tsx):** the TANAW case study: roles, system map, key flows, and screens.

Also: a command palette (Ctrl K or ⌘K), toasts for copy feedback (Sonner), an Email · Résumé bar on phones once the intro scrolls away, and a screenshot that morphs from the home page into the case study (React view transitions). The site opens in light mode; the toggle in the top bar switches to dark and remembers the choice. Motion follows Emil Kowalski's rules: strong ease-out curves, UI motion under 300 ms, nothing animated on keyboard actions, and reduced motion respected.

## Run it locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Editing the content

All text lives in [`content/profile.ts`](content/profile.ts): profile, links, projects, the TANAW case study and system map, timeline, trainings, and skills. Components read from it, so adding a project or a job never needs a component change.

- **Project screenshots:** put the image in `content/screenshots/`, import it at the top of `content/profile.ts`, and set `screenshot: { src, alt, frame }` on the project. Any aspect ratio works: `frame: "browser"` adds a window bar, `frame: "phone"` a device frame. Without one, the preview shows the text only. Add a `caption` when the screenshot needs context, such as example data.
- **Headshot:** optional. Follow the comment above `photo` in `content/profile.ts`; it appears in the intro.
- **Skills "used in":** counted from each project's "Built with" chips, so a skill links to a project only when the project lists it.
- **Résumé:** replace `public/resume/Romyl-Patrick-Sirilan-Resume.pdf`.
- **Colors:** the palette is Obsidian Mint from the SYREX brand. Every token in `app/globals.css` is built on one hue, `--h` (177 = mint). Dark mode uses the brand sheet's own colors. Light mode keeps the bright mint for buttons and switches to a deep mint wherever mint is used as text.
- **Logo:** the SX symbol lives in `components/SyrexMark.tsx` as SVG paths. The favicon (`app/icon.svg`) and the link preview image (`app/opengraph-image.tsx`) use the same paths.

## GitHub contribution graph

`lib/github.ts` reads the last year of contributions and caches it for an hour (`'use cache'` with `cacheLife('hours')`).

- **Without a token** it reads the public calendar on the GitHub profile. Contributions to private repositories appear only if **Include private contributions on my profile** is turned on in GitHub → Settings → Public profile.
- **With a token** (optional), set `GITHUB_TOKEN` (see `.env.example`) to read the same calendar through GitHub's GraphQL API.

If GitHub can't be reached, the graph is left out and the rest of the page still renders.

## Deploy

Import the repository at [vercel.com/new](https://vercel.com/new) and deploy with the default settings. Optionally set `NEXT_PUBLIC_SITE_URL` to the final address (used for link previews) and `GITHUB_TOKEN`.
