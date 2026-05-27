export const personalInfo = {
  name: "Mohit Dongray",
  role: "Full Stack Developer",
  bio: "Final-year Diploma student passionate about full-stack development, AI platforms, and building real-world amazing things.",
  longBio:
    "I'm a full-stack developer and AI enthusiast from Bhopal, India. I love building real-world applications that solve problems and push the boundaries of what's possible.\n\nWith a strong foundation in MERN stack and AI integration, I've built projects ranging from multi-modal AI platforms to full-stack e-commerce apps. I'm always eager to learn new technologies and take on challenging projects.",
  location: "Bhopal, India",
  email: "dongraymohit@gmail.com",
  github: "https://github.com/mohitdongray",
  linkedin: "https://linkedin.com/in/mohit-dongray-067a25380",
};

export const skillsData = {
  categories: [
    { name: "All",                   key: "all"       },
    { name: "Programming Languages", key: "languages" },
    { name: "Frontend",              key: "frontend"  },
    { name: "Backend",               key: "backend"   },
    { name: "Tools",                 key: "tools"     },
  ],
  skills: [
    // ── Languages ────────────────────────────────────────────────────────────
    { name: "JavaScript", icon: "FaJs", category: "languages" },
    { name: "Python",     icon: "FaPython", category: "languages" },
    { name: "Java",       icon: "FaJava", category: "languages" },

    // ── Frontend ─────────────────────────────────────────────────────────────
    { name: "HTML5",        icon: "FaHtml5", category: "frontend" },
    { name: "CSS3",         icon: "FaCss3", category: "frontend" },
    { name: "React",        icon: "FaReact", category: "frontend" },
    { name: "Tailwind CSS", icon: "TbBrandTailwind", category: "frontend" },

    // ── Backend ──────────────────────────────────────────────────────────────
    { name: "Node.js",  icon: "FaNodeJs", category: "backend" },
    { name: "Express",  icon: "FaServer", category: "backend" },
    { name: "MongoDB",  icon: "FaDatabase", category: "backend" },
    { name: "Mongoose", icon: "FaDatabase", category: "backend" },
    { name: "FastAPI",  icon: "FaBolt", category: "backend" },

    // ── Tools ────────────────────────────────────────────────────────────────
    { name: "Git",          icon: "FaGitAlt", category: "tools" },
    { name: "GitHub",       icon: "FaGithub", category: "tools" },
    { name: "Render",       icon: "FaCloud", url: "https://render.com", category: "tools" },
    { name: "cron-job.org", icon: "FaClock", url: "https://cron-job.org", category: "tools" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "DeepGen AI – Multi‑Modal AI Platform",
    subtitle: "AI Generation Pipeline",
    description: "Multi-modal AI platform for generating images & videos from text, with automatic provider fallback and async job polling. Built with React, Node.js, FastAPI, and MongoDB. Deployed on Render.",
    tech: ["React", "Node.js", "FastAPI", "MongoDB", "Tailwind"],
    github: "https://github.com/mohitdongray/deepgen-ai",
    demo: "https://deepgen-ai-1.onrender.com",
    featured: true,
    color: "from-primary-500 to-accent-500",
    backgroundImage: true, // uses /deepgen.png for background
  },
  {
    id: 2,
    title: "Weather Dashboard",
    subtitle: "Real‑time Weather App",
    description:
      "Displays current weather, 5‑day forecast, and interactive maps using OpenWeatherMap API. Built with React and Tailwind CSS. Features search by city, geolocation, and responsive design.",
    tech: ["React", "Tailwind CSS", "OpenWeather API", "Axios"],
    github: "https://github.com/mohitdongray/weather-app",
    demo: "https://weather-demo.onrender.com",
    featured: false,
    color: "from-cyan-500 to-blue-500",
    backgroundImage: false, // standard glass card (no background image)
  },
];

export const timeline = [
  {
    year: "2023 – 2024",
    title: "Full‑Stack Learning Journey",
    description:
      "Started learning full‑stack development during diploma. Completed multiple courses and built several personal projects (weather app, e‑commerce clone, etc.), mastering React, Node.js, Express, MongoDB, and Tailwind CSS.",
    icon: "📚",
  },
  {
    year: "2025",
    title: "Smart India Hackathon (SIH) – Team Leader",
    description:
      "Led a team to build a disaster prediction system. Gained hands‑on experience in team leadership, API integration, and rapid prototyping under tight deadlines.",
    icon: "💻",
  },
  {
    year: "2026",
    title: "Diploma Completed & DeepGen AI Platform",
    description:
      "Completed my Diploma in Computer Science Engineering. As my final‑year project, built a multi‑modal AI generation platform with automatic provider fallback, async job processing, and full‑stack deployment.",
    icon: "🤖",
  },
];