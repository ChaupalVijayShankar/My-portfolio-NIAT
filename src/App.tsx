import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { DeploymentModal } from './components/DeploymentModal';
import {
  INITIAL_CERTIFICATES,
  INITIAL_PROJECTS,
  PROFILE_PHOTO,
} from './data/portfolioData';
import { CertificateItem, ContactSubmission, ProjectItem } from './types/portfolio';
import { ChevronUp } from 'lucide-react';

export default function App() {
  // Theme state: default dark
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('chaupal_theme');
    if (saved) return saved === 'dark';
    return true; // Default to sleek dark mode as requested
  });

  // Photo state
  const [customPhoto, setCustomPhoto] = useState<string>(() => {
    return localStorage.getItem('chaupal_photo') || PROFILE_PHOTO;
  });

  // Projects state
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    const saved = localStorage.getItem('chaupal_projects');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_PROJECTS;
      }
    }
    return INITIAL_PROJECTS;
  });

  // Certifications state
  const [certificates, setCertificates] = useState<CertificateItem[]>(() => {
    const saved = localStorage.getItem('chaupal_certificates');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_CERTIFICATES;
      }
    }
    return INITIAL_CERTIFICATES;
  });

  // Contact submissions state
  const [submissions, setSubmissions] = useState<ContactSubmission[]>(() => {
    const saved = localStorage.getItem('chaupal_contact_submissions');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  // Modals state
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDeploymentGuideOpen, setIsDeploymentGuideOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync theme to document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('chaupal_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('chaupal_theme', 'light');
    }
  }, [isDark]);

  // Scroll listener for back-to-top floating button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleUpdatePhoto = (newUrl: string) => {
    setCustomPhoto(newUrl);
    localStorage.setItem('chaupal_photo', newUrl);
  };

  const handleAddProject = (project: ProjectItem) => {
    const updated = [project, ...projects];
    setProjects(updated);
    localStorage.setItem('chaupal_projects', JSON.stringify(updated));
  };

  const handleUpdateProject = (updatedProj: ProjectItem) => {
    const updated = projects.map((p) => (p.id === updatedProj.id ? updatedProj : p));
    setProjects(updated);
    localStorage.setItem('chaupal_projects', JSON.stringify(updated));
  };

  const handleDeleteProject = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    localStorage.setItem('chaupal_projects', JSON.stringify(updated));
  };

  const handleUpdateCertificateImage = (id: string, imageUrl: string) => {
    const updated = certificates.map((c) =>
      c.id === id ? { ...c, imageUrl } : c
    );
    setCertificates(updated);
    localStorage.setItem('chaupal_certificates', JSON.stringify(updated));
  };

  const handleAddCertificate = (newCert: CertificateItem) => {
    const updated = [...certificates, newCert];
    setCertificates(updated);
    localStorage.setItem('chaupal_certificates', JSON.stringify(updated));
  };

  const handleSaveContactSubmission = (sub: ContactSubmission) => {
    const updated = [sub, ...submissions];
    setSubmissions(updated);
    localStorage.setItem('chaupal_contact_submissions', JSON.stringify(updated));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 flex flex-col font-sans selection:bg-indigo-500 selection:text-white bg-grid-pattern">
      {/* Sticky Navigation */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenDeploymentGuide={() => setIsDeploymentGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Home / Hero */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          customPhotoUrl={customPhoto}
          onUpdatePhoto={handleUpdatePhoto}
        />

        {/* Section 2: About Me & Student Credentials */}
        <About />

        {/* Section 3: Skills & Capabilities */}
        <Skills />

        {/* Section 4: Projects & Solutions */}
        <Projects
          projects={projects}
          onAddProject={handleAddProject}
          onUpdateProject={handleUpdateProject}
          onDeleteProject={handleDeleteProject}
        />

        {/* Section 5: Certifications & Achievements */}
        <Certifications
          certificates={certificates}
          onUpdateCertificateImage={handleUpdateCertificateImage}
          onAddCertificate={handleAddCertificate}
        />

        {/* Section 6: Contact & Messaging */}
        <Contact onSaveSubmission={handleSaveContactSubmission} />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenDeploymentGuide={() => setIsDeploymentGuideOpen(true)}
      />

      {/* Interactive Resume Lightbox Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* GitHub & Vercel Publishing Guide Modal */}
      <DeploymentModal
        isOpen={isDeploymentGuideOpen}
        onClose={() => setIsDeploymentGuideOpen(false)}
      />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-slate-900/90 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-500 text-white shadow-xl shadow-indigo-500/25 border border-slate-700/50 backdrop-blur-md transition-all transform hover:-translate-y-1"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
