'use client';

import Link from 'next/link';
import { personalInfo, certificationsData, educationData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { 
  ArrowLeft, 
  Printer, 
  MessageSquare, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Award, 
  ExternalLink, 
  GraduationCap, 
  Terminal, 
  Server, 
  Boxes, 
  Cpu, 
  Database, 
  Globe, 
  FileText,
  Sparkles
} from 'lucide-react';
import GithubIcon from '@/components/GithubIcon';

export default function CVPage() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang] || translations.es;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-6 sm:py-10 print:py-0 print:bg-slate-950 transition-colors duration-300">
      
      {/* Interactive Top Control Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto px-4 mb-6 sm:mb-8 no-print space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 shadow-2xl">
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors self-start sm:self-center"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.cv.back}</span>
          </Link>

          {/* Center: Language Switcher */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-950 border border-cyan-500/30 text-cyan-300 hover:bg-slate-800 transition-all cursor-pointer"
              title="Cambiar idioma / Change language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Idioma: <strong>{lang.toUpperCase()}</strong></span>
              <span className="text-[10px] text-slate-400">({lang === 'es' ? 'Switch to EN' : 'Cambiar a ES'})</span>
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-900/40 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Printer className="w-4 h-4" />
              <span>{t.cv.savePdf}</span>
            </button>

            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 transition-all"
              title="Contactar por WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline ml-1.5">{t.cv.whatsapp}</span>
            </a>
          </div>

        </div>

        {/* Tip */}
        <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>
            {lang === 'es'
              ? 'Tip para exportar: En el cuadro de diálogo de impresión, selecciona Guardar como PDF y activa la opción Gráficos de fondo.'
              : 'Export tip: In the print dialog, select Save as PDF and ensure Background graphics is enabled.'}
          </span>
        </div>
      </div>

      {/* CV Paper Container (Tech Dark Mode Only) */}
      <div className="max-w-4xl mx-auto px-2 sm:px-4 print:max-w-none print:px-0">
        <div className="print-page bg-slate-900/95 rounded-3xl border border-cyan-500/25 shadow-2xl shadow-black/80 p-6 sm:p-10 lg:p-12 space-y-6 print:space-y-4">

          {/* Accent Color Header Line (with safe top padding) */}
          <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 rounded-full mb-6" />

          {/* Top Executive Header */}
          <header className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-2">
              <div className="inline-block">
                <span className="text-[11px] font-bold tracking-wider uppercase text-cyan-400">
                  {t.cv.badgeCv}
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                  {personalInfo.name}
                </h1>
              </div>

              <p className="text-xs sm:text-sm font-bold text-slate-300">
                {t.cv.roleTitle}
              </p>

              {/* Contact Pill Row */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-slate-300">{personalInfo.location}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-slate-300">{personalInfo.phone}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-slate-300">{personalInfo.email}</span>
                </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>github.com/Scott-Ramirez</span>
                </a>
              </div>
            </div>

            {/* Photo Avatar */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-xl shrink-0 self-start sm:self-center">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </header>

          {/* Section: Perfil Profesional */}
          <section className="space-y-2 break-inside-avoid">
            <h2 className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>{t.cv.summaryTitle}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              {t.cv.summaryText}
            </p>
          </section>

          {/* Section: Core Technical Stack Grid */}
          <section className="space-y-2 break-inside-avoid">
            <h2 className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>{t.cv.skillsTitle}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <h3 className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Backend & APIs</span>
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Node.js, NestJS, TypeScript, APIs RESTful, JWT, Microservicios.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <h3 className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <Boxes className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DevOps & Servidores</span>
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Ubuntu Server (Home Server), Docker, Docker Compose, cloudflared, Bash.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <h3 className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Automatización (Python)</span>
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Scripts de backups periódicos, rotación gzip y redespliegues.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <h3 className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Bases de Datos</span>
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  PostgreSQL (ACID), MySQL, MariaDB, MongoDB (NoSQL), SQLite.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <h3 className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Multiplataforma & Web</span>
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Flutter (Android, iOS, Desktop), Dart, React.js, Next.js, Tailwind CSS.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <h3 className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Herramientas & Flujo</span>
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Git, GitHub, Postman, Linux Terminal, Blender (3D), Scrum.
                </p>
              </div>

            </div>
          </section>

          {/* Section: Proyectos Destacados */}
          <section className="space-y-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Server className="w-3.5 h-3.5" />
              <span>{t.cv.projectsTitle}</span>
            </h2>

            {/* Project 1 */}
            <div className="space-y-1.5 break-inside-avoid">
              <div className="flex items-center justify-between flex-wrap gap-1">
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  {lang === 'es'
                    ? 'Infraestructura Home-Server & Automatización con Python y Docker'
                    : 'Home-Server Infrastructure & Automation with Python and Docker'}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                  DevOps & Linux
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Ubuntu Server • Docker • Docker Compose • cloudflared • Python Scripts • PostgreSQL • MySQL • Bash
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed">
                {lang === 'es' ? (
                  <>
                    <li>Diseñé, instalé y gestiono un servidor casero bajo Ubuntu Server con arquitectura de microservicios con Docker Compose.</li>
                    <li>Configuré túneles seguros con Cloudflare Tunnels (cloudflared) para publicación web con cifrado SSL sin abrir puertos en el router.</li>
                    <li>Creé scripts autónomos en Python que generan backups automáticos de bases de datos PostgreSQL y MySQL con rotación y compresión gzip.</li>
                    <li>Implementé procesos de redespliegue de contenedores tras nuevas versiones de código.</li>
                  </>
                ) : (
                  <>
                    <li>Designed, installed, and administer an Ubuntu Server home lab running containerized microservices via Docker Compose.</li>
                    <li>Configured encrypted Cloudflare Tunnels (cloudflared) for secure public service routing without opening router ports.</li>
                    <li>Engineered custom Python scripts for automated database backups (PostgreSQL & MySQL), historical rotation, and gzip compression.</li>
                    <li>Automated containerized redeployment workflows for seamless application updates.</li>
                  </>
                )}
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-1.5 break-inside-avoid pt-2">
              <div className="flex items-center justify-between flex-wrap gap-1">
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  {lang === 'es'
                    ? 'Arquitectura de APIs RESTful con Node.js & NestJS'
                    : 'RESTful API Architecture with Node.js & NestJS'}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                  Backend Modular
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Node.js • NestJS • TypeScript • PostgreSQL • MongoDB • JWT • Postman
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed">
                {lang === 'es' ? (
                  <>
                    <li>Desarrollo de microservicios backend modulares con NestJS implementando controladores desacoplados e inyección de dependencias.</li>
                    <li>Autenticación segura mediante tokens JWT, control de acceso por roles, validación estricta con DTOs y manejo centralizado de excepciones.</li>
                    <li>Persistencia de datos con modelado relacional en PostgreSQL y colecciones documentales en MongoDB.</li>
                  </>
                ) : (
                  <>
                    <li>Engineered modular backend services using NestJS with decoupled controllers and dependency injection.</li>
                    <li>Implemented secure JWT authentication, role-based access control, strict DTO validation, and centralized exception filters.</li>
                    <li>Configured relational data modeling in PostgreSQL and document-based persistence in MongoDB.</li>
                  </>
                )}
              </ul>
            </div>

            {/* Project 3 */}
            <div className="space-y-1.5 break-inside-avoid pt-2">
              <div className="flex items-center justify-between flex-wrap gap-1">
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  {lang === 'es'
                    ? 'Aplicaciones Multiplataforma con Flutter (Móvil & Desktop)'
                    : 'Cross-Platform Applications with Flutter (Mobile & Desktop)'}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                  Flutter & Dart
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Flutter • Dart • REST APIs • HTTP Client • Android • Desktop (Windows/Linux)
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed">
                {lang === 'es' ? (
                  <>
                    <li>Construcción de aplicaciones multiplataforma con interfaces dinámicas para Android, iOS y entornos de escritorio.</li>
                    <li>Consumo y sincronización de datos con endpoints RESTful mediante clientes HTTP en Dart con manejo de estados.</li>
                  </>
                ) : (
                  <>
                    <li>Built dynamic cross-platform applications targeting Android, iOS, and desktop environments.</li>
                    <li>Integrated HTTP clients for real-time synchronization with RESTful endpoints and robust state management.</li>
                  </>
                )}
              </ul>
            </div>

          </section>

          {/* Section: Educación Superior & Certificaciones */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            
            {/* Formación Académica (SENATI) */}
            <section className="md:col-span-6 space-y-2 break-inside-avoid">
              <h2 className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{t.cv.eduTitle}</span>
              </h2>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">SENATI</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                    {t.cv.titulado}
                  </span>
                </div>
                <h3 className="text-xs font-semibold text-cyan-300">
                  {lang === 'es'
                    ? 'Profesional Técnico en Ingeniería de Software con Inteligencia Artificial'
                    : 'Software Engineering with Artificial Intelligence'}
                </h3>
                <p className="text-xs text-slate-400 pt-0.5 leading-relaxed">
                  {lang === 'es'
                    ? 'Carrera técnica profesional de 3 años de formación técnica superior orientada a arquitectura de software, backend, bases de datos relacionales y no relacionales, redes e inteligencia artificial.'
                    : 'Rigorous 3-year higher technical program focused on software architecture, backend engineering, databases, networks, and AI.'}
                </p>
              </div>

              {/* Idiomas */}
              <div className="pt-2">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {t.cv.languagesTitle}
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-300">
                  <span><strong>{lang === 'es' ? 'Español' : 'Spanish'}:</strong> {lang === 'es' ? 'Nativo' : 'Native'}</span>
                  <span><strong>{lang === 'es' ? 'Inglés' : 'English'}:</strong> {lang === 'es' ? 'Técnico' : 'Technical'}</span>
                </div>
              </div>
            </section>

            {/* Certificaciones Cisco */}
            <section className="md:col-span-6 space-y-2 break-inside-avoid">
              <h2 className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <Award className="w-3.5 h-3.5" />
                <span>{t.cv.certsTitle}</span>
              </h2>

              <div className="space-y-1.5 text-xs">
                {certificationsData.map((c, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-lg bg-slate-950/50 border border-slate-800 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <div>
                        <span className="font-semibold text-white block leading-tight">
                          {c.title}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {c.issuer}
                        </span>
                      </div>
                    </div>

                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-semibold text-cyan-400 hover:text-cyan-300 no-print shrink-0"
                    >
                      <span>{t.cv.verified}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>
      </div>

    </div>
  );
}
