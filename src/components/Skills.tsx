import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Globe,
  Sparkles,
  Users,
  CheckCircle,
  Layers,
} from 'lucide-react';
import { INITIAL_SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Programming',
    'Web Development',
    'Emerging Technologies',
    'Professional Skills',
  ];

  const filteredSkills =
    selectedCategory === 'All'
      ? INITIAL_SKILLS
      : INITIAL_SKILLS.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (category: SkillItem['category']) => {
    switch (category) {
      case 'Programming':
        return <Terminal className="w-4 h-4 text-blue-500" />;
      case 'Web Development':
        return <Globe className="w-4 h-4 text-emerald-500" />;
      case 'Emerging Technologies':
        return <Sparkles className="w-4 h-4 text-indigo-500" />;
      case 'Professional Skills':
        return <Users className="w-4 h-4 text-purple-500" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              <Code2 className="w-4 h-4" />
              <span>Technical & Professional Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Skills & Emerging Competencies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Structured foundations in software engineering, modern AI tools, relational data, and cross-functional problem solving.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons allowed per zero-pill guideline for functional filters) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Category Breakdown Overviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1">
              <Terminal className="w-3.5 h-3.5 text-blue-500" />
              <span>Programming</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Python OOP, algorithms, and relational SQL queries.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1">
              <Globe className="w-3.5 h-3.5 text-emerald-500" />
              <span>Web Development</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Semantic HTML5 structure and responsive modern CSS.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Emerging Tech</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Generative AI, AI toolchains, and n8n workflow automation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1">
              <Users className="w-3.5 h-3.5 text-purple-500" />
              <span>Professional</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Problem solving, collaboration, creativity & rapid learning.
            </p>
          </div>
        </div>

        {/* Skill Cards Grid (NO fake percentage bars!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all hover:shadow-lg dark:hover:shadow-indigo-950/20 group flex flex-col justify-between"
            >
              <div>
                {/* Unboxed category metadata (Section 1.A zero-pill rule) */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 font-medium">
                    {getCategoryIcon(skill.category)}
                    <span>{skill.category}</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Active Focus</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {skill.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/70 space-y-2">
                {skill.highlight && (
                  <div className="flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{skill.highlight}</span>
                  </div>
                )}

                {skill.tags && (
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                    {skill.tags.map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {i < skill.tags!.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
