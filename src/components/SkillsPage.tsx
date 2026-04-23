import { motion } from 'framer-motion'
import { capabilityHighlights, profile, skillGroups } from '../data/portfolio'

export function SkillsPage() {
  return (
    <div className="page-stack skills-page-shell">
      <motion.section
        className="skills-hero premium-panel"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="skills-hero-copy">
          <span className="pill">Capability dashboard</span>
          <p className="eyebrow">/skills</p>
          <h1>Capability depth with product taste, technical range, and build discipline.</h1>
          <p className="hero-text">
            A cleaner breakdown of the tools, systems, and delivery strengths behind the portfolio.
            This page is designed to read more like a premium capability dashboard than a typical skill list.
          </p>
        </div>
        <div className="skills-hero-panel glass-panel">
          <span className="eyebrow">High-confidence strengths</span>
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
          <strong>{profile.role}</strong>
          <p>
            Best when working across product-facing interfaces, ML-backed workflows, and the system
            details that make ambitious projects feel production-ready.
          </p>
        </article>
        <article className="glass-panel overview-card">
          <span className="eyebrow">What stands out</span>
          <strong>Interface + intelligence</strong>
          <p>
            The differentiator is not just technical breadth. It is combining thoughtful UX and real
            implementation depth in the same workflow.
          </p>
        </article>
      </motion.section>

      <section className="skills-grid-premium section-frame">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="skill-showcase glass-panel"
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
            <div className="tag-cloud">
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
