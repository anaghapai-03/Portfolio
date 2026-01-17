import { 
  User, 
  Code2, 
  FolderGit2, 
  Briefcase, 
  GraduationCap, 
  Award,
  LucideIcon
} from 'lucide-react';

export interface PortfolioCard {
  id: string;
  type: string;
  icon: LucideIcon;
  title: string;
  content: string;
  details: string[];
}

export interface Project extends PortfolioCard {
  githubLink?: string;
}

// Individual projects - each gets its own card
export const projects: Project[] = [
  {
    id: 'project-parking',
    type: 'projects',
    icon: FolderGit2,
    title: 'Parking Management System',
    content: 'Full‑stack web application',
    details: [
      'Real‑time parking availability and pre‑booking',
      'Built with Flask and SQLite',
      'Vehicle registration for faster bookings',
      'Responsive UI design'
    ],
    githubLink: 'https://github.com/anaghapai-03/MAD1-Project-vehicle-parking-app'
  },
  {
    id: 'project-medireport',
    type: 'projects',
    icon: FolderGit2,
    title: 'MediReportAI',
    content: 'OCR Medical Report Analyzer',
    details: [
      'Extracts structured data from medical reports',
      'Generates AI‑powered summaries',
      'Maps API integration for nearby specialists',
      'Built during RVCE × NITK hackathon'
    ],
    githubLink: 'https://github.com/wequgy/MediReport-AI' // USER: Paste your GitHub link here
  },
  {
    id: 'project-medsafe',
    type: 'projects',
    icon: FolderGit2,
    title: 'MedSafe',
    content: 'Medical Report Management System',
    details: [
      'Role‑based medical report management',
      'Built with React & Next.js',
      'Digital prescriptions and history',
      'Supabase auth & storage'
    ],
    githubLink: 'https://github.com/ananyaranjith-bit/MedSafe_FWD' // USER: Paste your GitHub link here
  },
  {
    id: 'project-signwatch',
    type: 'projects',
    icon: FolderGit2,
    title: 'Sign Language Detecting Watch',
    content: 'Assistive Technology Concept',
    details: [
      'Smartwatch concept for accessibility',
      'Motion sensors for gesture detection',
      'ML‑based gesture recognition',
      'Converts sign language to speech'
    ],
    githubLink: '' // USER: Paste your GitHub link here
  }
];

// Individual coursework items
export const coursework: PortfolioCard[] = [
  {
    id: 'course-dsa',
    type: 'coursework',
    icon: Briefcase,
    title: 'Data Structures & Algorithms',
    content: 'Core computer science',
    details: ['Problem-solving', 'Algorithm optimization', 'Complexity analysis']
  },
  {
    id: 'course-dbms',
    type: 'coursework',
    icon: Briefcase,
    title: 'Database Management Systems',
    content: 'Database design & queries',
    details: ['SQL & normalization', 'Indexing & optimization', 'Transaction management']
  },
  {
    id: 'course-coa',
    type: 'coursework',
    icon: Briefcase,
    title: 'Computer Organization & Architecture',
    content: 'System‑level thinking',
    details: ['CPU design', 'Memory hierarchy', 'Assembly language']
  },
  {
    id: 'course-ml',
    type: 'coursework',
    icon: Briefcase,
    title: 'Foundations of Machine Learning',
    content: 'AI & ML fundamentals',
    details: ['Supervised learning', 'Classification & regression', 'Model evaluation']
  },
  {
    id: 'course-ct',
    type: 'coursework',
    icon: Briefcase,
    title: 'Computational Thinking',
    content: 'Problem decomposition',
    details: ['Pattern recognition', 'Algorithm design', 'Logic & abstraction']
  }
];

// Individual achievements
export const achievements: PortfolioCard[] = [
  {
    id: 'achieve-puc',
    type: 'achievements',
    icon: Award,
    title: '6th Rank in Karnataka',
    content: '2nd PUC Board Exams',
    details: ['State-level achievement', 'Academic excellence', 'Consistent performance']
  },
  {
    id: 'achieve-icse',
    type: 'achievements',
    icon: Award,
    title: 'Silver Medal',
    content: 'ICSE Board Exams',
    details: ['National recognition', 'Outstanding performance', 'Subject mastery']
  },
  {
    id: 'achieve-kungfu',
    type: 'achievements',
    icon: Award,
    title: 'Black Belt in Kung Fu',
    content: 'Discipline & perseverance',
    details: ['Years of dedication', 'Physical excellence', 'Mental fortitude']
  }
];

// Original portfolioCards for memory game
export const portfolioCards: PortfolioCard[] = [
  {
    id: 'about',
    type: 'about',
    icon: User,
    title: 'About Me',
    content: 'I am Anagha A Pai, a technology researcher and full‑stack developer',
    details: [
      'Deeply interested in technology research and creative problem‑solving',
      'Focus on building thoughtful, impactful software and intelligent systems',
      'Explore the intersection of full‑stack development, data, and real‑world applications'
    ]
  },
  {
    id: 'projects-summary',
    type: 'projects',
    icon: FolderGit2,
    title: 'Selected Projects',
    content: 'Real-world apps & AI prototypes',
    details: [
      'Parking Management System',
      'MediReportAI',
      'MedSafe',
      'Sign Language Detecting Watch'
    ]
  },
  {
    id: 'tech',
    type: 'skills',
    icon: Code2,
    title: 'Tech Stack & Languages',
    content: 'Languages, frameworks and tools',
    details: [
      'Languages: C++, Java, C, Python',
      'Frontend: React, Next.js, HTML, CSS, TypeScript',
      'Backend: Flask, REST APIs; Databases: SQLite, MySQL; Supabase for auth & storage'
    ]
  },
  {
    id: 'coursework-summary',
    type: 'coursework',
    icon: Briefcase,
    title: 'Core Coursework',
    content: 'Strong academic foundation',
    details: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Computer Organization & Architecture',
      'Foundations of Machine Learning',
      'Computational Thinking'
    ]
  },
  {
    id: 'education',
    type: 'education',
    icon: GraduationCap,
    title: 'Education',
    content: 'B.E. in Computer Science & B.Sc. (Online)',
    details: [
      'B.M.S College of Engineering, Bangalore — B.E. in Computer Science & Engineering (2024–2028), CGPA: 9.625',
      'IIT Madras (Online Degree) — B.Sc. in Data Science & Applications (2024–2028)'
    ]
  },
  {
    id: 'achievements-summary',
    type: 'achievements',
    icon: Award,
    title: 'Achievements',
    content: 'Academic & extracurricular highlights',
    details: [
      '6th Rank in Karnataka — 2nd PUC Board Exams',
      'Silver Medal — ICSE Board Exams',
      'Black Belt in Kung Fu — Discipline & perseverance'
    ]
  }
];

export interface GameCard extends PortfolioCard {
  uniqueId: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export const createGameCards = (): GameCard[] => {
  const cards: GameCard[] = [];
  
  portfolioCards.forEach((card, index) => {
    // Create two copies of each card for matching
    cards.push({
      ...card,
      uniqueId: `${card.id}-a`,
      isFlipped: false,
      isMatched: false
    });
    cards.push({
      ...card,
      uniqueId: `${card.id}-b`,
      isFlipped: false,
      isMatched: false
    });
  });
  
  // Shuffle cards
  return cards.sort(() => Math.random() - 0.5);
};
