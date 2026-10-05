export const profile = {
  name: 'Mamatha',
  fullName: 'Panday Mamatha',
  displayName: 'Mamatha Panday', // shown in the hero greeting
  college: 'Kakatiya Institute of Technology and Science (KITSW), Warangal',
  cgpa: '9.53',
  email: 'mamathapanday232@gmail.com',
  formKey: '535e9ea4-af45-49bc-9f43-ed9e2a1fc81f', 
  github: 'https://github.com/Mamatha-232',
  linkedin: 'https://www.linkedin.com/in/mamathapanday23/',
  kaggle: 'https://www.kaggle.com/mamathapanday',
  tagline: 'CS student at KITSW with a 9.53 CGPA. I build full-stack apps and I am learning ML.',
  about:
    'I am a Computer Science Engineering student with practical experience in full-stack web development using Java Full Stack and MERN, gained through internships and academic projects. I am now exploring AI and machine learning through hands-on projects, Forage GenAI and Kaggle, and I want to build intelligent, real-world applications.',
}

// Small text beside the rotating box, and the words that rotate inside it.
// To use "I can do" instead, change the label and make the words activities (e.g. 'web development').
export const roleLabel = "and I'm a"
export const roles = ['Web Developer', 'AI/ML Enthusiast', 'Problem Solver']

export const skills = {
  Languages: ['Java', 'Python'],
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  Backend: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs'],
  Database: ['MySQL', 'MongoDB'],
  Tools: ['Git', 'GitHub', 'Postman', 'ServiceNow (basics)'],
  Concepts: ['Data Structures', 'Algorithms', 'OOP', 'DBMS'],
  'AI/ML': ['Probability and Statistics', 'Linear Algebra', 'ML fundamentals'],
}

export const education = [
  { school: 'KITSW, Warangal', what: 'B.Tech, Computer Science and Engineering', score: 'CGPA 9.53 / 10', when: 'Expected May 2027' },
  { school: 'Alphores Junior College, Warangal', what: 'Intermediate (MPC)', score: 'CGPA 9.82 / 10', when: '2023' },
  { school: 'Gautami High School, Warangal', what: 'Secondary School Certificate', score: 'CGPA 10 / 10', when: '2021' },
]

export const projects = [
  {
    title: 'Multi-role Learning Management System',
    short: 'React frontend with separate views for students, teachers and admins.',
    tech: ['React', 'Spring Boot', 'MySQL'],
    repo: 'https://github.com/Mamatha-232/lms-project', 
  },
  {
    title: 'Institute Document Retrieval System',
    short: 'Portal to request and track official institute documents.',
    tech: ['JavaScript', 'Express.js', 'MongoDB'],
    repo: '#', // TODO: GitHub repo link
  },
  {
    title: 'FoundIt',
    short: 'A campus lost-and-found app for finding lost items.',
    tech: ['Python', 'Flask', 'SQLite'],
    repo: 'https://github.com/Mamatha-232/FoundIt',
  },
]

export const experience = [
  {
    role: 'Web Development Intern',
    org: 'KITS Warangal',
    meta: 'Jun 2025 to Aug 2025, on-site',
    short: 'Built three college department web apps with MERN and React in an Agile team.',
  },
  {
    role: 'ServiceNow Virtual Intern',
    org: 'ServiceNow University',
    meta: 'May 2025 to Jun 2025, remote',
    short: 'ServiceNow Administrator training: ITSM workflows, incident tickets and automation flows.',
  },
]

export const certificates = [
  { title: 'ServiceNow Virtual Internship Program', issuer: 'ServiceNow University and SmartBridge (AICTE approved)', when: 'Oct 2025', link: '/Certificate%20-%20ServiceNow.pdf' },
  { title: 'ServiceNow Micro-Certification: Welcome to ServiceNow', issuer: 'ServiceNow', when: 'June 2025', link: '/Micro-Certification%20-%20Welcome%20to%20ServiceNow.pdf' },
  { title: 'Institute Document Retrieval System (IDRS)', issuer: 'KITS Warangal', when: 'Jun 2025', link: '/Idrs_certificate_Mamatha.jpeg' },
  { title: 'Tata Forage GenAI Virtual Experience', issuer: 'Forage', when: 'Jun 2026', link: '/forage_genAI_completion_certificate.pdf' },
  { title: 'Kaggle: Python', issuer: 'Kaggle', when: 'June 2026', link: '/Mamatha%20Panday%20-%20Python.png' },
  { title: 'Kaggle: Pandas', issuer: 'Kaggle', when: 'July 2026', link: '/Mamatha%20Panday%20-%20Pandas.png' },
  { title: 'Kaggle: Data Visualization', issuer: 'Kaggle', when: 'July 2026', link: '/Mamatha%20Panday%20-%20Data%20Visualization.png' },
  { title: 'Kaggle: Intro to ML', issuer: 'Kaggle', when: 'July 2026', link: '/Mamatha%20Panday%20-%20Intro%20to%20Machine%20Learning.png' },
]

export const achievements = [
  'State Rank 3111 in EAMCET 2023 and 91.01 percentile in JEE Main 2023',
  'Solved 100+ DSA problems on LeetCode',
  'Took part in an online hackathon, building under time limits',
]
