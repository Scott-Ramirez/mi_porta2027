'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, FileText, ArrowRight, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang] || translations.es;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#inicio', label: t.nav.home },
    { href: '/#proyectos', label: t.nav.projects },
    { href: '/#habilidades', label: t.nav.skills },
    { href: '/#certificados', label: t.nav.certs },
    { href: '/#sobre-mi', label: t.nav.about },
    { href: '/#contacto', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/15 shadow-xl shadow-black/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-1 text-xl font-bold tracking-tight">
          <span className="text-cyan-400 font-mono transition-transform duration-200 group-hover:-translate-x-1">&lt;</span>
          <span className="text-white">Anthony</span>
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">.AI</span>
          <span className="text-cyan-400 font-mono transition-transform duration-200 group-hover:translate-x-1">/&gt;</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions & Language Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-cyan-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400 transition-all cursor-pointer"
            title="Cambiar idioma / Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className="tracking-wide">{lang.toUpperCase()}</span>
          </button>

          <Link
            href="/cv"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 rounded-full shadow-sm shadow-cyan-950/50 transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.nav.cvBtn}</span>
          </Link>

          {/* Hamburger / Close button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-slate-300 hover:text-white md:hidden rounded-lg bg-slate-900/60 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80 rounded-lg transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            {/* Mobile Language Switch */}
            <button
              onClick={() => {
                toggleLang();
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-cyan-300 bg-slate-900 border border-slate-800 rounded-xl"
            >
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Idioma / Language:</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                {lang === 'es' ? 'Español (ES)' : 'English (EN)'}
              </span>
            </button>

            <Link
              href="/cv"
              onClick={() => setMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-900/40 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>{t.nav.cvDrawer}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
