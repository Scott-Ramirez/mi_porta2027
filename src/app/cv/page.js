'use client';

import Link from 'next/link';
import { personalInfo, certificationsData, educationData, skillsData } from '@/data/portfolioData';

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-wrapper">
      {/* Top Action Bar (hidden when printing) */}
      <div className="cv-top-bar no-print">
        <div className="container cv-top-container">
          <Link href="/" className="cv-back-link">
            <span>← Volver al Portafolio</span>
          </Link>
          <div className="cv-actions">
            <button onClick={handlePrint} className="btn-print">
              <span>Imprimir / Exportar a PDF</span>
              <span>🖨️</span>
            </button>
            <a 
              href={personalInfo.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp-cv"
            >
              <span>Contactar por WhatsApp</span>
              <span>💬</span>
            </a>
          </div>
        </div>
      </div>

      {/* CV Paper */}
      <div className="container cv-paper print-page">
        {/* Header */}
        <header className="cv-header">
          <div className="cv-header-main">
            <h1 className="cv-fullname">{personalInfo.name}</h1>
            <h2 className="cv-profession">{personalInfo.title}</h2>
            <p className="cv-subline">Especialista en Backend (Node.js, NestJS), Infraestructura Linux (Ubuntu Server, Docker, cloudflared) & Automatización con Python</p>
            
            <div className="cv-contact-row">
              <span className="contact-item"><strong>Ubicación:</strong> {personalInfo.location}</span>
              <span className="contact-item"><strong>Teléfono:</strong> {personalInfo.phone}</span>
              <span className="contact-item"><strong>Email:</strong> {personalInfo.email}</span>
              <span className="contact-item"><strong>GitHub:</strong> github.com/Scott-Ramirez</span>
            </div>
          </div>
          
          <div className="cv-photo-box">
            <img 
              src={personalInfo.photo} 
              alt={personalInfo.name} 
              className="cv-photo-img"
            />
          </div>
        </header>

        {/* 2-Column Content Layout */}
        <div className="cv-body-grid">
          {/* Left Column */}
          <aside className="cv-left-col">
            {/* Stack Técnico */}
            <section className="cv-block">
              <h3 className="cv-block-title">Stack Técnico</h3>
              
              <div className="tech-group">
                <h4 className="tech-group-name">Backend & APIs</h4>
                <ul className="tech-bullet-list">
                  <li>Node.js & ecosistema npm</li>
                  <li>NestJS (Arquitectura modular)</li>
                  <li>Diseño de APIs RESTful</li>
                  <li>Python (Backend & Scripts)</li>
                </ul>
              </div>

              <div className="tech-group">
                <h4 className="tech-group-name">Servidores & DevOps</h4>
                <ul className="tech-bullet-list">
                  <li>Ubuntu Server (Home Server)</li>
                  <li>Docker & Docker Compose</li>
                  <li>Cloudflare Tunnels (cloudflared)</li>
                  <li>Bash & Línea de comandos Linux</li>
                </ul>
              </div>

              <div className="tech-group">
                <h4 className="tech-group-name">Automatización (Python)</h4>
                <ul className="tech-bullet-list">
                  <li>Backups automatizados de BD</li>
                  <li>Rotación y retención de respaldos</li>
                  <li>Scripts para redespliegue de apps</li>
                  <li>Mantenimiento de servidores</li>
                </ul>
              </div>

              <div className="tech-group">
                <h4 className="tech-group-name">Bases de Datos</h4>
                <ul className="tech-bullet-list">
                  <li>PostgreSQL (Relacional / ACID)</li>
                  <li>MySQL & MariaDB</li>
                  <li>MongoDB (NoSQL Documental)</li>
                  <li>SQLite</li>
                </ul>
              </div>

              <div className="tech-group">
                <h4 className="tech-group-name">Multiplataforma (Flutter)</h4>
                <ul className="tech-bullet-list">
                  <li>Flutter para Móviles (Android/iOS)</li>
                  <li>Flutter para Escritorio (Desktop)</li>
                  <li>Dart & Consumo de APIs REST</li>
                </ul>
              </div>

              <div className="tech-group">
                <h4 className="tech-group-name">Frontend Web</h4>
                <ul className="tech-bullet-list">
                  <li>React.js & Next.js</li>
                  <li>JavaScript (ES6+) & TypeScript</li>
                  <li>HTML5 Semántico & CSS3</li>
                </ul>
              </div>

              <div className="tech-group">
                <h4 className="tech-group-name">3D & Motores Gráficos</h4>
                <ul className="tech-bullet-list">
                  <li>Blender (Modelado 3D - Intermedio)</li>
                  <li>Unity (Nivel Básico)</li>
                  <li>Unreal Engine (Nivel Básico)</li>
                </ul>
              </div>

              <div className="tech-group">
                <h4 className="tech-group-name">Herramientas & Flujo</h4>
                <ul className="tech-bullet-list">
                  <li>Git, GitHub & Control de Versiones</li>
                  <li>Postman (Pruebas de APIs)</li>
                  <li>VS Code</li>
                  <li>Jira & Metodologías Ágiles (Scrum)</li>
                </ul>
              </div>
            </section>

            {/* Idiomas */}
            <section className="cv-block">
              <h3 className="cv-block-title">Idiomas</h3>
              <ul className="tech-bullet-list">
                <li><strong>Español:</strong> Nativo</li>
                <li><strong>Inglés:</strong> Técnico (Lectura fluida de documentación técnica)</li>
              </ul>
            </section>
          </aside>

          {/* Right Column */}
          <main className="cv-right-col">
            {/* Perfil Profesional */}
            <section className="cv-block">
              <h3 className="cv-block-title">Perfil Profesional</h3>
              <p className="cv-text-justify">
                <strong>Profesional Técnico en Ingeniería de Software</strong> graduado de <strong>SENATI</strong>. Especializado como <strong>Desarrollador Backend</strong> e infraestructura Linux, con experiencia práctica en la administración de servidores propios (<strong>Home Server bajo Ubuntu Server</strong>), contenedorización de servicios con <strong>Docker</strong> y despliegue seguro en la nube mediante <strong>Cloudflare Tunnels (cloudflared)</strong> sin apertura de puertos locales.
              </p>
              <p className="cv-text-justify">
                Dominio en el diseño y consumo de <strong>APIs RESTful</strong> modulares y escalables utilizando <strong>Node.js y NestJS</strong>, gestión de bases de datos relacionales (<strong>PostgreSQL, MySQL</strong>) y NoSQL (<strong>MongoDB</strong>). Experiencia destacada en la creación de <strong>scripts automatizados con Python</strong> para respaldos periódicos de bases de datos y redespliegue de aplicaciones. Complemento mi perfil con desarrollo de aplicaciones móviles y de escritorio en <strong>Flutter</strong>, frontend en <strong>React/Next.js</strong> y modelado 3D en <strong>Blender</strong>.
              </p>
            </section>

            {/* Proyectos Clave & Experiencia Práctica */}
            <section className="cv-block">
              <h3 className="cv-block-title">Proyectos Destacados & Experiencia Técnica</h3>
              
              <div className="cv-entry">
                <div className="cv-entry-header">
                  <h4 className="cv-entry-title">Infraestructura Home-Server & Automatización con Python y Docker</h4>
                  <span className="cv-entry-badge">DevOps & Linux</span>
                </div>
                <span className="cv-entry-stack">Ubuntu Server • Docker • Docker Compose • cloudflared • Python Scripts • PostgreSQL • MySQL</span>
                <ul className="cv-entry-achievements">
                  <li>Implementé y administro un servidor casero bajo Ubuntu Server con arquitectura de microservicios contenerizados mediante Docker Compose.</li>
                  <li>Configuré túneles seguros con Cloudflare Tunnels (cloudflared) para publicar servicios internos a internet con cifrado SSL sin exponer puertos en el router.</li>
                  <li>Desarrollé scripts en Python para automatizar copias de seguridad de bases de datos (PostgreSQL y MySQL), rotación y compresión de archivos de respaldo.</li>
                  <li>Implementé flujos de redespliegue automatizado de aplicaciones y contenedores ante actualizaciones de código.</li>
                </ul>
              </div>

              <div className="cv-entry">
                <div className="cv-entry-header">
                  <h4 className="cv-entry-title">Arquitectura de APIs RESTful con Node.js & NestJS</h4>
                  <span className="cv-entry-badge">Backend Modular</span>
                </div>
                <span className="cv-entry-stack">Node.js • NestJS • TypeScript • PostgreSQL • MongoDB • Postman</span>
                <ul className="cv-entry-achievements">
                  <li>Diseño de servicios backend escalables bajo arquitectura modular y desacoplada con NestJS.</li>
                  <li>Implementación de autenticación JWT, validación de DTOs, manejo centralizado de excepciones y logging estructurado.</li>
                  <li>Modelado de esquemas y transacciones en bases de datos relacionales (PostgreSQL) y documentales (MongoDB).</li>
                </ul>
              </div>

              <div className="cv-entry">
                <div className="cv-entry-header">
                  <h4 className="cv-entry-title">Aplicaciones Multiplataforma con Flutter (Móvil & Desktop)</h4>
                  <span className="cv-entry-badge">Flutter & Dart</span>
                </div>
                <span className="cv-entry-stack">Flutter • Dart • REST APIs • Android • Desktop (Windows/Linux)</span>
                <ul className="cv-entry-achievements">
                  <li>Construcción de aplicaciones nativas para móviles y sistemas de escritorio con interfaces reactivas y fluidas.</li>
                  <li>Integración de clientes HTTP para consumo y sincronización en tiempo real con APIs RESTful.</li>
                  <li>Gestión de estado y adaptación responsiva a pantallas táctiles y escritorios.</li>
                </ul>
              </div>

              <div className="cv-entry">
                <div className="cv-entry-header">
                  <h4 className="cv-entry-title">Portafolio Web Profesional</h4>
                  <span className="cv-entry-badge">Next.js & React</span>
                </div>
                <span className="cv-entry-stack">Next.js (App Router) • React.js • CSS3 Modular • Responsive Design</span>
                <ul className="cv-entry-achievements">
                  <li>Desarrollo de aplicación web personal con renderizado híbrido y optimización SEO.</li>
                  <li>Visor interactivo de hoja de vida con motor de impresión y exportación a PDF para reclutadores técnicos.</li>
                </ul>
              </div>
            </section>

            {/* Formación Académica Superior (Solo SENATI) */}
            <section className="cv-block">
              <h3 className="cv-block-title">Formación Académica Superior</h3>
              <div className="cv-edu-item">
                <div className="cv-edu-header">
                  <h4 className="cv-edu-institution">SENATI</h4>
                  <span className="cv-edu-status">Concluido / Titulado</span>
                </div>
                <p className="cv-edu-degree"><strong>Profesional Técnico en Ingeniería de Software con Inteligencia Artificial</strong></p>
                <p className="cv-edu-desc">Formación de nivel superior orientada a arquitectura de software, backend, bases de datos relacionales y NoSQL, redes, servidores y desarrollo de software moderno.</p>
              </div>
            </section>

            {/* Certificaciones Oficiales */}
            <section className="cv-block">
              <h3 className="cv-block-title">Certificaciones Internacionales</h3>
              <div className="cv-cert-grid">
                {certificationsData.map((c, i) => (
                  <div key={i} className="cv-cert-card">
                    <div className="cv-cert-head">
                      <span className="cert-check-icon">✓</span>
                      <strong className="cv-cert-name">{c.title}</strong>
                    </div>
                    <span className="cv-cert-org">{c.issuer}</span>
                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="cv-cert-link no-print">
                      Verificar Credencial ↗
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      <style jsx>{`
        .cv-wrapper {
          min-height: 100vh;
          background: #070a13;
          padding-bottom: 5rem;
        }

        .cv-top-bar {
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .cv-top-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .cv-back-link {
          color: var(--accent-cyan);
          font-weight: 700;
          font-size: 0.95rem;
        }

        .cv-actions {
          display: flex;
          gap: 0.75rem;
        }

        .btn-print {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.35rem;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
          border: none;
          color: #fff;
          font-weight: 700;
          border-radius: var(--radius-sm);
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
        }

        .btn-whatsapp-cv {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.25rem;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34d399;
          font-weight: 700;
          border-radius: var(--radius-sm);
        }

        /* Document Paper */
        .cv-paper {
          background: #0d121f;
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: var(--radius-lg);
          margin-top: 2.5rem;
          padding: 3.5rem;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
          color: var(--text-main);
        }

        /* Header */
        .cv-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid rgba(56, 189, 248, 0.3);
          margin-bottom: 2.5rem;
        }

        .cv-fullname {
          font-size: 2.4rem;
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.5px;
          line-height: 1.1;
        }

        .cv-profession {
          font-size: 1.25rem;
          color: var(--accent-cyan);
          font-weight: 700;
          margin-top: 0.35rem;
        }

        .cv-subline {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .cv-contact-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-top: 1.25rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .contact-item strong {
          color: #fff;
        }

        .cv-photo-box {
          width: 120px;
          height: 120px;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 2px solid var(--accent-cyan);
          flex-shrink: 0;
        }

        .cv-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        /* Body Grid */
        .cv-body-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 3rem;
        }

        .cv-block {
          margin-bottom: 2.25rem;
        }

        .cv-block-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          padding-bottom: 0.4rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .tech-group {
          margin-bottom: 1.25rem;
        }

        .tech-group-name {
          font-size: 0.88rem;
          color: var(--accent-cyan);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.4rem;
        }

        .tech-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .tech-bullet-list li {
          font-size: 0.9rem;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1rem;
        }

        .tech-bullet-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent-violet);
          font-weight: 800;
        }

        .cv-text-justify {
          color: var(--text-secondary);
          line-height: 1.75;
          font-size: 0.98rem;
          margin-bottom: 0.75rem;
        }

        .cv-text-justify strong {
          color: #fff;
        }

        /* Projects Entries */
        .cv-entry {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .cv-entry-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
        }

        .cv-entry-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
        }

        .cv-entry-badge {
          font-size: 0.75rem;
          font-weight: 700;
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-cyan);
          border: 1px solid rgba(56, 189, 248, 0.25);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .cv-entry-stack {
          display: block;
          font-size: 0.82rem;
          color: var(--accent-violet);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .cv-entry-achievements {
          list-style: disc;
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .cv-entry-achievements li {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Education */
        .cv-edu-item {
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
        }

        .cv-edu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }

        .cv-edu-institution {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--accent-cyan);
        }

        .cv-edu-status {
          font-size: 0.78rem;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
        }

        .cv-edu-degree {
          font-size: 1.05rem;
          color: #fff;
          margin-bottom: 0.25rem;
        }

        .cv-edu-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        /* Certifications */
        .cv-cert-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }

        .cv-cert-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .cv-cert-head {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .cert-check-icon {
          color: var(--accent-cyan);
          font-weight: 800;
        }

        .cv-cert-name {
          font-size: 0.9rem;
          color: #fff;
        }

        .cv-cert-org {
          font-size: 0.78rem;
          color: var(--text-dim);
        }

        .cv-cert-link {
          font-size: 0.78rem;
          color: var(--accent-cyan);
          text-decoration: underline;
          margin-top: 0.25rem;
        }

        /* Print Specific Optimization for Professional 2-Column PDF */
        @media print {
          @page {
            size: A4 portrait;
            margin: 0.8cm 1cm;
          }
          .no-print {
            display: none !important;
          }
          .cv-wrapper {
            background: #fff !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .cv-paper {
            background: #fff !important;
            color: #0f172a !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          .cv-header {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
            border-bottom: 2.5px solid #0284c7 !important;
            padding-bottom: 0.85rem !important;
            margin-bottom: 1.25rem !important;
          }
          .cv-fullname {
            font-size: 1.85rem !important;
            font-weight: 900 !important;
            color: #0f172a !important;
            line-height: 1.1 !important;
          }
          .cv-profession {
            font-size: 1.05rem !important;
            font-weight: 800 !important;
            color: #0284c7 !important;
            margin-top: 0.2rem !important;
          }
          .cv-subline {
            font-size: 0.78rem !important;
            color: #475569 !important;
            margin-top: 0.2rem !important;
          }
          .cv-contact-row {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 0.75rem !important;
            margin-top: 0.65rem !important;
            font-size: 0.74rem !important;
            color: #334155 !important;
          }
          .contact-item strong {
            color: #0f172a !important;
          }
          .cv-photo-box {
            display: block !important;
            width: 105px !important;
            height: 105px !important;
            border-radius: 12px !important;
            overflow: hidden !important;
            border: 2.5px solid #0284c7 !important;
            flex-shrink: 0 !important;
          }
          .cv-photo-img {
            display: block !important;
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }
          .cv-body-grid {
            display: grid !important;
            grid-template-columns: 215px 1fr !important;
            gap: 1.75rem !important;
          }
          .cv-left-col {
            border-right: 1.5px solid #e2e8f0 !important;
            padding-right: 1.25rem !important;
          }
          .cv-block {
            margin-bottom: 1.1rem !important;
          }
          .cv-block-title {
            font-size: 0.92rem !important;
            font-weight: 800 !important;
            color: #0f172a !important;
            border-bottom: 1.5px solid #0284c7 !important;
            padding-bottom: 0.2rem !important;
            margin-bottom: 0.55rem !important;
            letter-spacing: 0.5px !important;
          }
          .tech-group {
            margin-bottom: 0.7rem !important;
          }
          .tech-group-name {
            font-size: 0.76rem !important;
            font-weight: 800 !important;
            color: #0284c7 !important;
            margin-bottom: 0.2rem !important;
          }
          .tech-bullet-list {
            gap: 0.2rem !important;
          }
          .tech-bullet-list li {
            font-size: 0.74rem !important;
            color: #334155 !important;
            line-height: 1.35 !important;
            padding-left: 0.8rem !important;
          }
          .tech-bullet-list li::before {
            color: #0284c7 !important;
          }
          .cv-text-justify {
            font-size: 0.78rem !important;
            line-height: 1.5 !important;
            color: #334155 !important;
            margin-bottom: 0.5rem !important;
          }
          .cv-text-justify strong {
            color: #0f172a !important;
          }
          .cv-entry {
            background: #f8fafc !important;
            border: 1px solid #e2e8f0 !important;
            border-radius: 6px !important;
            padding: 0.65rem 0.8rem !important;
            margin-bottom: 0.65rem !important;
            break-inside: avoid !important;
          }
          .cv-entry-header {
            margin-bottom: 0.15rem !important;
          }
          .cv-entry-title {
            font-size: 0.88rem !important;
            font-weight: 800 !important;
            color: #0f172a !important;
          }
          .cv-entry-badge {
            font-size: 0.65rem !important;
            background: #e0f2fe !important;
            color: #0369a1 !important;
            border: 1px solid #bae6fd !important;
            padding: 0.1rem 0.45rem !important;
          }
          .cv-entry-stack {
            font-size: 0.7rem !important;
            color: #4338ca !important;
            font-weight: 600 !important;
            margin-bottom: 0.35rem !important;
          }
          .cv-entry-achievements {
            gap: 0.2rem !important;
            padding-left: 1.1rem !important;
          }
          .cv-entry-achievements li {
            font-size: 0.73rem !important;
            line-height: 1.35 !important;
            color: #334155 !important;
          }
          .cv-edu-item {
            padding-bottom: 0.4rem !important;
            margin-bottom: 0.4rem !important;
            border-bottom: 1px solid #e2e8f0 !important;
          }
          .cv-edu-institution {
            font-size: 0.92rem !important;
            font-weight: 800 !important;
            color: #0284c7 !important;
          }
          .cv-edu-status {
            font-size: 0.68rem !important;
            background: #dcfce7 !important;
            color: #15803d !important;
            padding: 0.1rem 0.45rem !important;
          }
          .cv-edu-degree {
            font-size: 0.8rem !important;
            font-weight: 700 !important;
            color: #0f172a !important;
          }
          .cv-edu-desc {
            font-size: 0.72rem !important;
            color: #64748b !important;
          }
          .cv-cert-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 0.45rem !important;
          }
          .cv-cert-card {
            background: #f8fafc !important;
            border: 1px solid #e2e8f0 !important;
            padding: 0.45rem 0.65rem !important;
            border-radius: 4px !important;
          }
          .cv-cert-name {
            font-size: 0.72rem !important;
            font-weight: 700 !important;
            color: #0f172a !important;
          }
          .cv-cert-org {
            font-size: 0.66rem !important;
            color: #64748b !important;
          }
          .cert-check-icon {
            color: #0284c7 !important;
            font-size: 0.75rem !important;
          }
        }

        /* Screen only responsive breakpoint - Will NEVER affect print/PDF */
        @media screen and (max-width: 868px) {
          .cv-body-grid {
            grid-template-columns: 1fr;
          }
          .cv-cert-grid {
            grid-template-columns: 1fr;
          }
          .cv-header {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
