import { CertificateItem, ProjectItem, SkillItem, StudentDetails } from '../types/portfolio';

export const STUDENT_DETAILS: StudentDetails = {
  fullName: 'Chaupal Vijay Shankar',
  registrationNumber: '2026BTAI209',
  college: 'Joy University',
  school: 'School of Computer Intelligence (SOCI)',
  department: 'CSE Artificial Intelligence',
  section: '404, Section D',
  academicStatus: 'BTech First Year',
  studyPeriod: '2026 - 2030',
};

export const PROFILE_PHOTO = '/assets/aistudio/Professional_portrait_with_soft_office_bokeh__1__8aa98847.png';

export const PROFESSIONAL_TITLE = 'Aspiring AI Engineer | Machine Learning Enthusiast | AI Developer';

export const HERO_INTRO =
  "Hello! I'm Chaupal Vijay Shankar, a first-year BTech student specializing in Computer Science and Artificial Intelligence at Joy University. I'm passionate about programming, Generative AI, automation and emerging technologies. I enjoy learning new technologies and transforming ideas into practical projects. My goal is to become an AI Engineer and develop intelligent solutions that make a meaningful impact.";

export const BIOGRAPHY_PARAGRAPHS = [
  "I am an enthusiastic Computer Science undergraduate at Joy University's School of Computer Intelligence (SOCI), specializing in Artificial Intelligence. My academic journey is centered around deep-diving into the foundational and mathematical principles of modern machine learning algorithms and computational thinking.",
  "My technical interests are anchored in Python programming, exploring state-of-the-art Generative AI techniques, and automating multi-step operational pipelines. I actively explore workflow automation using n8n to connect diverse software ecosystems, APIs, and data sources seamlessly.",
  "Driven by a strong curiosity for innovative software engineering, I believe in learning by building. From scripting algorithms to deploying automated pipelines, I dedicate my college tenure (2026–2030) to transforming complex conceptual models into tangible, user-centric AI solutions with real-world utility.",
];

export const CAREER_ASPIRATIONS =
  "Aspiring to become an AI Engineer, Machine Learning Engineer and AI Developer.";

export const SOCIAL_LINKS = {
  email: 'vijayschaupal2007@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vijay-shankar-chaupal-059304354/',
  github: 'https://github.com/ChaupalVijayShankar',
};

export const INITIAL_SKILLS: SkillItem[] = [
  // Programming
  {
    name: 'Python',
    category: 'Programming',
    description: 'Core object-oriented programming, data structures, algorithms, and computational logic scripting.',
    highlight: 'Primary language for AI/ML foundations',
    tags: ['OOP', 'Data Structures', 'Scripting'],
  },
  {
    name: 'SQL',
    category: 'Programming',
    description: 'Relational database querying, schema structuring, data extraction, joins, and filtering.',
    highlight: 'Data querying & relational models',
    tags: ['Queries', 'Filtering', 'Relational DBs'],
  },

  // Web Development
  {
    name: 'HTML',
    category: 'Web Development',
    description: 'Semantic markup structure, modern document architecture, and web accessibility fundamentals.',
    highlight: 'Semantic document layout',
    tags: ['Semantic HTML5', 'Accessibility', 'DOM'],
  },
  {
    name: 'CSS',
    category: 'Web Development',
    description: 'Responsive styling, Flexbox, CSS Grid layouts, visual hierarchy, and modern CSS frameworks.',
    highlight: 'Responsive design & typography',
    tags: ['Flexbox', 'CSS Grid', 'Tailwind CSS'],
  },

  // Emerging Technologies
  {
    name: 'Generative AI',
    category: 'Emerging Technologies',
    description: 'Exploring LLM architectures, prompt engineering, multimodal reasoning, and generative workflows.',
    highlight: 'Model orchestration & prompt design',
    tags: ['LLMs', 'Prompt Engineering', 'AI Pipelines'],
  },
  {
    name: 'AI Tools',
    category: 'Emerging Technologies',
    description: 'Leveraging AI-assisted developer environments, coding copilots, and intelligent prototyping utilities.',
    highlight: 'Developer acceleration & ideation',
    tags: ['Coding Assistants', 'Evaluation', 'Prototyping'],
  },
  {
    name: 'Workflow Automation',
    category: 'Emerging Technologies',
    description: 'Automating multi-step repetitive processes, connecting SaaS webhooks, and trigger-based data synchronization with n8n.',
    highlight: 'n8n pipelines & API integration',
    tags: ['n8n', 'Webhooks', 'Process Optimization'],
  },

  // Professional Skills
  {
    name: 'Problem Solving',
    category: 'Professional Skills',
    description: 'Analytical decomposition of complex computational challenges into clean, iterative modular steps.',
    highlight: 'Algorithmic & systematic logic',
  },
  {
    name: 'Creativity',
    category: 'Professional Skills',
    description: 'Transforming unconventional concepts into practical interactive prototypes and game mechanics.',
    highlight: 'Idea execution & prototyping',
  },
  {
    name: 'Communication',
    category: 'Professional Skills',
    description: 'Clear documentation of codebases, structured presentation of technical ideas, and active listening.',
    highlight: 'Technical clarity & documentation',
  },
  {
    name: 'Teamwork',
    category: 'Professional Skills',
    description: 'Collaborative peer problem solving, collective project builds, and constructive code review mindset.',
    highlight: 'Peer collaboration & shared goals',
  },
  {
    name: 'Continuous Learning',
    category: 'Professional Skills',
    description: 'Proactive exploration of emerging developer tools, technical papers, and self-directed project building.',
    highlight: 'Curiosity & rapid skill acquisition',
  },
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'game-development',
    title: 'Game Development',
    status: 'Completed',
    category: 'Game Engine & Logic',
    description:
      'A personal game development project focused on creating an interactive gaming experience while developing programming and logical thinking skills.',
    longDescription:
      'Engineered an interactive gaming experience in Python exploring state machines, collision detection, game loops, player controls, and score mechanics. The project helped sharpen core algorithm implementation and object-oriented architectural patterns.',
    technologies: ['Python', 'Game Logic', 'OOP', 'Event Handling'],
    imageUrl: '',
    githubUrl: 'https://github.com/ChaupalVijayShankar',
    liveDemoUrl: '#',
  },
  {
    id: 'linkedin-automation-n8n',
    title: 'LinkedIn Automation Using n8n and Google Sheets',
    status: 'In Progress',
    category: 'Workflow Automation & AI',
    description:
      'An AI automation project designed to connect LinkedIn, n8n and Google Sheets to explore workflow automation and streamline repetitive tasks.',
    longDescription:
      'Building an end-to-end automation workflow using an n8n self-hosted engine. Connects scheduled triggers with Google Sheets to batch-process content queues, track engagement metrics, and streamline professional outreach tasks without manual copy-pasting.',
    technologies: ['n8n', 'Google Sheets', 'LinkedIn', 'Workflow Automation'],
    imageUrl: '',
    githubUrl: 'https://github.com/ChaupalVijayShankar',
    liveDemoUrl: '#',
  },
  {
    id: 'future-ai-project',
    title: 'Autonomous AI Agent System (Upcoming Project)',
    status: 'Planned',
    category: 'Machine Learning & Generative AI',
    description:
      'An editable placeholder for a future project. Reserved for multimodal AI agent development and intelligent query pipeline.',
    longDescription:
      'This project slot is actively reserved for upcoming machine learning or intelligent system experiments as coursework and independent research progress at Joy University. You can edit this project or add new ones directly through the portfolio interface.',
    technologies: ['Python', 'Machine Learning', 'Generative AI', 'APIs'],
    imageUrl: '',
    githubUrl: 'https://github.com/ChaupalVijayShankar',
    liveDemoUrl: '#',
  },
];

