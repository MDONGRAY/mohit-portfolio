import { motion } from 'framer-motion';
import { timeline } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

function TimelineItem({ item, index, isLast }) {
  return (
    <ScrollReveal delay={index * 0.12}>
      <div className="relative pl-12 pb-10">
        {/* Vertical line */}
        {!isLast && (
          <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/60 to-transparent" />
        )}

        {/* Icon bubble */}
        <div className="absolute left-0 top-0 w-9 h-9 rounded-full glass-card border border-primary-500/30
                         flex items-center justify-center text-lg shadow-lg shadow-primary-900/30 z-10">
          {item.icon}
        </div>

        {/* Year badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block mb-2"
        >
          <span className="px-3 py-1 rounded-full bg-primary-900/50 border border-primary-700/40
                           text-primary-300 text-xs font-mono font-semibold">
            {item.year}
          </span>
        </motion.div>

        {/* Content card */}
        <motion.div
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="glass-card p-5 mt-2"
        >
          <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
        </motion.div>
      </div>
    </ScrollReveal>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="relative py-16 bg-dark-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="section-wrapper">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary-500" />
            <span className="text-primary-400 text-sm font-semibold tracking-widest uppercase">Journey</span>
          </div>
          <h2 className="section-heading">
            My{' '}
            <span className="gradient-text">Developer Story</span>
          </h2>
          <p className="text-gray-400 max-w-xl mt-2">
            From first lines of code to multi-modal AI platforms — a timeline of growth.
          </p>
        </ScrollReveal>

        <div className="mt-14 max-w-2xl">
          {timeline.map((item, i) => (
            <TimelineItem
              key={item.title}
              item={item}
              index={i}
              isLast={i === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}