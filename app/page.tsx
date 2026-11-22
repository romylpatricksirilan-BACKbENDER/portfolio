import Link from "next/link";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GitHubActivity from "@/components/GitHubActivity";
import { ArrowIcon, ArrowRightIcon } from "@/components/Icons";
import Intro from "@/components/Intro";
import MobileActionBar from "@/components/MobileActionBar";
import Nav from "@/components/Nav";
import Stack from "@/components/Stack";
import SystemMap from "@/components/SystemMap";
import Workspace from "@/components/Workspace";
import { competencies, otherProjects, profile, projects, projectsUsing, skillGroups, systemMap } from "@/content/profile";

export default function Home() {
  const stackGroups = skillGroups.map((g) => ({
    title: g.title,
    items: g.items.map((name) => ({ name, usedIn: projectsUsing(name) })),
  }));

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav name={profile.name} resumeHref={profile.resume.href} spy />
      <main id="main">
        <Intro />

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="wrap">
            <div className="work-head">
              <h2 id="work-title">Selected work</h2>
              <a className="text-link" href={`${profile.github.url}?tab=repositories`} target="_blank" rel="noopener">
                All repositories
                <ArrowIcon />
              </a>
            </div>
            <Workspace projects={projects} />
            <p className="more-work">
              <b>Also built:</b> {otherProjects.join(" · ")}
            </p>
          </div>
        </section>

        <section className="section" id="system" aria-labelledby="system-title">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <h2 id="system-title">How TANAW works</h2>
                <p className="sec-lede">
                  Trace how data moves through my thesis system, from a field entry made offline to a PMED report.
                </p>
              </div>
              <Link className="btn btn-ghost" href="/work/tanaw">
                Read the case study
                <ArrowRightIcon />
              </Link>
            </div>
            <SystemMap map={systemMap} title="TANAW system map" />
          </div>
        </section>

        <Experience />
        <Stack groups={stackGroups} competencies={competencies} />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar email={profile.email} resumeHref={profile.resume.href} />
    </>
  );
}
