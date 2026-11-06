import React from 'react';
import {
  FileText,
  Download,
  Printer,
  X,
  Mail,
  Linkedin,
  Github,
  MapPin,
  GraduationCap,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import {
  CAREER_ASPIRATIONS,
  HERO_INTRO,
  INITIAL_CERTIFICATES,
  INITIAL_PROJECTS,
  INITIAL_SKILLS,
  PROFESSIONAL_TITLE,
  SOCIAL_LINKS,
  STUDENT_DETAILS,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const resumeMd = `# ${STUDENT_DETAILS.fullName}
**${PROFESSIONAL_TITLE}**
Email: ${SOCIAL_LINKS.email} | LinkedIn: ${SOCIAL_LINKS.linkedin} | GitHub: ${SOCIAL_LINKS.github}
Institution: ${STUDENT_DETAILS.college} (${STUDENT_DETAILS.school})
Registration: ${STUDENT_DETAILS.registrationNumber} | Section: ${STUDENT_DETAILS.section} | Timeline: ${STUDENT_DETAILS.studyPeriod}

---

## PROFESSIONAL SUMMARY
${HERO_INTRO}

## EDUCATION
**Bachelor of Technology (BTech) in Computer Science & Engineering (Artificial Intelligence)**
${STUDENT_DETAILS.college} — ${STUDENT_DETAILS.school}
Period: ${STUDENT_DETAILS.studyPeriod} | Status: ${STUDENT_DETAILS.academicStatus}

## CORE SKILLS
- Programming: Python, SQL
- Web Development: HTML, CSS
- Emerging Technologies: Generative AI, AI Tools, Workflow Automation (n8n)
- Professional Competencies: Problem Solving, Creativity, Communication, Teamwork, Continuous Learning

## FEATURED PROJECTS
1. **Game Development**
   - Personal game development project focused on creating an interactive gaming experience while developing programming and logical thinking skills.
   - Stack: Python, Game Logic, OOP, Event Handling

2. **LinkedIn Automation Using n8n and Google Sheets** [Status: In Progress]
   - AI automation project designed to connect LinkedIn, n8n and Google Sheets to explore workflow automation and streamline repetitive tasks.
   - Stack: n8n, Google Sheets, LinkedIn API, Workflow Automation

## CERTIFICATIONS & ACHIEVEMENTS
- **Vibe Coding Certificate** – Google
- **n8n Participation Certificate** – n8n
- **Prompt Writing Certificate** – Joy University

## CAREER ASPIRATIONS
${CAREER_ASPIRATIONS}
`;

    const blob = new Blob([resumeMd], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Chaupal_Vijay_Shankar_Resume.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-500" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Official Resume – Chaupal Vijay Shankar
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-colors"
              title="Download ATS-ready Markdown Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.md)</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200 print:text-black print:bg-white text-xs sm:text-sm">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center sm:text-left space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {STUDENT_DETAILS.fullName}
            </h1>
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              {PROFESSIONAL_TITLE}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{SOCIAL_LINKS.email}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/vijay-shankar-chaupal-059304354</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5" />
                <span>github.com/ChaupalVijayShankar</span>
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800/80 pb-1">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  BTech in Computer Science and Engineering (Artificial Intelligence)
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {STUDENT_DETAILS.college} — {STUDENT_DETAILS.school}
                </p>
                <p className="text-xs text-slate-500">
                  Registration Number: <span className="font-mono">{STUDENT_DETAILS.registrationNumber}</span> · Section: {STUDENT_DETAILS.section}
                </p>
              </div>
              <div className="text-xs sm:text-right font-medium text-slate-500">
                <span>{STUDENT_DETAILS.studyPeriod}</span>
                <span className="block text-indigo-600 dark:text-indigo-400 font-semibold">{STUDENT_DETAILS.academicStatus}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800/80 pb-1">
              Professional Summary
            </h2>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              {HERO_INTRO}
            </p>
          </div>

          {/* Technical & Professional Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800/80 pb-1">
              Technical & Professional Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Programming Languages:</span>
                <span className="text-slate-600 dark:text-slate-300">Python (Object-Oriented, Data Structures), SQL (Queries, Relational Models)</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Web Development:</span>
                <span className="text-slate-600 dark:text-slate-300">Semantic HTML5, CSS3, Tailwind CSS, Responsive Design Architecture</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Emerging Tech & Automation:</span>
                <span className="text-slate-600 dark:text-slate-300">Generative AI, AI Tooling, Workflow Automation with n8n, Webhooks & APIs</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Professional Competencies:</span>
                <span className="text-slate-600 dark:text-slate-300">Problem Solving, Creativity, Technical Communication, Teamwork, Continuous Learning</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800/80 pb-1">
              Key Projects
            </h2>
            <div className="space-y-3">
              {INITIAL_PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white">
                      {proj.title}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{proj.status}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs">
                    {proj.description}
                  </p>
                  <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-mono">
                    Technologies: {proj.technologies.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800/80 pb-1">
              Certifications & Accomplishments
            </h2>
            <div className="space-y-2">
              {INITIAL_CERTIFICATES.map((cert) => (
                <div key={cert.id} className="flex items-start justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{cert.title}</span>
                    <span className="text-slate-500"> — {cert.issuer}</span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Aspirations */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-bold text-slate-900 dark:text-slate-200">Career Objective: </span>
            {CAREER_ASPIRATIONS}
          </div>
        </div>
      </div>
    </div>
  );
};
