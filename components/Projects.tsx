import { otherProjects, profile, projects } from "@/content/profile";
import { ArrowIcon } from "./Icons";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [featured, ...rest] = projects;
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title">Projects I&apos;ve built</h2>
          <p className="section-lede">
            My thesis first, then course and personal projects across web and mobile. Each one says what it does and
            what I used to build it.
          </p>
        </header>
        <div className="projects">
          <ProjectCard project={featured} featured />
          <div className="project-row">
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
        <div className="more-work">
          <p>
            <strong>Also built:</strong> {otherProjects.join(" · ")}
          </p>
          <a className="text-link" href={`${profile.github.url}?tab=repositories`} target="_blank" rel="noopener">
            All repositories on GitHub
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
