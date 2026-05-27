import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Pulsing logo */}
      <motion.div
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6 shadow-2xl shadow-primary-900/60"
        animate={{ scale: [1, 1.12, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Code2 size={28} className="text-white" />
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-xl font-bold gradient-text mb-6"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        Mohit Dongray
      </motion.h1>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-accent-400 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}
