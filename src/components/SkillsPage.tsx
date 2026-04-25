import { motion } from 'framer-motion'
import { capabilityHighlights, profile, skillGroups } from '../data/portfolio'

export function SkillsPage() {
  return (
    <div className="page-stack skills-page-shell skills-page-premium">
      <motion.section
        className="skills-hero premium-panel skills-hero-premium"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="skills-hero-copy">
          <span className="pill">Capability profile</span>
          <p className="eyebrow">/skills</p>
          <h1>Capability depth framed with stronger hierarchy and a cleaner premium presentation.</h1>
          <p className="hero-text">
            This page turns the skill inventory into a more editorial capability overview, making the
            technical stack feel intentional, credible, and easier to scan.
          </p>
        </div>
        <div className="skills-hero-panel glass-panel skills-hero-panel-premium">
          <span className="eyebrow">High-confidence strengths</span>
          <strong>{profile.role}</strong>
          <ul className="highlight-list">
            {capabilityHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="skills-overview-grid section-frame"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <article className="glass-panel overview-card">
          <span className="eyebrow">Build profile</span>
          <strong>Execution-minded engineer</strong>
          <p>
            Best when working across polished interfaces, dependable backend systems, and AI-backed
            workflows that need both technical rigor and clear product thinking.
          </p>
        </article>
        <article className="glass-panel overview-card">
          <span className="eyebrow">What differentiates me</span>
          <strong>Product taste + technical range</strong>
          <p>
            The differentiator is not only breadth. It is the ability to combine interface sensitivity,
            implementation depth, and intelligent system building in the same workflow.
          </p>
        </article>
      </motion.section>

      <section className="skills-grid-premium section-frame">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="skill-showcase glass-panel skill-showcase-premium"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="skill-showcase-head">
              <div>
                <span className="eyebrow">{group.eyebrow}</span>
                <h2>{group.title}</h2>
              </div>
              <p>{group.summary}</p>
            </div>
            <div className="tag-cloud tag-cloud-premium">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  )
}
