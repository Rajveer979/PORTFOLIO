import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { DotGlobeHero } from "@/components/ui/globe-hero";
import { ArrowRight, Zap } from "lucide-react";
import { trackEvent } from '../analytics/ga4';

export default function Hero() {
  return (
    <DotGlobeHero
      id="hero"
      className="relative overflow-hidden"
    >
      <div className="relative z-20 text-center space-y-6 sm:space-y-8 max-w-5xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12 md:pb-16">
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
          <div className="space-y-4">
            <div className="availability-pill">
              <span className="pulse-dot"></span>
              <span>Open to opportunities</span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-bold tracking-tighter select-none"
            >
              <span className="block font-medium text-white mb-3 md:whitespace-nowrap text-[1.3rem] sm:text-[clamp(1.5rem,2.8vw,1.9rem)] tracking-wider uppercase hero-name">
                Rajveer Mahadevwala
              </span>
              <span className="block text-[clamp(2.4rem,5vw,3.6rem)] font-bold text-[var(--text-primary)] relative">
                <span className="text-[var(--accent)]">Aspiring AI</span> & Software Engineer
              </span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-2xl md:text-3xl text-[var(--text-secondary)] leading-relaxed font-medium">
              Building <span className="accent-text accent-glow">intelligent applications</span>, exploring <span className="accent-text accent-glow">machine learning</span>,
              and turning ideas into real-world products.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 w-full max-w-md sm:max-w-none mx-auto"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.stopPropagation();
              trackEvent('hero_cta_click', { target: 'projects' });
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[var(--accent)] font-bold rounded-xl text-base sm:text-lg shadow-[var(--card-shadow)] transition-all duration-300 overflow-hidden border border-[var(--accent)]/60 w-full sm:w-auto"
          >
            <span className="relative z-10 tracking-wide">View My Work</span>
            <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
          
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.stopPropagation();
              trackEvent('hero_cta_click', { target: 'contact' });
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-ghost group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-[var(--border-hover)] rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 backdrop-blur-xl bg-transparent text-[var(--accent)] hover:bg-[var(--accent-dim)] overflow-hidden w-full sm:w-auto"
          >
            <Zap className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <span className="relative z-10 tracking-wide">Contact Me</span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <FaArrowDown className="text-3xl text-[var(--text-secondary)] animate-bounce" />
      </motion.div>
    </DotGlobeHero>
  );
}