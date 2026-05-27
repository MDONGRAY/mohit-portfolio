import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop,  setShowTop]  = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled  = window.scrollY;
      const totalH    = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(totalH > 0 ? (scrolled / totalH) * 100 : 0);
      setShowTop(scrolled > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-gradient-to-r from-primary-500 via-accent-400 to-primary-400 origin-left"
        style={{ scaleX: progress / 100 }}
        initial={{ scaleX: 0 }}
      />

      {/* Back to top button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl
                       bg-gradient-to-br from-primary-600 to-primary-500
                       text-white flex items-center justify-center
                       shadow-lg shadow-primary-900/50 hover:shadow-primary-500/30
                       transition-shadow"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
