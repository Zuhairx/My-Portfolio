import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Loading } from './components/Loading';
import { AllProjects } from './components/AllProjects';
import { Certifications } from './components/Certifications'; 
import { Toaster } from 'sonner';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showTransition, setShowTransition] = useState(false);

  const handleLoadingComplete = () => {
    // Start transition sequence
    setShowTransition(true);
    // Black flash
    setTimeout(() => {
      setIsLoading(false);
      // Blue gradient flash will show after loading is hidden
    }, 200);
  };

  return (
    <div className="relative">
      {/* Loading screen */}
      {isLoading && (
        <Loading onComplete={handleLoadingComplete} />
      )}

      {/* Enhanced Transition Sequence */}
      {showTransition && isLoading && (
        <>
          {/* Black flash */}
          <motion.div
            className="fixed inset-0 bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          />

          {/* Curtain wipe effect - left to right */}
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black z-40"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          {/* Curtain wipe effect - right to left */}
          <motion.div
            className="fixed top-0 right-0 w-full h-full bg-black z-40"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Main content */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-x-hidden"
        >
          {/* Enhanced blue gradient flash with multiple layers */}
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 z-50 pointer-events-none"
            initial={{ opacity: 1, scale: 1.1 }}
            animate={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          />

          {/* Secondary flash for depth */}
          <motion.div
            className="fixed inset-0 bg-gradient-to-tl from-cyan-400 via-blue-500 to-purple-600 z-40 pointer-events-none"
            initial={{ opacity: 0.8, rotate: -5 }}
            animate={{ opacity: 0, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          />

          {/* Navigation with slide down animation */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <Navigation />
          </motion.div>

          <Routes>
            <Route path="/" element={
              <main>
                <section id="home" className="scroll-mt-20">
                  <Hero />
                </section>

                {/* About section with slide up animation */}
                <motion.section
                  id="about"
                  className="scroll-mt-20"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <About />
                </motion.section>

                {/* Skills section with slide up animation */}
                <motion.section
                  id="skills"
                  className="scroll-mt-20"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                >
                  <Skills />
                </motion.section>

                {/* Projects section with slide up animation */}
                <motion.section
                  id="projects"
                  className="scroll-mt-20"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  <Projects />
                </motion.section>

                   {/* Certifications section with slide up animation */}
                <motion.section
                  id="Certifications"
                  className="scroll-mt-20"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  <Certifications />
                </motion.section>

                {/* Contact section with slide up animation */}
                <motion.section
                  id="contact"
                  className="scroll-mt-20"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  <Contact />
                </motion.section>
              </main>
            } />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>

          {/* Footer with slide up animation */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Footer />
          </motion.div>

          <Toaster />
        </motion.div>
      )}
    </div>
  );
}
