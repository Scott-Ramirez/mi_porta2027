'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Anthony</span>
          <span className="logo-highlight">.AI</span>
          <span className="logo-bracket">/&gt;</span>
        </Link>

        {/* Desktop Links */}
        <nav className="nav-menu desktop-menu">
          <Link href="/#inicio" className="nav-link">Inicio</Link>
          <Link href="/#proyectos" className="nav-link">Proyectos</Link>
          <Link href="/#habilidades" className="nav-link">Habilidades</Link>
          <Link href="/#certificados" className="nav-link">Certificados</Link>
          <Link href="/#sobre-mi" className="nav-link">Sobre Mí</Link>
          <Link href="/#contacto" className="nav-link">Contacto</Link>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <Link href="/cv" className="cv-badge-btn">
            <span>Ver CV Interactivo</span>
            <span className="cv-icon">📄</span>
          </Link>

          <button 
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mobile-dropdown">
          <Link href="/#inicio" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link href="/#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</Link>
          <Link href="/#habilidades" onClick={() => setMenuOpen(false)}>Habilidades</Link>
          <Link href="/#certificados" onClick={() => setMenuOpen(false)}>Certificados</Link>
          <Link href="/#sobre-mi" onClick={() => setMenuOpen(false)}>Sobre Mí</Link>
          <Link href="/#contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
          <Link href="/cv" onClick={() => setMenuOpen(false)} className="mobile-cv-btn">Ver CV Completo</Link>
        </div>
      )}

      <style jsx>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          transition: all 0.3s ease;
        }

        .navbar-header.scrolled {
          padding: 0.85rem 0;
          background: rgba(7, 10, 19, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(56, 189, 248, 0.12);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .logo-bracket {
          color: var(--accent-cyan);
        }

        .logo-name {
          color: #fff;
        }

        .logo-highlight {
          color: var(--accent-violet);
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-muted);
          font-size: 0.95rem;
          font-weight: 500;
          position: relative;
          padding: 0.25rem 0;
        }

        .nav-link:hover {
          color: #fff;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-cyan), var(--accent-violet));
          transition: width 0.25s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cv-badge-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.15rem;
          border-radius: var(--radius-full);
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.35);
          color: #d8b4fe;
          font-size: 0.85rem;
          font-weight: 600;
          transition: var(--transition-normal);
        }

        .cv-badge-btn:hover {
          background: var(--accent-violet);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: var(--glow-purple);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hamburger span {
          width: 24px;
          height: 2px;
          background: #fff;
          transition: 0.3s;
          border-radius: 2px;
        }

        .mobile-dropdown {
          display: none;
          flex-direction: column;
          gap: 1.25rem;
          padding: 1.5rem 2rem;
          background: rgba(11, 17, 33, 0.98);
          border-bottom: 1px solid rgba(56, 189, 248, 0.2);
        }

        .mobile-dropdown a {
          color: var(--text-secondary);
          font-size: 1.1rem;
          font-weight: 500;
        }

        .mobile-cv-btn {
          color: var(--accent-cyan) !important;
          font-weight: 700 !important;
        }

        @media (max-width: 868px) {
          .desktop-menu {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .mobile-dropdown {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
