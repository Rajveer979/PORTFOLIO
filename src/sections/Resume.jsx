import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { trackEvent } from '../analytics/ga4';

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

export default function Resume() {
  return (
    <section id="resume" className="py-20 relative bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white heading-glow">Resume</h2>
          <p className="text-lg text-gray-300 mb-6">
            Education and certifications
          </p>
          <a
            href="/Resume1.pdf"
            onClick={() => trackEvent('resume_download', { source: 'resume_section', file: 'Resume1.pdf' })}
            className="inline-flex items-center px-6 py-3 bg-white text-gray-900 hover:bg-gray-200 font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-white/20"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
          <motion.div
            initial={{ opacity: 0, x: -20, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 shadow-lg glow-card transform-3d"
          >
            <h3 className="text-2xl font-bold text-white mb-6 heading-glow-subtle">Education</h3>
            {education.map((item, index) => (
              <div key={index} className="border-l-4 border-white/30 pl-4 mb-6">
                <h4 className="text-lg font-semibold text-white">
                  {item.degree}
                </h4>
                <p className="text-gray-300">{item.institution}</p>
                <p className="text-sm text-gray-500">{item.years}</p>
                <p className="text-sm text-gray-400">{item.details}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 shadow-lg glow-card transform-3d"
          >
            <h3 className="text-2xl font-bold text-white mb-6 heading-glow-subtle">Certifications</h3>
            <div className="border-l-4 border-white/30 pl-4 mb-6">
              <h4 className="text-lg font-semibold text-white">
                Design and Analysis of Algorithms
              </h4>
              <p className="text-gray-300">NPTEL Certification</p>
              <p className="text-sm text-gray-500">Programming, Data Structures and Algorithms using Python (NPTEL, IIT Madras)</p>
            </div>
            <div className="border-l-4 border-white/30 pl-4 mb-6">
              <h4 className="text-lg font-semibold text-white">
                Google AI Essentials
              </h4>
              <p className="text-gray-300">Google</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
