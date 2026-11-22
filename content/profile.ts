/**
 * Everything the site says lives in this file. Edit it to update the portfolio;
 * no component needs to change for new projects, jobs, or skills.
 */

import type { StaticImageData } from "next/image";
import headshot from "./headshot.webp";
import mabuhAiShot from "./screenshots/mabuh-ai.jpg";
import rebadullaShot from "./screenshots/rebadulla.png";
import rentEaseShot from "./screenshots/rentease.png";
import tanawAnalyticsShot from "./screenshots/tanaw-analytics.png";
import tanawOverviewShot from "./screenshots/tanaw-overview.png";
import tanawSignInShot from "./screenshots/tanaw.png";

/** A screenshot, statically imported so its size is known. "browser" adds a window bar, "phone" a device frame. */
export type Shot = { src: StaticImageData; alt: string; frame: "browser" | "phone"; caption?: string };

export type Project = {
  id: "tanaw" | "rentease" | "rebadulla" | "mabuh-ai" | "hello-expo";
  name: string;
  subtitle: string;
  meta: string[];
  summary: string;
  /** Short facts shown in a row (featured project only). */
  highlights?: { value: string; label: string }[];
  /** Chips under the summary, with the caption above them. */
  chips: { caption: "Built with" | "Features"; items: string[] };
  /** Text sections of the case study page. */
  caseStudy?: { title: string; body: string }[];
  /** The project's own case study page, when it has one. */
  href?: string;
  links: { label: string; href: string; kind: "code" | "demo" }[];
  /** Shown when there is no public link. */
  linkNote?: string;
  /** Without one, the preview shows the text only. */
  screenshot?: Shot;
};

export type TimelineItem = {
  when: string;
  kind: "Education" | "Work" | "Training";
  title: string;
  org: string;
  body?: string;
  /** What the role shows an employer, for work outside software. */
  shows?: string;
  current?: boolean;
};

const githubUser = "romylpatricksirilan-BACKbENDER";
const githubUrl = `https://github.com/${githubUser}`;

export const profile = {
  name: "Romyl Patrick Sirilan",
  initials: "RS",
  role: "Full-stack web and mobile developer",
  location: "Iloilo City, Philippines",
  status: "Open to new projects and roles",
  availability: {
    headline: "Open to new projects and roles",
    detail: "Based in Iloilo City, Philippines",
  },
  summary:
    "Full-stack web and mobile developer in Iloilo City, Philippines. I build apps with a focus on backend logic, database integration, and application workflows.",
  course: "BS Information Systems, West Visayas State University",
  /** The note pinned to the portrait in the hero; it links to the case study. */
  heroNote: { title: "Lead full-stack developer", detail: "TANAW · 2026", href: "/work/tanaw" },
  /** Shown in the hero's title block. Update it when the site changes. */
  updated: "Nov 2026",
  email: "sirilanpatrick@gmail.com",
  github: { user: githubUser, url: githubUrl, label: `github.com/${githubUser}` },
  linkedin: {
    url: "https://www.linkedin.com/in/romyl-patrick-sirilan-3292a2275",
    label: "linkedin.com/in/romyl-patrick-sirilan",
  },
  facebook: { url: "https://www.facebook.com/patrickmosquera29", label: "facebook.com/patrickmosquera29" },
  instagram: { url: "https://www.instagram.com/romz_sirilan/", label: "@romz_sirilan" },
  resume: { href: "/resume/Romyl-Patrick-Sirilan-Resume.pdf", label: "PDF · 2 pages · Nov 2026" },
  sourceRepo: `${githubUrl}/portfolio`,
  copyrightYear: 2026,
};

/**
 * The portrait in the hero. A cut-out with a transparent background works best: it rises out of
 * the panel behind it. Set this to null to show the hero without a photo.
 */
export type Photo = { src: StaticImageData; alt: string } | null;
export const photo: Photo = {
  src: headshot,
  alt: "Romyl Patrick Sirilan in a navy blazer and white shirt, smiling and giving a thumbs up",
};

const tanawCaption = "M&E Dashboard, MAO Admin view, shown with example figures.";

