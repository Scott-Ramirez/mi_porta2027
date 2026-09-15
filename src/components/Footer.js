'use client';

import Link from 'next/link';
import { personalInfo } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { ArrowUp, MessageSquare, FileText } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.es;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-1 text-xl font-bold tracking-tight">
              <span className="text-cyan-400 font-mono">&lt;</span>
              <span className="text-white">Anthony</span>
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">.AI</span>
              <span className="text-cyan-400 font-mono">/&gt;</span>
            </Link>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-white">
              {t.footer.navTitle}
            </span>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/#inicio" className="hover:text-cyan-400 transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/#proyectos" className="hover:text-cyan-400 transition-colors">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link href="/#habilidades" className="hover:text-cyan-400 transition-colors">
                  {t.nav.skills}
                </Link>
              </li>
              <li>
                <Link href="/#certificados" className="hover:text-cyan-400 transition-colors">
                  {t.nav.certs}
                </Link>
              </li>
              <li>
                <Link href="/#sobre-mi" className="hover:text-cyan-400 transition-colors">
                  {t.nav.about}
                </Link>
              </li>
            </ul>
          </div>

          {/* External Resources */}
          <div className="md:col-span-3 space-y-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-white">
              {t.footer.resTitle}
            </span>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/cv" className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t.nav.cvBtn}</span>
                </Link>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {personalInfo.name}. {t.footer.rights}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white text-xs font-semibold border border-slate-800 transition-colors cursor-pointer"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
