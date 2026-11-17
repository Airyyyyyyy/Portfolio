// All site content lives here. Edit this file to update the portfolio.
// Replace every placeholder below with your real details.

export const profile = {
  name: 'Lawal Abdulmaleeq',
  title: 'Full-stack Software Developer',
  tagline: '',
  location: 'Lagos, Nigeria',
  status: 'Available for new projects', // Leave empty to hide.
  email: 'lawalmaleeq44@gmail.com',
  resumeUrl: '/Lawal Abdulmaleeq CV.pdf', 
  photo: '/me.jpg', 
  about: [
    'I\'m Maleeq, a software developer passionate about building full-stack web applications and integrating machine learning to create intelligent, practical solutions. I work primarily with technologies such as Python, Django, React, and modern web development tools.',
    'I enjoy solving complex problems through code, learning new technologies, and turning ideas into functional, user-friendly applications. My goal is to build software that is not only technically sound but also delivers real value to its users.',
  ],
}

const brand = (slug) => `https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons/${slug}.svg`

export const socials = [
  { label: 'GitHub', url: 'https://github.com/Airyyyyyyy', icon: brand('github') },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/abdulmaleeq-lawal-a4863b285/', icon: brand('linkedin') },
  { label: 'Twitter / X', url: 'https://x.com/_maleeq__', icon: brand('x') },
  { label: 'WhatsApp', url: 'https://wa.me/2347081275417', icon: brand('whatsapp') },
]

export const projects = [
  {
    title: 'Weather AI',
    description: 'A Django web application delivering live weather data, smart alerts, ML-based recommendations, and an interactive chat assistant.',
    tech: ['Django', 'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'OpenWeatherMap API'],
    // category: 'Frontend',
    live: 'https://weather-project-oqys.onrender.com',
    repo: 'https://github.com/Airyyyyyyy/weather_project',
    image: '/Weather.jpg',
  },
  {
    title: 'Quiz App',
    description: 'A timed multiple-choice quiz app built with Django. Users pick a quiz, answer one question at a time within a time limit, can go back to review earlier answers, and get a score at the end.',
    tech: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
    category: 'Full-stack',
    live: 'https://quiz-app-61ts.onrender.com/',
    repo: 'https://github.com/Airyyyyyyy/Quiz_app',
    image: '/Quiz.jpg',
  },
  {
    title: 'Parking Web App',
    description: 'Campus parking system allowing drivers to find and book available parking slots, with administrators managing lots, slots, and bookings, plus ML-driven availability predictions.',
    tech: ['Python', 'Django', 'MongoDB', 'Pandas', 'Scikit-learn', 'JavaScript'],
    category: 'Frontend',
    live: 'https://parking-app-jste.onrender.com/',
    repo: 'https://github.com/Airyyyyyyy/Parking-APP',
    image: '/Parking.jpg',
  },
  {
    title: 'Daily Log',
    description: 'An internal tool for tracking staff daily activity in 30-minute time-block increments.',
    tech: ['Python', 'Django', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    live: 'https://daily-log-3lqa.onrender.com/',
    repo: 'https://github.com/Airyyyyyyy/daily_log',
    image: '/Daily.jpg',
  },
]

// Icons come from the Devicon set (and Simple Icons for React Router).
// To add a tool: give it a name and an icon slug. Set mono: true for black logos so they flip in dark mode.
const dev = (slug, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${slug}/${slug}-${variant}.svg`

export const skills = [
  {
    group: 'Languages',
    items: [
      { name: 'JavaScript', icon: dev('javascript') },
      { name: 'HTML', icon: dev('html5') },
      { name: 'CSS', icon: dev('css3') },
      { name: 'Python', icon: dev('python') },
    ],
  },
  {
    group: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: dev('react') },
      { name: 'Tailwind CSS', icon: dev('tailwindcss') },
      { name: 'Django', icon: dev('django', 'plain'), mono: true },
      { name: 'NumPy', icon: dev('numpy') },
      { name: 'Scikit-learn', icon: dev('scikitlearn') },
    ],
  },
  {
    group: 'Tools',
    items: [
      { name: 'Git', icon: dev('git') },
      { name: 'GitHub', icon: dev('github'), mono: true },
      { name: 'Vite', icon: dev('vitejs') },
      { name: 'VS Code', icon: dev('vscode') },
      {name: 'MongoDB', icon: dev('mongodb')},
    ],
  },
]

export const experience = [
  {
    role: 'IT Department Intern',
    org: 'Kadick Integrated Limited',
    period: 'April 2025 - October 2025',
    summary: '•	Participated in software development and web application projects alongside the technical team.\n •	Assisted in troubleshooting and resolving technical issues, contributing to the maintenance of IT systems.\n•	Completed training and practical activities covering Python, Django, databases, APIs, and web development.',
  },
  {
    role: 'Full-stack Software Developer',
    org: '  Freelance',
    period: 'March 2026 - Present',
    summary: '•	Developed and deployed full-stack web applications for clients, utilizing technologies such as Django, React, and Tailwind CSS.\n•	Implemented responsive designs and user-friendly interfaces, ensuring optimal user experience across devices.',
  },
]

export const education = [
  {
    role: 'B.Sc Computer Science',
    org: 'Chrisland University, Abeokuta, Nigeria',
    period: 'October 2023 - August 2026',
    summary: 'Studied computer science with a focus on software engineering, algorithms, and data structures.',
  },
]
