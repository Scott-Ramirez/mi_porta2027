'use client';

import { personalInfo, educationData } from '@/data/portfolioData';

export default function About() {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">Perfil & Trayectoria</span>
          <h2 className="section-title">Sobre Mí & Formación Superior</h2>
          <p className="section-subtitle">
            Conoce mi enfoque en desarrollo backend, infraestructura Linux con Docker y automatización con Python.
          </p>
        </div>

        <div className="about-grid">
          {/* Bio Card */}
          <div className="bio-card glass-card">
            <h3 className="card-heading">
              <span>🐧</span>
              <span>Enfoque Técnico & Infraestructura</span>
            </h3>
            <p className="bio-text">
              Soy <strong>Profesional Técnico en Ingeniería de Software</strong> graduado de <strong>SENATI</strong>. Mi especialización principal es el <strong>desarrollo backend y la administración de servidores</strong>. He configurado y gestiono mi propio <strong>servidor casero (Home Server) bajo Ubuntu Server</strong>, implementando arquitecturas con <strong>Docker y Docker Compose</strong> para el aislamiento de servicios y bases de datos.
            </p>
            <p className="bio-text">
              Utilizo <strong>Cloudflare Tunnels (cloudflared)</strong> para exponer servicios web de forma segura sin abrir puertos en el router. Además, potencio mi flujo de operaciones creando <strong>scripts automatizados en Python</strong> encargados de generar copias de seguridad programadas de bases de datos (PostgreSQL, MySQL, MongoDB), gestionar la retención de respaldos y automatizar el <strong>redespliegue de aplicaciones y contenedores</strong>.
            </p>
            <p className="bio-text">
              Complemento mi perfil con desarrollo de APIs RESTful en <strong>Node.js y NestJS</strong>, aplicaciones móviles y desktop con <strong>Flutter</strong>, y modelado 3D intermedio en <strong>Blender</strong>.
            </p>

            <div className="about-details-grid">
              <div className="detail-box">
                <span className="detail-label">Especialidad:</span>
                <span className="detail-val detail-highlight">Backend & DevOps</span>
              </div>
              <div className="detail-box">
                <span className="detail-label">Servidor Propio:</span>
                <span className="detail-val">Ubuntu Server + Docker</span>
              </div>
              <div className="detail-box">
                <span className="detail-label">Seguridad & Red:</span>
                <span className="detail-val">cloudflared (Tunnels)</span>
              </div>
              <div className="detail-box">
                <span className="detail-label">Automatización:</span>
                <span className="detail-val detail-highlight">Python Scripts</span>
              </div>
            </div>
          </div>

          {/* Education Card - Solo SENATI */}
          <div className="education-card glass-card">
            <h3 className="card-heading">
              <span>🎓</span>
              <span>Educación Superior</span>
            </h3>
            <div className="timeline">
              {educationData.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-institution">{edu.institution}</span>
                      <span className="timeline-badge">{edu.status}</span>
                    </div>
                    <h4 className="timeline-degree">{edu.degree}</h4>
                    <span className="timeline-period">{edu.period}</span>
                    <p className="timeline-note">
                      Formación técnica superior de 3 años orientada a arquitectura de software, bases de datos relacionales y no relacionales, redes, infraestructura y desarrollo de aplicaciones industriales.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 6rem 0;
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .card-heading {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.35rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .bio-text {
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 1.02rem;
          margin-bottom: 1.25rem;
        }

        .bio-text strong {
          color: #fff;
        }

        .about-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .detail-box {
          background: rgba(255, 255, 255, 0.03);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .detail-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 0.2rem;
        }

        .detail-val {
          font-size: 0.95rem;
          color: #fff;
          font-weight: 600;
        }

        .detail-highlight {
          color: var(--accent-cyan) !important;
        }

        /* Timeline */
        .timeline {
          position: relative;
          padding-left: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 8px;
          bottom: 8px;
          left: 6px;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-cyan), var(--accent-violet), transparent);
        }

        .timeline-item {
          position: relative;
        }

        .timeline-dot {
          position: absolute;
          left: -1.5rem;
          top: 6px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #0f172a;
          border: 2px solid var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan);
        }

        .timeline-content {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 1.5rem;
          border-radius: var(--radius-md);
        }

        .timeline-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .timeline-institution {
          font-weight: 800;
          color: var(--accent-cyan);
          font-size: 1.25rem;
        }

        .timeline-badge {
          font-size: 0.75rem;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
        }

        .timeline-degree {
          font-size: 1.05rem;
          color: #fff;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .timeline-period {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          display: block;
          margin-bottom: 0.75rem;
        }

        .timeline-note {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 868px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-details-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
