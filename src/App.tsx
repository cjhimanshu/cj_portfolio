import React, { useEffect, useState, lazy, Suspense } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// Lazy-load non-critical sections to improve initial load
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
import LoadingScreen from './components/LoadingScreen';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Update title when component mounts
  useEffect(() => {
    document.title = "Himanshu Kumar | Portfolio";
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  // Prevent scrolling during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <ThemeProvider>
  <div className="App relative min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white">
        {/* Progress bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-primary-500 z-50 origin-left"
          style={{ scaleX }}
        />
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="min-h-screen"
            >
              <Navbar />
              <main>
                <Hero />
                <Suspense fallback={<div className="py-16 text-center">Loading content…</div>}>
                  <About />
                  <Skills />
                  <Projects />
                  <Certifications />
                  <Contact />
                </Suspense>
              </main>
              <Suspense fallback={null}>
                <Footer />
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;