# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A professional portfolio that serves two audiences at once (repositioned Nov 2026; it is no longer framed around internships):

1. **Prospective clients:** people or organizations who need a web or mobile app, a dashboard, or a database-backed system built. They check past work to judge fit and quality, then send an inquiry. Rates, packages, and service terms are not decided and must not be invented.
2. **People hiring developers:**
   - **Recruiters and HR screeners.** Often non-technical. They skim for well under a minute and decide whether to pass the profile on.
   - **Engineers and tech leads.** They read the TANAW case study, open GitHub, download the résumé, and judge how deep the technical skills go.

## Product Purpose

The portfolio of Romyl Patrick Sirilan, a full-stack web and mobile developer in Iloilo City, Philippines. It exists to turn a visit into a project inquiry or a conversation about a role. Success is a prospective client emailing about a project, a recruiter forwarding the profile, or an engineer reaching out.

## Positioning

What a typical junior developer's portfolio can't truthfully claim:

1. **TANAW, a system for a real program.** Romyl led full-stack development of a decision support system for the Department of Agriculture's Masagana Hybrid Rice Program in Iloilo: 7 user roles with their own dashboards, geotagged parcels across 3 municipalities, a Python seed-allocation optimizer, and an offline-capable PWA.
2. **Backend and data depth.** Database schemas, access rules, and application workflows, the parts most portfolios skip.
3. **Real work experience.** Paid roles in verification (Trualliant, lead verification specialist) and customer QA (IXL Solutions) that show reliability and process discipline.

Web and mobile range (Next.js and React, React Native, Expo, Tauri) is a real capability but not the headline differentiator.

## Voice

Professional and plain. The site does not describe Romyl as a student and does not mention internships, theses, coursework, year levels, or course codes. Education appears once as a course: **BS Information Systems, West Visayas State University** (Experience timeline and the Contact "At a glance" list).

## Operating Context

- Visitors arrive from a résumé, a LinkedIn profile, a job post, a referral, or a client's search, and read on whatever device they have at hand.
- Everyone needs the who, what, and where at a glance: name, what he builds, availability, location, contact.
- Engineers go one level deeper: the TANAW case study, the GitHub contribution graph and repos, and the downloadable résumé PDF.
- Contact happens by email (with a copy button), LinkedIn, GitHub, Facebook, or Instagram.

## Capabilities and Constraints

- Next.js 16 App Router with Cache Components, React 19, TypeScript, and plain CSS. No UI framework. Deployed on Vercel.
- All copy lives in `content/profile.ts`. Components read from it, so new projects or jobs need no component changes.
- Opens in light mode; a toggle switches to dark and the choice is remembered.
- The GitHub contribution graph is fetched and cached for an hour. If GitHub is unreachable it is left out and the page still renders.
- TANAW source code is private (it was built as an academic project; the site says only "private"). Rebadulla Animal Care code is not public yet. Mabuh-AI has no public link.
- Public code: RentEase and Hello Expo on GitHub.

## Brand Commitments

- Name: **Romyl Patrick Sirilan**. Initials: **RS**.
- Personal brand **SYREX**:
  - **Palette: Blueprint** (decided Nov 2026, replaces Obsidian Mint). 60% navy, 30% drafting paper, 10% amber.
    - Light (default): navy `#0D2470` for the nav, hero, system map and contact band; paper `#F3F6FB` for reading sections; amber `#FFC247` only for the main button, the highlighter stroke, the live dot and active lines. Text on paper uses ink `#0A1633` and brand blue `#24449D`.
    - Dark: everything goes deeper. Navy bands `#020A2C`, page `#03050C`. Amber stays.
    - Bright cobalt (`#1B46C2`) was proposed and rejected. Violet stays retired.
  - **Hero:** a navy blueprint sheet with a fine grid, the portrait standing on it, one leader line to a "Lead full-stack developer · TANAW" note, and a drawing title block (greeting, Iloilo time, last update, "See my work").
  - **Corners:** tight. 2px chips, 4px controls, 6px panels.
  - **Symbol:** the SX mark, as vector (`components/SyrexMark.tsx`; exports in `Syrex branding/svg/`): navy on white, white on navy.
  - **Name first:** Romyl's name stays the headline; SYREX is the mark, not a company name.
  - **Wordmark:** SYREX redrawn as vector on the symbol's rules (one stroke weight, 45° cuts), with stacked and horizontal lockups, in `Syrex branding/svg/`.
  - The brand sheets' mockup copy (client counts, awards, pricing, client logos, "UI/UX Designer", "Founder") is placeholder and is not product truth.

## Evidence on Hand

- Screenshots: `content/screenshots/tanaw.png`, `tanaw-overview.png`, `tanaw-analytics.png`, `rentease.png`, `rebadulla.png`, `mabuh-ai.jpg` (phone frame). Hello Expo has no screenshot yet.
- Portrait: `content/headshot.webp`, navy blazer and white shirt, matted on transparency.
- Résumé: `public/resume/Romyl-Patrick-Sirilan-Resume.pdf` (2 pages, Nov 2026).
- TANAW case study (brief, what was built, role) and three highlight figures, in `content/profile.ts`.
- Live GitHub contribution graph for `romylpatricksirilan-BACKbENDER`.
- Timeline: two work roles, the BS Information Systems course, one NC II training. Two short trainings (machine learning, DevOps).

**Absent; future work must not invent:** testimonials or references, client quotes, live demo links, adoption or usage numbers for TANAW (do not claim it is in production use), awards, employer logos, rates or packages.

## Product Principles

1. **Proof over claims.** Every skill claimed traces to a project, a role, or a link the visitor can check.
2. **Two reading speeds.** The first screen answers who, what, and where for a 30-second skim. Depth (case study, code, timeline) sits one step away for the engineer.
3. **Lead with systems, not flash.** The differentiator is real data, roles, and workflows, with TANAW as the centerpiece.
4. **Work history is evidence.** The verification and QA roles show reliability and process discipline. Present them that way, not as filler.
5. **Welcoming and reachable.** Greet the visitor, make the Iloilo location and availability unmistakable, and keep contact one action away.
