import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import {
  FaJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaBolt,
  FaGitAlt,
  FaGithub,
  FaCloud,
  FaClock,
} from 'react-icons/fa';
import { TbBrandTailwind } from 'react-icons/tb';

const iconMap = {
  FaJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaReact,
  TbBrandTailwind,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaBolt,
  FaGitAlt,
  FaGithub,
  FaCloud,
  FaClock,
};

const iconColors = {
  FaJs: 'text-yellow-400',
  FaPython: 'text-blue-400',
  FaJava: 'text-orange-500',
  FaHtml5: 'text-orange-500',
  FaCss3: 'text-blue-500',
  FaReact: 'text-cyan-400',
  TbBrandTailwind: 'text-cyan-400',
  FaNodeJs: 'text-green-500',
  FaServer: 'text-gray-400',
  FaDatabase: 'text-green-500',
  FaBolt: 'text-teal-400',
  FaGitAlt: 'text-orange-500',
  FaGithub: 'text-white',
  FaCloud: 'text-blue-400',
  FaClock: 'text-gray-400',
};

function SkillIcon({ skill }) {
  const IconComponent = iconMap[skill.icon];
  const colorClass = iconColors[skill.icon] || 'text-gray-300';
  if (!IconComponent) {
    return <div className="w-full h-full bg-gray-400 rounded" />;
  }
  return <IconComponent className={`w-8 h-8 ${colorClass} group-hover:text-primary-300 transition-colors`} />;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData.skills
      : skillsData.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-16 bg-dark-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="section-wrapper">
        {/* Heading */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary-500" />
            <span className="text-primary-400 text-sm font-semibold tracking-widest uppercase">
              Skills
            </span>
          </div>
          <h2 className="section-heading">
            My <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-gray-400 max-w-xl mt-2">
            A curated stack built through real projects, self-learning, and hands-on development.
          </p>
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal delay={0.1} className="mt-8">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skillsData.categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300
                  ${
                    activeCategory === category.key
                      ? 'bg-primary-600 text-white border border-primary-500 shadow-lg shadow-primary-500/30'
                      : 'bg-white/5 text-gray-400 border border-white/10 hover:border-primary-500/50'
                  }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills grid — 8 columns */}
        <ScrollReveal delay={0.2} className="mt-12">
          <motion.div
            layout
            className="grid grid-cols-4 md:grid-cols-8 gap-4"
          >
            {filteredSkills.map((skill, idx) => {
              const content = (
                <>
                  {/*
                    Icon wrapper — deliberately no `text-*` color class here so
                    devicon `colored` CSS is not overridden by Tailwind utilities.
                  */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg
                                  bg-white/8 group-hover:bg-white/12 transition-colors">
                    <SkillIcon skill={skill} />
                  </div>
                  <span
                    className="text-xs font-semibold text-gray-300 text-center
                               group-hover:text-white transition-colors leading-tight mt-2"
                  >
                    {skill.name}
                  </span>
                </>
              );

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  whileHover={{ y: -4, scale: 1.08 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg glass-card group cursor-default
                             hover:shadow-md hover:shadow-primary-500/15 hover:border-primary-500/25 transition-all h-fit"
                >
                  {skill.url ? (
                    <a
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </ScrollReveal>

        {filteredSkills.length === 0 && (
          <p className="text-center text-gray-500 mt-12">No skills found in this category.</p>
        )}

        {/* Stats */}
        <ScrollReveal delay={0.3} className="mt-16 pt-12 border-t border-white/5">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Total Skills', value: skillsData.skills.length },
              { label: 'Categories',   value: skillsData.categories.length - 1 },
              { label: 'Fresher',      value: '2026' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{value}</div>
                <p className="text-gray-500 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}