'use client';

import { certificationsData } from '@/data/portfolioData';

export default function Certifications() {
  return (
    <section id="certificados" className="certs-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">Validación Académica</span>
          <h2 className="section-title">Certificaciones Oficiales</h2>
          <p className="section-subtitle">
            Acreditaciones internacionales respaldadas por Cisco Networking Academy en áreas de ciberseguridad, IoT, redes y emprendimiento tecnológico.
          </p>
        </div>

        <div className="certs-grid">
          {certificationsData.map((cert, index) => (
            <div key={index} className="cert-card glass-card">
              <div className="cert-top">
                <span className="cert-icon">{cert.icon}</span>
                <span className="cert-badge">{cert.badge}</span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>

              <div className="cert-footer">
                <span className="cert-date">{cert.date}</span>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-verify-link"
                >
                  <span>Verificar</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .certs-section {
          padding: 6rem 0;
          position: relative;
        }

        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 1.75rem;
        }

        .cert-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.75rem;
        }

        .cert-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .cert-icon {
          font-size: 2rem;
        }

        .cert-badge {
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #c084fc;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .cert-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.4;
          margin-bottom: 0.5rem;
        }

        .cert-issuer {
          color: var(--text-muted);
          font-size: 0.88rem;
          margin-bottom: 1.5rem;
        }

        .cert-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .cert-date {
          font-size: 0.8rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .cert-verify-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #fff;
          background: rgba(255, 255, 255, 0.06);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          transition: var(--transition-fast);
        }

        .cert-verify-link:hover {
          background: var(--accent-cyan);
          color: #000;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
        }
      `}</style>
    </section>
  );
}
