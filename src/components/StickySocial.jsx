import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolio';

export default function StickySocial() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      <motion.a
        href={personalInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, x: 4 }}
        className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
        aria-label="LinkedIn"
      >
        <LinkedinIcon size={20} />
      </motion.a>
      <motion.a
        href={personalInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, x: 4 }}
        className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
        aria-label="GitHub"
      >
        <GithubIcon size={20} />
      </motion.a>
      <motion.a
        href={`mailto:${personalInfo.email}`}
        whileHover={{ scale: 1.2, x: 4 }}
        className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
        aria-label="Email"
      >
        <Mail size={18} />
      </motion.a>
    </div>
  );
}