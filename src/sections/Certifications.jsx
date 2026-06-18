import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';
import { trackEvent } from '../analytics/ga4';

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
    <section id="certifications" className="py-20 relative bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-[var(--text-primary)] heading-glow">Certifications</h2>
          <p className="text-lg text-[var(--text-secondary)]">
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
                whileHover={{ y: -6, rotateY: -8, rotateX: 6, transition: { type: "spring", stiffness: 170, damping: 22, mass: 0.8 } }}
                className="glass rounded-2xl p-8 shadow-lg glow-card project-card transform-3d hover-glow"
              >
                <div className="h-24 rounded-2xl border border-[var(--accent-border)] bg-[var(--card-bg)] flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Logo className="mx-auto text-4xl text-[var(--accent)] mb-2" />
                    <p className="text-xs font-semibold tracking-wider text-[var(--text-secondary)] uppercase">
                      {cert.logoLabel}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <FaAward className="text-[var(--accent)]" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-[var(--text-secondary)] mb-6">{cert.issuer}</p>

                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('certificate_view', { title: cert.title, issuer: cert.issuer })}
                  className="inline-flex items-center justify-center w-auto gap-2 rounded-xl bg-transparent text-[var(--accent)] font-semibold px-4 py-2 border border-[var(--accent-border)] hover:bg-[var(--accent-dim)] transition-all duration-300 text-[12px]"
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