export const INITIAL_CERTIFICATES: CertificateItem[] = [
  {
    id: 'google-vibe-coding',
    title: 'Vibe Coding Certificate',
    issuer: 'Google',
    description:
      'Official credential recognizing proficiency in AI-assisted developer workflows, modern generative coding methodologies, and rapid prototype creation.',
    verificationNote: 'Completed through Google Developer training program',
  },
  {
    id: 'n8n-participation',
    title: 'n8n Participation Certificate',
    issuer: 'n8n',
    description:
      'Recognized for hands-on participation in workflow automation engineering, node-based event automation, and API integration pipelines.',
    verificationNote: 'Official n8n community workflow automation participation credential',
  },
  {
    id: 'joy-univ-prompt-writing',
    title: 'Prompt Writing Certificate',
    issuer: 'Joy University',
    description:
      'Academic certification awarded by Joy University for mastering prompt engineering structures, context priming, and systematic LLM steering techniques.',
    verificationNote: 'Issued by School of Computer Intelligence (SOCI), Joy University',
  },
];

export const ACADEMIC_TIMELINE = [
  {
    period: '2026',
    title: 'BTech First Year Foundation',
    institution: 'Joy University · SOCI',
    points: [
      'Comprehensive coursework in CSE Artificial Intelligence (Section 404, Section D)',
      'Mastered core Python programming, data structures, and relational database fundamentals (SQL)',
      'Earned credentials in Prompt Writing (Joy University), Vibe Coding (Google), and n8n Automation',
    ],
  },
  {
    period: '2027',
    title: 'Core Machine Learning & Algorithms',
    institution: 'Joy University · Year 2 Milestone',
    points: [
      'Deep exploration of statistical machine learning algorithms, calculus for optimization, and linear algebra',
      'Developing production-ready data pipelines and deploying containerized backend services',
      'Advanced workflow automations and open-source contributions',
    ],
  },
  {
    period: '2028',
    title: 'Deep Learning & Neural Architectures',
    institution: 'Joy University · Year 3 Milestone',
    points: [
      'Specialized focus on deep neural networks, Computer Vision, and Natural Language Processing (NLP)',
      'Designing domain-specific fine-tuned LLM agents and multi-agent coordination systems',
      'Industry internship and applied AI research projects',
    ],
  },
  {
    period: '2029 - 2030',
    title: 'Capstone & Industry AI Deployment',
    institution: 'Joy University · Year 4 Graduation',
    points: [
      'Final year capstone engineering project solving tangible industrial challenges',
      'BTech in Computer Science and Engineering (Artificial Intelligence) graduation',
      'Transitioning into a full-time role as an AI Engineer and Machine Learning Developer',
    ],
  },
];
