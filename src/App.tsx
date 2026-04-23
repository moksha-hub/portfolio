import {
  experience,
  featuredProjects,
  metrics,
  profile,
  repositories,
  skills,
} from './data/portfolio'

const chartValues = [42, 58, 51, 73, 66, 84, 79, 93, 88, 104, 97, 118]

function MiniChart() {
  const max = Math.max(...chartValues)

  return (
    <div className="chart-shell" aria-hidden="true">
      <div className="chart-grid" />
      <svg viewBox="0 0 520 260" className="chart-svg">
        <defs>
          <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(134, 239, 255, 0.4)" />
            <stop offset="45%" stopColor="rgba(134, 239, 255, 0.9)" />
            <stop offset="100%" stopColor="rgba(112, 124, 255, 0.9)" />
          </linearGradient>
          <linearGradient id="areaGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(133, 214, 255, 0.35)" />
            <stop offset="100%" stopColor="rgba(133, 214, 255, 0)" />
          </linearGradient>
        </defs>
        <path
          d={`M 18 220 ${chartValues
            .map((value, index) => {
              const x = 18 + index * 44
              const y = 220 - (value / max) * 150
              return `L ${x} ${y}`
            })
            .join(' ')} L 502 220 Z`}
          fill="url(#areaGlow)"
        />
        <path
          d={chartValues
            .map((value, index) => {
              const x = 18 + index * 44
              const y = 220 - (value / max) * 150
              return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
            })
            .join(' ')}
          fill="none"
          stroke="url(#lineGlow)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {chartValues.map((value, index) => {
          const x = 18 + index * 44
          const y = 220 - (value / max) * 150
          return <circle key={x} cx={x} cy={y} r="5" fill="rgba(214, 247, 255, 0.95)" />
        })}
      </svg>
      <div className="chart-axis chart-axis-x">
        <span>Research</span>
        <span>Build</span>
        <span>Ship</span>
      </div>
      <div className="chart-floater glass-panel">
        <span className="eyebrow">Current signal</span>
        <strong>ML + product + systems</strong>
        <p>Premium execution across code, interface, and technical depth.</p>
      </div>
    </div>
  )
}

function SkillColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="skill-column glass-panel">
      <span className="eyebrow">{title}</span>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export default function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <div>
          <span className="brand-mark">MK</span>
          <span className="brand-copy">Mokshagna K</span>
        </div>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section-frame">
          <div className="hero-copy">
            <span className="pill">{profile.badge}</span>
            <p className="eyebrow">{profile.role}</p>
            <h1>{profile.heroTitle}</h1>
            <p className="hero-text">{profile.heroCopy}</p>
            <div className="hero-actions">
              <a className="primary-button" href={profile.github} target="_blank" rel="noreferrer">
                Explore GitHub
              </a>
              <a className="secondary-button" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="hero-note glass-panel">
              <span className="eyebrow">Profile thesis</span>
              <p>
                I build products that sit at the intersection of modern UI, applied machine
                learning, and execution discipline.
              </p>
            </div>
          </div>
          <div className="hero-visual glass-panel">
            <div className="hero-visual-copy">
              <span className="eyebrow">Career signal</span>
              <strong>{profile.name}</strong>
              <p>3rd year CS student shaping a high-conviction engineering profile.</p>
            </div>
            <MiniChart />
          </div>
        </section>

        <section className="metrics-grid section-frame">
          {metrics.map((metric) => (
            <article key={metric.label} className="metric-card glass-panel">
              <span className="eyebrow">{metric.label}</span>
              <strong>{metric.value}</strong>
              <p>{metric.note}</p>
            </article>
          ))}
        </section>

        <section className="section-frame split-section" id="projects">
          <div className="section-heading">
            <span className="eyebrow">Selected work</span>
            <h2>Projects with technical depth and visible product thinking.</h2>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article key={project.name} className="project-card glass-panel">
                <div className="project-card-top">
                  <span className="project-category">{project.category}</span>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Open -&gt;
                  </a>
                </div>
                <h3>{project.name}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p>{project.description}</p>
                <ul className="chip-row">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="impact-note">{project.impact}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-frame repo-section">
          <div className="section-heading compact">
            <span className="eyebrow">Repository spectrum</span>
            <h2>A broader GitHub surface beyond the headline projects.</h2>
          </div>
          <div className="repo-grid">
            {repositories.map((repo) => (
              <a
                key={repo.name}
                href={repo.link}
                target="_blank"
                rel="noreferrer"
                className="repo-card glass-panel"
              >
                <div className="repo-topline">
                  <span>{repo.category}</span>
                  <span>{repo.language}</span>
                </div>
                <strong>{repo.name}</strong>
                <p>{repo.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="section-frame dual-layout" id="experience">
          <div className="section-heading compact">
            <span className="eyebrow">Experience & education</span>
            <h2>Academic foundation, research interest, and applied project velocity.</h2>
          </div>
          <div className="timeline glass-panel">
            {experience.map((item) => (
              <article key={item.title} className="timeline-item">
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-frame dual-layout">
          <div className="section-heading compact">
            <span className="eyebrow">Capability matrix</span>
            <h2>Tools, stacks, and model-oriented workflow experience.</h2>
          </div>
          <div className="skills-grid">
            <SkillColumn title="Languages" items={skills.languages} />
            <SkillColumn title="Frontend" items={skills.frontend} />
            <SkillColumn title="Backend" items={skills.backend} />
            <SkillColumn title="Machine Learning" items={skills.ml} />
            <SkillColumn title="Data" items={skills.data} />
          </div>
        </section>

        <section className="section-frame contact-section" id="contact">
          <div className="contact-card glass-panel">
            <div>
              <span className="eyebrow">Let's build something sharp</span>
              <h2>Available for internships, collaborations, and ambitious product work.</h2>
            </div>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
