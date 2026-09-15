'use client';

import { useState } from 'react';
import { projectsData } from '@/data/portfolioData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['Todos', 'DevOps & Automatización', 'Backend & APIs', 'Móvil & Desktop', 'Frontend & Next.js'];

  const filteredProjects = activeCategory === 'Todos'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="projects-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">Portafolio Seleccionado</span>
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">
            Proyectos reales enfocados en infraestructura propia (Ubuntu Server, Docker, cloudflared), automatización con Python, APIs REST con NestJS y aplicaciones Flutter.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filter-wrapper">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-media">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-img" 
                />
                <span className="project-badge">{project.badge}</span>
              </div>

              <div className="project-content">
                <div className="project-category-tag">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary-sm"
                    >
                      <span>Ver Demo</span>
                      <span>↗</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-github-sm"
                    >
                      <img src="/img/iconos/github.svg" alt="GitHub" width="16" height="16" />
                      <span>GitHub</span>
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="btn-details-sm"
                  >
                    Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>✕</button>
            <div className="modal-header">
              <span className="project-badge">{selectedProject.badge}</span>
              <span className="project-category-tag">{selectedProject.category}</span>
              <h3 className="modal-title">{selectedProject.title}</h3>
            </div>
            <div className="modal-img-wrapper">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="modal-body">
              <h4>Descripción y Arquitectura:</h4>
              <p>{selectedProject.description}</p>

              <h4 className="tech-heading">Tecnologías Implementadas:</h4>
              <div className="tech-tags">
                {selectedProject.technologies.map((t, idx) => (
                  <span key={idx} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="modal-actions">
                {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                  <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Abrir Proyecto en Vivo ↗
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    Ver Repositorio en GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .projects-section {
          padding: 6rem 0;
          position: relative;
        }

        .filter-wrapper {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.6rem 1.4rem;
          border-radius: var(--radius-full);
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: var(--transition-normal);
        }

        .filter-btn:hover {
          color: #fff;
          border-color: var(--accent-cyan);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
          border-color: transparent;
          color: #fff;
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
        }

        .project-media {
          position: relative;
          width: 100%;
          height: 220px;
          background: #0f172a;
          overflow: hidden;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.08);
        }

        .project-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .project-content {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-category-tag {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-violet);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        .project-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .project-summary {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex: 1;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          font-size: 0.75rem;
          font-weight: 600;
          background: rgba(56, 189, 248, 0.08);
          color: #7dd3fc;
          border: 1px solid rgba(56, 189, 248, 0.2);
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
        }

        .project-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .btn-primary-sm {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.55rem 1rem;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: var(--radius-sm);
        }

        .btn-github-sm {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: var(--radius-sm);
        }

        .btn-github-sm:hover {
          border-color: #fff;
          color: #fff;
        }

        .btn-details-sm {
          background: transparent;
          border: none;
          color: var(--accent-cyan);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          margin-left: auto;
          text-decoration: underline;
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-content {
          max-width: 650px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          background: #0f172a;
          border: 1px solid var(--accent-cyan);
          box-shadow: 0 0 50px rgba(6, 182, 212, 0.25);
        }

        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #fff;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #fff;
          margin-top: 0.5rem;
        }

        .modal-img-wrapper {
          margin: 1.5rem 0;
          border-radius: var(--radius-md);
          overflow: hidden;
          max-height: 280px;
        }

        .modal-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-body h4 {
          color: #fff;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .modal-body p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .tech-heading {
          margin-top: 1rem;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
}
