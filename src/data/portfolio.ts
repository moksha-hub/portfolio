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

export const profile = {
  name: 'Mokshagna K',
  role: 'Full-Stack, ML, and Systems Builder',
  location: 'India',
  email: 'mokshagnak004@gmail.com',
  phone: '(+91) 9573323265',
  linkedin: 'https://linkedin.com/in/mokshagnak',
  github: 'https://github.com/moksha-hub',
  heroTitle: 'Designing software that feels premium and performs with intent.',
  heroCopy:
    'Computer Science student building across intelligent systems, modern web apps, and research-led ML products. I care about interface quality, product sharpness, and shipping things that feel more finished than expected.',
  badge: 'Open Source / Full Stack / Applied ML',
}

export const metrics: Metric[] = [
  { label: 'Graduation', value: '2027', note: 'B.Tech CSE at Amrita Vishwa Vidyapeetham' },
  { label: 'Featured domains', value: '6+', note: 'ML, OCR, full-stack, OSS, systems, RAG' },
  { label: 'Primary stacks', value: 'React / TS / Python', note: 'With Rust, Node.js, FastAPI, and data tooling' },
  { label: 'Execution mode', value: 'Build + Research', note: 'From interface polish to model-backed workflows' },
]

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'BigBro',
    tagline: 'Provider-agnostic agent runtime',
    description:
      'An open-source agent harness runtime focused on robust orchestration and cross-provider adaptability, showing interest beyond standard app development into systems-level tooling.',
    stack: ['Rust', 'Python', 'Agent Runtime'],
    impact: 'Strong proof of systems thinking and modern AI tooling breadth.',
    link: 'https://github.com/moksha-hub/BigBro',
    category: 'Systems / OSS',
  },
  {
    name: 'SHL Assessment Recommendation System',
    tagline: 'Two-stage RAG recommendation engine',
    description:
      'Recommendation workflow using bi-encoder retrieval and cross-encoder reranking to map job descriptions to relevant SHL assessments, with API-serving and deployable inference.',
    stack: ['Python', 'FastAPI', 'Gradio', 'RAG'],
    impact: 'Demonstrates applied LLM retrieval, evaluation, and production-ready ML delivery.',
    link: 'https://github.com/moksha-hub/GenAI-Task-Build-an-SHL-Assessment-Recommendation-System',
    category: 'ML / LLM',
  },
  {
    name: 'Ticket Prioritizer',
    tagline: 'ML-powered ticket operations platform',
    description:
      'End-to-end full-stack system for ticket management with NLP preprocessing, multiple classification models, admin analytics, and secure CRUD workflows.',
    stack: ['React', 'Node.js', 'MongoDB', 'JWT', 'ML'],
    impact: 'Combines frontend execution, backend architecture, and model experimentation in one product.',
    link: 'https://github.com/moksha-hub/Ticket-prioritizes',
    category: 'Full Stack / ML',
  },
  {
    name: 'Atlassian Issue Tracker Clone',
    tagline: 'Realtime team workflow product',
    description:
      'A collaborative issue tracker built with a modern TypeScript stack, designed around realtime teamwork and structured project execution.',
    stack: ['TypeScript', 'Appwrite', 'Hono', 'Realtime'],
    impact: 'Strong signal of product cloning skill and modern web architecture fluency.',
    link: 'https://github.com/moksha-hub/Atlassian-issue-Tracker-clone',
    category: 'Full Stack',
  },
]

export const repositories: RepositoryItem[] = [
  {
    name: 'RenAIssance_OCR',
    category: 'OCR / Research',
    language: 'Jupyter Notebook',
    description: 'Human-in-the-loop OCR experimentation for historical text recognition.',
    link: 'https://github.com/moksha-hub/RenAIssance_OCR',
  },
  {
    name: 'Trocr-model',
    category: 'OCR / ML',
    language: 'Python',
    description: 'TrOCR-based recognition work for 17th-century Spanish text pipelines.',
    link: 'https://github.com/moksha-hub/Trocr-model',
  },
  {
    name: 'ESP-Website',
    category: 'Web Platform',
    language: 'Python',
    description: 'Operations-oriented website support for large short-term educational programs.',
    link: 'https://github.com/moksha-hub/ESP-Website',
  },
  {
    name: 'samurai-agent',
    category: 'AI Tooling',
    language: 'Multi-language',
    description: 'Spec-driven AI development tool focused on debugging requirements before implementation.',
    link: 'https://github.com/moksha-hub/samurai-agent',
  },
  {
    name: 'musicblocks',
    category: 'Open Source',
    language: 'Multi-language',
    description: 'Public open-source contribution lane tied to a musical microworld project.',
    link: 'https://github.com/moksha-hub/musicblocks',
  },
  {
    name: 'CNN-ML-project-for-Teachnook',
    category: 'ML Foundations',
    language: 'Python',
    description: 'Early CNN project work showing the beginning of the ML trajectory.',
    link: 'https://github.com/moksha-hub/CNN-ML-project-for-Teachnook',
  },
]

export const experience = [
  {
    period: 'Apr 2024 - Jun 2024',
    title: 'Hands-on Machine Learning - IIT Roorkee',
    body: 'Improved CNN classification performance on CIFAR-10 with augmentation and model tuning, building practical intuition around experimentation and accuracy improvement.',
  },
  {
    period: 'Oct 2023 - Aug 2027',
    title: 'B.Tech in Computer Science Engineering - Amrita Vishwa Vidyapeetham',
    body: 'Core academic track centered on software development, ML exploration, and practical product-building across the web stack.',
  },
]

export const skills = {
  languages: ['Python', 'C', 'C++', 'SQL', 'TypeScript', 'JavaScript', 'Rust'],
  frontend: ['React', 'HTML5', 'CSS', 'Tailwind-oriented UI work', 'Component architecture'],
  backend: ['Node.js', 'FastAPI', 'REST APIs', 'JWT auth', 'Appwrite', 'Hono'],
  ml: ['NLP preprocessing', 'TF-IDF', 'Logistic Regression', 'Naive Bayes', 'SVM', 'Random Forest', 'CNN', 'RAG pipelines'],
  data: ['MongoDB', 'MySQL', 'NoSQL principles', 'Evaluation metrics', 'Inference APIs'],
}
