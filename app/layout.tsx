import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CommandPalette from "@/components/CommandPalette";
import Toasts from "@/components/Toasts";
import { profile } from "@/content/profile";
import "./globals.css";

/** Geist for headings and text (the same family as the TANAW dashboard), Geist Mono for data. */
const sans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = `${profile.name} · Web & Mobile Developer`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.summary,
  authors: [{ name: profile.name, url: profile.github.url }],
  openGraph: {
    type: "website",
    url: "/",
    title,
    description: profile.summary,
    siteName: profile.name,
  },
  twitter: { card: "summary_large_image", title, description: profile.summary },
};

export const viewport: Viewport = {
  colorScheme: "light",
  // Lets the page run under the notch in landscape; .wrap and the phone action bar pad by the safe-area insets.
  viewportFit: "cover",
  themeColor: "#f4fbf9",
};

// Applies a saved light/dark choice before the first paint, so the page never flashes the wrong theme.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <CommandPalette
          email={profile.email}
          resumeHref={profile.resume.href}
          github={{ url: profile.github.url, label: profile.github.label }}
          linkedin={{ url: profile.linkedin.url, label: profile.linkedin.label }}
          facebook={profile.facebook}
          instagram={profile.instagram}
        />
        <Toasts />
      </body>
    </html>
  );
}
