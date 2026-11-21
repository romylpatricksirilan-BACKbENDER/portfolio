# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two primary audiences, weighted equally. Both are deciding whether to interview Romyl for an **on-site web or mobile development internship in Iloilo**.

- **Recruiters and HR screeners** at Iloilo-area companies. Often non-technical. They skim for well under a minute and decide whether to pass the candidate to the team.
- **Engineers and tech leads** at the same companies. They read the TANAW case study, open GitHub, download the résumé, and judge how deep the technical skills go.

## Product Purpose

A single-page personal portfolio for Romyl Patrick Sirilan, a fourth-year BS Information Systems student at West Visayas State University. It exists to turn a visit into an internship interview. Success is a recruiter forwarding the profile, or an engineer reaching out by email or LinkedIn.

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
- A personal brand, **SYREX**, exists as AI-generated raster sheets in `Syrex branding/`: an "SX" monogram with a wordmark, plus two palettes (the earlier violet-blue "Neon" and the later "Obsidian Mint"). **Open decision:** which version is final, and whether SYREX replaces the site's current look. Its mockup copy (client counts, awards, pricing, client logos, "UI/UX Designer", "Founder") is placeholder and is not product truth.

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
5. **Local and reachable.** Make the Iloilo location and the on-site availability unmistakable, and keep contact one action away.
