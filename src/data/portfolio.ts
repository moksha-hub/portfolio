export type Metric = {
  label: string
  value: string
  note: string
}

export type FeaturedProject = {
  name: string
  tagline: string
  description: string
  stack: string[]
  impact: string
  link: string
  category: string
}

export type RepositoryItem = {
  name: string
  category: string
  language: string
  description: string
  link: string
}

export type Signal = {
  label: string
  value: string
  note: string
}

export type SkillGroup = {
  title: string
  eyebrow: string
  summary: string
  items: string[]
}

export type AboutParagraph = {
  lead?: boolean
  text: string
}

export type ExperienceItem = {
  company: string
  role: string
  period: string
  points: string[]
}

export const profile = {
  name: 'Mokshagna K',
  role: 'Full-Stack Engineer · Applied ML Builder · Systems-Focused Developer',
  location: 'India',
  email: 'mokshagnak004@gmail.com',
  phone: '(+91) 9573323265',
  linkedin: 'https://linkedin.com/in/mokshagnak',
  github: 'https://github.com/moksha-hub',
  heroTitle: 'Building simple, premium digital products with engineering depth and AI-native thinking.',
  heroCopy:
    'I am a Computer Science student building across full-stack engineering, applied machine learning, and systems-focused product work. I care about clean interfaces, strong implementation, and software that feels thoughtful from architecture to user experience.',
  badge: 'Open Source · Full Stack · Applied ML',
  availability: 'Open to internships, collaborations, and product teams that value execution quality.',
}

export const metrics: Metric[] = [
  { label: 'Graduation', value: '2027', note: 'B.Tech in Computer Science Engineering at Amrita Vishwa Vidyapeetham' },
  { label: 'Focus', value: 'Full Stack + ML', note: 'Interfaces, backend systems, OCR, RAG, and AI tooling' },
  { label: 'Primary stack', value: 'React / TS / Python', note: 'Extended with Rust, Node.js, FastAPI, MongoDB, and Appwrite' },
  { label: 'Build style', value: 'Product + Systems', note: 'Clear UX framing with implementation depth and shipping bias' },
]

export const heroSignals: Signal[] = [
  { label: 'Current lane', value: 'AI-native products', note: 'Building intelligent workflows with cleaner product surfaces' },
  { label: 'Working style', value: 'High-conviction execution', note: 'Simple presentation with technical substance underneath' },
  { label: 'Edge', value: 'Frontend × ML × systems', note: 'Comfortable moving across UI, backend architecture, and model-backed features' },
]

export const aboutParagraphs: AboutParagraph[] = [
  {
    lead: true,
    text: 'I am a Computer Science student at Amrita Vishwa Vidyapeetham, building a portfolio around full-stack products, applied ML systems, and software that feels clean, deliberate, and useful.',
  },
  {
    text: 'My strongest work sits at the intersection of polished interface design, dependable backend implementation, and intelligent workflows such as RAG, OCR, and model-backed decision systems.',
  },
  {
    text: 'I am especially interested in product-minded engineering roles where simplicity, quality, and technical depth all matter at the same time.',
  },
]

export const aboutTech = [
  'React',
  'TypeScript',
  'Python',
  'FastAPI',
  'Node.js',
  'Rust',
  'MongoDB',
  'RAG systems',
]

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'BigBro',
    tagline: 'Open-source agent runtime for orchestration across providers',
    description:
      'A systems-oriented runtime exploring robust orchestration, provider flexibility, and modern agent infrastructure beyond typical application-layer work.',
    stack: ['Rust', 'Python', 'Agent Runtime'],
    impact: 'A strong proof point for systems thinking, OSS execution, and AI tooling depth.',
    link: 'https://github.com/moksha-hub/BigBro',
    category: 'Systems / OSS',
  },
  {
    name: 'SHL Assessment Recommendation System',
    tagline: 'RAG-driven recommendation engine with deployable inference',
    description:
      'A two-stage recommendation workflow using bi-encoder retrieval and cross-encoder reranking to match job descriptions with relevant SHL assessments through an API-ready ML pipeline.',
    stack: ['Python', 'FastAPI', 'Gradio', 'RAG'],
    impact: 'Shows practical LLM retrieval, ranking quality, and production-minded ML delivery.',
    link: 'https://github.com/moksha-hub/GenAI-Task-Build-an-SHL-Assessment-Recommendation-System',
    category: 'ML / LLM',
  },
  {
    name: 'Ticket Prioritizer',
    tagline: 'ML-powered support operations platform for smarter triage',
    description:
      'An end-to-end product for ticket management with NLP preprocessing, classification models, admin analytics, and secure full-stack workflows.',
    stack: ['React', 'Node.js', 'MongoDB', 'JWT', 'ML'],
    impact: 'Combines UI execution, backend architecture, and applied ML inside one cohesive product surface.',
    link: 'https://github.com/moksha-hub/Ticket-prioritizes',
    category: 'Full Stack / ML',
  },
]

