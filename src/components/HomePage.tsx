import { motion } from 'framer-motion'
import {
  experience,
  featuredProjects,
  heroSignals,
  metrics,
  profile,
  repositories,
} from '../data/portfolio'

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

const orbitCards = [
  { label: 'Primary lane', value: 'Full-stack products', note: 'Clean interfaces backed by real implementation depth' },
  { label: 'Systems edge', value: 'AI + infra curiosity', note: 'Interest in runtimes, tooling, and modern developer workflows' },
  { label: 'Build mindset', value: 'Ship thoughtfully', note: 'Strong attention to product sharpness, clarity, and execution' },
]

function PremiumOrbital() {
  return (
    <div className="orbital-stage" aria-hidden="true">
      <div className="orbital-core">
        <span className="eyebrow">Signature profile</span>
        <strong>Mokshagna K</strong>
        <p>Full-stack engineering, applied ML, and systems-minded execution in one focused portfolio.</p>
      </div>
      <div className="orbital-ring orbital-ring-one" />
      <div className="orbital-ring orbital-ring-two" />
      <div className="orbital-glow orbital-glow-one" />
      <div className="orbital-glow orbital-glow-two" />
      {orbitCards.map((card, index) => (
        <div key={card.label} className={`orbit-card orbit-card-${index + 1} glass-panel`}>
          <span>{card.label}</span>
          <strong>{card.value}</strong>
          <p>{card.note}</p>
        </div>
      ))}
    </div>
  )
}

export function HomePage() {
  return (
    <div className="page-stack premium-homepage">
      <motion.section className="hero hero-premium section-frame" initial="initial" animate="animate">
        <motion.div
          className="hero-copy premium-panel hero-copy-premium"
          variants={{
            initial: { opacity: 0, y: 26 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <span className="pill">{profile.badge}</span>
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.heroTitle}</h1>
          <p className="hero-text hero-text-premium">{profile.heroCopy}</p>

          <div className="hero-actions hero-actions-premium">
            <a className="primary-button" href={profile.github} target="_blank" rel="noreferrer">
              View GitHub
            </a>
            <a className="secondary-button" href={profile.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
          </div>

          <div className="hero-meta-grid">
            <div className="hero-meta-card glass-panel">
              <span className="eyebrow">Location</span>
              <strong>{profile.location}</strong>
            </div>
            <div className="hero-meta-card glass-panel">
              <span className="eyebrow">Availability</span>
              <strong>{profile.availability}</strong>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual premium-panel hero-visual-premium"
          variants={{
            initial: { opacity: 0, y: 34, scale: 0.985 },
            animate: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.92, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <div className="hero-visual-copy hero-visual-header">
            <div>
              <span className="eyebrow">Premium direction</span>
              <strong>Sharper than the reference</strong>
              <p>Cleaner hierarchy, editorial spacing, and a stronger premium tech aesthetic.</p>
            </div>
            <div className="status-pill">Open</div>
          </div>
          <PremiumOrbital />
        </motion.div>
      </motion.section>

      <motion.section className="metrics-grid metrics-grid-premium section-frame" {...fadeUp}>
        {metrics.map((metric, index) => (
          <motion.article
            key={metric.label}
            className="metric-card glass-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.note}</p>
          </motion.article>
        ))}
      </motion.section>

      <motion.section className="section-frame signature-band" {...fadeUp}>
        <div className="section-heading compact">
          <span className="eyebrow">Why this direction works</span>
          <h2>A portfolio framed like a premium product brand, not a generic student template.</h2>
        </div>
        <div className="hero-proof-grid signature-grid">
          {heroSignals.map((signal) => (
            <div key={signal.label} className="proof-tile glass-panel proof-tile-premium">
              <span>{signal.label}</span>
              <strong>{signal.value}</strong>
              <p>{signal.note}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section className="section-frame split-section" id="projects" {...fadeUp}>
        <div className="section-heading section-header-row">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2>Projects presented as flagship case-study signals.</h2>
          </div>
          <p>
            The strongest work is given more space, clearer hierarchy, and language that emphasizes
            product thinking, technical depth, and shipped outcomes.
          </p>
        </div>
        <div className="project-grid featured-project-grid">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.name}
              className="project-card glass-panel project-card-premium"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="project-card-top">
                <span className="project-category">{project.category}</span>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Open project
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
          <span className="eyebrow">Positioning</span>
          <h2>Interface quality, backend range, and applied ML capability working together.</h2>
        </div>
        <div className="credibility-card glass-panel credibility-card-premium">
          <div>
            <span className="eyebrow">Profile thesis</span>
            <p>
              The key signal is range with taste. This portfolio intentionally shows the ability to
              build polished frontend experiences while still going deep on backend logic, ML workflows,
              and systems-oriented experimentation.
            </p>
          </div>
          <div>
            <span className="eyebrow">Best fit</span>
            <p>
              Product teams, startups, and engineering environments looking for someone who can bridge
              implementation, interface quality, and intelligent features.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section className="section-frame repo-section" {...fadeUp}>
        <div className="section-heading section-header-row compact">
          <div>
            <span className="eyebrow">Extended work</span>
            <h2>A broader repository surface that supports the core narrative.</h2>
          </div>
          <p>Secondary projects reinforce range without competing with the flagship work above.</p>
        </div>
        <div className="repo-grid compact-repo-grid">
          {repositories.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className="repo-card glass-panel repo-card-premium"
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
          <span className="eyebrow">Foundation</span>
          <h2>Academic training and ML experimentation behind the current product direction.</h2>
        </div>
        <div className="timeline glass-panel timeline-premium">
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
        <div className="contact-card premium-panel contact-card-premium">
          <div>
            <span className="eyebrow">Let’s build something excellent</span>
            <h2>Available for internships, collaborations, and ambitious software work.</h2>
            <p>
              If you want someone who cares about product sharpness as much as technical depth, I would
              love to connect.
            </p>
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
