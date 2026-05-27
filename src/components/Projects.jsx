import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

function ProjectCard({ project, index }) {
  const isDeepGen = project.backgroundImage === true;

  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        whileHover={{ y: -6, boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="glass-card flex flex-col group relative overflow-hidden h-full"
      >
        {/* ── 1. IMAGE / HEADER AREA ── */}
        <div
          className="relative h-52 overflow-hidden rounded-t-2xl flex-shrink-0"
          style={
            isDeepGen
              ? {
                  backgroundImage: 'url(/deepgen.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }
              : {}
          }
        >
          {/* Gradient fill for non-image cards */}
          {!isDeepGen && (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-25`}
            />
          )}

          {/* Dark overlay on DeepGen so text stays readable */}
          {isDeepGen && (
            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-all duration-300" />
          )}

          {/* Subtle top accent stripe */}
          <div
            className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.color}`}
          />

          {/* Floating badges inside image */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-black text-sm shadow-lg`}
            >
              {index + 1}
            </div>
            {project.featured && (
              <span className="flex items-center gap-1 text-xs text-amber-400 bg-black/60 border border-amber-500/30 rounded-full px-2.5 py-0.5 font-medium backdrop-blur-sm">
                <Star size={9} fill="currentColor" /> Featured
              </span>
            )}
          </div>
        </div>

        {/* ── 2. GITHUB & LIVE DEMO BUTTONS (right below image) ── */}
        <div className="flex gap-2 px-5 py-3 border-b border-white/10 flex-shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-outline justify-center py-2 text-sm"
          >
            <GithubIcon size={13} /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-primary justify-center py-2 text-sm"
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        </div>

        {/* ── 3. CONTENT: title → subtitle → description → tech tags ── */}
        <div className="p-5 flex flex-col flex-1">
          {/* 3a. Title */}
          <h3 className="text-white font-bold text-base leading-snug mb-1 group-hover:text-primary-300 transition-colors">
            {project.title}
          </h3>

          {/* 3b. Subtitle */}
          {project.subtitle && (
            <p className="text-xs text-primary-300 font-mono mb-3">{project.subtitle}</p>
          )}

          {/* 3c. Description */}
          {project.description && (
            <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
              {project.description}
            </p>
          )}

          {/* 3d. Tech tags — always at bottom */}
          <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-white/5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/5 text-gray-300 border border-white/10 font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 bg-dark-800/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="section-wrapper">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary-500" />
            <span className="text-primary-400 text-sm font-semibold tracking-widest uppercase">
              Projects
            </span>
          </div>
          <h2 className="section-heading">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-400 max-w-xl mt-2">
            Real-world applications combining my full-stack and AI expertise — built with
            purpose, shipped with care.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mt-12 items-start">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            More projects available on{' '}
            <a
              href="https://github.com/mohitdongray"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors underline underline-offset-4"
            >
              GitHub
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}