export const projects: Project[] = [
  {
    id: "tanaw",
    name: "TANAW",
    subtitle: "Integrated decision support system",
    meta: ["Lead full-stack developer", "Web app and PWA", "2026"],
    summary:
      "A decision support system for the Department of Agriculture's Masagana Hybrid Rice Program in Iloilo. It covers farm registration, seed allocation, distribution planning, and monitoring and evaluation.",
    highlights: [
      { value: "7", label: "user roles across three offices" },
      { value: "3", label: "municipalities with geotagged parcels" },
      { value: "PWA", label: "installable, saves field entries offline" },
    ],
    chips: {
      caption: "Built with",
      items: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Python", "Leaflet"],
    },
    caseStudy: [
      {
        title: "The brief",
        body: "Give municipal agriculture offices, field technicians, and the provincial office one system for the hybrid rice program, where each role sees and changes only what it is responsible for.",
      },
      {
        title: "What I built",
        body: "Role-based dashboards, geotagged parcel management on interactive maps, seed allocation planning with a Python optimizer, delivery tracking, real-time updates, Excel and PDF reports, and an installable PWA that queues field entries offline.",
      },
      {
        title: "My role",
        body: "I led full-stack development, from the database schema and access rules to the dashboards, and coordinated system integration with the development team.",
      },
    ],
    href: "/work/tanaw",
    links: [],
    linkNote: "The source code is private.",
    screenshot: {
      src: tanawOverviewShot,
      alt: "TANAW M&E Dashboard: tiles for available seed bags, pending approvals, active FOD deliveries and field technicians, above a Needs attention queue",
      frame: "browser",
      caption: tanawCaption,
    },
  },
  {
    id: "rentease",
    name: "RentEase",
    subtitle: "Rental management system",
    meta: ["Web app", "2025"],
    summary:
      "A rental tracker for boarders living away from home. It keeps property and tenant records, rent payments, and lease dates in one place, with a dashboard summary.",
    chips: { caption: "Built with", items: ["JavaScript", "HTML", "CSS", "localStorage"] },
    links: [{ label: "Code", href: `${githubUrl}/rentEASE`, kind: "code" }],
    screenshot: {
      src: rentEaseShot,
      alt: "RentEase landing page with the headline “Manage your rental with ease” and a sign-up button",
      frame: "browser",
    },
  },
  {
    id: "rebadulla",
    name: "Rebadulla Animal Care",
    subtitle: "Animal care management system",
    meta: ["Web app", "Management system"],
    summary:
      "Database-backed workflows for an animal care practice: owner and animal records, appointments, vaccination tracking, inventory, and healthcare information.",
    chips: {
      caption: "Features",
      items: ["Owner and animal records", "Appointments", "Vaccinations", "Inventory"],
    },
    links: [],
    linkNote: "The code is not public yet.",
    screenshot: {
      src: rebadullaShot,
      alt: "Rebadulla Animal Care home page with a booking bar for service type, pet name, and appointment date",
      frame: "browser",
    },
  },
  {
    id: "mabuh-ai",
    name: "Mabuh-AI",
    subtitle: "Wellbeing check-in app",
    meta: ["Mobile app", "Android", "2026"],
    summary:
      "An Android app for wellbeing check-ins. People sign in with Google or email, and their check-ins are saved to Supabase. It supports wellbeing and does not replace professional care.",
    chips: { caption: "Built with", items: ["Tauri", "Vite", "Supabase", "SQLite", "Google Sign-In"] },
    links: [],
    screenshot: {
      src: mabuhAiShot,
      alt: "Mabuh-AI sign-in screen on Android, with Google sign-in and email and password fields",
      frame: "phone",
    },
  },
  {
    id: "hello-expo",
    name: "Hello Expo",
    subtitle: "Cross-platform mobile app",
    meta: ["Mobile app", "iOS · Android · web", "2026"],
    summary:
      "A greeting app for iOS, Android, and the web. Type a name, watch the greeting update as you type, and get a personal hello. Reusable UI components, a parallax header, and Expo Router navigation.",
    chips: { caption: "Built with", items: ["React Native", "Expo", "TypeScript", "Expo Router"] },
    links: [{ label: "Code", href: `${githubUrl}/cis228-hello-expo`, kind: "code" }],
  },
];

