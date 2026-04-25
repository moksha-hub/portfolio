import { motion } from 'framer-motion'
import { capabilityHighlights, profile, skillGroups } from '../data/portfolio'

const skillSectionMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

export function SkillsPage() {
  return (
    <div className="page-stack skills-page-shell skills-page-premium">
      <motion.section
        className="skills-hero premium-panel skills-hero-premium"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="skills-hero-copy">
          <span className="pill">Capability profile</span>
          <p className="eyebrow">/skills</p>
          <h1>Skills refined to feel sharper, more effective, and more impressive.</h1>
          <p className="hero-text">
            Instead of reading like a long generic list, this section now presents your strengths as a
            focused capability system: what you build, how you build, and where you are strongest.
          </p>
        </div>
        <motion.div className="skills-hero-panel glass-panel skills-hero-panel-premium" whileHover={{ y: -6 }}>
          <span className="eyebrow">High-confidence strengths</span>
          <strong>{profile.role}</strong>
          <ul className="highlight-list">
            {capabilityHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </motion.section>

      <motion.section className="skills-overview-grid section-frame" {...skillSectionMotion}>
        <article className="glass-panel overview-card overview-card-premium">
          <span className="eyebrow">Build profile</span>
          <strong>Execution-minded engineer</strong>
          <p>
            Strongest when working across polished frontend systems, reliable backend architecture,
            and intelligent workflows that need both implementation discipline and product clarity.
          </p>
        </article>
        <article className="glass-panel overview-card overview-card-premium">
          <span className="eyebrow">Why it stands out</span>
          <strong>Product taste + technical range</strong>
          <p>
            The edge is not just technical breadth. It is making that breadth feel cohesive, credible,
            and useful inside real product experiences.
          </p>
        </article>
      </motion.section>

      <section className="skills-grid-premium section-frame">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="skill-showcase glass-panel skill-showcase-premium"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.58, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="skill-showcase-head">
              <div>
                <span className="eyebrow">{group.eyebrow}</span>
                <h2>{group.title}</h2>
              </div>
              <p>{group.summary}</p>
            </div>
            <div className="tag-cloud tag-cloud-premium">
              {group.items.map((item, itemIndex) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: itemIndex * 0.03, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  )
}
