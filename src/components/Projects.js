'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { ExternalLink, Info, X, Terminal, ArrowUpRight } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.es;

  const [activeCategory, setActiveCategory] = useState(t.projects.categories[0]);
  const [selectedProject, setSelectedProject] = useState(null);

  // Sync category if language switches
  const currentCategories = t.projects.categories;
  const isAll = activeCategory === currentCategories[0] || activeCategory === 'Todos' || activeCategory === 'All';

  const filteredProjects = isAll
    ? t.projects.items
    : t.projects.items.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-20 lg:py-28 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>{t.projects.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Category Filter Pills (Wrap centrado sin desbordamiento) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-8 sm:mb-12 px-2">
          {currentCategories.map((cat, idx) => {
            const isActive = (idx === 0 && isAll) || activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-950/60 font-semibold'
                    : 'bg-slate-900/60 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-950/40"
            >
              <div>
                {/* Media Image with Overlay Badge */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
                  
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300">
                    {project.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-slate-800/40 text-slate-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 sm:p-6 pt-0 flex items-center justify-between gap-2 border-t border-slate-800/50 mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 py-2 cursor-pointer transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>{t.projects.detailsBtn}</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                      title="GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-2xl shadow-black p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-10">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                  {selectedProject.badge}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {selectedProject.category}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
            </div>

            {/* Modal Image */}
            <div className="rounded-2xl overflow-hidden aspect-video bg-slate-950 border border-slate-800">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Description */}
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1.5">
                  {t.projects.modalDescTitle}
                </h4>
                <p>{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                  {t.projects.modalStackTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((techItem, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>{t.projects.modalGithubBtn}</span>
                </a>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
