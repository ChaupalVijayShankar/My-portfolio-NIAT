import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  FileText,
  Sparkles,
  GraduationCap,
  Maximize2,
  UploadCloud,
  Check,
} from 'lucide-react';
import {
  HERO_INTRO,
  PROFESSIONAL_TITLE,
  PROFILE_PHOTO,
  SOCIAL_LINKS,
  STUDENT_DETAILS,
} from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  customPhotoUrl?: string;
  onUpdatePhoto?: (newUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  customPhotoUrl,
  onUpdatePhoto,
}) => {
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const displayPhoto = customPhotoUrl || PROFILE_PHOTO;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdatePhoto) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdatePhoto(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-purple-600/15 blur-[120px] pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split-screen Hero (Typographic hierarchy on left, large visual anchor on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Academic badge kicker (clean unboxed text with subtle separator) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400">
              <span className="flex items-center gap-1.5 font-semibold tracking-wide">
                <GraduationCap className="w-4 h-4" />
                Joy University
              </span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-600 dark:text-slate-400">School of Computer Intelligence (SOCI)</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-600 dark:text-slate-400">BTech 2026–2030</span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] text-balance">
              Chaupal Vijay Shankar
            </h1>

            {/* Professional Title */}
            <div className="text-base sm:text-xl font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-sky-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              {PROFESSIONAL_TITLE}
            </div>

            {/* Official Introduction */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {HERO_INTRO}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-indigo-500/50 hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-all"
              >
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Channels & Email */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                Connect:
              </span>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                <span className="font-medium">GitHub</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-purple-500" />
                    <span className="font-medium group-hover:underline">{SOCIAL_LINKS.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column (Hero Visual Anchor) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Outer decorative gradient glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-500"
              />

              {/* Main Portrait Card Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/60 shadow-2xl">
                <div className="aspect-[4/5] w-full overflow-hidden relative bg-slate-950">
                  <img
                    src={displayPhoto}
                    alt="Chaupal Vijay Shankar - Aspiring AI Engineer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image path has issue
                      const target = e.target as HTMLImageElement;
                      target.src = '/public/assets/aistudio/Professional_portrait_with_soft_office_bokeh__1__8aa98847.png';
                    }}
                  />

                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/20 pointer-events-none" />

                  {/* Bottom Caption & Student ID */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between text-white">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-cyan-300 font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        AI & Machine Learning
                      </div>
                      <div className="text-base font-bold text-white tracking-tight">
                        Chaupal Vijay Shankar
                      </div>
                      <div className="text-xs text-slate-300 font-mono">
                        Reg: {STUDENT_DETAILS.registrationNumber} · Sec {STUDENT_DETAILS.section}
                      </div>
                    </div>

                    {/* Quick Lightbox Action Button */}
                    <button
                      onClick={() => setIsPhotoLightboxOpen(true)}
                      className="p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all border border-white/10"
                      title="View full portrait"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Subtle bottom control bar */}
                <div className="p-3 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span>Joy University · SOCI</span>
                  </span>

                  {/* Optional: Replace Photo */}
                  <label className="cursor-pointer text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
                    <UploadCloud className="w-3.5 h-3.5" />
                    <span>Change Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Academic Metric Strip Below Split (Section 2.B Layout Rule) */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium block">
                Institution
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 block">
                {STUDENT_DETAILS.college}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                School of Computer Intelligence
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium block">
                Academic Program
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 block">
                {STUDENT_DETAILS.department}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {STUDENT_DETAILS.section}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium block">
                Registration No.
              </span>
              <span className="text-sm sm:text-base font-bold font-mono text-indigo-600 dark:text-indigo-400 mt-1 block">
                {STUDENT_DETAILS.registrationNumber}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {STUDENT_DETAILS.academicStatus}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium block">
                Study Period
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 block">
                {STUDENT_DETAILS.studyPeriod}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                4-Year BTech AI Degree
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Photo */}
      {isPhotoLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setIsPhotoLightboxOpen(false)}
        >
          <div
            className="relative max-w-xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/4] w-full bg-slate-950">
              <img
                src={displayPhoto}
                alt="Chaupal Vijay Shankar"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 flex items-center justify-between text-white bg-slate-900 border-t border-slate-800">
              <div>
                <h4 className="font-bold text-sm">Chaupal Vijay Shankar</h4>
                <p className="text-xs text-slate-400">
                  {PROFESSIONAL_TITLE}
                </p>
              </div>
              <button
                onClick={() => setIsPhotoLightboxOpen(false)}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
