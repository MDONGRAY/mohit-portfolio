import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { ThemeProvider } from './context/ThemeContext';
import Loader         from './components/Loader';
import Navbar         from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero           from './components/Hero';
import About          from './components/About';
import Skills         from './components/Skills';
import Projects       from './components/Projects';
import Journey        from './components/Journey';
import Contact        from './components/Contact';
import Footer         from './components/Footer';
import StickySocial   from './components/StickySocial';  // ✅ import sticky social

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Contact />
          </main>
          <Footer />
          <StickySocial />  {/* ✅ add sticky social icons */}
        </>
      )}
    </ThemeProvider>
  );
}