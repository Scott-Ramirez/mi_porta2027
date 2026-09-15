'use client';

import { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=Contacto desde Portafolio de ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message + '\n\nResponder a: ' + formState.email)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">Conectemos</span>
          <h2 className="section-title">Hablemos de tu Próximo Proyecto</h2>
          <p className="section-subtitle">
            ¿Tienes una propuesta laboral, proyecto freelance o deseas colaborar en desarrollo de software con IA? Contáctame directamente.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Direct Channels */}
          <div className="channels-card glass-card">
            <h3 className="channels-title">Canales de Contacto Directo</h3>
            <p className="channels-desc">
              Respondo con prontitud por WhatsApp o correo electrónico. Haz clic abajo para iniciar conversación o copiar mis datos.
            </p>

            <div className="contact-action-box">
              <a 
                href={personalInfo.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="action-channel whatsapp-channel"
              >
                <span className="channel-icon">💬</span>
                <div className="channel-details">
                  <span className="channel-name">WhatsApp Directo</span>
                  <span className="channel-val">{personalInfo.phone}</span>
                </div>
                <span className="channel-arrow">↗</span>
              </a>

              <div className="action-channel email-channel" onClick={copyToClipboard}>
                <span className="channel-icon">✉️</span>
                <div className="channel-details">
                  <span className="channel-name">Correo Electrónico</span>
                  <span className="channel-val">{personalInfo.email}</span>
                </div>
                <button className="copy-btn">
                  {copied ? '¡Copiado! ✓' : 'Copiar 📋'}
                </button>
              </div>

              <div className="action-channel location-channel">
                <span className="channel-icon">📍</span>
                <div className="channel-details">
                  <span className="channel-name">Ubicación y Disponibilidad</span>
                  <span className="channel-val">{personalInfo.location} — Remoto / Presencial</span>
                </div>
              </div>
            </div>

            <div className="socials-footer">
              <span className="socials-title">Perfiles Profesionales:</span>
              <div className="socials-pills">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-tag">GitHub</a>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="form-card glass-card">
            <h3 className="form-title">Envíame un Mensaje Rápido</h3>
            <form onSubmit={handleSendMessage} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Tu Nombre:</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  placeholder="Ej. Carlos Mendoza"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Tu Correo Electrónico:</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  placeholder="ejemplo@empresa.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje o Propuesta:</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  required
                  placeholder="Cuéntame sobre el puesto o proyecto..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit-btn">
                <span>Enviar Propuesta por Correo</span>
                <span>🚀</span>
              </button>

              {sent && (
                <div className="form-success-note">
                  ✓ Abriendo tu cliente de correo para enviar el mensaje...
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 6rem 0;
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2.5rem;
        }

        .channels-title, .form-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.75rem;
        }

        .channels-desc {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .contact-action-box {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .action-channel {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: var(--transition-normal);
        }

        .action-channel:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--accent-cyan);
          transform: translateX(4px);
        }

        .whatsapp-channel:hover {
          border-color: #10b981;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
        }

        .channel-icon {
          font-size: 1.75rem;
        }

        .channel-details {
          flex: 1;
        }

        .channel-name {
          display: block;
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .channel-val {
          display: block;
          font-size: 1.05rem;
          color: #fff;
          font-weight: 600;
          margin-top: 0.15rem;
        }

        .channel-arrow {
          font-size: 1.25rem;
          color: var(--text-dim);
          transition: var(--transition-fast);
        }

        .action-channel:hover .channel-arrow {
          color: var(--accent-cyan);
          transform: translate(2px, -2px);
        }

        .copy-btn {
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: var(--accent-cyan);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .copy-btn:hover {
          background: var(--accent-cyan);
          color: #000;
        }

        .socials-footer {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .socials-title {
          font-size: 0.85rem;
          color: var(--text-dim);
          text-transform: uppercase;
          font-weight: 700;
          display: block;
          margin-bottom: 0.75rem;
        }

        .socials-pills {
          display: flex;
          gap: 0.6rem;
        }

        .social-tag {
          padding: 0.4rem 0.9rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .social-tag:hover {
          background: var(--accent-cyan);
          color: #000;
          font-weight: 700;
        }

        /* Form */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .form-group input, .form-group textarea {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem;
          color: #fff;
          font-family: inherit;
          font-size: 0.95rem;
          transition: var(--transition-fast);
        }

        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-cyan);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
        }

        .form-submit-btn {
          width: 100%;
          margin-top: 0.5rem;
        }

        .form-success-note {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34d399;
          padding: 0.75rem;
          border-radius: var(--radius-sm);
          text-align: center;
          font-size: 0.9rem;
          font-weight: 600;
        }

        @media (max-width: 868px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
