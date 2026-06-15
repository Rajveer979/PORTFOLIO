import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaTools, FaPython, FaJs, FaHtml5, FaCss3Alt, FaJava, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiC, SiGoogle, SiFastapi } from 'react-icons/si';

const skillGroups = [
  {
    title: 'Languages',
    icon: FaCode,
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'JavaScript', icon: FaJs },
      { name: 'C', icon: SiC },
      { name: 'Java', icon: FaJava },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
    ],
  },
  {
    title: 'AI & Computer Vision',
    icon: FaBrain,
    skills: [
      { name: 'Google Gemini API', icon: SiGoogle },
      { name: 'YOLOv8' },
      { name: 'InsightFace' },
      { name: 'Speech Recognition' },
    ],
  },
  {
    title: 'Frameworks & Tools',
    icon: FaTools,
    skills: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Tkinter' },
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white heading-glow">Skills</h2>
          <p className="text-lg text-gray-300">
            Practical technologies across software engineering, AI, and computer vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 shadow-lg glow-card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <Icon className="text-2xl text-[#a5f2f3]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.skills.map((skill, index) => {
                    const SkillIcon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: index * 0.04 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-200 hover:border-[#a5f2f3]/50 hover:bg-[#a5f2f3]/10 transition-all duration-300"
                      >
                        {SkillIcon ? (
                          <SkillIcon className="text-xl text-[#a5f2f3]" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-[#a5f2f3]" />
                        )}
                        <span className="text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
