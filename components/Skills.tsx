import { competencies, skillGroups } from "@/content/profile";

export default function Skills() {
  return (
    <section className="section alt" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">Skills</p>
          <h2 id="skills-title">Tools I build with</h2>
          <p className="section-lede">Languages, frameworks, and tools from my coursework, thesis, and personal projects.</p>
        </header>
        <div className="skill-grid">
          {skillGroups.map((g) => (
            <div className="skill-group" key={g.title}>
              <h3>
                {g.title}
                <span className="count">{g.items.length}</span>
              </h3>
              <ul className="chips">
                {g.items.map((s) => (
                  <li className="chip" key={s}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="competencies">
          <h3>Strongest in</h3>
          <ul className="chips">
            {competencies.map((c) => (
              <li className="chip strong" key={c}>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
