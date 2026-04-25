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

export const profile = {
  name: 'Mokshagna K',
  role: 'Full-Stack Engineer · Applied ML Builder · Systems-Focused Developer',
  location: 'India',
  email: 'mokshagnak004@gmail.com',
  phone: '(+91) 9573323265',
  linkedin: 'https://linkedin.com/in/mokshagnak',
  github: 'https://github.com/moksha-hub',
  heroTitle: 'Building premium digital products with engineering depth and AI-native thinking.',
  heroCopy:
    'I am a Computer Science student focused on full-stack engineering, applied machine learning, and modern product execution. My work sits at the intersection of polished interfaces, strong backend foundations, and intelligent systems that feel considered, useful, and ready for real users.',
  badge: 'Open Source · Full Stack · Applied ML',
  availability: 'Open to internships, collaborations, and product teams that value execution quality.',
}

export const metrics: Metric[] = [
  { label: 'Graduation', value: '2027', note: 'B.Tech in Computer Science Engineering at Amrita Vishwa Vidyapeetham' },
  { label: 'Focus areas', value: 'Full Stack + ML', note: 'Interfaces, backend systems, OCR, RAG, and AI tooling' },
  { label: 'Core stack', value: 'React / TS / Python', note: 'Extended with Rust, Node.js, FastAPI, MongoDB, and Appwrite' },
  { label: 'Execution style', value: 'Product + Systems', note: 'Strong UX framing with implementation depth and shipping bias' },
]

export const heroSignals: Signal[] = [
  { label: 'Current lane', value: 'AI-native products', note: 'Building intelligent workflows with clean product surfaces' },
  { label: 'Working style', value: 'High-conviction execution', note: 'Premium visual quality paired with real technical substance' },
  { label: 'Edge', value: 'Frontend × ML × systems', note: 'Comfortable moving across UX, architecture, and model-driven features' },
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
      'An end-to-end product for ticket management with NLP preprocessing, multiple classification models, admin analytics, and secure full-stack workflows.',
    stack: ['React', 'Node.js', 'MongoDB', 'JWT', 'ML'],
    impact: 'Combines UI execution, backend architecture, and applied ML inside one cohesive product surface.',
    link: 'https://github.com/moksha-hub/Ticket-prioritizes',
    category: 'Full Stack / ML',
  },
  {
    name: 'Atlassian Issue Tracker Clone',
    tagline: 'Collaborative issue management with modern TypeScript architecture',
    description:
      'A realtime project workflow product built around collaborative team execution, structured issue tracking, and a modern developer-focused stack.',
    stack: ['TypeScript', 'Appwrite', 'Hono', 'Realtime'],
    impact: 'Signals product recreation skill, scalable frontend architecture, and strong web implementation fundamentals.',
    link: 'https://github.com/moksha-hub/Atlassian-issue-Tracker-clone',
    category: 'Full Stack',
  },
]

export const repositories: RepositoryItem[] = [
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
  {
    name: 'CNN-ML-project-for-Teachnook',
    category: 'ML Foundations',
    language: 'Python',
    description: 'Early CNN experimentation that helped establish the ML foundation behind later work.',
    link: 'https://github.com/moksha-hub/CNN-ML-project-for-Teachnook',
  },
]

export const experience = [
  {
    period: 'Apr 2024 - Jun 2024',
    title: 'Hands-on Machine Learning - IIT Roorkee',
    body: 'Improved CIFAR-10 CNN performance through augmentation and model tuning, strengthening practical intuition for experimentation, iteration, and model quality trade-offs.',
  },
  {
    period: 'Oct 2023 - Aug 2027',
    title: 'B.Tech in Computer Science Engineering - Amrita Vishwa Vidyapeetham',
    body: 'Building a technical foundation across software engineering, machine learning, and modern product development while expanding into full-stack and systems-oriented work.',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    eyebrow: 'Core foundation',
    summary: 'Comfortable across product-facing, systems-level, and data-oriented programming environments.',
    items: ['Python', 'C', 'C++', 'SQL', 'TypeScript', 'JavaScript', 'Rust'],
  },
  {
    title: 'Frontend',
    eyebrow: 'Interface systems',
    summary: 'Modern interface work focused on clarity, responsiveness, and premium visual presentation.',
    items: ['React', 'HTML5', 'CSS', 'Responsive UI systems', 'Component architecture'],
  },
  {
    title: 'Backend',
    eyebrow: 'Application logic',
    summary: 'Backend product development across APIs, authentication, data flow, and operational structure.',
    items: ['Node.js', 'FastAPI', 'REST APIs', 'JWT auth', 'Appwrite', 'Hono'],
  },
  {
    title: 'Machine Learning',
    eyebrow: 'Applied intelligence',
    summary: 'Hands-on ML work spanning NLP pipelines, retrieval systems, classical models, and deep learning.',
    items: ['NLP preprocessing', 'TF-IDF', 'Logistic Regression', 'Naive Bayes', 'SVM', 'Random Forest', 'CNN', 'RAG pipelines'],
  },
  {
    title: 'Data & Evaluation',
    eyebrow: 'Decision support',
    summary: 'Data-layer understanding that supports experimentation, ranking quality, model delivery, and evaluation.',
    items: ['MongoDB', 'MySQL', 'NoSQL principles', 'Evaluation metrics', 'Inference APIs'],
  },
]

export const capabilityHighlights = [
  'Builds polished product interfaces without losing technical depth',
  'Able to move from ML experimentation into deployable full-stack systems',
  'Strong interest in systems tooling, AI-native workflows, and modern developer products',
]
