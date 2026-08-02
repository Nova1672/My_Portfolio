import {
  Brain,
  Code2,
  Database,
  LineChart,
  Cloud,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  name: 'Suraj Patil',
  roles: ['AI Engineer', 'Data Scientist', 'Machine Learning Enthusiast'],
  tagline:
    'I build AI-powered applications, machine learning solutions, and data-driven products that solve real-world problems.',
  intro:
    'Computer Science Engineering student specializing in Artificial Intelligence & Analytics. I build end-to-end data science and AI solutions that transform raw data into actionable insights through machine learning, analytics, and interactive applications.',
  location: 'India',
  email: 'surajpatil21084@gmail.com',
  github: 'https://github.com/Nova1672',
  linkedin: 'https://www.linkedin.com/in/suraj-patil-190a02349/',
  resume: '/resume.pdf',
  available: true,
};

export type NavLink = { label: string; href: string };
export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { label: 'Projects Completed', value: 5, suffix: '+' },
  { label: 'GitHub Repositories', value: 10, suffix: '' },
  { label: 'Technologies Learned', value: 18, suffix: '+' },
  { label: 'Certificates', value: 6, suffix: '' },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: Code2,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 88 },
    ],
  },
  {
    title: 'Machine Learning & AI',
    icon: Brain,
    skills: [
      { name: 'Scikit-learn', level: 85 },
      { name: 'TensorFlow', level: 75 },
      { name: 'PyTorch', level: 70 },
      { name: 'NLP & LLMs', level: 65 },
    ],
  },
  {
    title: 'Data Science & Analytics',
    icon: LineChart,
    skills: [
      { name: 'Pandas / NumPy', level: 95 },
      { name: 'Statistical Analysis', level: 88 },
      { name: 'Feature Engineering', level: 90 },
    ],
  },
  {
    title: 'Data Visualization',
    icon: LineChart,
    skills: [
      { name: 'Matplotlib / Seaborn', level: 92 },
      { name: 'Plotly', level: 85 },
      { name: 'Tableau', level: 78 },
      { name: 'Power BI', level: 75 },
    ],
  },
  {
    title: 'Cloud & Databases',
    icon: Cloud,
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Docker', level: 70 },
      { name: 'Jupyter / Colab', level: 95 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  results: string[];
  stack: string[];
  accent: string;
  github: string;
  demo: string;
  caseStudy: string;
};

export const projects: Project[] = [
  {
    id: 'analytical-placement-system',
    title: 'Analytical Placement System',
    tagline: 'Predictive analytics for campus recruitment',
    description:
      'A full-stack platform that predicts student placement outcomes and identifies skill gaps using a gradient-boosted ensemble trained on academic and aptitude profiles, paired with an interactive dashboard for training & placement officers.',
    challenge:
      'Placement cells relied on intuition and static cutoffs, with no early-warning system for at-risk students and no visibility into which skills actually drove offers.',
    solution:
      'Engineered a feature pipeline from transcripts, mock-test scores, and psychometric signals, then trained an XGBoost classifier calibrated for probability outputs. Built a role-based dashboard surfacing per-student risk scores and recommended upskilling paths.',
    features: [
      'Probability-calibrated placement prediction (XGBoost + isotonic)',
      'Per-student skill-gap analysis with SHAP explanations',
      'Role-based dashboards for students, TPOs, and admin',
      'Automated weekly retraining pipeline',
    ],
    results: [
      '92% recall on at-risk students at 0.4 FPR',
      'Reduced manual counseling time by ~40%',
      'Adopted across 3 departments in pilot rollout',
    ],
    stack: ['Python', 'XGBoost', 'SHAP', 'FastAPI', 'PostgreSQL', 'React'],
    accent: 'from-blue-500/20 to-cyan-500/10',
    github: 'https://github.com/surajpatil-ai/analytical-placement-system',
    demo: 'https://analytical-placement-system.demo',
    caseStudy: '#case-analytical-placement-system',
  },
  {
    id: 'f1-strategy-intelligence',
    title: 'Formula 1 Strategy Intelligence',
    tagline: 'Real-time race strategy & tire-degradation modeling',
    description:
      'A telemetry-driven dashboard that models tire degradation and predicts optimal pit-window timing using historical race data and live timing feeds, letting fans and analysts explore counterfactual strategies.',
    challenge:
      'Race strategy is decided under extreme uncertainty — tire life, fuel, weather, and traffic all interact, and existing tools were either black-box or static post-race reports.',
    solution:
      'Built a degradation model per compound from historical telemetry, layered a Monte Carlo simulator over live timing to project pit windows, and exposed everything through an interactive strategy canvas with what-if sliders.',
    features: [
      'Per-compound tire-degradation curves (Laplace smoothing)',
      'Monte Carlo pit-window projection (10k samples / update)',
      'Live timing ingestion via OpenF1 API',
      'Interactive what-if strategy canvas',
    ],
    results: [
      'Pit-window predictions within ±1 lap on 2023 race sample',
      'Sub-200ms per simulation update',
      'Featured on a community F1 analytics showcase',
    ],
    stack: ['Python', 'NumPy', 'Pandas', 'Plotly', 'FastAPI', 'React'],
    accent: 'from-red-500/20 to-orange-500/10',
    github: 'https://github.com/surajpatil-ai/f1-strategy-intelligence',
    demo: 'https://f1-strategy-intelligence.demo',
    caseStudy: '#case-f1-strategy-intelligence',
  },
  {
    id: 'ai-business-intelligence',
    title: 'AI Business Intelligence Platform',
    tagline: 'Conversational analytics over your warehouse',
    description:
      'A natural-language BI layer that translates executive questions into SQL, runs them against the warehouse, and returns charts with cited sources — with guardrails for schema access and cost.',
    challenge:
      "Non-technical stakeholders couldn't self-serve analytics, and analysts were drowning in one-off SQL requests with no audit trail.",
    solution:
      'Built a text-to-SQL agent with schema-aware retrieval, a cost-bounded execution sandbox, and an auto-chart renderer. Every answer ships with the generated SQL, row-level lineage, and confidence signals.',
    features: [
      'Schema-aware text-to-SQL with few-shot retrieval',
      'Cost-bounded query sandbox with row limits',
      'Auto-chart renderer (bar, line, geo, table)',
      'Full audit log of questions and generated SQL',
    ],
    results: [
      '83% execution accuracy on internal eval set',
      'Cut average ad-hoc request turnaround from 2 days to minutes',
      'Adopted by 3 internal teams',
    ],
    stack: ['Python', 'LangChain', 'PostgreSQL', 'Supabase', 'React', 'TypeScript'],
    accent: 'from-emerald-500/20 to-teal-500/10',
    github: 'https://github.com/surajpatil-ai/ai-business-intelligence',
    demo: 'https://ai-business-intelligence.demo',
    caseStudy: '#case-ai-business-intelligence',
  },
  {
    id: 'adgen-ai',
    title: 'AdGen AI',
    tagline: 'Brand-aware ad creative generation',
    description:
      'A generative marketing assistant that produces on-brand ad copy and visual concepts from a brief, grounded in brand guidelines and historical performance data.',
    challenge:
      'Creative teams spent most of their cycle on volume — dozens of copy variants per campaign — with inconsistent brand voice and no performance feedback loop.',
    solution:
      'Fine-tuned a copy model on brand-approved assets, wrapped it in a guideline-grounded generation pipeline, and closed the loop with a performance-weighted retrieval index so winning patterns resurface in future briefs.',
    features: [
      'Brand-guideline-grounded copy generation',
      'Multi-channel variant packs (search, social, display)',
      'Performance-weighted retrieval for creative patterns',
      'One-click export to campaign templates',
    ],
    results: [
      '5x creative throughput per campaign',
      'Brand-voice consistency score up from 61% to 94%',
      'Used across 4 product launches',
    ],
    stack: ['Python', 'Transformers', 'PyTorch', 'FastAPI', 'Next.js'],
    accent: 'from-fuchsia-500/20 to-purple-500/10',
    github: 'https://github.com/surajpatil-ai/adgen-ai',
    demo: 'https://adgen-ai.demo',
    caseStudy: '#case-adgen-ai',
  },
];

export type CaseStudy = {
  id: string;
  title: string;
  problem: string;
  research: string;
  architecture: string;
  pipeline: string;
  challenges: string;
  implementation: string;
  results: string;
  lessons: string;
  metrics: { label: string; value: string }[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-analytical-placement-system',
    title: 'Analytical Placement System — Case Study',
    problem:
      'Campus placement cells operated on intuition and static cutoffs. Students discovered they were unplaceable only after results arrived, and TPOs had no early-warning system to intervene with targeted upskilling.',
    research:
      'Interviewed 4 TPOs and 30 students across departments. Found that the strongest predictors were not CGPA alone but a combination of mock-test consistency, project portfolio depth, and communication scores — signals the existing process never combined.',
    architecture:
      'A feature pipeline ingests transcripts, mock tests, and psychometric scores into a feature store. An XGBoost classifier outputs calibrated placement probabilities, and a SHAP explainer surfaces the top contributing factors per student. A FastAPI service serves predictions to a role-based React dashboard.',
    pipeline:
      'Nightly batch job → feature engineering (Pandas) → feature store (PostgreSQL) → model inference → probability calibration (isotonic) → SHAP attribution → dashboard cache.',
    challenges:
      'Class imbalance skewed predictions toward the majority (placed) class. Calibration was poor out-of-the-box. SHAP explanations had to be fast enough for interactive use on a dashboard serving hundreds of students.',
    implementation:
      'Used SMOTE + class weights to address imbalance, isotonic calibration to fix probability outputs, and pre-computed SHAP values with on-demand detail expansion to keep dashboard interactions sub-second.',
    results:
      '92% recall on at-risk students at 0.4 false-positive rate, adopted across 3 departments in a pilot, and reduced manual counseling time by ~40% as TPOs focused on flagged students.',
    lessons:
      'Calibration matters more than raw accuracy when humans act on probabilities. Explainability is what makes a model trustworthy to non-technical stakeholders — the SHAP view was the feature TPOs cited most.',
    metrics: [
      { label: 'Recall (at-risk)', value: '92%' },
      { label: 'False Positive Rate', value: '0.4' },
      { label: 'Counseling time saved', value: '~40%' },
      { label: 'Departments in pilot', value: '3' },
    ],
    stack: ['XGBoost', 'SHAP', 'FastAPI', 'PostgreSQL', 'React'],
  },
  {
    id: 'case-f1-strategy-intelligence',
    title: 'Formula 1 Strategy Intelligence — Case Study',
    problem:
      'Race strategy is decided under extreme uncertainty. Tire life, fuel, weather, and traffic interact non-linearly, and fans had no way to explore counterfactual strategies in real time.',
    research:
      'Studied 2022–2023 race telemetry and tire-degradation literature. Confirmed that degradation is compound- and track-specific and that pit-window optima shift dramatically with safety-car probability.',
    architecture:
      'A degradation model per compound is fit from historical telemetry. A Monte Carlo simulator projects pit windows from live timing, and an interactive strategy canvas lets users drag what-if sliders to explore alternatives.',
    pipeline:
      'Live timing (OpenF1) → ingestion → degradation model → Monte Carlo pit-window projection (10k samples) → strategy canvas (Plotly + React).',
    challenges:
      'Degradation curves were noisy per-lap. Simulation had to stay under 200ms per update for a live UX. Safety-car events are rare, making their probability hard to estimate from data alone.',
    implementation:
      'Applied Laplace smoothing to degradation curves, vectorized the simulator in NumPy for 10k-sample throughput, and used a hybrid empirical + heuristic prior for safety-car probability.',
    results:
      'Pit-window predictions within ±1 lap on a held-out 2023 race sample, sub-200ms per simulation update, and featured on a community F1 analytics showcase.',
    lessons:
      'Simulation UX is everything — the math only matters if fans can play with it. Smoothing noisy domain signals is often more valuable than a more complex model.',
    metrics: [
      { label: 'Pit-window error', value: '±1 lap' },
      { label: 'Sim update time', value: '<200ms' },
      { label: 'Samples / update', value: '10k' },
      { label: 'Races evaluated', value: '22' },
    ],
    stack: ['NumPy', 'Pandas', 'Plotly', 'FastAPI', 'React'],
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  tags: string[];
};

export const education: TimelineItem[] = [
  {
    period: '2023 — 2027',
    title: 'B Tech Computer Science - MIT ADT UNIVERSITY',
    org: 'Specialization in AI & Analytics',
    description:
      'Coursework in data structures, algorithms, machine learning, deep learning, databases, and distributed systems. Maintaining a strong academic record with a focus on applied AI.',
    tags: ['ML', 'Deep Learning', 'Databases', 'Algorithms'],
  },
];

export const experience: TimelineItem[] = [
  {
    period: 'Jun 2026 — Present',
    title: 'ML Intern',
    org: 'FlyRank AI',
    description:
      'Building and productionizing ML pipelines — feature engineering, model training, evaluation, and deployment. Contributing to an LLM-powered internal analytics tool.',
    tags: ['MLOps', 'LLMs', 'Python', 'FastAPI'],
  },
  {
    period: 'Jun 2025 — July 2025',
    title: 'Data Science Intern',
    org: 'Prodigy Infotech',
    description:
      'Contributed to end-to-end data science projects by cleaning and analyzing large datasets, building machine learning models, and evaluating their performance. Applied Python, Pandas, NumPy, Matplotlib, Seaborn, and scikit-learn to solve real-world predictive analytics problems.',
    tags: ['Python','NumPy','Seaborn', 'Matplotlib','Scikit-learn','Machine Learning', 'Pandas', 'Visualization'],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  credentialId: string;
  url: string;
  skills: string[];
};

export const certificates: Certificate[] = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    year: '2024',
    credentialId: 'ML-SPEC-2024-SP',
    url: 'https://coursera.org/verify/specialization',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks'],
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    year: '2025',
    credentialId: 'DL-SPEC-2025-SP',
    url: 'https://coursera.org/verify/specialization',
    skills: ['CNNs', 'RNNs', 'Sequence Models'],
  },
  {
    title: 'Applied Data Science with Python',
    issuer: 'University of Michigan',
    year: '2025',
    credentialId: 'ADS-PY-2025',
    url: 'https://coursera.org/verify',
    skills: ['Pandas', 'Matplotlib', 'Scikit-learn'],
  },
  {
    title: 'SQL for Data Science',
    issuer: 'IBM',
    year: '2026',
    credentialId: 'SQL-DS-2026',
    url: 'https://coursera.org/verify',
    skills: ['SQL', 'Relational Databases'],
  },
  {
    title: 'Generative AI with LLMs',
    issuer: 'DeepLearning.AI',
    year: '2024',
    credentialId: 'GENAI-LLM-2024',
    url: 'https://coursera.org/verify',
    skills: ['LLMs', 'Prompt Engineering', 'RAG'],
  },
  {
    title: 'Data Analysis with Pandas',
    issuer: 'Kaggle Learn',
    year: '2023',
    credentialId: 'KGL-PD-2023',
    url: 'https://kaggle.com/learn',
    skills: ['Pandas', 'Data Cleaning', 'EDA'],
  },
];

export const githubPinned = [
  {
    name: 'analytical-placement-system',
    description: 'Predictive placement analytics with XGBoost + SHAP and a role-based dashboard.',
    language: 'Python',
    url: 'https://github.com/surajpatil-ai/analytical-placement-system',
  },
  {
    name: 'f1-strategy-intelligence',
    description: 'Real-time F1 pit-window projection via Monte Carlo over live telemetry.',
    language: 'Python',
    url: 'https://github.com/surajpatil-ai/f1-strategy-intelligence',
  },
  {
    name: 'ai-business-intelligence',
    description: 'Conversational BI — text-to-SQL with cost-bounded execution and auto-charts.',
    language: 'Python',
    url: 'https://github.com/surajpatil-ai/ai-business-intelligence',
  },
  {
    name: 'adgen-ai',
    description: 'Brand-aware generative ad copy grounded in guidelines and performance.',
    language: 'Python',
    url: 'https://github.com/surajpatil-ai/adgen-ai',
  },
];