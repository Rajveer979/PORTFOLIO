import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { DotGlobeHero } from "@/components/ui/globe-hero";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <DotGlobeHero
      className="bg-gradient-to-br from-[#0a0a0f] via-[#0a0a0f]/95 to-[#1a1a1a] relative overflow-hidden"
    >
      <div className="relative z-10 text-center space-y-12 max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >

          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] select-none"
            >
              <span className="block font-black text-white mb-3 whitespace-nowrap text-[clamp(1.7rem,9vw,3.4rem)] md:text-[clamp(2.8rem,7vw,5rem)] lg:text-[clamp(3.6rem,7vw,6.2rem)] tracking-tighter leading-[0.9]">
                Rajveer Mahadevwala
              </span>
              <span className="block text-2xl md:text-4xl font-semibold text-[#a5f2f3] tracking-wide mt-3 accent-glow">
                AI & Software Engineer
              </span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-medium">
              Building <span className="accent-text accent-glow">intelligent applications</span>, exploring <span className="accent-text accent-glow">machine learning</span>,
              and turning ideas into real-world products.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#a5f2f3] text-gray-950 rounded-xl font-bold text-lg shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_38px_rgba(0,0,0,0.35)] transition-all duration-500 overflow-hidden border border-[#a5f2f3]/60"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-[#a5f2f3]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
            <span className="relative z-10 tracking-wide">View My Work</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255,255,255, 0.1)",
              borderColor: "rgba(165,242,243, 0.55)",
              boxShadow: "0 15px 30px rgba(0,0,0,0.18)",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 rounded-xl font-semibold text-lg hover:border-white/40 transition-all duration-500 backdrop-blur-xl bg-[#0a0a0f]/60 hover:bg-[#0a0a0f]/90 shadow-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#a5f2f3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Zap className="relative z-10 w-5 h-5 text-gray-300 group-hover:text-[#a5f2f3] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <span className="relative z-10 tracking-wide text-gray-300">Contact Me</span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <FaArrowDown className="text-3xl text-gray-400 animate-bounce" />
      </motion.div>
    </DotGlobeHero>
  );
}
