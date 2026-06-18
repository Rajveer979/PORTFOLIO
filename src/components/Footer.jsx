import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { trackEvent } from '../analytics/ga4';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-tertiary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[var(--text-muted)]">
            © {currentYear} Rajveer Mahadevwala. All rights reserved.
          </p>
            <div className="flex space-x-6">
              <a href="https://github.com/Rajveer979" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('social_click', { platform: 'github' })} className="accent-icon-hover text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/rajveer-mahadevwala-8969a0336" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('social_click', { platform: 'linkedin' })} className="accent-icon-hover text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://x.com/RajveerMah79127" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('social_click', { platform: 'x' })} className="accent-icon-hover text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                <FaXTwitter className="text-2xl" />
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
}