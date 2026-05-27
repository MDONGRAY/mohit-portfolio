import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { useTheme } from '../context/ThemeContext';

const NAV_HEIGHT = 64; // 64px navbar + 24px breathing room // px — must match your navbar's actual height

const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey',  href: '#journey'  },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const { isDark, setIsDark } = useTheme();
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveLink(`#${e.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // ── KEY FIX: manual offset instead of scrollIntoView ──────────────
  const handleNav = (href) => {
    setMenuOpen(false);

    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.querySelector(href);
    if (!el) return;

    const top =
      el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

    window.scrollTo({ top, behavior: 'smooth' });
  };
  // ──────────────────────────────────────────────────────────────────

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-dark-800/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
            className="flex items-center gap-2 font-bold text-lg text-white group"
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg group-hover:shadow-primary-500/40 transition-shadow">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="gradient-text">MD</span>
          </motion.a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${activeLink === link.href
                    ? 'text-primary-400 bg-primary-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary text-sm px-5 py-2 gap-2"
            >
              <span>📄</span> Resume
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-64 bg-dark-700/95 backdrop-blur-xl border-l border-white/10 p-6 flex flex-col gap-2 pt-20">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNav(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all
                    ${activeLink === link.href
                      ? 'text-primary-400 bg-primary-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-sm gap-2"
                >
                  <span>📄</span> Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}