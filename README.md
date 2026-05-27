# Mohit Dongray — Developer Portfolio

A premium, production-ready, and modern developer portfolio built with React.js, Tailwind CSS, and Framer Motion. Engineered for performance, accessibility, and a stunning recruiter-focused user experience.

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React.js (Vite) |
| **Styling** | Tailwind CSS v3 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React + Custom SVG Brand Icons |
| **Contact Form** | Web3Forms (Serverless) |
| **Deployment** | Vercel (SPA routing configured) |

---

## ⚡ Features

- **Blazing Fast Performance** — Optimized chunking and loading strategies.
- **Modern Glassmorphism UI** — Premium dark/light themes with frosted glass components.
- **Smooth Animations** — Complex scroll reveals and interaction physics using Framer Motion.
- **Working Contact Form** — Fully functional serverless form delivery via Web3Forms.
- **Responsive Design** — Pixel-perfect layouts across mobile, tablet, and desktop.
- **SEO Optimized** — Configured metadata, Open Graph tags, and accessibility standards.

---

## 🛠️ Local Development Setup

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone https://github.com/mohitdongray/portfolio.git
cd portfolio

# Install all necessary NPM packages
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory. You will need a free Web3Forms Access Key to make the contact form work:
1. Go to [Web3Forms](https://web3forms.com/)
2. Generate an access key for your email
3. Add it to your `.env` file like this:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

### 3. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 🏗️ Production Build

To generate the optimized static bundle for deployment:
```bash
npm run build
```
*The output will be generated in the `dist/` directory.*

---

## ☁️ Deployment Guide (Vercel)

This project is already pre-configured for **Vercel** with a `vercel.json` file handling Single-Page Application (SPA) routing.

### Step 1: Push to GitHub
1. Create a new repository on GitHub.
2. Run the following commands:
```bash
git init
git add .
git commit -m "Initial commit: Production-ready portfolio"
git branch -M main
git remote add origin https://github.com/mohitdongray/your-repo-name.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Log in to [Vercel Dashboard](https://vercel.com).
2. Click **Add New... > Project**.
3. Import your newly created GitHub repository.
4. **Important**: Under **Environment Variables**, add:
   - Name: `VITE_WEB3FORMS_ACCESS_KEY`
   - Value: `your_actual_access_key`
5. Click **Deploy**. Vercel will automatically detect Vite and build the site.

---

## 🔧 Content Customization

All personal data, skills, projects, and timeline events are centralized. 
To update the portfolio content without touching the UI components, simply edit:
**`src/data/portfolio.js`**

Everything dynamically updates from this single source of truth.

---
*Built with ❤️ by Mohit Dongray.*
