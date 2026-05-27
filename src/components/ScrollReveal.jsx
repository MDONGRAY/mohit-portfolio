import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

/**
 * Reusable scroll-reveal wrapper.
 * Animates children into view when they enter the viewport.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up', // 'up' | 'left' | 'right' | 'none'
}) {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const controls = useAnimation();

  const variants = {
    hidden: {
      opacity: 0,
      y:  direction === 'up'    ?  40 : 0,
      x:  direction === 'left'  ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
