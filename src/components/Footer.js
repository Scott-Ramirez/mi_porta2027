'use client';

import Link from 'next/link';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <span className="bracket">&lt;</span>
            <span className="brand-name">Anthony</span>
            <span className="brand-highlight">.AI</span>
            <span className="bracket">/&gt;</span>
          </Link>
          <p className="footer-tagline">
            Ingeniería de Software con Inteligencia Artificial. Construyendo experiencias digitales rápidas, escalables y con propósito.
          </p>
        </div>

        <div className="footer-links">
          <div className="link-col">
            <span className="col-title">Navegación</span>
            <Link href="/#inicio">Inicio</Link>
            <Link href="/#proyectos">Proyectos</Link>
            <Link href="/#habilidades">Habilidades</Link>
            <Link href="/#certificados">Certificados</Link>
          </div>

          <div className="link-col">
            <span className="col-title">Recursos</span>
            <Link href="/cv">Curriculum Vitae (CV)</Link>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">Repositorios GitHub</a>
            <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">Chat de WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
        </p>

        <button onClick={scrollToTop} className="back-to-top" title="Volver al inicio">
          <span>Volver arriba</span>
          <span>↑</span>
        </button>
      </div>

      <style jsx>{`
        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(5, 7, 13, 0.95);
          padding: 4rem 0 2rem;
          margin-top: 4rem;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: 800;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .bracket {
          color: var(--accent-cyan);
        }

        .brand-name {
          color: #fff;
        }

        .brand-highlight {
          color: var(--accent-violet);
        }

        .footer-tagline {
          color: var(--text-muted);
          max-width: 420px;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .footer-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .link-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .col-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.25rem;
        }

        .link-col a {
          color: var(--text-muted);
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        .link-col a:hover {
          color: var(--accent-cyan);
          transform: translateX(4px);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright-text {
          font-size: 0.85rem;
          color: var(--text-dim);
        }

        .back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .back-to-top:hover {
          background: var(--accent-cyan);
          color: #000;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
          .footer-links {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
