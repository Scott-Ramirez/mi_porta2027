'use client';

import Link from 'next/link';
import { personalInfo, certificationsData } from '@/data/portfolioData';
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
  Cpu, 
  Globe, 
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
    <div className="min-h-screen bg-slate-950 text-slate-100 py-4 sm:py-8 print:py-0 print:bg-white print:text-slate-900 transition-colors duration-300">
      
      {/* Top Control Bar (Hidden when printing) */}
      <div className="max-w-5xl mx-auto px-4 mb-4 sm:mb-6 no-print space-y-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 shadow-2xl">
          
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors self-start sm:self-center"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.cv.back}</span>
          </Link>

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-950 border border-cyan-500/30 text-cyan-300 hover:bg-slate-800 transition-all cursor-pointer"
              title="Cambiar idioma / Change language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Idioma: <strong>{lang.toUpperCase()}</strong></span>
              <span className="text-[10px] text-slate-400">({lang === 'es' ? 'Switch to EN' : 'Cambiar a ES'})</span>
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-900/40 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Printer className="w-4 h-4" />
              <span>{t.cv.savePdf} (A4)</span>
            </button>

            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 sm:px-3 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 transition-all"
              title="WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline ml-1.5">{t.cv.whatsapp}</span>
            </a>
          </div>

        </div>

        {/* Tip */}
        <div className="text-center text-[11px] text-cyan-400/90 flex items-center justify-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>
            {lang === 'es'
              ? 'Formato oficial de 1 página A4 optimizado con fondo blanco para exportar a PDF e imprimir.'
              : 'Official 1-page A4 format optimized with a clean white background for PDF export and printing.'}
          </span>
        </div>
      </div>

      {/* Official 1-Page A4 Sheet (Dark on web, White on print/PDF) */}
      <div className="max-w-5xl mx-auto px-2 sm:px-4 print:max-w-none print:px-0">
        <div className="print-page bg-slate-900/95 print:bg-white rounded-2xl border border-cyan-500/30 print:border-none shadow-2xl shadow-black/80 print:shadow-none p-5 sm:p-7 print:p-2 text-slate-100 print:text-slate-900 a4-fit space-y-3.5 print:space-y-2.5">

          {/* Top Decorative Line */}
          <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-emerald-500 rounded-full print:bg-cyan-700" />

          {/* Compact Header */}
          <header className="flex items-center justify-between gap-4 pb-2.5 border-b border-slate-800 print:border-slate-300">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-cyan-400 print:text-cyan-800">
                  {t.cv.badgeCv}
                </span>
                <span className="text-[10px] text-slate-500">|</span>
                <span className="text-[10px] font-mono text-emerald-400 print:text-emerald-700 font-semibold">
                  SENATI Titulado
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white print:text-slate-950 leading-tight">
                {personalInfo.name}
              </h1>

              <p className="text-xs font-bold text-slate-300 print:text-slate-800 leading-tight">
                {t.cv.roleTitle}
              </p>

              {/* Compact Contact Strip */}
              <div className="pt-0.5 flex flex-wrap items-center gap-y-1 gap-x-3 text-[11px] font-medium text-slate-400 print:text-slate-600">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400 print:text-slate-800" />
                  <span className="text-slate-300 print:text-slate-700">{personalInfo.location}</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <Phone className="w-3 h-3 text-cyan-400 print:text-slate-800" />
                  <span className="text-slate-300 print:text-slate-700">{personalInfo.phone}</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <Mail className="w-3 h-3 text-cyan-400 print:text-slate-800" />
                  <span className="text-slate-300 print:text-slate-700">{personalInfo.email}</span>
                </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-300 print:text-slate-700 hover:text-cyan-400 transition-colors"
                >
                  <GithubIcon className="w-3 h-3 text-cyan-400 print:text-slate-800" />
                  <span>github.com/Scott-Ramirez</span>
                </a>
              </div>
            </div>

            {/* Compact Photo */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-cyan-500/40 print:border-slate-400 shadow-lg shrink-0">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </header>

          {/* 2-Column Body for 1-Page A4 Harmony */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 print:gap-3 text-xs">
            
            {/* Left Column (Stack, Education, Certs, Languages) */}
            <aside className="md:col-span-4 space-y-2.5 print:space-y-2 pr-0 md:pr-2 border-r-0 md:border-r border-slate-800/80 print:border-slate-300">
              
              {/* Stack Técnico Compacto */}
              <section className="space-y-1">
                <h2 className="text-[11px] font-black uppercase tracking-wider text-cyan-400 print:text-cyan-800 flex items-center gap-1 pb-0.5 border-b border-slate-800 print:border-slate-300">
                  <Cpu className="w-3 h-3" />
                  <span>{t.cv.skillsTitle}</span>
                </h2>

                <div className="space-y-1 text-[10.5px]">
                  <div>
                    <span className="font-bold text-white print:text-slate-900 block">Backend & APIs:</span>
                    <span className="text-slate-400 print:text-slate-600 leading-snug block">Node.js, NestJS, TypeScript, REST APIs, JWT</span>
                  </div>

                  <div>
                    <span className="font-bold text-white print:text-slate-900 block">Linux & Servidores:</span>
                    <span className="text-slate-400 print:text-slate-600 leading-snug block">Ubuntu Server, Docker, Docker Compose, cloudflared</span>
                  </div>

                  <div>
                    <span className="font-bold text-white print:text-slate-900 block">Automatización:</span>
                    <span className="text-slate-400 print:text-slate-600 leading-snug block">Python Scripts (Backups periódicos & Redespliegues)</span>
                  </div>

                  <div>
                    <span className="font-bold text-white print:text-slate-900 block">Bases de Datos:</span>
                    <span className="text-slate-400 print:text-slate-600 leading-snug block">PostgreSQL (ACID), MySQL, MongoDB, SQLite</span>
                  </div>

                  <div>
                    <span className="font-bold text-white print:text-slate-900 block">Multiplataforma:</span>
                    <span className="text-slate-400 print:text-slate-600 leading-snug block">Flutter (Móvil & Desktop), Dart</span>
                  </div>

                  <div>
                    <span className="font-bold text-white print:text-slate-900 block">Herramientas:</span>
                    <span className="text-slate-400 print:text-slate-600 leading-snug block">Git, GitHub, Postman, Linux CLI, Scrum</span>
                  </div>
                </div>
              </section>

              {/* Formación Superior (SENATI) */}
              <section className="space-y-1 pt-0.5">
                <h2 className="text-[11px] font-black uppercase tracking-wider text-cyan-400 print:text-cyan-800 flex items-center gap-1 pb-0.5 border-b border-slate-800 print:border-slate-300">
                  <GraduationCap className="w-3 h-3" />
                  <span>{t.cv.eduTitle}</span>
                </h2>

                <div className="p-2 rounded-lg bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <strong className="text-white print:text-slate-900 text-[11px]">SENATI</strong>
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-950 print:bg-emerald-100 text-emerald-300 print:text-emerald-800 border border-emerald-500/30 print:border-emerald-300">
                      {t.cv.titulado}
                    </span>
                  </div>
                  <div className="text-[10px] font-semibold text-cyan-300 print:text-cyan-800 leading-tight">
                    {lang === 'es'
                      ? 'Técnico en Ing. de Software con IA'
                      : 'Software Engineering with AI'}
                  </div>
                  <div className="text-[9px] text-slate-400 print:text-slate-500">3 años de educación técnica superior</div>
                </div>
              </section>

              {/* Certificaciones Cisco */}
              <section className="space-y-1 pt-0.5">
                <h2 className="text-[11px] font-black uppercase tracking-wider text-cyan-400 print:text-cyan-800 flex items-center gap-1 pb-0.5 border-b border-slate-800 print:border-slate-300">
                  <Award className="w-3 h-3" />
                  <span>{t.cv.certsTitle}</span>
                </h2>

                <div className="space-y-0.5 text-[10px]">
                  {certificationsData.slice(0, 4).map((c, i) => (
                    <div
                      key={i}
                      className="p-1.5 rounded-md bg-slate-950/50 print:bg-slate-50 border border-slate-800 print:border-slate-200 flex items-center justify-between gap-1"
                    >
                      <div className="flex items-center gap-1 truncate">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 print:text-emerald-600 shrink-0" />
                        <span className="text-slate-200 print:text-slate-800 font-medium truncate">{c.title}</span>
                      </div>
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[9px] text-cyan-400 print:text-cyan-700 hover:text-cyan-300 shrink-0 no-print"
                      >
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              {/* Idiomas */}
              <section className="space-y-0.5 pt-0.5">
                <h2 className="text-[11px] font-black uppercase tracking-wider text-cyan-400 print:text-cyan-800 flex items-center gap-1 pb-0.5 border-b border-slate-800 print:border-slate-300">
                  <Globe className="w-3 h-3" />
                  <span>{t.cv.languagesTitle}</span>
                </h2>
                <div className="text-[10px] text-slate-300 print:text-slate-700 space-y-0.5 pt-0.5">
                  <div><strong>{lang === 'es' ? 'Español' : 'Spanish'}:</strong> {lang === 'es' ? 'Nativo' : 'Native'}</div>
                  <div><strong>{lang === 'es' ? 'Inglés' : 'English'}:</strong> {lang === 'es' ? 'Técnico (Lectura)' : 'Technical'}</div>
                </div>
              </section>

            </aside>

            {/* Right Column (Perfil Profesional + Proyectos Técnicos) */}
            <main className="md:col-span-8 space-y-2.5 print:space-y-2 pl-0 md:pl-2">
              
              {/* Perfil Profesional */}
              <section className="space-y-0.5">
                <h2 className="text-[11px] font-black uppercase tracking-wider text-cyan-400 print:text-cyan-800 flex items-center gap-1 pb-0.5 border-b border-slate-800 print:border-slate-300">
                  <Terminal className="w-3 h-3" />
                  <span>{t.cv.summaryTitle}</span>
                </h2>
                <p className="text-[10.5px] text-slate-300 print:text-slate-700 leading-relaxed text-justify">
                  {t.cv.summaryText}
                </p>
              </section>

              {/* Proyectos Clave & Experiencia Aplicada */}
              <section className="space-y-2 print:space-y-1.5">
                <h2 className="text-[11px] font-black uppercase tracking-wider text-cyan-400 print:text-cyan-800 flex items-center gap-1 pb-0.5 border-b border-slate-800 print:border-slate-300">
                  <Server className="w-3 h-3" />
                  <span>{t.cv.projectsTitle}</span>
                </h2>

                {/* Proyecto 1 */}
                <div className="p-2 rounded-xl bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 space-y-0.5">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <h3 className="text-[11px] font-bold text-white print:text-slate-950">
                      {lang === 'es'
                        ? '1. Infraestructura Home-Server & Automatización con Python y Docker'
                        : '1. Home-Server Infrastructure & Automation with Python and Docker'}
                    </h3>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 print:bg-cyan-100 text-cyan-300 print:text-cyan-800 border border-cyan-800/40 print:border-cyan-300">
                      DevOps & Linux
                    </span>
                  </div>
                  <div className="text-[9.5px] font-mono text-cyan-400/90 print:text-cyan-700">
                    Ubuntu Server • Docker • Docker Compose • cloudflared • Python • PostgreSQL • MySQL
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-[10px] text-slate-300 print:text-slate-700 leading-snug">
                    {lang === 'es' ? (
                      <>
                        <li>Administro un servidor casero propio bajo Ubuntu Server con aplicaciones contenerizadas mediante Docker Compose.</li>
                        <li>Configuré túneles Cloudflare Tunnels (cloudflared) para publicación web segura con SSL sin exponer puertos.</li>
                        <li>Creé scripts autónomos en Python para backups de bases de datos, rotación gzip y redespliegue de apps.</li>
                      </>
                    ) : (
                      <>
                        <li>Administer an Ubuntu Server home lab running containerized applications via Docker Compose.</li>
                        <li>Configured encrypted Cloudflare Tunnels (cloudflared) for secure public service routing without opening ports.</li>
                        <li>Built custom Python automation scripts for scheduled database backups, gzip rotation, and app redeployments.</li>
                      </>
                    )}
                  </ul>
                </div>

                {/* Proyecto 2 */}
                <div className="p-2 rounded-xl bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 space-y-0.5">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <h3 className="text-[11px] font-bold text-white print:text-slate-950">
                      {lang === 'es'
                        ? '2. Arquitectura de APIs RESTful con Node.js & NestJS'
                        : '2. RESTful API Architecture with Node.js & NestJS'}
                    </h3>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-indigo-950 print:bg-indigo-100 text-indigo-300 print:text-indigo-800 border border-indigo-800/40 print:border-indigo-300">
                      APIs RESTful
                    </span>
                  </div>
                  <div className="text-[9.5px] font-mono text-indigo-400/90 print:text-indigo-700">
                    Node.js • NestJS • TypeScript • PostgreSQL • MongoDB • JWT • Postman
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-[10px] text-slate-300 print:text-slate-700 leading-snug">
                    {lang === 'es' ? (
                      <>
                        <li>Desarrollo de módulos y APIs RESTful con NestJS, inyección de dependencias y controladores desacoplados.</li>
                        <li>Autenticación segura JWT, validación estricta de payloads con DTOs y manejo centralizado de excepciones.</li>
                        <li>Modelado relacional ACID en PostgreSQL y almacenamiento documental en MongoDB.</li>
                      </>
                    ) : (
                      <>
                        <li>Engineered modular backend RESTful APIs in NestJS with dependency injection and decoupled controllers.</li>
                        <li>Implemented JWT security, role authorization, strict DTO payload validation, and global exception filters.</li>
                        <li>Relational ACID modeling in PostgreSQL and flexible document persistence in MongoDB.</li>
                      </>
                    )}
                  </ul>
                </div>

                {/* Proyecto 3 */}
                <div className="p-2 rounded-xl bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 space-y-0.5">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <h3 className="text-[11px] font-bold text-white print:text-slate-950">
                      {lang === 'es'
                        ? '3. Aplicaciones Multiplataforma con Flutter (Móvil & Desktop)'
                        : '3. Cross-Platform Applications with Flutter (Mobile & Desktop)'}
                    </h3>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-950 print:bg-emerald-100 text-emerald-300 print:text-emerald-800 border border-emerald-800/40 print:border-emerald-300">
                      Flutter & Dart
                    </span>
                  </div>
                  <div className="text-[9.5px] font-mono text-emerald-400/90 print:text-emerald-700">
                    Flutter • Dart • REST APIs • HTTP Client • Android • Desktop (Windows/Linux)
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-[10px] text-slate-300 print:text-slate-700 leading-snug">
                    {lang === 'es' ? (
                      <>
                        <li>Construcción de aplicaciones multiplataforma con interfaces dinámicas para Android y escritorios.</li>
                        <li>Sincronización en tiempo real con endpoints RESTful mediante clientes HTTP en Dart y gestión de estado.</li>
                      </>
                    ) : (
                      <>
                        <li>Built dynamic cross-platform applications targeting Android, iOS, and desktop operating systems.</li>
                        <li>Real-time synchronization with RESTful endpoints via HTTP clients in Dart with state management.</li>
                      </>
                    )}
                  </ul>
                </div>

              </section>

            </main>

          </div>

        </div>
      </div>

    </div>
  );
}