export const otherProjects = ["Breast Cancer Classifier"];

/**
 * The TANAW case study page. Role descriptions and flows are drawn from the app's
 * dashboards; check them against the system before sharing widely.
 */
export const tanaw = {
  overview: [
    { term: "Role", detail: "Lead full-stack developer" },
    { term: "Type", detail: "Web app and PWA" },
    { term: "Year", detail: "2026" },
    { term: "Users", detail: "7 roles in 3 offices" },
    { term: "Source", detail: "Private" },
  ],
  offices: [
    {
      office: "Municipal Agriculture Office (MAO)",
      roles: [
        { name: "MAO Admin", does: "Runs the municipal side: seed inventory, approvals for deliveries and accounts, incident reports, and users." },
        { name: "MAO Encoder", does: "Encodes farmer, parcel, and distribution records." },
        { name: "Field Technician", does: "Records field work and seed distribution on the installable PWA, offline when there's no signal." },
      ],
    },
    {
      office: "DA Field Operations Division (FOD)",
      roles: [
        { name: "FOD", does: "Plans seed deliveries to municipalities through delivery notices." },
        { name: "FOD Admin", does: "Manages FOD's deliveries and accounts." },
        { name: "Driver", does: "Delivers the seed and updates each trip's progress." },
      ],
    },
    {
      office: "DA Planning, Monitoring and Evaluation Division (PMED)",
      roles: [{ name: "PMED", does: "Monitors and evaluates the program through dashboards and reports." }],
    },
  ],
  flows: [
    {
      title: "Seed delivery",
      steps: [
        "FOD sends a delivery notice to the municipality.",
        "MAO Admin approves it so FOD can plan the trip.",
        "A driver delivers the seed and updates the trip.",
        "MAO Admin counts the bags on arrival and confirms the invoice, which credits municipal stock.",
      ],
    },
    {
      title: "Distribution to farmers",
      steps: [
        "Seed is reserved for field technicians.",
        "Technicians distribute it and record each hand-off, even offline.",
        "Farmers who were absent, or whose field wasn't ready, are followed up through seed returns.",
      ],
    },
    {
      title: "Monitoring and evaluation",
      steps: [
        "Each dashboard opens on what needs attention first.",
        "Analytics compare parcels, distribution, production, and seed varieties by year.",
        "Reports export to Excel and PDF.",
      ],
    },
  ],
  screens: [
    {
      src: tanawAnalyticsShot,
      alt: "TANAW Analytics tab: registered parcels, seeds distributed, production and active varieties, a variety comparison table, a share-of-bags donut, and variety mix bars by year",
      frame: "browser",
      caption: "Analytics tab, shown with example figures.",
    },
    {
      src: tanawSignInShot,
      alt: "TANAW sign-in page for the Masagana Hybrid Rice Program, listing seed allocation analytics, municipal coverage mapping, and field technician reports",
      frame: "browser",
      caption: "Sign-in page.",
    },
  ] satisfies Shot[],
};

