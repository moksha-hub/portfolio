import { motion } from 'framer-motion'
import {
  experience,
  featuredProjects,
  heroSignals,
  metrics,
  profile,
  repositories,
} from '../data/portfolio'

const chartValues = [42, 58, 51, 73, 66, 84, 79, 93, 88, 104, 97, 118]

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

function MiniChart() {
  const max = Math.max(...chartValues)

  return (
    <div className="chart-shell" aria-hidden="true">
      <div className="chart-grid" />
      <svg viewBox="0 0 520 260" className="chart-svg">
        <defs>
          <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(134, 239, 255, 0.28)" />
            <stop offset="45%" stopColor="rgba(134, 239, 255, 0.92)" />
            <stop offset="100%" stopColor="rgba(112, 124, 255, 0.92)" />
          </linearGradient>
          <linearGradient id="areaGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(133, 214, 255, 0.34)" />
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
          return <circle key={x} cx={x} cy={y} r="4.5" fill="rgba(214, 247, 255, 0.92)" />
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

export function HomePage() {
  return (
    <div className="page-stack">
      <motion.section className="hero section-frame" initial="initial" animate="animate">
        <motion.div
          className="hero-copy premium-panel"
          variants={{
            initial: { opacity: 0, y: 32 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
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
          <div className="hero-proof-grid">
            {heroSignals.map((signal) => (
              <div key={signal.label} className="proof-tile glass-panel">
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <p>{signal.note}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual premium-panel"
          variants={{
            initial: { opacity: 0, y: 44, scale: 0.98 },
            animate: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <div className="hero-visual-copy">
            <div>
              <span className="eyebrow">Profile thesis</span>
              <strong>{profile.name}</strong>
              <p>3rd year CS student shaping a high-conviction engineering profile.</p>
            </div>
            <div className="status-pill">Available</div>
          </div>
          <MiniChart />
        </motion.div>
      </motion.section>

      <motion.section className="metrics-grid section-frame" {...fadeUp}>
        {metrics.map((metric, index) => (
          <motion.article
            key={metric.label}
            className="metric-card glass-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.note}</p>
          </motion.article>
        ))}
      </motion.section>

      <motion.section className="section-frame split-section" id="projects" {...fadeUp}>
        <div className="section-heading section-header-row">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2>Projects that combine product instincts, system depth, and shipped execution.</h2>
          </div>
          <p>
            A tighter set of projects, framed more like flagship product studies than a generic portfolio grid.
          </p>
        </div>
        <div className="project-grid featured-project-grid">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.name}
              className="project-card glass-panel"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
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
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="section-frame credibility-strip" {...fadeUp}>
        <div className="section-heading compact">
          <span className="eyebrow">Execution profile</span>
          <h2>Modern full-stack and ML work with a strong bias toward polished delivery.</h2>
        </div>
        <div className="credibility-card glass-panel">
          <div>
            <span className="eyebrow">Positioning</span>
            <p>
              The strongest signal here is not just breadth. It is the ability to combine UI quality,
              product thinking, and model-oriented systems work in the same build lane.
            </p>
          </div>
          <div>
            <span className="eyebrow">Availability</span>
            <p>{profile.availability}</p>
          </div>
        </div>
      </motion.section>

      <motion.section className="section-frame repo-section" {...fadeUp}>
        <div className="section-heading section-header-row compact">
          <div>
            <span className="eyebrow">Repository spectrum</span>
            <h2>A wider GitHub surface that supports the headline project story.</h2>
          </div>
          <p>Secondary projects are treated as credibility signals, not competing hero cards.</p>
        </div>
        <div className="repo-grid compact-repo-grid">
          {repositories.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className="repo-card glass-panel"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="repo-topline">
                <span>{repo.category}</span>
                <span>{repo.language}</span>
              </div>
              <strong>{repo.name}</strong>
              <p>{repo.description}</p>
            </motion.a>
          ))}
        </div>
      </motion.section>

      <motion.section className="section-frame dual-layout" id="experience" {...fadeUp}>
        <div className="section-heading compact">
          <span className="eyebrow">Experience & education</span>
          <h2>Academic foundation, ML exploration, and a portfolio shaped by execution velocity.</h2>
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
      </motion.section>

      <motion.section className="section-frame contact-section" id="contact" {...fadeUp}>
        <div className="contact-card premium-panel">
          <div>
            <span className="eyebrow">Let&apos;s build something sharp</span>
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
      </motion.section>
    </div>
  )
}
