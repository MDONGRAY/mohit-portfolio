import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolio';

const socialLinks = [
  {
    href:  personalInfo.linkedin,
    icon:  LinkedinIcon,
    label: 'LinkedIn',
    color: 'hover:text-blue-400 hover:border-blue-500/40',
  },
  {
    href:  personalInfo.github,
    icon:  GithubIcon,
    label: 'GitHub',
    color: 'hover:text-white hover:border-white/40',
  },
  {
    href:  `mailto:${personalInfo.email}`,
    icon:  Mail,
    label: 'Email',
    color: 'hover:text-red-400 hover:border-red-500/40',
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-900 border-t border-white/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand / logo */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-xl font-black gradient-text tracking-tight">
              Mohit Dongray
            </span>
            <span className="text-xs text-gray-600 font-mono">
              Full Stack Developer · AI Enthusiast
            </span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-11 h-11 rounded-xl glass-card flex items-center justify-center
                            text-gray-500 border border-white/10 transition-all duration-200 ${color}`}
              >
                <Icon size={19} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600 text-center md:text-right">
            © {new Date().getFullYear()} Mohit Dongray.
            <br className="hidden md:block" />
            <span className="md:ml-0"> All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}