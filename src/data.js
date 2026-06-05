import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaJava, FaPython } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

export const skills = [
  { name: 'HTML', icon: FaHtml5, level: 90, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, level: 85, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, level: 80, color: '#F7DF1E' },
  { name: 'PHP', icon: FaPhp, level: 75, color: '#777BB4' },
  { name: 'Laravel', icon: FaLaravel, level: 70, color: '#FF2D20' },
  { name: 'Java', icon: FaJava, level: 70, color: '#007396' },
  { name: 'Python', icon: FaPython, level: 65, color: '#3776AB' },
  { name: 'C#', icon: TbBrandCSharp, level: 60, color: '#239120' },
  { name: 'MySQL', icon: SiMysql, level: 80, color: '#4479A1' },
];

export const experiences = [
  {
    period: 'April 2026 — Present',
    role: 'Records Management and Administrative Operations Intern',
    org: 'Silangan Multipurpose Cooperative / Davao City, PH',
    desc: 'Assisted in records management, document control, and administrative tasks including filing, document verification, and data encoding. Supported daily office operations and maintained accurate, organized, and confidential records while ensuring efficient information management.',
    tags: ['Records Management', 'Data Encoding', 'Admin Support']
  },
  {
    period: 'March 2026',
    role: 'Technofair 2026 Participant',
    org: 'Event Participation',
    desc: 'Participated in Technofair 2026 as a project exhibitor, showcasing OutcomeX.',
    tags: ['Exhibition', 'OutcomeX', 'Technofair']
  },
  {
    period: 'March 26, 2025',
    role: 'Champion — MLBB Tournament',
    org: 'CET Technofair',
    desc: 'Secured the championship title in the Mobile Legends: Bang Bang tournament during the CET Technofair.',
    tags: ['Esports', 'MLBB', 'Champion']
  },
  {
    period: 'March 15, 2025',
    role: 'Champion — MLBB Tournament',
    org: 'PSITS Region 11 Festival of Talents',
    desc: 'Emerged as the champion in the Mobile Legends: Bang Bang competition at the PSITS Region 11 Festival of Talents.',
    tags: ['Esports', 'MLBB', 'Champion']
  },
  {
    period: 'October 14, 2024',
    role: 'Champion — MLBB Tournament',
    org: 'CET DAY',
    desc: 'Secured the championship title in the Mobile Legends: Bang Bang tournament during CET DAY.',
    tags: ['Esports', 'MLBB', 'Champion']
  },
  {
    period: 'February 2024',
    role: 'Participant — MLBB Competition',
    org: 'PSITS Interschool Esports',
    desc: 'Participated and competed in the PSITS Interschool Esports Mobile Legends: Bang Bang competition.',
    tags: ['Esports', 'MLBB', 'Participant']
  },
  {
    period: 'March 20, 2024',
    role: 'Champion — MLBB Tournament',
    org: 'CET Technofair',
    desc: 'Won the championship for the Mobile Legends: Bang Bang tournament during the CET Technofair.',
    tags: ['Esports', 'MLBB', 'Champion']
  },
  {
    period: 'May 23–24, 2023',
    role: 'Champion — MLBB: Esports Tournament',
    org: 'Technofair 2023',
    desc: 'Secured the championship in the Mobile Legends: Bang Bang esports tournament during Technofair 2023.',
    tags: ['Esports', 'MLBB', 'Champion']
  },
  {
    period: 'November 17–18, 2022',
    role: 'Champion — MLBB Tournament',
    org: 'CET DAY',
    desc: 'Emerged as the champion in the Mobile Legends: Bang Bang tournament during CET DAY.',
    tags: ['Esports', 'MLBB', 'Champion']
  }
];

export const projects = [
  {
    title: 'OUTCOMEX',
    icon: '🧠',
    desc: 'An NLP-powered desktop application that analyzes the alignment between BSIT course outlines and current industry technical competency requirements.',
    stack: ['Python', 'PyQt6', 'PyTorch', 'NLP'],
  },
  {
    title: 'Mitsuketa',
    icon: '🔍',
    desc: 'A Laravel-based Lost and Found Portal designed to help users report, track, and recover misplaced belongings efficiently. The platform provides a centralized system for submitting reports, managing claims, and facilitating communication between owners and finders.',
    stack: ['Laravel', 'PHP', 'MySQL'],
  },
  {
    title: 'Sanction Management System',
    icon: '⚖️',
    desc: 'A desktop application developed to help educational institutions efficiently manage student disciplinary records and sanctions. Provides a centralized platform for recording violations, assigning sanctions, tracking history, and generating reports.',
    stack: ['C#', 'SQL'],
  }
];

export const contactLinks = [
  { icon: '📧', label: 'Email', value: 'kurisutera13@gmail.com', href: 'mailto:kurisutera13@gmail.com' },
  { icon: '💙', label: 'Facebook', value: 'Paul Japhet Cabusas', href: 'https://facebook.com' },
  { icon: '📸', label: 'Instagram', value: '@kurisuteraa_', href: 'https://instagram.com/kurisuteraa_' },
  { icon: '🐙', label: 'GitHub', value: '@Kurisutera', href: 'https://github.com/Kurisutera' },
  { icon: '💼', label: 'LinkedIn', value: 'Paul Japhet Cabusas', href: 'https://linkedin.com' },
];
export const certificates = [
  {
    title: 'Intro to SQL',
    icon: '📜',
    image: '/cert/introSQL.png',
    file: '/cert/introSQL.pdf'
  },
  {
    title: 'SQL Certification',
    icon: '📜',
    image: '/cert/sqlcert.png',
    file: '/cert/sqlcert.pdf'
  },
  {
    title: 'Hands-On Python Machine Learning with Real World Projects',
    icon: '📜',
    image: '/cert/Hands-On Python Machine Learning with Real World Projects.jpg',
    file: '/cert/Hands-On Python Machine Learning with Real World Projects.pdf'
  },
  {
    title: 'Complete Machine Learning Project Using YOLOv9 From Scratch',
    icon: '📜',
    image: '/cert/Complete Machine Learning Project Using YOLOv9 From Scratch.jpg',
    file: '/cert/Complete Machine Learning Project Using YOLOv9 From Scratch.pdf'
  },
  {
    title: 'Cloud Engineering Masterclass AWS & Azure - Zero to Product',
    icon: '📜',
    image: '/cert/Cloud Engineering Masterclass AWS & Azure - Zero to Product.jpg',
    file: '/cert/Cloud Engineering Masterclass AWS & Azure - Zero to Product.pdf'
  }
];
