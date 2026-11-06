import React, { useState } from 'react';
import {
  X,
  Github,
  Globe,
  Check,
  Copy,
  Terminal,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const gitSteps = `# Step 1: Initialize Git and stage files
git init
git add .
git commit -m "Initial commit: Chaupal Vijay Shankar AI Developer Portfolio"

# Step 2: Create a new repository on your GitHub account (ChaupalVijayShankar)
# e.g., 'chaupal-vijay-portfolio'

# Step 3: Link remote and push to GitHub
git branch -M main
git remote add origin https://github.com/ChaupalVijayShankar/chaupal-vijay-portfolio.git
git push -u origin main`;

  const vercelSteps = `1. Go to https://vercel.com and log in with your GitHub account.
2. Click "Add New..." -> "Project".
3. Select your repository: 'ChaupalVijayShankar/chaupal-vijay-portfolio'.
4. Framework Preset: Automatically detected as "Vite".
5. Root Directory: ./
6. Build Command: npm run build
7. Output Directory: dist
8. Click "Deploy". Your portfolio will be live at:
   https://chaupal-vijay-portfolio.vercel.app (with custom domain support!)`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                How to Connect to GitHub & Publish on Vercel
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Step-by-step production deployment instructions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-6 text-xs sm:text-sm">
          {/* Step 1: GitHub Instructions */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                <span>Part 1: Push Code to Your GitHub Account</span>
              </div>
              <button
                onClick={() => handleCopy(gitSteps, 'git')}
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline"
              >
                {copiedSnippet === 'git' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Commands</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              Run these commands in your project terminal to link your local codebase to your GitHub repository:
            </p>

            <pre className="p-4 rounded-xl bg-slate-950 text-slate-300 font-mono text-xs overflow-x-auto border border-slate-800">
              <code>{gitSteps}</code>
            </pre>
          </div>

          {/* Step 2: Vercel Instructions */}
          <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <Globe className="w-4 h-4 text-indigo-500" />
                <span>Part 2: 1-Click Deployment to Vercel</span>
              </div>
              <a
                href="https://vercel.com/new"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline"
              >
                <span>Open Vercel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-700 dark:text-slate-300">
              <ol className="list-decimal list-inside space-y-1.5 leading-relaxed">
                <li>Log in to <span className="font-semibold text-indigo-500">vercel.com</span> using your GitHub credentials.</li>
                <li>Click <strong>Add New Project</strong> and import your repository: <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">chaupal-vijay-portfolio</code>.</li>
                <li>Vercel automatically detects <strong>Vite + React</strong>. Keep standard settings (<code className="text-indigo-400">npm run build</code>, output directory <code className="text-indigo-400">dist</code>).</li>
                <li>Click <strong>Deploy</strong>. Within 30 seconds, your portfolio is live with free global CDN and HTTPS!</li>
                <li>Every time you push new code to GitHub (<code className="text-indigo-400">git push origin main</code>), Vercel automatically rebuilds and updates your site!</li>
              </ol>
            </div>
          </div>

          {/* Technical confirmation */}
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-500" />
            <span>This repository is 100% Vercel-ready with Vite build configuration and zero required server secrets.</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};
