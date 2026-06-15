import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';

const certifications = [
  {
    title: 'Design and Analysis of Algorithms',
    issuer: 'NPTEL, IIT Madras',
    date: '2024',
    credential: '/certificates/nptel-algorithms.jpeg',
    logo: FaUniversity,
    logoLabel: 'NPTEL / IIT Madras',
  },
  {
    title: 'Programming, Data Structures and Algorithms using Python',
    issuer: 'NPTEL, IIT Madras',
    date: '2024',
    credential: '/certificates/nptel-programming-dsa-python.jpeg',
    logo: FaUniversity,
    logoLabel: 'NPTEL / IIT Madras',
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    date: '2024',
    credential: '/certificates/google-ai-essentials-photo.png',
    logo: SiGoogle,
    logoLabel: 'Google',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white heading-glow">Certifications</h2>
          <p className="text-lg text-[#4a6070]">
            Professional certifications and achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => {
            const Logo = cert.logo;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, rotateY: -10, rotateX: 8 }}
                className="glass rounded-2xl p-8 shadow-lg glow-card project-card transform-3d hover-glow"
              >
                <div className="h-24 rounded-2xl border border-[rgba(45,212,191,0.3)] bg-[rgba(13,17,23,0.5)] flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Logo className="mx-auto text-4xl text-[#2dd4bf] mb-2" />
                    <p className="text-xs font-semibold tracking-wider text-[#4a6070] uppercase">
                      {cert.logoLabel}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <FaAward className="text-[#2dd4bf]" />
                  <h3 className="text-xl font-bold text-white">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-[#4a6070] mb-6">{cert.issuer}</p>

                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-auto gap-2 rounded-xl bg-transparent text-[#2dd4bf] font-semibold px-4 py-2 border border-[rgba(45,212,191,0.25)] hover:bg-[rgba(45,212,191,0.08)] transition-all duration-300 text-[12px]"
                >
                  <FaExternalLinkAlt /> View Certificate
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}