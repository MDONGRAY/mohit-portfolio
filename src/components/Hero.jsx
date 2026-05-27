import { motion } from 'framer-motion';
import { MapPin, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolio';

const Orb = ({ className }) => <div className={`orb ${className}`} />;

function SocialLink({ href, icon: Icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 rounded-xl glass-card flex items-center justify-center
                 text-gray-400 hover:text-white hover:border-primary-500/40 transition-colors"
    >
      <Icon size={18} />
    </motion.a>
  );
}

export default function Hero() {
  const NAV_OFFSET = 64;
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center animated-bg overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern" />
      <Orb className="w-96 h-96 bg-primary-600 top-10 -left-32" />
      <Orb className="w-80 h-80 bg-accent-500 -bottom-20 right-10" />
      <Orb className="w-64 h-64 bg-purple-600 top-1/2 left-1/2" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary-400/40"
          style={{ top: `${20 + i * 12}%`, left: `${10 + i * 14}%` }}
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      <div className="section-wrapper w-full pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Text content ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                         bg-primary-900/40 border border-primary-700/40
                         text-primary-300 text-sm font-medium mb-6"
            >
              <Sparkles size={14} className="text-primary-400" />
              Open to Work — Full Stack & AI Roles
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4"
            >
              <span className="text-white">Hi, I'm </span>
              <br />
              <span className="gradient-text">Mohit</span>
              <br />
              <span className="text-white">Dongray</span>
            </motion.h1>

            {/* Role pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {['Full Stack Developer', 'AI Enthusiast', 'MERN Stack'].map((tag) => (
                <span key={tag} className="skill-pill text-sm px-4 py-1.5">{tag}</span>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Location + email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-primary-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={14} className="text-primary-400" />
                {personalInfo.email}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button onClick={() => scrollToSection('#projects')} className="btn-primary group">
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollToSection('#contact')} className="btn-outline">
                Contact Me
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3"
            >
              <SocialLink href={personalInfo.linkedin} icon={LinkedinIcon} label="LinkedIn" />
              <SocialLink href={personalInfo.github}   icon={GithubIcon}   label="GitHub"   />
              <SocialLink href={`mailto:${personalInfo.email}`} icon={Mail} label="Email" />
            </motion.div>
          </div>

          {/* ── RIGHT: Big profile photo like reference ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Outer glow ring — animated */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[420px] h-[420px] rounded-full
                         bg-gradient-to-br from-primary-600/30 via-accent-500/20 to-purple-600/20
                         blur-2xl"
            />

            {/* Colored blob behind photo — matches reference style */}
            <div
              className="absolute w-[340px] h-[340px] rounded-full"
              style={{
                background: 'radial-gradient(circle at 60% 40%, #6d28d9 0%, #4c1d95 50%, #1e1b4b 100%)',
                filter: 'blur(2px)',
              }}
            />

            {/* Rotating dashed border ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[380px] h-[380px] rounded-full border-2 border-dashed border-primary-500/20"
            />

            {/* Static solid ring */}
            <div className="absolute w-[350px] h-[350px] rounded-full border border-primary-500/30" />

            {/* Profile photo */}
            <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden
                            ring-4 ring-primary-500/40 shadow-2xl shadow-primary-900/60 z-10">
              <img
                src="/profile.jpeg"
                alt="Mohit Dongray"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('fallback-initials');
                }}
              />
              {/* Subtle gradient overlay at bottom for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating stat badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-6 -left-4 z-20 glass-card px-4 py-2 flex items-center gap-2
                         border border-primary-500/30 shadow-lg shadow-primary-900/40"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-white">Available for hire</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-10 -right-4 z-20 glass-card px-4 py-2
                         border border-accent-500/30 shadow-lg shadow-accent-900/40"
            >
              <div className="text-xs text-gray-400 font-mono">Learning</div>
              <div className="text-lg font-black gradient-text">Since 2024</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-16 -left-8 z-20 glass-card px-4 py-2
                         border border-purple-500/30 shadow-lg shadow-purple-900/40"
            >
              <div className="text-xs text-gray-400 font-mono">Projects</div>
              <div className="text-lg font-black gradient-text">5+</div>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-primary-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Fallback initials CSS */}
      <style>{`
        .fallback-initials::after {
          content: 'MD';
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #6d28d9, #4f46e5);
          font-size: 64px;
          font-weight: 900;
          color: white;
          position: absolute;
          inset: 0;
        }
      `}</style>
    </section>
  );
}