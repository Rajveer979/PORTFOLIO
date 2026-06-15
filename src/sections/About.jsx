import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward } from 'react-icons/fa';

const education = [
  {
    institution: 'ITM (SLS) Baroda University',
    degree: 'B-Tech (Information Technology)',
    years: 'Aug 2024 - Nov 2025',
    details: 'CGPA: 9.72',
  },
  {
    institution: 'Shri C C Shah Sarvajanik High School, Surat, Gujarat',
    degree: 'XII (GSEB)',
    years: '2024',
    details: '81%',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white heading-glow">About Me</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Computer Engineering student passionate about AI, ML, and building practical solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="glass rounded-2xl p-8 h-full flex flex-col items-center justify-center glow-card transform-3d"
            >
              <div className="w-56 h-56 rounded-full bg-white/5 p-1 shadow-2xl shadow-white/10 mb-6">
                <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center border border-white/10">
                  <span className="text-6xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">RM</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass rounded-2xl p-8 glow-card">
              <h3 className="text-2xl font-bold text-white mb-4 heading-glow-subtle">Who I Am</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a Computer Engineering student passionate about AI, Machine Learning, and software development. I enjoy building intelligent applications, exploring new technologies, and turning ideas into real-world projects. Currently focused on growing as an AI engineer while strengthening my foundations in computer science.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 glow-card">
              <h3 className="text-2xl font-bold text-white mb-6 heading-glow-subtle flex items-center">
                <FaGraduationCap className="mr-3 text-gray-300" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-white/30 pl-6 py-2"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {item.degree}
                        </h4>
                        <p className="text-gray-300">{item.institution}</p>
                      </div>
                      <FaAward className="text-2xl text-gray-400 flex-shrink-0 mt-1" />
                    </div>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <span className="text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                        {item.years}
                      </span>
                      <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                        {item.details}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
