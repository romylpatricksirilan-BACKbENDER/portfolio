# Romyl Patrick Sirilan · Portfolio

Personal portfolio of Romyl Patrick Sirilan, a fourth-year BS Information Systems student at West Visayas State University focused on web and mobile development.

Built with [Next.js](https://nextjs.org) 16 (App Router, Cache Components), React 19, and TypeScript. No UI framework: the styles are plain CSS in `app/globals.css`.

## What's on the page

- **Hero:** introduction, résumé download, GitHub and LinkedIn links, and a live GitHub contribution graph.
- **Projects:** TANAW (thesis, with a case study), RentEase, Rebadulla Animal Care, and Hello Expo.
- **Experience:** education, work, and training as a timeline.
- **Skills:** languages, frameworks, databases, tools, and strongest areas.
- **Contact:** email with a copy button, links, and what I'm looking for.

Light and dark themes follow the visitor's system setting, with a toggle in the top bar.

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

All text lives in [`content/profile.ts`](content/profile.ts): profile, links, projects, timeline, trainings, and skills. Components read from it, so adding a project or a job never needs a component change.

- **Project screenshots:** put a 16:10 image in `public/projects/` and set `image: "/projects/name.png"` on the project. Without one, the card draws an illustrated mock.
- **Résumé:** replace `public/resume/Romyl-Patrick-Sirilan-Resume.pdf`.
- **Colors:** the whole palette comes from two values at the top of `app/globals.css`: `--h` (hue, 284 = ultraviolet) and `--c` (chroma).

## GitHub contribution graph

`lib/github.ts` reads the last year of contributions and caches it for an hour (`'use cache'` with `cacheLife('hours')`).

- **Without a token** it reads the public calendar on the GitHub profile. Contributions to private repositories appear only if **Include private contributions on my profile** is turned on in GitHub → Settings → Public profile.
- **With a token** (optional), set `GITHUB_TOKEN` (see `.env.example`) to read the same calendar through GitHub's GraphQL API.

If GitHub can't be reached, the graph is left out and the rest of the page still renders.

## Deploy

Import the repository at [vercel.com/new](https://vercel.com/new) and deploy with the default settings. Optionally set `NEXT_PUBLIC_SITE_URL` to the final address (used for link previews) and `GITHUB_TOKEN`.
