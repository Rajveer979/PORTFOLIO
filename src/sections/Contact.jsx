import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white heading-glow">Contact</h2>
          <p className="text-lg text-[#4a6070]">
            Get in touch with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 perspective-1000">
          <motion.div
            initial={{ opacity: 0, x: -20, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1 glass rounded-2xl p-8 shadow-lg glow-card transform-3d"
          >
            <h3 className="text-2xl font-bold text-white mb-6 heading-glow-subtle">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="contact-icon-container">
                  <FaEnvelope className="text-lg text-[#2dd4bf]" />
                </div>
                <a
                  href="mailto:mahadevwalarajveer@gmail.com"
                  className="accent-icon-hover text-[#4a6070] hover:text-[#e8f4ff] transition-colors text-[12px] font-medium"
                >
                  mahadevwalarajveer@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="contact-icon-container">
                  <FaPhone className="text-lg text-[#2dd4bf]" />
                </div>
                <a
                  href="tel:+919898130771"
                  className="accent-icon-hover text-[#4a6070] hover:text-[#e8f4ff] transition-colors text-[12px] font-medium"
                >
                  +91 98981 30771
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="contact-icon-container">
                  <FaMapMarkerAlt className="text-lg text-[#2dd4bf]" />
                </div>
                <span className="text-[#4a6070] text-[12px] font-medium">
                  Gujarat, India
                </span>
              </div>
              
              <div className="flex items-center gap-3 pt-4">
                <a href="https://github.com/Rajveer979" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                  <FaGithub className="text-lg" />
                </a>
                <a href="https://www.linkedin.com/in/rajveer-mahadevwala-8969a0336" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                  <FaLinkedin className="text-lg" />
                </a>
                <a href="https://x.com/RajveerMah79127" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                  <FaXTwitter className="text-lg" />
                </a>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass rounded-2xl p-8 shadow-lg glow-card transform-3d"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#4a6070] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 form-input focus:border-[#2dd4bf] focus:outline-none focus:shadow-[0_0_0_2px_rgba(45,212,191,0.1)]"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4a6070] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 form-input focus:border-[#2dd4bf] focus:outline-none focus:shadow-[0_0_0_2px_rgba(45,212,191,0.1)]"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4a6070] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 form-input focus:border-[#2dd4bf] focus:outline-none focus:shadow-[0_0_0_2px_rgba(45,212,191,0.1)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4a6070] mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 form-input focus:border-[#2dd4bf] focus:outline-none focus:shadow-[0_0_0_2px_rgba(45,212,191,0.1)]"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#2dd4bf] text-[#07090f] font-bold rounded-lg transition-all duration-300 shadow-lg shadow-[rgba(45,212,191,0.3)] tracking-[0.06em] font-['Space_Grotesk',sans-serif] hover:bg-[#5eead4] hover:shadow-[0_6px_20px_rgba(45,212,191,0.3)]"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}