/** The interactive TANAW system map: who uses it, what runs it, and how they connect. */
export type MapNodeId = "mao" | "field" | "fod" | "pmed" | "app" | "db" | "opt" | "rep";
export type SystemMapData = {
  nodes: Record<MapNodeId, { kind: string; title: string; sub: string; lines?: string[]; detail: string }>;
  edges: [MapNodeId, MapNodeId][];
};
export const systemMap: SystemMapData = {
  nodes: {
    mao: {
      kind: "People",
      title: "MAO Admin and Encoder",
      sub: "Inventory · approvals · records",
      detail: "The encoder registers farmers, parcels, and distributions. The admin runs seed inventory, approves deliveries and accounts, and handles incident reports.",
    },
    field: {
      kind: "People",
      title: "Field technicians",
      sub: "Offline PWA",
      detail: "Technicians record field work and seed distribution on an installable PWA. Entries queue on the device when there's no signal and sync once it's back.",
    },
    fod: {
      kind: "People",
      title: "FOD and drivers",
      sub: "Deliveries",
      detail: "FOD plans seed deliveries through delivery notices, FOD Admin manages them, and drivers update each trip until the bags are counted on arrival.",
    },
    pmed: {
      kind: "People",
      title: "PMED",
      sub: "Monitoring and evaluation",
      detail: "PMED follows the program across municipalities through dashboards and Excel or PDF reports.",
    },
    app: {
      kind: "App",
      title: "Next.js app",
      sub: "Role-based dashboards",
      lines: ["Dashboards for 7 roles", "Leaflet parcel maps", "Distribution planning", "Delivery tracking", "Installable PWA"],
      detail: "Role-based dashboards for 7 user roles, geotagged parcels on Leaflet maps, distribution planning, delivery tracking, and real-time updates.",
    },
    db: {
      kind: "Data",
      title: "Supabase",
      sub: "PostgreSQL · realtime",
      detail: "PostgreSQL holds the schema I designed. Access rules decide what each role can read and change, and realtime updates keep dashboards current.",
    },
    opt: {
      kind: "Service",
      title: "Python optimizer",
      sub: "Seed allocation",
      detail: "Plans seed allocation for the program with a Python optimizer.",
    },
    rep: {
      kind: "Output",
      title: "Reports",
      sub: "Excel and PDF",
      detail: "Excel and PDF exports for monitoring and evaluation.",
    },
  },
  edges: [
    ["mao", "app"],
    ["field", "app"],
    ["fod", "app"],
    ["pmed", "app"],
    ["app", "db"],
    ["app", "opt"],
    ["opt", "db"],
    ["app", "rep"],
  ],
};

export const timeline: TimelineItem[] = [
  {
    when: "Aug – Sep 2026",
    kind: "Work",
    title: "Lead verification specialist",
    org: "Trualliant",
    body: "Verified prospective client information, documented results, and followed established verification procedures.",
    shows: "Accuracy, documentation, and following procedure",
  },
  {
    when: "2025 – 2026",
    kind: "Work",
    title: "Inbound/outbound and quality assurance agent",
    org: "IXL Solutions",
    body: "Handled customer interactions across seasonal accounts and completed a short-term QA assignment reviewing accuracy and process adherence.",
    shows: "Clear communication and quality review",
  },
  {
    when: "2023 – Present",
    kind: "Education",
    title: "BS Information Systems",
    org: "West Visayas State University · La Paz, Iloilo City",
    body: "Lead full-stack developer on TANAW, an integrated decision support system for the Department of Agriculture's Masagana Hybrid Rice Program.",
  },
  {
    when: "May – Sep 2024",
    kind: "Training",
    title: "Medical Transcription NC II",
    org: "RRLS – CICT Academy · Molo, Iloilo City",
    body: "Completed the training and earned a National Certificate II (NC II) in Medical Transcription.",
  },
];

export const trainings = [
  "Beyond “Hello World”: Your First Practical Machine Learning Project",
  "The DevOps Mindset: How Modern Software Teams Build and Deliver Applications",
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages and core",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Python", "Java", "C++"],
  },
  { title: "Frameworks and apps", items: ["Next.js", "React", "React Native", "Expo", "Vite", "Tauri"] },
  { title: "Databases and backend", items: ["PostgreSQL", "Supabase", "MySQL", "Firebase", "XAMPP"] },
  { title: "Tools", items: ["Git", "GitHub", "Figma", "Canva", "Claude Code", "Codex"] },
];

export const competencies = [
  "Full-stack development",
  "Backend logic and workflows",
  "Database integration",
  "System architecture and modeling",
  "Application scaffolding",
];

export const lookingFor: { term: string; detail: string }[] = [
  { term: "Open to", detail: "Client projects and development roles" },
  { term: "I build", detail: "Web and mobile apps, dashboards, and database-backed systems" },
  { term: "Strongest in", detail: "Backend logic, database integration, and application workflows" },
  { term: "Course", detail: profile.course },
  { term: "Based in", detail: profile.location },
];

/** Projects on this page that list a skill under "Built with". */
export function projectsUsing(skill: string): string[] {
  return projects.filter((p) => p.chips.caption === "Built with" && p.chips.items.includes(skill)).map((p) => p.name);
}
