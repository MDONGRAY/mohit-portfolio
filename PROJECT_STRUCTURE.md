# Mohit Portfolio - Project Structure & Components

## 📁 Folder Hierarchy

```
mohit-portfolio-main/
│
├── src/                              # Main source code directory
│   ├── components/                   # Reusable React components
│   │   ├── About.jsx                 # About section component
│   │   ├── BrandIcons.jsx            # Social/Brand icons component
│   │   ├── Contact.jsx               # Contact section component
│   │   ├── Footer.jsx                # Footer component
│   │   ├── Hero.jsx                  # Hero/Landing section component
│   │   ├── Journey.jsx               # Experience/Journey timeline component
│   │   ├── Loader.jsx                # Loading animation component
│   │   ├── Navbar.jsx                # Navigation bar component
│   │   ├── Projects.jsx              # Projects showcase component
│   │   ├── ScrollProgress.jsx        # Scroll progress indicator component
│   │   ├── ScrollReveal.jsx          # Scroll reveal animation component
│   │   └── Skills.jsx                # Skills section component
│   │
│   ├── context/                      # React context for state management
│   │   └── ThemeContext.jsx          # Theme (dark/light mode) context
│   │
│   ├── data/                         # Static data and configuration
│   │   └── portfolio.js              # Portfolio content data (projects, skills, etc.)
│   │
│   ├── assets/                       # Images and media files
│   │   ├── hero.png                  # Hero section background/image
│   │   ├── react.svg                 # React logo
│   │   └── vite.svg                  # Vite logo
│   │
│   ├── App.jsx                       # Main application component
│   ├── App.css                       # Application-wide styles
│   ├── main.jsx                      # React entry point
│   └── index.css                     # Global CSS styles
│
├── public/                           # Static assets served as-is
│
├── Configuration Files
│   ├── vite.config.js                # Vite build tool configuration
│   ├── tailwind.config.js            # Tailwind CSS configuration
│   ├── postcss.config.js             # PostCSS configuration (CSS processing)
│   ├── eslint.config.js              # ESLint code quality rules
│   ├── vercel.json                   # Vercel deployment configuration
│   ├── index.html                    # HTML entry point
│   └── package.json                  # Project dependencies and scripts
│
├── .gitignore                        # Git ignore rules
├── package-lock.json                 # Locked dependency versions
└── README.md                         # Project documentation
```

---

## 🛠️ Technologies & Components Used

### **Core Framework**
- **React** (v19.2.6) - UI component library
- **React DOM** (v19.2.6) - React rendering in browser

### **Build Tools**
- **Vite** (v8.0.12) - Lightning-fast build tool and dev server
- **@vitejs/plugin-react** (v6.0.1) - React plugin for Vite

### **Styling**
- **Tailwind CSS** (v3.4.19) - Utility-first CSS framework
- **PostCSS** (v8.5.14) - CSS transformation tool
- **Autoprefixer** (v10.5.0) - Adds vendor prefixes to CSS

### **Animation & Motion**
- **Framer Motion** (v12.38.0) - Production-ready animation library
- ScrollReveal animations for entrance effects

### **Navigation**
- **React Scroll** (v1.9.3) - Smooth scrolling library

### **UI Icons**
- **Lucide React** (v1.16.0) - Beautiful, consistent SVG icons

### **Development Tools**
- **ESLint** (v10.3.0) - JavaScript linting and code quality
  - eslint-plugin-react-hooks - React hooks best practices
  - eslint-plugin-react-refresh - React Fast Refresh support
  - @eslint/js - Core ESLint rules
- **TypeScript Types** (for better IDE support)
  - @types/react (v19.2.14)
  - @types/react-dom (v19.2.3)

### **Testing/Automation**
- **Puppeteer** (v24.43.1) - Headless browser automation (optional)

### **Deployment**
- **Vercel** - Deployment platform (configured via vercel.json)

---

## 🎯 Key Components Overview

| Component | Purpose |
|-----------|---------|
| **Navbar** | Navigation menu with scroll links |
| **Hero** | Landing/introduction section |
| **About** | About section with personal info |
| **Skills** | Technical skills showcase |
| **Projects** | Portfolio projects display |
| **Journey** | Experience/timeline section |
| **Contact** | Contact form/information |
| **Footer** | Page footer with links |
| **BrandIcons** | Social media/brand icons |
| **ScrollProgress** | Visual scroll progress indicator |
| **ScrollReveal** | Scroll animation effects |
| **Loader** | Loading animation |

---

## 📦 NPM Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm run lint     # Check code quality with ESLint
npm run preview  # Preview production build locally
```

---

## 🎨 Project Features

✨ **Smooth Animations** - Framer Motion powered transitions
🌓 **Theme Support** - Dark/Light mode via Context API
📱 **Responsive Design** - Tailwind CSS responsive utilities
⚡ **Fast Performance** - Vite optimized builds
♿ **Accessible** - Semantic HTML and ARIA attributes
🎯 **Scroll Effects** - Scroll reveal and progress tracking

---

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Deploy to Vercel**
   - Push to GitHub and connect to Vercel
   - Automatic deployments on push

