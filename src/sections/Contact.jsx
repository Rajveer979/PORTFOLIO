import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { trackEvent } from '../analytics/ga4';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-[var(--text-primary)] heading-glow">Contact Info</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Get in touch with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 perspective-1000">
<motion.div
             initial={{ opacity: 0, x: -20, rotateY: -10 }}
             whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
             transition={{ duration: 0.5 }}
             viewport={{ once: true }}
             className="w-full lg:col-span-3 glass rounded-2xl p-8 shadow-lg glow-card hover-glow transform-3d"
           >
             <div className="space-y-4">
               <div className="flex items-center space-x-3">
                 <div className="contact-icon-container">
                   <FaEnvelope className="text-lg text-[var(--accent)]" />
                 </div>
                  <a
                    href="mailto:mahadevwalarajveer@gmail.com"
                    onClick={() => trackEvent('contact_click', { type: 'email' })}
                    className="accent-icon-hover text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-[12px] font-medium"
                  >
                   mahadevwalarajveer@gmail.com
                 </a>
               </div>
               <div className="flex items-center space-x-3">
                 <div className="contact-icon-container">
                   <FaPhone className="text-lg text-[var(--accent)]" />
                 </div>
                  <a
                    href="tel:+919898130771"
                    onClick={() => trackEvent('contact_click', { type: 'phone' })}
                    className="accent-icon-hover text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-[12px] font-medium"
                  >
                   +91 98981 30771
                 </a>
               </div>
               <div className="flex items-center space-x-3">
                 <div className="contact-icon-container">
                   <FaWhatsapp className="text-lg text-[var(--accent)]" />
                 </div>
                 <div className="flex flex-col">
                    <a
                      href="https://wa.me/919898130771?text=Hi%20Rajveer%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('whatsapp_start', { source: 'contact_section', type: 'whatsapp' })}
                    className="accent-icon-hover text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-[12px] font-medium"
                    >
                     Chat on WhatsApp
                   </a>
                    <span className="text-[var(--text-secondary)] text-[11px] font-medium">
                     Use the floating WhatsApp button at the bottom-right for a quick chat.
                   </span>
                 </div>
               </div>
               <div className="flex items-center space-x-3">
                 <div className="contact-icon-container">
                   <FaMapMarkerAlt className="text-lg text-[var(--accent)]" />
                 </div>
                  <span className="text-[var(--text-secondary)] text-[12px] font-medium">
                   Gujarat, India
                 </span>
               </div>
               
                <div className="flex items-center gap-3 pt-4">
                  <a href="https://github.com/Rajveer979" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('social_click', { platform: 'github' })} className="social-icon-btn">
                    <FaGithub className="text-lg" />
                  </a>
                  <a href="https://www.linkedin.com/in/rajveer-mahadevwala-8969a0336" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('social_click', { platform: 'linkedin' })} className="social-icon-btn">
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a href="https://x.com/RajveerMah79127" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('social_click', { platform: 'x' })} className="social-icon-btn">
                    <FaXTwitter className="text-lg" />
                  </a>
                </div>
             </div>

           </motion.div>
        </div>
      </div>
    </section>
  );
}