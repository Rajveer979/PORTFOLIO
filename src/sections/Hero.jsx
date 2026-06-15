import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { DotGlobeHero } from "@/components/ui/globe-hero";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <DotGlobeHero
      className="relative overflow-hidden"
    >
      <div className="relative z-10 text-center space-y-12 max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
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
              <span className="block font-medium text-white mb-3 whitespace-nowrap text-[clamp(1.5rem,2.8vw,1.9rem)] tracking-wider uppercase hero-name">
                Rajveer Mahadevwala
              </span>
              <span className="block text-[clamp(2.4rem,5vw,3.6rem)] font-bold text-[#e8f4ff] relative">
                <span className="text-[#2dd4bf]">AI</span> & Software Engineer
              </span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-2xl md:text-3xl text-[#4a6070] leading-relaxed font-medium">
              Building <span className="accent-text accent-glow">intelligent applications</span>, exploring <span className="accent-text accent-glow">machine learning</span>,
              and turning ideas into real-world products.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 6px 24px rgba(45,212,191,0.3)",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#2dd4bf] text-[#07090f] font-bold rounded-xl text-lg shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-all duration-200 overflow-hidden border border-[#2dd4bf]/60"
          >
            <span className="relative z-10 tracking-wide">View My Work</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 border border-[rgba(45,212,191,0.35)] rounded-xl font-semibold text-lg transition-all duration-200 backdrop-blur-xl bg-transparent text-[#2dd4bf] hover:bg-[rgba(45,212,191,0.08)] overflow-hidden"
          >
            <Zap className="relative z-10 w-5 h-5 text-[#2dd4bf] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
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
        <FaArrowDown className="text-3xl text-[#4a6070] animate-bounce" />
      </motion.div>
    </DotGlobeHero>
  );
}