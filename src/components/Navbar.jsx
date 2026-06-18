import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFileDownload } from 'react-icons/fa';
import { trackEvent } from '../analytics/ga4';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (section) => {
    setIsOpen(false);
    trackEvent('nav_click', { section });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollY = window.scrollY;
      
      setScrolled(scrollY > 50);
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop - 100 <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-xl bg-[var(--bg-primary)]/90 border-b border-[var(--accent)]/30 shadow-lg shadow-[var(--accent-glow)]' 
          : 'backdrop-blur-md bg-[var(--bg-primary)]/85 border-b border-[var(--border-color)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
<a href="#" className="flex items-center gap-0 rounded-xl navbar-logo-wrap nav-logo relative group">
             <img src="/image-removebg-preview.png" alt="Rajveer Mahadevwala logo" className="h-14 w-auto max-w-[160px] object-contain navbar-logo-image" />
             <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
           </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`nav-link relative transition-all duration-300 py-1 ${
                  activeSection === item.href.substring(1) 
                    ? 'text-[var(--accent)]' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--accent)]'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-[var(--accent)]/10 to-transparent rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-center" 
                  style={{ width: '120%' }}></span>
                {activeSection === item.href.substring(1) && (
                  <>
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[var(--accent)] rounded-full shadow-[0_0_10px_var(--accent-glow)]"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"></span>
                  </>
                )}
              </a>
            ))}
            
            <button id="theme-toggle" type="button" aria-label="Toggle dark/light mode" title="Toggle theme">
              {/* Moon icon (shown in dark mode) */}
              <svg id="icon-moon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
              {/* Sun icon (shown in light mode) */}
              <svg id="icon-sun" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'none' }}>
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            </button>

            <a
              href="/Resume1.pdf"
              download
              onClick={() => trackEvent('resume_download', { source: 'navbar', file: 'Resume1.pdf' })}
              className="resume-btn inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent border border-[var(--accent)]/30 text-[var(--accent)] hover:bg-[var(--accent-dim)] transition-all duration-300 font-medium tracking-wide"
            >
              <FaFileDownload className="w-4 h-4" />
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-[var(--accent)]/20 text-[var(--text-primary)] hover:text-[var(--accent)] transition-all duration-300 hover:shadow-[0_0_10px_var(--accent-glow)]"
          >
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-[var(--accent)]/20 bg-[var(--bg-primary)]/95"
        >
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`block py-2 transition-all duration-300 ${
                  activeSection === item.href.substring(1) 
                    ? 'text-[var(--accent)] border-l-2 border-[var(--accent)] pl-2' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-l-2 hover:border-[var(--accent)]/30 hover:pl-2'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/Resume1.pdf"
              download
              onClick={() => trackEvent('resume_download', { source: 'navbar', file: 'Resume1.pdf' })}
              className="resume-btn flex items-center gap-2 py-2 text-[var(--accent)] border-l-2 border-[var(--accent)] pl-2"
            >
              <FaFileDownload /> Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}