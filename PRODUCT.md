# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences the site serves at once:

1. **Hiring, for an on-site web or mobile development internship in Iloilo.**
   - **Recruiters and HR screeners** at Iloilo-area companies. Often non-technical. They skim for well under a minute and decide whether to pass the candidate to the team.
   - **Engineers and tech leads** at the same companies. They read the TANAW case study, open GitHub, download the résumé, and judge how deep the technical skills go.
2. **Prospective clients** (added Nov 2026): people or organizations who need a web or mobile app, a dashboard, or a database-backed system built. They check past work to judge fit and quality, then send an inquiry. Rates, packages, and service terms are not decided and must not be invented.

## Product Purpose

A personal portfolio for Romyl Patrick Sirilan, a fourth-year BS Information Systems student at West Visayas State University. It exists to turn a visit into an internship interview or a client inquiry. Success is a recruiter forwarding the profile, an engineer reaching out, or a prospective client emailing about a project.

## Positioning

What another IS student's portfolio can't truthfully claim:

1. **TANAW, a system for a real client program.** Romyl led full-stack development of a decision support system for the Department of Agriculture's Masagana Hybrid Rice Program in Iloilo: 7 user roles with their own dashboards, geotagged parcels across 3 municipalities, a Python seed-allocation optimizer, and an offline-capable PWA.
2. **Backend and data depth.** Database schemas, access rules, and application workflows, the parts most student portfolios skip.
3. **Real work experience.** Paid roles in verification (Trualliant, lead verification specialist) and customer QA (IXL Solutions) that show reliability and process discipline.

Web and mobile range (Next.js and React, React Native, Expo, Tauri) is a real capability but not the headline differentiator.

## Operating Context

- Visitors arrive from a résumé, a LinkedIn profile, a job application, or a referral, and read on whatever device they have at hand.
- Recruiters need the who, what, and where at a glance: name, role, availability, location, contact.
- Engineers go one level deeper: the TANAW case study, the GitHub contribution graph and repos, and the downloadable résumé PDF.
- Contact happens by email (with a copy button), LinkedIn, or GitHub.

## Capabilities and Constraints

- Next.js 16 App Router with Cache Components, React 19, TypeScript, and plain CSS. No UI framework. Deployed on Vercel.
- All copy lives in `content/profile.ts`. Components read from it, so new projects or jobs need no component changes.
- Light and dark themes follow the system setting, with a manual toggle.
- The GitHub contribution graph is fetched and cached for an hour. If GitHub is unreachable it is left out and the page still renders.
- TANAW source code is private (thesis). Rebadulla Animal Care code is not public yet. Mabuh-AI has no public link.
- Public code: RentEase and Hello Expo on GitHub.

## Brand Commitments

- Name: **Romyl Patrick Sirilan**. Initials: **RS**.
- Personal brand **SYREX** (decided Nov 2026):
  - **Palette:** Obsidian Mint, used across the site in dark and light modes. The violet-blue version is retired.
  - **Symbol:** the SX mark, redrawn as vector (`components/SyrexMark.tsx`; exports in `Syrex branding/svg/`). The original raster sheets in `Syrex branding/` are reference only.
  - **Name first:** Romyl's name stays the headline; SYREX is the mark, not a company name.
  - **Wordmark:** SYREX redrawn as vector on the symbol's rules (one stroke weight, 45° cuts), with stacked and horizontal lockups, in `Syrex branding/svg/`.
  - The brand sheets' mockup copy (client counts, awards, pricing, client logos, "UI/UX Designer", "Founder") is placeholder and is not product truth.

## Evidence on Hand

- Screenshots: `content/screenshots/tanaw.png`, `rentease.png`, `rebadulla.png`, `mabuh-ai.jpg` (phone frame). Hello Expo has no screenshot yet.
- Résumé: `public/resume/Romyl-Patrick-Sirilan-Resume.pdf` (2 pages, Nov 2026).
- TANAW case study (brief, what was built, role) and three highlight figures, in `content/profile.ts`.
- Live GitHub contribution graph for `romylpatricksirilan-BACKbENDER`.
- Timeline: education, two work roles, one training. Two short trainings (machine learning, DevOps).

**Absent; future work must not invent:** testimonials or references, client quotes, live demo links, adoption or usage numbers for TANAW (it is a thesis project; do not claim it is in production use), awards, and employer logos.

## Product Principles

1. **Proof over claims.** Every skill claimed traces to a project, a role, or a link the visitor can check.
2. **Two reading speeds.** The first screen answers who, what, for which internship, and where for a 30-second skim. Depth (case study, code, timeline) sits one step away for the engineer.
3. **Lead with systems, not flash.** The differentiator is real data, roles, and workflows, with TANAW as the centerpiece.
4. **Work history is evidence.** The verification and QA roles show reliability and process discipline. Present them that way, not as filler.
5. **Local and reachable.** Make the Iloilo location, on-site internship availability, and openness to client projects unmistakable, and keep contact one action away.
