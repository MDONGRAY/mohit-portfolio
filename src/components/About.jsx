import { motion } from 'framer-motion';
import { User, Code2, Cpu, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    desc:  'Building end-to-end applications with React, Node.js, Express, and MongoDB.',
    color: 'text-primary-400',
    bg:    'bg-primary-500/10',
  },
  {
    icon: Cpu,
    title: 'AI Platform Engineering',
    desc:  'Integrating multi-modal AI APIs to create intelligent, automated workflows.',
    color: 'text-accent-400',
    bg:    'bg-accent-500/10',
  },
  {
    icon: Globe,
    title: 'Real-World Projects',
    desc:  'From hackathons to production-grade apps — focused on impact over theory.',
    color: 'text-emerald-400',
    bg:    'bg-emerald-500/10',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 bg-dark-800/50">
      {/* Subtle divider gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="section-wrapper">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary-500" />
            <span className="text-primary-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
          </div>
          <h2 className="section-heading">
            Who I Am &amp;{' '}
            <span className="gradient-text">What I Build</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-14 mt-12 items-start">
          {/* Left: Bio text */}
          <div className="space-y-5">
            {personalInfo.longBio.split('\n\n').map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-gray-400 leading-relaxed text-base">{para}</p>
              </ScrollReveal>
            ))}

            {/* Quick facts */}
            <ScrollReveal delay={0.3}>
              <div className="glass-card p-5 mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: 'Education',  value: 'Diploma CSE'      },
                  { label: 'Location',   value: 'Bhopal, India'    },
                  { label: 'Specialty',  value: 'MERN + AI'        },
                  { label: 'Status',     value: '✅ Open to Work'  },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-xs text-gray-600 uppercase tracking-wider mb-0.5">{label}</div>
                    <div className="text-sm text-white font-medium">{value}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: highlight cards */}
          <div className="space-y-4">
            {highlights.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <ScrollReveal key={title} delay={i * 0.12} direction="right">
                <motion.div
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="glass-card p-5 flex items-start gap-4 cursor-default"
                >
                  <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={20} className={color} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}

            {/* Personality note */}
            <ScrollReveal delay={0.4} direction="right">
              <div className="glass-card p-5 border-l-2 border-primary-500">
                <p className="text-gray-300 text-sm italic leading-relaxed">
                  "I don't just write code — I architect solutions. Every project is an opportunity to push the boundary between what's possible and what's next."
                </p>
                <p className="text-primary-400 text-xs font-semibold mt-3">— Mohit Dongray</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}