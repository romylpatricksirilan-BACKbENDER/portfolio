import type { Metadata } from "next";
import Link from "next/link";
import CopyEmailButton from "@/components/CopyEmailButton";
import Footer from "@/components/Footer";
import { ArrowLeftIcon, DownloadIcon, LockIcon } from "@/components/Icons";
import Nav from "@/components/Nav";
import { ShotFrame } from "@/components/ProjectPreview";
import SystemMap from "@/components/SystemMap";
import { profile, projects, systemMap, tanaw } from "@/content/profile";

function requireTanaw() {
  const p = projects.find((x) => x.id === "tanaw");
  if (!p?.screenshot || !p.caseStudy) throw new Error("The TANAW project needs a screenshot and case study text.");
  return { ...p, screenshot: p.screenshot, caseStudy: p.caseStudy };
}
const project = requireTanaw();
const shot = project.screenshot;
const text = Object.fromEntries(project.caseStudy.map((c) => [c.title, c.body]));

export const metadata: Metadata = {
  title: `TANAW case study · ${profile.name}`,
  description: project.summary,
  openGraph: { title: `TANAW case study · ${profile.name}`, description: project.summary },
};

export default function TanawCaseStudy() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav name={profile.name} resumeHref={profile.resume.href} active="work" />
      <main id="main" className="cs">
        <header className="wrap cs-head">
          <Link className="back" href="/#work">
            <ArrowLeftIcon />
            All work
          </Link>
          <h1>{project.name}</h1>
          <p className="cs-sub">{project.subtitle}</p>
          <p className="cs-summary">{project.summary}</p>
          <dl className="cs-overview">
            {tanaw.overview.map((o) => (
              <div key={o.term}>
                <dt>{o.term}</dt>
                <dd>{o.detail}</dd>
              </div>
            ))}
          </dl>
          <ul className="tags" aria-label="Built with">
            {project.chips.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </header>

        <figure className="wrap cs-hero">
          <ShotFrame shot={shot} natural eager sizes="(min-width: 1240px) 1140px, 100vw" vtName="shot-tanaw" />
          {shot.caption && <figcaption>{shot.caption}</figcaption>}
        </figure>

        <section className="cs-sec" aria-labelledby="brief-title">
          <div className="wrap cs-cols">
            <h2 id="brief-title">The brief</h2>
            <p>{text["The brief"]}</p>
          </div>
        </section>

        <section className="cs-sec" aria-labelledby="users-title">
          <div className="wrap">
            <div className="cs-cols">
              <h2 id="users-title">Who uses it</h2>
              <p>Seven roles in three offices. Each one sees and changes only what it is responsible for.</p>
            </div>
            <div className="offices">
              {tanaw.offices.map((o) => (
                <div className="office" key={o.office}>
                  <h3>{o.office}</h3>
                  <ul>
                    {o.roles.map((r) => (
                      <li key={r.name}>
                        <b>{r.name}</b>
                        <span>{r.does}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cs-sec" aria-labelledby="how-title">
          <div className="wrap">
            <div className="cs-cols">
              <h2 id="how-title">How it works</h2>
              <p>{text["What I built"]}</p>
            </div>
            <SystemMap map={systemMap} title="TANAW system map" />
          </div>
        </section>

        <section className="cs-sec" aria-labelledby="flows-title">
          <div className="wrap">
            <div className="cs-cols">
              <h2 id="flows-title">Key flows</h2>
              <p>Three of the workflows the system runs, from delivery to report.</p>
            </div>
            <div className="flows">
              {tanaw.flows.map((f) => (
                <div className="flow" key={f.title}>
                  <h3>{f.title}</h3>
                  <ol>
                    {f.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cs-sec" aria-labelledby="screens-title">
          <div className="wrap">
            <div className="cs-cols">
              <h2 id="screens-title">Screens</h2>
              <p>Dashboard figures are examples, so no real program data appears here.</p>
            </div>
            <div className="screens">
              {tanaw.screens.map((s) => (
                <figure key={s.caption}>
                  <ShotFrame shot={s} natural sizes="(min-width: 1240px) 1140px, 100vw" />
                  <figcaption>{s.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="cs-sec" aria-labelledby="role-title">
          <div className="wrap cs-cols">
            <h2 id="role-title">My role</h2>
            <p>{text["My role"]}</p>
          </div>
        </section>

        <section className="cs-end" aria-labelledby="end-title">
          <div className="wrap">
            <h2 id="end-title">Want to see more of how it works?</h2>
            <p>
              <LockIcon />
              {project.linkNote} Email me and I can walk you through it.
            </p>
            <div className="acts">
              <CopyEmailButton email={profile.email} />
              <a className="btn btn-ghost" href={profile.resume.href} target="_blank" rel="noopener">
                <DownloadIcon />
                Résumé PDF
              </a>
              <Link className="btn btn-ghost" href="/#work">
                <ArrowLeftIcon />
                All work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
