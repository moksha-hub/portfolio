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
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
}

const orbitCards = [
  { label: 'Product', value: 'Premium interfaces', note: 'Deliberate UI systems with clarity, pace, and strong visual taste' },
  { label: 'Engineering', value: 'Full-stack execution', note: 'Frontend, backend, and delivery-minded implementation across real builds' },
  { label: 'Intelligence', value: 'Applied ML systems', note: 'RAG, OCR, ranking, and model-backed product workflows' },
]

function PremiumOrbital() {
  return (
    <motion.div
      className="orbital-stage"
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.96, rotate: -4 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="orbital-grid"
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orbital-core"
        animate={{ y: [0, -10, 0], boxShadow: ['0 18px 40px rgba(0,0,0,0.24)', '0 28px 60px rgba(0,0,0,0.34)', '0 18px 40px rgba(0,0,0,0.24)'] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="eyebrow">Signature profile</span>
        <strong>Mokshagna K</strong>
        <p>Full-stack engineering, applied ML, and systems-minded execution in one focused portfolio.</p>
      </motion.div>
      <motion.div
        className="orbital-ring orbital-ring-one"
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="orbital-ring orbital-ring-two"
        animate={{ rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
      />
      <div className="orbital-glow orbital-glow-one" />
      <div className="orbital-glow orbital-glow-two" />
      {orbitCards.map((card, index) => (
        <motion.div
          key={card.label}
          className={`orbit-card orbit-card-${index + 1} glass-panel`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6, scale: 1.02 }}
        >
          <span>{card.label}</span>
          <strong>{card.value}</strong>
          <p>{card.note}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export function HomePage() {
  return (
    <div className="page-stack premium-homepage">
      <motion.section className="hero hero-premium section-frame" initial="initial" animate="animate">
        <motion.div
          className="hero-copy premium-panel hero-copy-premium"
          variants={{
            initial: { opacity: 0, y: 32 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
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
            <motion.div className="hero-meta-card glass-panel" whileHover={{ y: -4 }}>
              <span className="eyebrow">Location</span>
              <strong>{profile.location}</strong>
            </motion.div>
            <motion.div className="hero-meta-card glass-panel" whileHover={{ y: -4 }}>
              <span className="eyebrow">Availability</span>
              <strong>{profile.availability}</strong>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual premium-panel hero-visual-premium"
          variants={{
            initial: { opacity: 0, y: 42, scale: 0.985 },
            animate: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 1.05, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <div className="hero-visual-copy hero-visual-header">
            <div>
              <span className="eyebrow">Premium direction</span>
              <strong>Simple, dynamic, and sharper</strong>
              <p>Inspired by the reference, but cleaner, more animated, and more robust in presentation.</p>
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
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.note}</p>
          </motion.article>
        ))}
      </motion.section>

      <motion.section className="section-frame signature-band" {...fadeUp}>
        <div className="section-heading compact">
          <span className="eyebrow">Value proposition</span>
          <h2>A stronger portfolio story with better motion, cleaner hierarchy, and clearer signals.</h2>
        </div>
        <div className="hero-proof-grid signature-grid">
          {heroSignals.map((signal, index) => (
            <motion.div
              key={signal.label}
              className="proof-tile glass-panel proof-tile-premium"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>{signal.label}</span>
              <strong>{signal.value}</strong>
              <p>{signal.note}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="section-frame split-section" id="projects" {...fadeUp}>
        <div className="section-heading section-header-row">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2>Projects presented as flagship proof of product quality and technical range.</h2>
          </div>
          <p>
            The layout now feels more editorial and premium while keeping the project story direct,
            credible, and easy to scan.
          </p>
        </div>
        <div className="project-grid featured-project-grid">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.name}
              className="project-card glass-panel project-card-premium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.58, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
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
          <h2>Product sense, engineering depth, and ML capability working together.</h2>
        </div>
        <div className="credibility-card glass-panel credibility-card-premium">
          <div>
            <span className="eyebrow">Profile thesis</span>
            <p>
              The strongest signal is not just breadth. It is the ability to make ambitious technical
              work feel polished, clear, and intentionally designed.
            </p>
          </div>
          <div>
            <span className="eyebrow">Best fit</span>
            <p>
              Teams looking for a builder who can move across frontend quality, backend systems,
              applied ML, and product execution with strong taste.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section className="section-frame repo-section" {...fadeUp}>
        <div className="section-heading section-header-row compact">
          <div>
            <span className="eyebrow">Extended work</span>
            <h2>A wider GitHub surface that supports the main premium narrative.</h2>
          </div>
          <p>Secondary repositories now read as supporting credibility signals instead of visual clutter.</p>
        </div>
        <div className="repo-grid compact-repo-grid">
          {repositories.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className="repo-card glass-panel repo-card-premium"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.48, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
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
          <h2>Academic grounding and ML experimentation behind the product-facing work.</h2>
        </div>
        <div className="timeline glass-panel timeline-premium">
          {experience.map((item, index) => (
            <motion.article
              key={item.title}
              className="timeline-item"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </motion.article>
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
