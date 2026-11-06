import React from 'react';
import {
  GraduationCap,
  Target,
  Compass,
  Cpu,
  Workflow,
  BookOpen,
  Calendar,
  Building,
  UserCheck,
} from 'lucide-react';
import {
  ACADEMIC_TIMELINE,
  BIOGRAPHY_PARAGRAPHS,
  CAREER_ASPIRATIONS,
  STUDENT_DETAILS,
} from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative bg-slate-900/30 border-t border-slate-200/50 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            <Compass className="w-4 h-4" />
            <span>Profile & Academic Journey</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Chaupal Vijay Shankar
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A dedicated undergraduate engineer exploring the intersections of Artificial Intelligence, Machine Learning algorithms, and autonomous workflow architecture.
          </p>
        </div>

        {/* 2-Column Grid: Official Dossier on Left, Professional Bio & Career Aspirations on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Official Student Dossier Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Official Student Credentials
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Joy University Academic Dossier
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Verified
              </span>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                <span className="text-slate-500 dark:text-slate-400">Full Name</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{STUDENT_DETAILS.fullName}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                <span className="text-slate-500 dark:text-slate-400">Registration Number</span>
                <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{STUDENT_DETAILS.registrationNumber}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                <span className="text-slate-500 dark:text-slate-400">College</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{STUDENT_DETAILS.college}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                <span className="text-slate-500 dark:text-slate-400">School</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{STUDENT_DETAILS.school}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                <span className="text-slate-500 dark:text-slate-400">Department</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{STUDENT_DETAILS.department}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                <span className="text-slate-500 dark:text-slate-400">Section</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{STUDENT_DETAILS.section}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                <span className="text-slate-500 dark:text-slate-400">Academic Status</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{STUDENT_DETAILS.academicStatus}</span>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500 dark:text-slate-400">Academic Study Period</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{STUDENT_DETAILS.studyPeriod}</span>
              </div>
            </div>

            {/* Quick Department Focus Box */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-1">
                Academic Specialization Focus:
              </span>
              Comprehensive study of machine learning paradigms, prompt engineering, generative models, discrete mathematics, and end-to-end data pipelines.
            </div>
          </div>

          {/* Right Column: Narrative Biography & Career Aspirations */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-indigo-500" />
                <span>Professional Biography</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {BIOGRAPHY_PARAGRAPHS.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Career Aspirations Callout (Clean hairline box, anti-slop) */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/40">
                  <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                      Career Aspirations
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">
                      {CAREER_ASPIRATIONS}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Committed to transforming mathematical theory into resilient software agents, intelligent automation pipelines, and high-impact machine learning products.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <Cpu className="w-5 h-5 text-blue-500 mb-2" />
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">AI & ML Foundations</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Mastering Python, vector logic, regression, classification, and generative models.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <Workflow className="w-5 h-5 text-indigo-500 mb-2" />
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">n8n Automation</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Designing multi-app automated webhooks, data sinks, and trigger-based micro-services.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <BookOpen className="w-5 h-5 text-purple-500 mb-2" />
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Continuous Growth</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Regular project building, prompt engineering refinement, and open-source exploration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Year Academic Progression Timeline (2026-2030) */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-4 h-4 text-indigo-500" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Academic Roadmap (2026 – 2030)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {ACADEMIC_TIMELINE.map((item, index) => (
              <div
                key={item.period}
                className="relative p-5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      {item.period}
                    </span>
                    {index === 0 && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        Current
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                    {item.institution}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-indigo-500 mt-1">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