export const repositories: RepositoryItem[] = [
  {
    name: 'Atlassian Issue Tracker Clone',
    category: 'Full Stack',
    language: 'TypeScript',
    description: 'Collaborative issue management product with realtime workflows and modern architecture.',
    link: 'https://github.com/moksha-hub/Atlassian-issue-Tracker-clone',
  },
  {
    name: 'RenAIssance_OCR',
    category: 'OCR / Research',
    language: 'Jupyter Notebook',
    description: 'Historical text recognition experiments with a human-in-the-loop research workflow.',
    link: 'https://github.com/moksha-hub/RenAIssance_OCR',
  },
  {
    name: 'Trocr-model',
    category: 'OCR / ML',
    language: 'Python',
    description: 'TrOCR-based recognition pipeline work for archival Spanish manuscripts.',
    link: 'https://github.com/moksha-hub/Trocr-model',
  },
  {
    name: 'ESP-Website',
    category: 'Web Platform',
    language: 'Python',
    description: 'Operational website support for large educational program workflows and delivery.',
    link: 'https://github.com/moksha-hub/ESP-Website',
  },
  {
    name: 'samurai-agent',
    category: 'AI Tooling',
    language: 'Multi-language',
    description: 'Spec-driven AI development tooling centered on debugging requirements before implementation.',
    link: 'https://github.com/moksha-hub/samurai-agent',
  },
  {
    name: 'musicblocks',
    category: 'Open Source',
    language: 'Multi-language',
    description: 'Open-source contribution work tied to a creative musical microworld platform.',
    link: 'https://github.com/moksha-hub/musicblocks',
  },
]

export const experience: ExperienceItem[] = [
  {
    company: 'Hands-on Machine Learning - IIT Roorkee',
    role: 'ML Program Participant @',
    period: 'Apr 2024 - Jun 2024',
    points: [
      'Improved CIFAR-10 CNN performance through augmentation and model tuning, strengthening practical intuition for experimentation and model-quality trade-offs.',
      'Built stronger hands-on understanding of iterative ML workflows, evaluation thinking, and deep learning implementation fundamentals.',
    ],
  },
  {
    company: 'Amrita Vishwa Vidyapeetham',
    role: 'B.Tech in Computer Science Engineering @',
    period: 'Oct 2023 - Aug 2027',
    points: [
      'Building a technical foundation across software engineering, machine learning, and modern product development.',
      'Expanding into full-stack systems, backend architecture, open-source work, and AI-backed product workflows through project-led learning.',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Engineering',
    eyebrow: 'Interface systems',
    summary: 'Modern interface work focused on clarity, responsiveness, animation quality, and premium visual presentation.',
    items: ['React', 'HTML5', 'CSS', 'TypeScript', 'Framer Motion', 'Responsive UI systems', 'Component architecture', 'Interaction polish'],
  },
  {
    title: 'Backend & Product Systems',
    eyebrow: 'Application logic',
    summary: 'Backend product development across APIs, authentication, data flow, realtime collaboration, and operational structure.',
    items: ['Node.js', 'FastAPI', 'REST APIs', 'JWT auth', 'Appwrite', 'Hono', 'API integration', 'CRUD workflows', 'Realtime features'],
  },
  {
    title: 'Applied ML & AI',
    eyebrow: 'Intelligent systems',
    summary: 'Hands-on ML work spanning NLP pipelines, retrieval systems, OCR, ranking, and deployable deep learning workflows.',
    items: ['RAG pipelines', 'OCR workflows', 'Cross-encoder reranking', 'NLP preprocessing', 'TF-IDF', 'Logistic Regression', 'Naive Bayes', 'SVM', 'Random Forest', 'CNN'],
  },
  {
    title: 'Data, Tooling & Delivery',
    eyebrow: 'Execution layer',
    summary: 'Practical tooling and data capabilities that support shipping products, experiments, and deployable systems.',
    items: ['MongoDB', 'MySQL', 'Git & GitHub', 'Rust', 'SQL', 'Inference APIs', 'Evaluation metrics', 'Gradio', 'Open-source collaboration'],
  },
]

export const capabilityHighlights = [
  'Builds polished product interfaces without losing technical depth',
  'Able to move from ML experimentation into deployable full-stack systems',
  'Strong interest in systems tooling, AI-native workflows, and modern developer products',
  'Comfortable turning project ideas into clean, usable, end-to-end builds',
]
