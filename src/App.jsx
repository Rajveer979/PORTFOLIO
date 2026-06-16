import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import { useEffect, useRef } from 'react';
import { trackEvent, trackSectionView } from './analytics/ga4';

const sectionIds = ['hero', 'about', 'skills', 'projects', 'certifications', 'contact'];
const scrollDepths = [25, 50, 75, 100];

function App() {
  const trackedDepthsRef = useRef(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            trackSectionView(entry.target.id);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    sectionIds.forEach(sectionId => {
      const element = document.getElementById(sectionId);

      if (element) {
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      const scrollableHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const scrollPercentage = Math.round((window.scrollY / scrollableHeight) * 100);

      scrollDepths.forEach(depth => {
        if (scrollPercentage >= depth && !trackedDepthsRef.current.has(depth)) {
          trackedDepthsRef.current.add(depth);
          trackEvent('scroll_depth', { percentage: depth });
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#07090f]">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
