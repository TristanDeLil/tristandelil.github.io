import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">0x02 / projects</div>
      <h2>Selected <span className="italic">builds</span>.</h2>
      <div className="projects-grid" style={{ marginTop: 40 }}>
        {projects.map((p, i) => (
          <article className="project" key={p.id}>
            <div className="project-header">
              <div className="project-num">// {p.id}</div>
              <span className={`project-status ${p.status}`}>
                {p.status === 'wip' ? 'in dev' : p.status}
              </span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-tags">
              {p.tags.map(t => <span key={t}>{t}</span>)}
            </div>
            <a href={p.link} className="project-link">{p.linkText}</a>
          </article>
        ))}
      </div>
    </section>
  )
}
