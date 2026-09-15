'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge-neon">
            <span className="badge-pulse"></span>
            <span>{personalInfo.availability}</span>
          </div>

          <h1 className="hero-title">
            Hola, soy <span className="hero-name-gradient">{personalInfo.shortName}</span>
          </h1>

          <div className="typewriter-box">
            <span className="typewriter-prefix">&gt; Especialidad: </span>
            <span className="typewriter-text">{currentText}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          <div className="hero-cta-group">
            <a href="#proyectos" className="btn-primary">
              <span>Explorar Proyectos</span>
              <span>⚡</span>
            </a>
            <Link href="/cv" className="btn-secondary">
              <span>Ver CV Completo</span>
              <span>📄</span>
            </Link>
            <a 
              href={personalInfo.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp"
            >
              <span>WhatsApp Directo</span>
              <span>💬</span>
            </a>
          </div>

          <div className="social-quick-links">
            <span className="social-label">Redes profesionales:</span>
            <div className="social-icons-wrapper">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-pill" title="GitHub">
                <img src="/img/iconos/github.svg" alt="GitHub" width="18" height="18" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Profile Avatar & Interactive Ring */}
        <div className="hero-visual">
          <div className="avatar-frame-outer">
            <div className="avatar-frame-inner">
              <img 
                src={personalInfo.photo} 
                alt={personalInfo.name} 
                className="hero-avatar-img"
              />
            </div>

            {/* Floating Badges */}
            <div className="floating-tag tag-ai">
              <span className="tag-icon">🐧</span>
              <div>
                <span className="tag-title">Ubuntu & Docker</span>
                <span className="tag-subtitle">Home-Server & cloudflared</span>
              </div>
            </div>

            <div className="floating-tag tag-code">
              <span className="tag-icon">🟢</span>
              <div>
                <span className="tag-title">Backend & APIs</span>
                <span className="tag-subtitle">Node.js • NestJS • Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Strip */}
      <div className="container stats-container">
        <div className="stats-grid">
          {personalInfo.stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 8rem;
          padding-bottom: 5rem;
          position: relative;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 3.5rem;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -1.5px;
        }

        .hero-name-gradient {
          background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .typewriter-box {
          font-family: var(--font-mono);
          font-size: 1.15rem;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(56, 189, 248, 0.2);
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .typewriter-prefix {
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .typewriter-text {
          color: #fff;
          font-weight: 500;
        }

        .typewriter-cursor {
          color: var(--accent-cyan);
          animation: blink 1s step-end infinite;
          font-weight: 700;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        .hero-description {
          color: var(--text-muted);
          font-size: 1.15rem;
          line-height: 1.7;
          max-width: 580px;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .btn-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.4rem;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34d399;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: var(--radius-md);
          transition: var(--transition-normal);
        }

        .btn-whatsapp:hover {
          background: #10b981;
          color: #fff;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
          transform: translateY(-2px);
        }

        .social-quick-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.75rem;
          flex-wrap: wrap;
        }

        .social-label {
          font-size: 0.85rem;
          color: var(--text-dim);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .social-icons-wrapper {
          display: flex;
          gap: 0.6rem;
        }

        .social-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.8rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .social-pill:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--accent-cyan);
          color: #fff;
          transform: translateY(-2px);
        }

        /* Hero Visual Frame */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .avatar-frame-outer {
          position: relative;
          width: 320px;
          height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-frame-outer::before {
          content: '';
          position: absolute;
          inset: -15px;
          border-radius: 30px;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(139, 92, 246, 0.4));
          filter: blur(25px);
          z-index: 0;
          animation: glow-pulse 6s ease-in-out infinite alternate;
        }

        @keyframes glow-pulse {
          0% { transform: scale(0.95); opacity: 0.6; }
          100% { transform: scale(1.05); opacity: 0.9; }
        }

        .avatar-frame-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(180deg, #1e293b, #0f172a);
          border: 2px solid rgba(56, 189, 248, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        }

        .hero-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.5s ease;
        }

        .avatar-frame-inner:hover .hero-avatar-img {
          transform: scale(1.04);
        }

        /* Floating Tags */
        .floating-tag {
          position: absolute;
          z-index: 2;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: var(--radius-md);
          padding: 0.65rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          animation: float 4s ease-in-out infinite;
        }

        .tag-ai {
          bottom: -15px;
          left: -25px;
        }

        .tag-code {
          top: 25px;
          right: -30px;
          animation-delay: 2s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .tag-icon {
          font-size: 1.5rem;
        }

        .tag-title {
          display: block;
          font-weight: 700;
          font-size: 0.85rem;
          color: #fff;
        }

        .tag-subtitle {
          display: block;
          font-size: 0.75rem;
          color: var(--accent-cyan);
        }

        /* Stats Strip */
        .stats-container {
          margin-top: 4rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--bg-card-border);
          border-radius: var(--radius-md);
          padding: 1.5rem 1rem;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: var(--transition-normal);
        }

        .stat-card:hover {
          border-color: var(--accent-cyan);
          transform: translateY(-4px);
        }

        .stat-number {
          display: block;
          font-size: 1.35rem;
          font-weight: 900;
          background: linear-gradient(135deg, var(--accent-cyan), #fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          display: block;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-top: 0.25rem;
        }

        @media (max-width: 960px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content {
            align-items: center;
          }
          .hero-cta-group, .social-quick-links {
            justify-content: center;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .tag-code {
            right: 0;
          }
          .tag-ai {
            left: 0;
          }
        }
      `}</style>
    </section>
  );
}
