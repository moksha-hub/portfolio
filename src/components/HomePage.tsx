import { motion } from 'framer-motion'
import {
  aboutParagraphs,
  aboutTech,
  experience,
  featuredProjects,
  heroSignals,
  profile,
  repositories,
} from '../data/portfolio'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
}

function ParticleStage() {
  const particles = Array.from({ length: 18 }, (_, index) => ({
    id: index,
    size: 6 + (index % 4) * 4,
    left: 12 + ((index * 17) % 74),
    top: 10 + ((index * 13) % 78),
    duration: 7 + (index % 5),
    delay: index * 0.2,
  }))

  return (
    <div className="particle-stage" aria-hidden="true">
      <div className="particle-orbit particle-orbit-one" />
      <div className="particle-orbit particle-orbit-two" />
      <div className="particle-center-glow" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="particle-dot"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.35, 0.9, 0.35], scale: [1, 1.18, 1] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      <motion.div
        className="particle-card glass-panel"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="eyebrow">Build profile</span>
        <strong>Simple. Premium. Technical.</strong>
        <p>Product-minded engineering shaped by full-stack delivery, applied ML, and systems curiosity.</p>
      </motion.div>
    </div>
  )
}

export function HomePage() {
  return (
    <div className="page-stack reference-structured-page">
      <motion.section className="intro-section" id="intro" initial="initial" animate="animate">
        <motion.div
          className="intro-visual premium-panel"
          variants={{
            initial: { opacity: 0, y: 30, scale: 0.98 },
            animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <ParticleStage />
        </motion.div>

        <motion.div
          className="intro-copy"
          variants={{
            initial: { opacity: 0, y: 28 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.82, delay: 0.06, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <span className="pill">{profile.badge}</span>
          <div className="intro-heading">
            <span className="intro-kicker">hi,</span>
            <h1>
              <span>{profile.name}</span>
              <br />
              <em>here.</em>
            </h1>
          </div>
          <p className="intro-subcopy">{profile.heroTitle}</p>
          <p className="hero-text hero-text-premium">{profile.heroCopy}</p>
          <div className="hero-actions hero-actions-premium">
            <a className="primary-button" href={`mailto:${profile.email}`}>
              Say hello
            </a>
            <a className="secondary-button" href={profile.github} target="_blank" rel="noreferrer">
              Explore GitHub
            </a>
          </div>
        </motion.div>
      </motion.section>

      <motion.section className="about-section section-frame" id="about" {...fadeUp}>
        <div className="section-header-block">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.text} className={paragraph.lead ? 'about-lead' : undefined}>
                {paragraph.text}
              </p>
            ))}
            <p className="about-tech-intro">Here are some technologies I have been working with:</p>
            <ul className="about-tech-list">
              {aboutTech.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div className="about-side glass-panel" whileHover={{ y: -6 }}>
            <span className="eyebrow">Current signal</span>
            <strong>{profile.role}</strong>
            <div className="hero-proof-grid signature-grid compact-signal-grid">
              {heroSignals.map((signal) => (
                <div key={signal.label} className="proof-tile glass-panel proof-tile-premium small-proof-tile">
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                  <p>{signal.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="experience-section section-frame" id="experience" {...fadeUp}>
        <div className="section-header-block">
          <span className="section-title">/ experience</span>
        </div>
        <div className="experience-stack glass-panel">
          {experience.map((item, index) => (
            <motion.article
              key={item.company}
              className="experience-card"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="experience-topline">
                <span className="experience-role">{item.role}</span>
                <span className="experience-company">{item.company}</span>
              </div>
              <div className="experience-period">{item.period}</div>
              <ul className="experience-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="projects-section section-frame" id="projects" {...fadeUp}>
        <div className="section-header-block section-header-rowish">
          <span className="section-title">/ projects</span>
          <p>Selected work first, then supporting repositories that strengthen the story.</p>
        </div>

        <div className="spotlight-projects">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.name}
              className={`spotlight-card glass-panel ${index === 0 ? 'spotlight-featured' : ''}`}
              initial={{ opacity: 0, y: 28 }}
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
              <h2>{project.name}</h2>
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
              whileHover={{ y: -6 }}
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

      <motion.section className="contact-section section-frame" id="contact" {...fadeUp}>
        <div className="contact-card premium-panel contact-card-premium">
          <div>
            <span className="eyebrow">Let&apos;s build something sharp</span>
            <h2>Available for internships, collaborations, and strong product work.</h2>
            <p>
              If you want someone who values simplicity, visual quality, and technical implementation,
              I would love to connect.
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
