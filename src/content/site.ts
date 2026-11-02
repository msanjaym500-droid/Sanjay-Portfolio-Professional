/**
 * Sanjay's Portfolio Content File
 *
 * Every piece of text, link, skill, project detail, and date is stored here.
 * You can edit any wording here in one place without touching component code.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface HowIWorkItem {
  step: string;
  title: string;
  description: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  caseStudy: {
    status: 'Live' | 'Prototype';
  };
  liveUrl: string;
  screenshots: ProjectScreenshot[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  percentage: string;
}

export interface SiteData {
  personal: {
    name: string;
    roleLine: string;
    heroBio: string;
    badgeText: string;
    email: string;
    location: string;
    linkedinUrl: string;
    resumePdfPath: string;
    photoPath: string;
  };
  navigation: NavLink[];
  about: {
    summary: string;
    howIWorkWithAi: HowIWorkItem[];
  };
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  contact: {
    heading: string;
    text: string;
  };
}

export const siteContent: SiteData = {
  personal: {
    name: 'Sanjay',
    roleLine: 'Aspiring Full-Stack Web Developer (AI-Assisted) | Python Fundamentals',
    heroBio:
      'I build websites with AI coding tools such as Google AI Studio and Google Antigravity, and I am learning HTML, CSS and JavaScript so I can understand and edit every part of my websites myself.',
    badgeText: 'Fresher · Open to entry-level roles · Villupuram, Tamil Nadu',
    email: 'msanjay662006@gmail.com',
    location: 'Villupuram, Tamil Nadu, India.',
    linkedinUrl: 'https://www.linkedin.com/in/sanjay-sanjay-10479231b',
    resumePdfPath: '/sanjay Professional resume.pdf',
    photoPath: '/sanjay-photo.jpg',
  },

  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience & Education', href: '#experience-education' },
    { label: 'Contact', href: '#contact' },
  ],

  about: {
    summary:
      'I am a fresher from Villupuram, Tamil Nadu, with a B.Sc. Physics degree (2026) and a Python programming internship at Skibui Technologies. I build websites with AI coding tools and publish them on Vercel. My physics studies trained me to break a problem into small steps and check each step carefully. I am learning HTML, CSS and JavaScript so I can read and edit my own code.',
    howIWorkWithAi: [
      {
        step: '01',
        title: 'Describe',
        description: 'I explain clearly what I want to build.',
      },
      {
        step: '02',
        title: 'Test',
        description: 'I check the result on my phone and laptop and note what is wrong.',
      },
      {
        step: '03',
        title: 'Improve',
        description:
          'I fix problems by improving my instructions, and I am learning to read the code behind it.',
      },
      {
        step: '04',
        title: 'Research',
        description:
          'I use ChatGPT, Claude, Gemini, Grok and Perplexity to find and compare information.',
      },
    ],
  },

  skills: [
    {
      title: 'AI Coding Tools',
      items: ['Google AI Studio', 'Google Antigravity'],
    },
    {
      title: 'Database & Authentication',
      items: ['Firebase'],
    },
    {
      title: 'Version Control & Deployment',
      items: ['GitHub', 'Vercel', 'GoDaddy (domain name)'],
    },
    {
      title: 'Programming',
      items: ['Python (basic)'],
    },
    {
      title: 'Currently Learning',
      items: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'AI Research Tools',
      items: ['ChatGPT', 'Claude', 'Gemini', 'Grok', 'Perplexity'],
    },
    {
      title: 'Office & Design Tools',
      items: ['Microsoft Excel', 'PowerPoint', 'Word', 'Canva'],
    },
    {
      title: 'Spoken Languages',
      items: ['English', 'Tamil'],
    },
  ],

  projects: [
    {
      title: 'Raja Salon Appointment Booking Website',
      tagline: "Appointment booking website for a men's salon in Kanai, Villupuram",
      description:
        'This project is a professionally designed salon appointment booking web application developed for a local business to streamline appointment management and enhance the customer experience. The platform allows customers to browse services, view pricing, and schedule appointments through an intuitive, responsive interface. Built end-to-end using AI-assisted development with Google Antigravity, demonstrating the ability to translate real business needs into functional, user-friendly web applications. Key features include responsive design, clear service listings with pricing, and a simple, smooth booking workflow.',
      caseStudy: {
        status: 'Live',
      },
      liveUrl: 'https://raja-salon-pnzn.vercel.app',
      screenshots: [
        {
          src: '/salon-screen-1.jpg',
          alt: 'Raja Salon homepage showing hero section, operating hours, and Book Appointment action',
          caption: 'Homepage & Grooming Overview',
        },
        {
          src: '/salon-screen-2.jpg',
          alt: 'Raja Salon booking flow showing service selection, master barber choice, and appointment date calendar',
          caption: 'Service, Barber & Date Selection',
        },
        {
          src: '/salon-screen-3.jpg',
          alt: 'Raja Salon reservation confirmed screen showing booking summary, reference ID, and calendar actions',
          caption: 'Instant Reservation Confirmation',
        },
      ],
    },
  ],

  experience: [
    {
      role: 'Python Programming Intern',
      company: 'Skibui Technologies',
      location: 'Villupuram',
      period: 'May 2025 – Jun 2025 (1 month)',
      bullets: [
        'Completed hands-on training in Python programming fundamentals.',
        'Learned Python syntax, data types and control structures (if-else, loops).',
        'Wrote small Python scripts for data processing and automation as practice.',
        'Improved logical thinking and problem solving through daily coding practice.',
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Science (B.Sc.) in Physics',
      institution:
        'Arignar Anna Government Arts and Science College, Villupuram (affiliated to Annamalai University)',
      location: 'Villupuram',
      period: '2023 – 2026',
      percentage: '70%',
    },
  ],

  contact: {
    heading: 'Get in touch',
    text: 'I am open to fresher roles, trainee and internship positions, and small website projects.',
  },
};
