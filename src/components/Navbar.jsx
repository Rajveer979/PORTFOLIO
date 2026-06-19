import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import { FaSun, FaMoon } from 'react-icons/fa';
import { trackEvent } from '../analytics/ga4';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const handleNavClick = useCallback((section) => {
    closeMobileMenu();
    trackEvent('nav_click', { section });
  }, [closeMobileMenu]);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop - 100 <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMobileMenu();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Close on resize to desktop
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleResize = () => {
      if (window.innerWidth > 1024) closeMobileMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      id="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        {/* Left: Logo */}
        <a href="#" className="nav-logo">
          <img src="/image-removebg-preview.png" alt="Rajveer Mahadevwala logo" className="h-14 w-auto max-w-[160px] object-contain navbar-logo-image" />
        </a>

        {/* Center: Desktop links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Actions */}
        <div className="nav-actions">
          {/* Hamburger - visible on mobile only */}
          <button
            className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen((prev) => !prev);
            }}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Theme toggle - visible on desktop and tablet (768-1024px) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleTheme();
            }}
            className="theme-toggle-btn"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="theme-toggle-icon"
                >
                  <FaMoon size={14} />
                </motion.span>
              ) : (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  className="theme-toggle-icon"
                >
                  <FaSun size={14} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Resume button - visible on desktop only */}
          <a
            href="/Resume1.pdf"
            download
            onClick={(e) => {
              e.stopPropagation();
              trackEvent('resume_download', { source: 'navbar', file: 'Resume1.pdf' });
            }}
            className="resume-btn"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <FaFileDownload className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>
      </div>

{/* Mobile drawer */}
       <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} aria-hidden={!isMobileMenuOpen}>
         <ul className="mobile-links">
           {navItems.map((item) => (
             <li key={item.name}>
               <a
                 href={item.href}
                 onClick={(e) => {
                   e.stopPropagation();
                   handleNavClick(item.name);
                 }}
                 className={`mobile-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
               >
                 {item.name}
               </a>
             </li>
           ))}
         </ul>
         <div className="mobile-actions">
           <a
             href="/Resume1.pdf"
             download
             onClick={(e) => {
               e.stopPropagation();
               trackEvent('resume_download', { source: 'mobile_menu', file: 'Resume1.pdf' });
             }}
             className="mobile-resume-btn"
           >
             <FaFileDownload className="w-4 h-4" />
             <span>Resume</span>
           </a>
           <button
             className="mobile-theme-btn"
             onClick={(e) => {
               e.stopPropagation();
               toggleTheme();
             }}
           >
             {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
           </button>
         </div>
       </div>

      {/* Overlay behind mobile menu */}
      <div
        className={`nav-overlay ${isMobileMenuOpen ? 'visible' : ''}`}
        onClick={closeMobileMenu}
      />
    </motion.nav>
  );
}
