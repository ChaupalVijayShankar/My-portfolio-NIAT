import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Play,
  Workflow,
  Sparkles,
  Gamepad2,
  Plus,
  Edit3,
  Trash2,
  X,
  Check,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectsProps {
  projects: ProjectItem[];
  onAddProject: (project: ProjectItem) => void;
  onUpdateProject: (project: ProjectItem) => void;
  onDeleteProject: (id: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
}) => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);

  // Form state for project editor
  const [formTitle, setFormTitle] = useState('');
  const [formStatus, setFormStatus] = useState<'Completed' | 'In Progress' | 'Planned'>('Completed');
  const [formCategory, setFormCategory] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formLongDescription, setFormLongDescription] = useState('');
  const [formTechInput, setFormTechInput] = useState('');
  const [formGithubUrl, setFormGithubUrl] = useState('');
  const [formDemoUrl, setFormDemoUrl] = useState('');

  // Interactive Mini-Game state for Project 1 modal
  const [gameScore, setGameScore] = useState(0);
  const [gameRunning, setGameRunning] = useState(false);
  const [gameTargets, setGameTargets] = useState<{ id: number; x: number; y: number }[]>([]);

  // Interactive workflow step for n8n modal
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  const openNewProjectModal = () => {
    setEditingProject(null);
    setFormTitle('');
    setFormStatus('Planned');
    setFormCategory('AI & Software');
    setFormDescription('');
    setFormLongDescription('');
    setFormTechInput('Python, Machine Learning');
    setFormGithubUrl('https://github.com/ChaupalVijayShankar');
    setFormDemoUrl('');
    setIsEditorOpen(true);
  };

  const openEditModal = (proj: ProjectItem) => {
    setEditingProject(proj);
    setFormTitle(proj.title);
    setFormStatus(proj.status as any);
    setFormCategory(proj.category || 'AI Project');
    setFormDescription(proj.description);
    setFormLongDescription(proj.longDescription || '');
    setFormTechInput(proj.technologies.join(', '));
    setFormGithubUrl(proj.githubUrl);
    setFormDemoUrl(proj.liveDemoUrl || '');
    setIsEditorOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formDescription.trim()) return;

    const techArray = formTechInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    if (editingProject) {
      onUpdateProject({
        ...editingProject,
        title: formTitle,
        status: formStatus,
        category: formCategory,
        description: formDescription,
        longDescription: formLongDescription,
        technologies: techArray,
        githubUrl: formGithubUrl || 'https://github.com/ChaupalVijayShankar',
        liveDemoUrl: formDemoUrl,
      });
    } else {
      const newProj: ProjectItem = {
        id: `proj-${Date.now()}`,
        title: formTitle,
        status: formStatus,
        category: formCategory,
        description: formDescription,
        longDescription: formLongDescription,
        technologies: techArray,
        imageUrl: '',
        githubUrl: formGithubUrl || 'https://github.com/ChaupalVijayShankar',
        liveDemoUrl: formDemoUrl,
        isCustom: true,
      };
      onAddProject(newProj);
    }
    setIsEditorOpen(false);
  };

  // Mini click target game logic
  const startMiniGame = () => {
    setGameScore(0);
    setGameRunning(true);
    setGameTargets([
      { id: 1, x: 20, y: 30 },
      { id: 2, x: 60, y: 50 },
      { id: 3, x: 40, y: 80 },
    ]);
  };

  const hitTarget = (id: number) => {
    setGameScore((prev) => prev + 10);
    setGameTargets((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              id,
              x: Math.floor(Math.random() * 80) + 10,
              y: Math.floor(Math.random() * 70) + 15,
            }
          : t
      )
    );
  };

  return (
    <section id="projects" className="py-16 md:py-24 relative bg-slate-900/20 border-t border-slate-200/50 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              <FolderGit2 className="w-4 h-4" />
              <span>Engineered Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Projects & Experiments
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Interactive software prototypes, algorithmic game logic, and automated enterprise pipelines built by Chaupal Vijay Shankar.
            </p>
          </div>

          {/* Add / Edit Project Button */}
          <button
            onClick={openNewProjectModal}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-all self-start md:self-auto shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add / Customize Project</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isGameDev = project.id === 'game-development';
            const isN8n = project.id === 'linkedin-automation-n8n';

            return (
              <div
                key={project.id}
                className="flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all hover:shadow-xl dark:hover:shadow-indigo-950/20 overflow-hidden group"
              >
                {/* Visual Header / Simulation banner */}
                <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
                  {/* Subtle interactive backdrop depending on project type */}
                  {isGameDev ? (
                    <div className="relative w-full h-full bg-gradient-to-tr from-purple-950/80 via-slate-950 to-blue-950/80 flex items-center justify-center p-6 text-center">
                      <div className="space-y-2">
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-400 flex items-center justify-center mx-auto shadow-inner group-hover:scale-110 transition-transform">
                          <Gamepad2 className="w-6 h-6" />
                        </div>
                        <div className="text-xs font-mono text-purple-300 font-semibold">
                          Game Logic Engine
                        </div>
                        <div className="text-[11px] text-slate-400">
                          State Machines · Collision Loops · Controls
                        </div>
                      </div>
                    </div>
                  ) : isN8n ? (
                    <div className="relative w-full h-full bg-gradient-to-tr from-blue-950/80 via-slate-950 to-indigo-950/80 flex items-center justify-center p-6 text-center">
                      <div className="space-y-2">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto shadow-inner group-hover:scale-110 transition-transform">
                          <Workflow className="w-6 h-6" />
                        </div>
                        <div className="text-xs font-mono text-blue-300 font-semibold">
                          n8n Automation Flow
                        </div>
                        <div className="text-[11px] text-slate-400">
                          LinkedIn API · Google Sheets · Scheduler
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full bg-gradient-to-tr from-slate-900 via-slate-950 to-indigo-950 flex items-center justify-center p-6 text-center">
                      <div className="space-y-2">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center mx-auto shadow-inner group-hover:scale-110 transition-transform">
                          <Sparkles className="w-6 h-6" />
                        </div>
                        <div className="text-xs font-mono text-indigo-300 font-semibold">
                          {project.category || 'Future Project'}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Editable Workspace Reserved
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Status Banner */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md ${
                        project.status === 'Completed'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : project.status === 'In Progress'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Edit action */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => openEditModal(project)}
                      className="p-1.5 rounded-lg bg-black/60 hover:bg-black text-slate-200 border border-white/10 text-xs transition-colors"
                      title="Edit project details"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    {project.isCustom && (
                      <button
                        onClick={() => onDeleteProject(project.id)}
                        className="p-1.5 rounded-lg bg-red-950/80 hover:bg-red-900 text-red-200 border border-red-800 text-xs transition-colors"
                        title="Delete custom project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Unboxed Metadata (Section 1.A zero-pill rule) */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                      <span>{project.category || 'Software Engineering'}</span>
                      <span aria-hidden="true">·</span>
                      <span>Project {index + 1}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack items (clean text list with dot separators) */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-1.5">
                      Technologies
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                      {project.technologies.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span>{tech}</span>
                          {i < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-slate-400">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1 group/btn"
                    >
                      <span>Explore Overview</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          title="Open Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Deep Dive Lightbox / Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                  <span>{activeModalProject.category || 'Project Deep Dive'}</span>
                  <span>·</span>
                  <span>Status: {activeModalProject.status}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2">
                  Project Description
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeModalProject.longDescription || activeModalProject.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2">
                  Stack & Tooling
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Demo Simulation Area */}
              {activeModalProject.id === 'game-development' && (
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-white space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-purple-400">
                      <Gamepad2 className="w-4 h-4" />
                      <span>Interactive Python Logic Simulator</span>
                    </div>
                    <span className="font-mono text-xs text-slate-300">
                      Score: {gameScore}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400">
                    Test the event loop & collision mechanics directly. Click the active nodes before they relocate!
                  </p>

                  <div className="relative h-44 rounded-lg bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center">
                    {!gameRunning ? (
                      <button
                        onClick={startMiniGame}
                        className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-bold flex items-center gap-2 transition-colors"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Start Game Logic Demo</span>
                      </button>
                    ) : (
                      <div className="w-full h-full relative">
                        {gameTargets.map((target) => (
                          <button
                            key={target.id}
                            onClick={() => hitTarget(target.id)}
                            style={{
                              left: `${target.x}%`,
                              top: `${target.y}%`,
                            }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 hover:scale-125 transition-transform flex items-center justify-center text-[10px] font-bold shadow-lg shadow-cyan-500/50"
                          >
                            +10
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeModalProject.id === 'linkedin-automation-n8n' && (
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-white space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
                      <Workflow className="w-4 h-4" />
                      <span>n8n Pipeline Architecture</span>
                    </div>
                    <span className="text-[11px] font-mono text-amber-400">In Progress</span>
                  </div>

                  {/* Step sequence */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
                    {[
                      { step: '01', name: 'Trigger', desc: 'Cron Scheduler' },
                      { step: '02', name: 'Google Sheets', desc: 'Read content queue' },
                      { step: '03', name: 'n8n Logic', desc: 'JSON transform & filter' },
                      { step: '04', name: 'LinkedIn API', desc: 'Auto publication' },
                    ].map((node, i) => (
                      <div
                        key={node.step}
                        onClick={() => setActiveWorkflowStep(i)}
                        className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                          activeWorkflowStep === i
                            ? 'bg-blue-600/30 border-blue-500 text-white'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                        }`}
                      >
                        <div className="text-[10px] font-mono text-blue-400 font-bold">{node.step}</div>
                        <div className="font-semibold text-xs text-white">{node.name}</div>
                        <div className="text-[11px] text-slate-400">{node.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-slate-300 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                    <span className="font-semibold text-blue-400">Active Node Insight: </span>
                    {activeWorkflowStep === 0 && 'Configured cron schedule triggering every morning to check for scheduled industry updates.'}
                    {activeWorkflowStep === 1 && 'Fetches pre-approved AI research briefs, links, and hashtags from designated Google Sheets columns.'}
                    {activeWorkflowStep === 2 && 'n8n validates payload schema, appends author attribution, and formats markdown tags.'}
                    {activeWorkflowStep === 3 && 'Dispatches authenticated POST request to LinkedIn v2 API endpoint with response logging.'}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Repo</span>
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => openEditModal(activeModalProject)}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                >
                  Edit Project
                </button>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add / Edit Project Modal */}
      {isEditorOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setIsEditorOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {editingProject ? 'Edit Project' : 'Add New Portfolio Project'}
              </h3>
              <button
                onClick={() => setIsEditorOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="py-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Multimodal Vision Assistant"
                  className="w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Status
                  </label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Planned">Planned</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    placeholder="e.g. Machine Learning"
                    className="w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Short Description *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Concise overview of what this project accomplishes"
                  className="w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Technologies (comma-separated)
                </label>
                <input
                  type="text"
                  value={formTechInput}
                  onChange={(e) => setFormTechInput(e.target.value)}
                  placeholder="Python, PyTorch, n8n, SQL"
                  className="w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    value={formGithubUrl}
                    onChange={(e) => setFormGithubUrl(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Demo URL (Optional)
                  </label>
                  <input
                    type="text"
                    value={formDemoUrl}
                    onChange={(e) => setFormDemoUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditorOpen(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
