export const company = {
  name: 'CEGE Enterprises LLC',
  founder: 'Christopher Evans',
  email: 'chris@cegeenterprises.com',
  supportEmail: 'chris@cegeenterprises.com',
  location: 'Parkland, Florida, United States',
  upworkUrl: 'https://www.upwork.com/freelancers/~016220825f3378bd6a?viewMode=1',
  headline: 'AI automation, web apps, mobile apps, MVP prototypes, and lead systems',
  description:
    'CEGE Enterprises LLC is a founder-led digital systems studio focused on business-ready AI automations, conversion websites, native and cross-platform mobile app planning, MVP prototypes, and lead-generation systems.'
};

export const navigation = [
  { href: '/services/', label: 'Services' },
  { href: '/work/', label: 'Work' },
  { href: '/process/', label: 'Process' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' }
];

export const services = [
  {
    title: 'Mobile App Strategy & Development',
    description:
      'iOS and Android app planning, interface design, prototype development, and launch preparation for products that need to feel credible on real devices.',
    outcome:
      'A mobile-first product path with clear user flows, store-readiness considerations, privacy/support requirements, and a practical build plan.',
    deliverables: ['iOS and Android planning', 'Mobile-first UX', 'Store-readiness support'],
    icon: 'phone'
  },
  {
    title: 'AI Agents & GPT Workflows',
    description:
      'Custom assistants, prompt systems, knowledge-base workflows, and AI-enabled task paths for teams that need faster execution without losing oversight.',
    outcome: 'Reusable AI workflows that support intake, SOP lookup, drafting, checklists, and operations support.',
    deliverables: ['GPT assistant structure', 'Prompt and SOP systems', 'Workflow QA'],
    icon: 'spark'
  },
  {
    title: 'Lead Systems & Follow-Up Automation',
    description:
      'Landing pages, qualifying forms, CRM-style handoffs, source tracking, dashboards, and automated SMS/email follow-up for service businesses.',
    outcome: 'A cleaner path from inquiry to qualified conversation, with fewer missed opportunities.',
    deliverables: ['Lead capture pages', 'CRM handoff logic', 'Follow-up sequences'],
    icon: 'chart'
  },
  {
    title: 'Web Apps & MVP Prototypes',
    description:
      'Focused product sprints that turn early concepts into scoped user flows, interface systems, dashboards, and build-ready MVP plans.',
    outcome: 'A practical first version that teams can test, present, or hand off for production.',
    deliverables: ['Product scope', 'UX flows', 'Prototype-ready UI'],
    icon: 'layout'
  },
  {
    title: 'Conversion Website Builds',
    description:
      'Sharper websites and service pages with positioning, mobile-first layouts, trust sections, lead paths, and analytics-ready structure.',
    outcome: 'A more credible digital presence for visitors arriving from referrals, search, partner links, or marketplace profiles.',
    deliverables: ['Website redesigns', 'Landing pages', 'Copy and CTA structure'],
    icon: 'monitor'
  },
  {
    title: 'Launch Dashboards & Ops Systems',
    description:
      'Command centers for assets, tasks, contacts, deadlines, deliverables, status reporting, and repeatable launch workflows.',
    outcome: 'Owners and teams see what matters next without chasing scattered updates.',
    deliverables: ['Dashboard architecture', 'Task and asset tracking', 'Handoff docs'],
    icon: 'grid'
  },
  {
    title: 'AI Content & Creative Production Systems',
    description:
      'Brand-kit ingestion, campaign briefs, social post generators, editable creative outputs, and review loops for reusable launch asset production.',
    outcome: 'A faster way to create polished, on-brand assets while keeping human judgment in the loop.',
    deliverables: ['Brand kit workflow', 'Creative generator UI', 'Output QA'],
    icon: 'diamond'
  }
];

export const processSteps = [
  {
    title: 'Clarify the Business Goal',
    description:
      'Define the audience, business objective, target platform, conversion path, timeline, constraints, and first useful release.',
    icon: 'search'
  },
  {
    title: 'Shape the Scope',
    description:
      'Turn open requirements into a fixed-scope build plan with page flows, app screens, data needs, integrations, and acceptance criteria.',
    icon: 'compass'
  },
  {
    title: 'Design the Working System',
    description:
      'Create the interface, copy hierarchy, automation logic, dashboard structure, mobile states, and review checkpoints before production gets heavy.',
    icon: 'layout'
  },
  {
    title: 'Build the First Version',
    description:
      'Implement the website, workflow, app prototype, or automation path with fast feedback loops and visible progress.',
    icon: 'code'
  },
  {
    title: 'QA the Experience',
    description:
      'Check responsiveness, copy clarity, alignment, form paths, handoffs, accessibility basics, and edge cases that can hurt trust.',
    icon: 'shield'
  },
  {
    title: 'Launch, Handoff, and Improve',
    description:
      'Package the working system with documentation, launch notes, app-store or deployment considerations, and the next set of practical improvements.',
    icon: 'refresh'
  }
];

export const trustItems = [
  {
    title: 'Public Business Presence',
    description: 'Company website, clear contact path, privacy policy, and consistent public positioning.',
    icon: 'check',
    href: '/about/'
  },
  {
    title: 'Portfolio-Backed Work',
    description: 'Public examples across GPT workflows, lead systems, dashboards, websites, and MVP planning.',
    icon: 'monitor',
    href: '/work/'
  },
  {
    title: 'Founder-Led Delivery',
    description: 'Direct planning, product judgment, design direction, and accountable execution.',
    icon: 'user',
    href: '/about/'
  },
  {
    title: 'Mobile Release Ready',
    description: 'Support for iOS, Android, privacy, support, and store-review preparation needs.',
    icon: 'phone',
    href: '/services/'
  },
  {
    title: 'Domain-Based Contact',
    description: 'Company email for project inquiries, support, privacy, and verification.',
    icon: 'mail',
    href: `mailto:${company.supportEmail}?subject=CEGE%20Project%20Inquiry`
  },
  {
    title: 'Privacy & Support Path',
    description: 'Plain-language privacy policy and a clear contact route for website inquiries.',
    icon: 'lock',
    href: '/privacy/'
  }
];

export const workItems = [
  {
    title: 'Custom GPT Workflow for Faster Internal Operations',
    shortTitle: 'Internal Ops GPT Command Center',
    role: 'AI Workflow & Automation Architect',
    image: '/work/internal-ops-gpt-command-center.jpg',
    description:
      'A reusable internal GPT command center for SOP lookup, intake support, task checklists, draft generation, and role-specific workflows.',
    outcome:
      'Helped turn scattered operating knowledge into a clearer assistant framework for repeatable team execution.',
    tags: ['ChatGPT', 'AI Agent Development', 'Prompt Systems', 'Workflow Automation'],
    icon: 'spark',
    tone: 'blue'
  },
  {
    title: 'Lead Recovery Landing Page with CRM Follow-Up Automation',
    shortTitle: 'Lead Recovery System',
    role: 'Lead Automation & Dashboard Architect',
    image: '/work/lead-recovery-landing-crm.jpg',
    description:
      'A conversion-focused landing page, qualifying form, source tracking layer, CRM handoff, automated follow-up sequence, and reporting dashboard.',
    outcome:
      'Designed to help high-ticket service teams recover more inquiries between form submission and human follow-up.',
    tags: ['Landing Page', 'CRM Automation', 'API Integration', 'Dashboard'],
    icon: 'chart',
    tone: 'green'
  },
  {
    title: 'AI BrandPost Agent: On-Brand Social Creative Generator',
    shortTitle: 'AI BrandPost Agent',
    role: 'AI Product Lead & Automation Architect',
    image: '/work/ai-brandpost-agent.jpg',
    description:
      'A brand-kit and campaign-brief workflow that generates platform-ready social assets with editable source files and a built-in QA loop.',
    outcome:
      'Created a repeatable production path for branded launch assets without losing control of hierarchy, tone, and visual quality.',
    tags: ['AI Agent Development', 'OpenAI API', 'Automation', 'UX & UI Design'],
    icon: 'diamond',
    tone: 'gold'
  },
  {
    title: 'Launch Operations Dashboard for Assets, Tasks & Reporting',
    shortTitle: 'Launch Operations Dashboard',
    role: 'Automation & Dashboard Architect',
    image: '/work/launch-operations-dashboard.jpg',
    description:
      'A launch command center for tasks, assets, contacts, deadlines, owner reporting, workflow documents, and operating status.',
    outcome:
      'Centralized what matters next so teams can run launches with clearer accountability and fewer scattered updates.',
    tags: ['Dashboard', 'Airtable', 'Notion', 'Project Management'],
    icon: 'grid',
    tone: 'steel'
  },
  {
    title: 'MVP Web App Sprint for Product Validation & Launch Planning',
    shortTitle: 'MVP Web App Sprint',
    role: 'Product Strategy & MVP Architect',
    image: '/work/mvp-web-app-sprint.jpg',
    description:
      'A structured MVP sprint translating an early product concept into user flows, screen architecture, feature scope, QA needs, and launch sequencing.',
    outcome:
      'Reduced ambiguity and created a clearer roadmap for prototype development, stakeholder alignment, and first-version delivery.',
    tags: ['Product Development', 'UX & UI Design', 'Technical Documentation', 'Web App'],
    icon: 'layout',
    tone: 'cyan'
  },
  {
    title: 'Conversion Website Redesign for Premium Lead Generation',
    shortTitle: 'Conversion Website Redesign',
    role: 'Web Design & Conversion Strategist',
    image: '/work/conversion-website-redesign.jpg',
    description:
      'A service-business website redesign with stronger positioning, clearer hero messaging, mobile-first layouts, trust sections, and direct lead paths.',
    outcome:
      'Made the offer easier to understand, evaluate, and act on for qualified visitors arriving from search, referrals, and campaigns.',
    tags: ['Web Design', 'Web Development', 'Landing Page', 'Copywriting'],
    icon: 'monitor',
    tone: 'blue'
  }
];

export const studioValues = [
  {
    title: 'Specific Before Flashy',
    description:
      'The work starts with the client journey, offer, workflow, and business outcome before choosing interface patterns or AI tooling.',
    icon: 'compass'
  },
  {
    title: 'Fast Without Feeling Thin',
    description:
      'AI-assisted development is used to move quickly, while product judgment and QA keep the final deliverable polished.',
    icon: 'rocket'
  },
  {
    title: 'Operator Mindset',
    description:
      'Systems are built around handoffs, status, maintenance, mobile behavior, and repeatable execution, not just attractive screenshots.',
    icon: 'grid'
  },
  {
    title: 'Presentation Matters',
    description:
      'Copy, layout, hierarchy, and proof are treated as part of the product because trust is part of the conversion path.',
    icon: 'diamond'
  }
];

export const qualityGates = [
  {
    title: 'Positioning Fit',
    description: 'Does the page, app, or workflow explain the offer, user, and next step in plain language?',
    icon: 'compass'
  },
  {
    title: 'Mobile and Responsive Polish',
    description: 'Do layouts, forms, media, app screens, and CTAs hold up across phone, tablet, and desktop contexts?',
    icon: 'monitor'
  },
  {
    title: 'Workflow Reliability',
    description: 'Do forms, handoffs, automations, dashboards, and AI outputs behave predictably?',
    icon: 'shield'
  },
  {
    title: 'Release Readiness',
    description: 'Can the client understand what was built, how to use it, what is needed for release, and what to improve next?',
    icon: 'check'
  }
];

export const credentials = [
  {
    title: 'DeepLearning.AI Generative AI for Everyone',
    provider: 'DeepLearning.AI / Coursera',
    focus: 'Generative AI use cases, responsible adoption, workflow design, and business automation.'
  },
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    provider: 'Microsoft',
    focus: 'AI workloads, machine learning concepts, NLP, computer vision, and Azure AI services.'
  },
  {
    title: 'Google Cloud Digital Leader',
    provider: 'Google Cloud',
    focus: 'Cloud transformation, data, AI, infrastructure, security concepts, and business value.'
  },
  {
    title: 'IBM Full Stack Software Developer Professional Certificate',
    provider: 'IBM / Coursera',
    focus: 'Frontend, backend, APIs, databases, deployment concepts, and practical web app builds.'
  },
  {
    title: 'Professional Scrum Master I and ScrumMaster training',
    provider: 'Scrum.org / Scrum Alliance',
    focus: 'Agile delivery, sprint planning, backlog structure, team facilitation, and continuous improvement.'
  },
  {
    title: 'Google UX and Project Management certificates',
    provider: 'Google / Coursera',
    focus: 'User-centered design, prototyping, usability, project scope, stakeholder communication, and QA.'
  }
];
