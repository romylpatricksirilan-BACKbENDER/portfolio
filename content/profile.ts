/**
 * Everything the site says lives in this file. Edit it to update the portfolio;
 * no component needs to change for new projects, jobs, or skills.
 */

import type { StaticImageData } from "next/image";
import mabuhAiShot from "./screenshots/mabuh-ai.jpg";
import rebadullaShot from "./screenshots/rebadulla.png";
import rentEaseShot from "./screenshots/rentease.png";
import tanawShot from "./screenshots/tanaw.png";

export type Project = {
  id: "tanaw" | "rentease" | "rebadulla" | "mabuh-ai" | "hello-expo";
  name: string;
  subtitle: string;
  meta: string[];
  summary: string;
  /** Short facts shown as large figures (featured project only). */
  highlights?: { value: string; label: string }[];
  /** Chips under the summary, with the caption above them. */
  chips: { caption: "Built with" | "Features"; items: string[] };
  /** Expandable case study (featured project only). */
  caseStudy?: { title: string; body: string }[];
  links: { label: string; href: string; kind: "code" | "demo" }[];
  /** Shown when there is no public link. */
  linkNote?: string;
  /**
   * Optional screenshot, statically imported from ./screenshots so its size is known.
   * Any aspect ratio works: "browser" wraps it in a window bar, "phone" in a device frame.
   * Without one, the card draws an illustrated mock of the app.
   */
  screenshot?: { src: StaticImageData; alt: string; frame: "browser" | "phone" };
};

export type TimelineItem = {
  when: string;
  kind: "Education" | "Work" | "Training";
  title: string;
  org: string;
  body?: string;
  current?: boolean;
};

const githubUser = "romylpatricksirilan-BACKbENDER";
const githubUrl = `https://github.com/${githubUser}`;

export const profile = {
  name: "Romyl Patrick Sirilan",
  initials: "RS",
  role: "Information Systems student · Web & mobile development",
  location: "Iloilo City, Philippines",
  status: "Looking for a web or mobile development internship",
  summary:
    "Fourth-year BS Information Systems student at West Visayas State University, building full-stack web and mobile apps with a focus on backend logic, database integration, and application workflows.",
  email: "sirilanpatrick@gmail.com",
  github: { user: githubUser, url: githubUrl, label: `github.com/${githubUser}` },
  linkedin: {
    url: "https://www.linkedin.com/in/romyl-patrick-sirilan-3292a2275",
    label: "linkedin.com/in/romyl-patrick-sirilan",
  },
  resume: { href: "/resume/Romyl-Patrick-Sirilan-Resume.pdf", label: "PDF · 2 pages · Nov 2026" },
  sourceRepo: `${githubUrl}/portfolio`,
  copyrightYear: 2026,
};

export const projects: Project[] = [
  {
    id: "tanaw",
    name: "TANAW",
    subtitle: "Integrated decision support system",
    meta: ["Thesis", "Lead full-stack developer", "2026"],
    summary:
      "A decision support system for the Department of Agriculture's Masagana Hybrid Rice Program in Iloilo. It covers farm registration, seed allocation, distribution planning, and monitoring and evaluation.",
    highlights: [
      { value: "7", label: "user roles, each with its own dashboard" },
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
    links: [],
    linkNote: "The source code is private because it is a thesis project.",
    screenshot: {
      src: tanawShot,
      alt: "TANAW sign-in page for the Masagana Hybrid Rice Program, listing seed allocation analytics, municipal coverage mapping, and field technician reports",
      frame: "browser",
    },
  },
  {
    id: "rentease",
    name: "RentEase",
    subtitle: "Rental management system",
    meta: ["Web app", "Course project", "2025"],
    summary:
      "A rental tracker for students who board away from home. It keeps property and tenant records, rent payments, and lease dates in one place, with a dashboard summary.",
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
    subtitle: "Student wellbeing check-in app",
    meta: ["Mobile app", "Android", "2026"],
    summary:
      "An Android app for student wellbeing check-ins. Students sign in with Google or their school email, and their check-ins are saved to Supabase. It supports wellbeing and does not replace professional care.",
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
    meta: ["Mobile app", "CIS 228", "2026"],
    summary:
      "A greeting app for iOS, Android, and the web. Type a name, watch the greeting update as you type, and get a personal hello. Reusable UI components, a parallax header, and Expo Router navigation.",
    chips: { caption: "Built with", items: ["React Native", "Expo", "TypeScript", "Expo Router"] },
    links: [{ label: "Code", href: `${githubUrl}/cis228-hello-expo`, kind: "code" }],
  },
];

export const otherProjects = ["Breast Cancer Classifier"];

export const timeline: TimelineItem[] = [
  {
    when: "2023 – Present",
    kind: "Education",
    title: "BS Information Systems, fourth year",
    org: "West Visayas State University · La Paz, Iloilo City",
    body: "Thesis: TANAW, an integrated decision support system for the Department of Agriculture's Masagana Hybrid Rice Program, where I am the lead full-stack developer.",
    current: true,
  },
  {
    when: "Aug – Sep 2026",
    kind: "Work",
    title: "Lead verification specialist",
    org: "Trualliant",
    body: "Verified prospective client information, documented results, and followed established verification procedures.",
  },
  {
    when: "2025 – 2026",
    kind: "Work",
    title: "Inbound/outbound and quality assurance agent",
    org: "IXL Solutions",
    body: "Handled customer interactions across seasonal accounts and completed a short-term QA assignment reviewing accuracy and process adherence.",
  },
  {
    when: "May – Sep 2024",
    kind: "Training",
    title: "Medical transcription",
    org: "RRLS – CICT Academy · Molo, Iloilo City",
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
  { term: "Looking for", detail: "A web or mobile development internship" },
  { term: "Strongest in", detail: "Backend logic, database integration, and application workflows" },
  { term: "Studying", detail: "BS Information Systems, fourth year, West Visayas State University" },
  { term: "Based in", detail: "Iloilo City, Philippines" },
];
