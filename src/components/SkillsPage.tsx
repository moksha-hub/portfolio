import { motion } from 'framer-motion'
import { capabilityHighlights, profile, skillGroups } from '../data/portfolio'

const skillSectionMotion = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] as const },
}

export function SkillsPage() {
  return (
    <div className="page-stack skills-page-shell skills-page-premium simple-skills-page">
      <motion.section
        className="skills-hero simple-skills-hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="skills-hero-copy">
          <span className="pill">Capability profile</span>
          <p className="eyebrow">/skills</p>
          <h1>Skills refined to feel clearer, stronger, and more effective.</h1>
          <p className="hero-text">
            This page keeps the structure simple and focuses on what is actually useful: your strongest
            engineering, product, and ML capabilities.
          </p>
        </div>
        <div className="skills-hero-panel simple-skills-aside">
          <span className="eyebrow">Profile</span>
          <strong>{profile.role}</strong>
          <ul className="highlight-list simple-highlight-list">
            {capabilityHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section className="skills-overview-grid section-frame simple-skills-overview" {...skillSectionMotion}>
        <article className="overview-card simple-overview-item">
          <span className="eyebrow">Build profile</span>
          <strong>Execution-minded engineer</strong>
          <p>
            Strongest when working across polished frontend systems, reliable backend architecture,
            and intelligent workflows that need both implementation discipline and product clarity.
          </p>
        </article>
        <article className="overview-card simple-overview-item">
          <span className="eyebrow">Why it stands out</span>
          <strong>Product taste + technical range</strong>
          <p>
            The edge is not just technical breadth. It is making that breadth feel cohesive, credible,
            and useful inside real product experiences.
          </p>
        </article>
      </motion.section>

      <section className="skills-grid-premium section-frame simple-skills-list">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="skill-showcase simple-skill-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.48, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="skill-showcase-head simple-skill-head">
              <div>
                <span className="eyebrow">{group.eyebrow}</span>
                <h2>{group.title}</h2>
              </div>
              <p>{group.summary}</p>
            </div>
            <div className="tag-cloud simple-tag-cloud">
              {group.items.map((item, itemIndex) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.28, delay: itemIndex * 0.02, ease: [0.22, 1, 0.36, 1] }}
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
