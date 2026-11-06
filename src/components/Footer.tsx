import React from 'react';
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { SOCIAL_LINKS, STUDENT_DETAILS } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenDeploymentGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenResume,
  onOpenDeploymentGuide,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          {/* Col 1: Identity & Affiliation */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 inline-block" />
              <span>Chaupal Vijay Shankar</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Aspiring AI Engineer, Machine Learning Enthusiast & AI Developer. Student at Joy University, School of Computer Intelligence (SOCI).
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>Reg: {STUDENT_DETAILS.registrationNumber} · {STUDENT_DETAILS.studyPeriod}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] mb-2">
              Sections
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About & Bio</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Skills & Capabilities</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Projects & Experiments</a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-white transition-colors">Certifications</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Actions */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <div className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] mb-2">
              Portfolio Resources
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={onOpenResume}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
              >
                View Full Resume
              </button>
              <button
                onClick={onOpenDeploymentGuide}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-indigo-400 border border-slate-800 transition-colors"
              >
                GitHub & Vercel Guide
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-purple-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Chaupal Vijay Shankar. Joy University · CSE Artificial Intelligence (2026–2030).
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
            title="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
