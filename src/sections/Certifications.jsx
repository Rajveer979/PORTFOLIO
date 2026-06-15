import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';

const certifications = [
  {
    title: 'Design and Analysis of Algorithms',
    issuer: 'NPTEL, IIT Madras',
    date: '2024',
    description: 'NPTEL Certification',
    credential: '/certificates/nptel-algorithms.jpeg',
    logo: FaUniversity,
    logoLabel: 'NPTEL / IIT Madras',
  },
  {
    title: 'Programming, Data Structures and Algorithms using Python',
    issuer: 'NPTEL, IIT Madras',
    date: '2024',
    description: 'Programming, Data Structures and Algorithms using Python',
    credential: '/certificates/nptel-programming-dsa-python.jpeg',
    logo: FaUniversity,
    logoLabel: 'NPTEL / IIT Madras',
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    date: '2024',
    description: 'AI fundamentals and applications',
    credential: '/certificates/google-ai-essentials-photo.png',
    logo: SiGoogle,
    logoLabel: 'Google',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white heading-glow">Certifications</h2>
          <p className="text-lg text-gray-300">
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
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-8 shadow-lg glow-card"
              >
                <div className="h-24 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Logo className="mx-auto text-4xl text-[#a5f2f3] mb-2" />
                    <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                      {cert.logoLabel}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <FaAward className="text-[#a5f2f3]" />
                  <h3 className="text-xl font-bold text-white">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {cert.description}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  {cert.date}
                </p>

                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 rounded-xl bg-[#a5f2f3] text-gray-950 font-semibold px-4 py-3 hover:bg-white transition-colors duration-300"
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
