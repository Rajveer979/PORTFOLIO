import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

        {/* Center: Desktop links (hidden on tablet/mobile) */}
        <ul className="nav-links" id="nav-links">
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
          <button id="theme-toggle" aria-label="Toggle theme">
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
            className="resume-btn"
          >
            <FaFileDownload className="w-4 h-4" />
            <span>Resume</span>
          </a>
          {/* Hamburger — only visible ≤1024px */}
          <button className="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>

      {/* Mobile drawer — slides in from top ≤1024px */}
      <div className="mobile-menu" id="mobile-menu" aria-hidden="true">
        <ul className="mobile-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => handleNavClick(item.name)}
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
            onClick={() => trackEvent('resume_download', { source: 'navbar', file: 'Resume1.pdf' })}
            className="mobile-resume-btn"
          >
            <FaFileDownload className="w-4 h-4" />
            <span>Resume</span>
          </a>
          <button className="mobile-theme-btn" id="mobile-theme-toggle">
            <span id="mobile-theme-label">Toggle Theme</span>
          </button>
        </div>
      </div>

      {/* Overlay behind mobile menu */}
      <div className="nav-overlay" id="nav-overlay"></div>

    </motion.nav>
  );
}