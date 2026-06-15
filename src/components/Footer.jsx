import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050710] border-t border-[#0e1a24]">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[#1e3040]">
            © {currentYear} Rajveer Mahadevwala. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/Rajveer979" target="_blank" rel="noopener noreferrer" className="accent-icon-hover text-[#2a4050] hover:text-[#2dd4bf] transition-colors">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/rajveer-mahadevwala-8969a0336" target="_blank" rel="noopener noreferrer" className="accent-icon-hover text-[#2a4050] hover:text-[#2dd4bf] transition-colors">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://x.com/RajveerMah79127" target="_blank" rel="noopener noreferrer" className="accent-icon-hover text-[#2a4050] hover:text-[#2dd4bf] transition-colors">
              <FaXTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}