import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaEye, FaShieldAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'AI-Powered Personal Assistant',
    description: 'Desktop AI assistant with Google Gemini API integration and voice command support for hands-free interaction. Includes a modern dark GUI, real-time output, and automated browser/app operations.',
    tech: ['Python', 'Tkinter', 'Google Gemini AI', 'Speech Recognition'],
    icon: FaRobot,
    visualLabel: 'AI Assistant Dashboard',
    visualItems: ['Voice Command', 'Gemini Response', 'Automation Panel'],
    visualWidths: [82, 64, 72],
  },
  {
    title: 'AI-Powered Crowd Safety Monitoring',
    description: 'Smart crowd safety system using YOLOv8 and InsightFace for real-time crowd detection, missing-person finder, and fire detection in video feeds. Built with a FastAPI backend and responsive dashboard.',
    tech: ['YOLOv8', 'InsightFace', 'FastAPI', 'Python'],
    icon: FaShieldAlt,
    visualLabel: 'Safety Monitoring Dashboard',
    visualItems: ['Crowd Density', 'Object Detection', 'Alert Stream'],
    visualWidths: [88, 74, 68],
  },
];

function ProjectVisual({ project }) {
  const Icon = project.icon;

  return (
    <div className="relative min-h-[260px] rounded-2xl overflow-hidden border border-[rgba(45,212,191,0.3)] bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.18),transparent_35%)]" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      <div className="absolute inset-x-4 top-4 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center px-3 gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#2dd4bf]" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
      </div>

      <div className="h-0.5 w-full absolute bottom-0 left-0 bg-gradient-to-r from-transparent via-[#2dd4bf] to-transparent"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-white/5 border border-[rgba(45,212,191,0.3)] flex items-center justify-center">
            <Icon className="text-3xl text-[#2dd4bf]" />
          </div>
          <p className="text-sm font-semibold text-white mb-2">{project.visualLabel}</p>
          <div className="space-y-2">
            {project.visualItems.map((item, itemIndex) => (
              <div key={item} className="mx-auto h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full bg-[#2dd4bf]/70" style={{ width: `${project.visualWidths[itemIndex] || 60}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-[#07090f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white heading-glow">Projects</h2>
          <p className="text-lg text-[#4a6070]">
            Selected AI and software engineering projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden shadow-lg glow-card project-card"
            >
              <div className="grid grid-cols-1">
                <div className="p-4">
                  <ProjectVisual project={project} />
                </div>

                <div className="p-6 pt-0">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#4a6070] mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a href="https://github.com/Rajveer979" target="_blank" rel="noopener noreferrer" className="accent-icon-hover inline-flex items-center gap-2 text-[#4a6070] hover:text-[#e8f4ff] transition-colors text-[12px] font-medium">
                      <FaGithub /> GitHub
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 text-[#2dd4bf] hover:text-[#5eead4] transition-colors text-[12px] font-medium">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}