import { profile } from "@/content/profile";
import GitHubActivity from "./GitHubActivity";
import { DownloadIcon, GitHubIcon, LinkedInIcon } from "./Icons";

function CodeCard() {
  return (
    <figure className="code-card" aria-label="Profile summary written as a TypeScript object">
      <div className="code-top">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="file">about-me.ts</span>
      </div>
      <pre>
        <code>
          <span className="ln">1</span>
          <span className="tc">{"// Last updated November 2026"}</span>
          {"\n"}
          <span className="ln">2</span>
          <span className="tk">export const</span> <span className="tv">romyl</span>
          {" = {\n"}
          <span className="ln">3</span>
          {"  studying: "}
          <span className="ts">&quot;BS Information Systems&quot;</span>
          {",\n"}
          <span className="ln">4</span>
          {"  school: "}
          <span className="ts">&quot;West Visayas State University&quot;</span>
          {",\n"}
          <span className="ln">5</span>
          {"  stack: ["}
          <span className="ts">&quot;Next.js&quot;</span>, <span className="ts">&quot;TypeScript&quot;</span>,{" "}
          <span className="ts">&quot;Supabase&quot;</span>
          {"],\n"}
          <span className="ln">6</span>
          {"  strongest: "}
          <span className="ts">&quot;backend logic and databases&quot;</span>
          {",\n"}
          <span className="ln">7</span>
          {"  lookingFor: "}
          <span className="ts">&quot;web or mobile dev internship&quot;</span>
          {",\n"}
          <span className="ln">8</span>
          {"};"}
        </code>
      </pre>
    </figure>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="status">
              <span className="dot" aria-hidden="true" />
              {profile.status}
            </p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="lede">
              I build full-stack web and mobile apps, and I do my best work in <em>backend logic and databases</em>.
            </p>
            <p className="intro">
              Fourth-year BS Information Systems student at West Visayas State University. For my thesis I led the
              full-stack build of TANAW, a decision support system for the Department of Agriculture&apos;s Masagana
              Hybrid Rice Program.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#work">
                See my projects
              </a>
              <a className="btn btn-ghost" href={profile.resume.href} target="_blank" rel="noopener">
                <DownloadIcon />
                Download résumé
              </a>
            </div>
            <ul className="socials">
              <li>
                <a href={profile.github.url} target="_blank" rel="noopener">
                  <GitHubIcon />
                  {profile.github.label}
                </a>
              </li>
              <li>
                <a href={profile.linkedin.url} target="_blank" rel="noopener">
                  <LinkedInIcon />
                  {profile.linkedin.label}
                </a>
              </li>
            </ul>
          </div>
          <CodeCard />
        </div>
        <GitHubActivity />
      </div>
    </section>
  );
}
