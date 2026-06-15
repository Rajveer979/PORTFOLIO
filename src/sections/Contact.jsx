import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

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
    <section id="contact" className="py-20 relative bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white heading-glow">Contact</h2>
          <p className="text-lg text-gray-300">
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
                <FaEnvelope className="text-2xl text-gray-300" />
                <a
                  href="mailto:mahadevwalarajveer@gmail.com"
                  className="accent-icon-hover text-gray-300 hover:text-white transition-colors"
                >
                  mahadevwalarajveer@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-2xl text-gray-300" />
                <a
                  href="tel:+919898130771"
                  className="accent-icon-hover text-gray-300 hover:text-white transition-colors"
                >
                  +91 98981 30771
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-2xl text-gray-300" />
                <span className="text-gray-300">
                  Gujarat, India
                </span>
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-[#0a0a0f] text-white focus:outline-none focus:border-white/50"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-[#0a0a0f] text-white focus:outline-none focus:border-white/50"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-[#0a0a0f] text-white focus:outline-none focus:border-white/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-[#0a0a0f] text-white focus:outline-none focus:border-white/50"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-gray-900 hover:bg-gray-200 font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-white/20"
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
