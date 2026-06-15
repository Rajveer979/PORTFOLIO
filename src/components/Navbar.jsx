import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFileDownload } from 'react-icons/fa';

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
          ? 'backdrop-blur-xl bg-[#07090f]/90 border-b border-[#2dd4bf]/30 shadow-lg shadow-[#2dd4bf]/10' 
          : 'backdrop-blur-md bg-[#07090f]/85 border-b border-[#0e1a24]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-white heading-glow-subtle nav-logo relative group">
            Rajveer <span className="text-[#2dd4bf]">M.</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#2dd4bf] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative transition-all duration-300 py-1 ${
                  activeSection === item.href.substring(1) 
                    ? 'text-[#2dd4bf]' 
                    : 'text-[#4a6070] hover:text-[#2dd4bf]'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-[#2dd4bf]/10 to-transparent rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-center" 
                  style={{ width: '120%' }}></span>
                {activeSection === item.href.substring(1) && (
                  <>
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#2dd4bf] rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#2dd4bf] to-transparent"></span>
                  </>
                )}
              </a>
            ))}
            
            <a
              href="/Resume1.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent border border-[#2dd4bf]/30 text-[#2dd4bf] hover:bg-[#2dd4bf]/10 transition-all duration-300 font-medium tracking-wide"
            >
              <FaFileDownload className="w-4 h-4" />
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-[#2dd4bf]/20 text-white hover:text-[#2dd4bf] transition-all duration-300 hover:shadow-[0_0_10px_rgba(45,212,191,0.3)]"
          >
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-[#2dd4bf]/20 bg-[#07090f]/95"
        >
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-all duration-300 ${
                  activeSection === item.href.substring(1) 
                    ? 'text-[#2dd4bf] border-l-2 border-[#2dd4bf] pl-2' 
                    : 'text-[#4a6070] hover:text-[#2dd4bf] hover:border-l-2 hover:border-[#2dd4bf]/30 hover:pl-2'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/Resume1.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-2 text-[#2dd4bf] border-l-2 border-[#2dd4bf] pl-2"
            >
              <FaFileDownload /> Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}