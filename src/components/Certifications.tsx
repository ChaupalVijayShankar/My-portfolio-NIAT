import React, { useState } from 'react';
import {
  Award,
  Upload,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Eye,
  X,
  FileCheck2,
  Plus,
} from 'lucide-react';
import { CertificateItem } from '../types/portfolio';

interface CertificationsProps {
  certificates: CertificateItem[];
  onUpdateCertificateImage: (id: string, imageUrl: string) => void;
  onAddCertificate: (cert: CertificateItem) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({
  certificates,
  onUpdateCertificateImage,
  onAddCertificate,
}) => {
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCertTitle, setNewCertTitle] = useState('');
  const [newCertIssuer, setNewCertIssuer] = useState('');
  const [newCertDesc, setNewCertDesc] = useState('');

  const handleImageUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateCertificateImage(id, event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddNewCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCertTitle.trim() || !newCertIssuer.trim()) return;

    const newCert: CertificateItem = {
      id: `cert-${Date.now()}`,
      title: newCertTitle,
      issuer: newCertIssuer,
      description: newCertDesc || 'Official certification acquired during academic studies.',
      verificationNote: `Issued by ${newCertIssuer}`,
      customUploaded: true,
    };
    onAddCertificate(newCert);
    setIsAddModalOpen(false);
    setNewCertTitle('');
    setNewCertIssuer('');
    setNewCertDesc('');
  };

  return (
    <section id="achievements" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              <Award className="w-4 h-4" />
              <span>Verified Qualifications</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Certifications & Accomplishments
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Recognized milestones across developer copiloting, enterprise workflow automation, and academic prompt engineering.
            </p>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors self-start md:self-auto shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add Certificate</span>
          </button>
        </div>

        {/* 3-Column Certificate Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all hover:shadow-xl dark:hover:shadow-indigo-950/20 overflow-hidden group"
            >
              {/* Visual Card Top: Styled Document or Uploaded Image */}
              <div className="relative aspect-[4/3] w-full bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                {cert.imageUrl ? (
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="space-y-3 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto shadow-inner group-hover:scale-105 transition-transform">
                      <FileCheck2 className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-indigo-400">
                        {cert.issuer}
                      </div>
                      <div className="text-sm font-bold text-slate-200 mt-0.5 line-clamp-1">
                        {cert.title}
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Original Certificate Document Slot
                    </div>
                  </div>
                )}

                {/* Subtle Certificate Watermark Frame */}
                <div
                  aria-hidden="true"
                  className="absolute inset-2 border border-dashed border-slate-800/80 rounded-xl pointer-events-none"
                />

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="px-3 py-1.5 rounded-lg bg-white text-slate-900 text-xs font-semibold flex items-center gap-1.5 shadow-md hover:bg-slate-100 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Modal</span>
                  </button>

                  <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md hover:bg-indigo-500 transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(cert.id, e)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400 font-medium">
                    {cert.verificationNote}
                  </div>

                  {/* Upload placeholder button */}
                  <label className="cursor-pointer text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1">
                    <Upload className="w-3 h-3" />
                    <span>{cert.imageUrl ? 'Replace' : 'Upload'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(cert.id, e)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox / Fullscreen Viewer */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {activeCert.issuer} Credential
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {activeCert.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-4">
              {activeCert.imageUrl ? (
                <div className="max-h-96 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-800">
                  <img
                    src={activeCert.imageUrl}
                    alt={activeCert.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="p-8 rounded-xl bg-slate-50 dark:bg-slate-950 border border-dashed border-slate-300 dark:border-slate-800 text-center space-y-3">
                  <FileCheck2 className="w-12 h-12 text-indigo-500 mx-auto" />
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Certificate Image Upload Placeholder
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                    You can upload the scanned certificate image here. It will be immediately loaded into your portfolio view.
                  </p>
                  <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold cursor-pointer shadow-sm transition-colors">
                    <Upload className="w-4 h-4" />
                    <span>Upload Certificate File</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        handleImageUpload(activeCert.id, e);
                        setActiveCert(null);
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
              )}

              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Credential Description
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {activeCert.description}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-slate-200">Issuer Verification: </span>
                {activeCert.verificationNote}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end">
              <button
                onClick={() => setActiveCert(null)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Certificate Modal */}
      {isAddModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setIsAddModalOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Add New Certificate
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddNewCert} className="py-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Certificate Title *
                </label>
                <input
                  type="text"
                  required
                  value={newCertTitle}
                  onChange={(e) => setNewCertTitle(e.target.value)}
                  placeholder="e.g. Deep Learning Specialization"
                  className="w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Issuer / Organization *
                </label>
                <input
                  type="text"
                  required
                  value={newCertIssuer}
                  onChange={(e) => setNewCertIssuer(e.target.value)}
                  placeholder="e.g. Coursera, Google, Stanford Online"
                  className="w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  value={newCertDesc}
                  onChange={(e) => setNewCertDesc(e.target.value)}
                  placeholder="Topics covered and key milestones"
                  className="w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Add Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
