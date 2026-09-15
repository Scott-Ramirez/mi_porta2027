'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { Sparkles, FileText, MessageSquare, Terminal, Server, ArrowUpRight } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.es;

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect using localized roles
  useEffect(() => {
    const rolesList = t.hero.roles;
    const fullText = rolesList[roleIndex % rolesList.length];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % rolesList.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, t.hero.roles]);

  return (
    <section id="inicio" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium tracking-wide">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{t.hero.availability}</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {t.hero.greeting}{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  {personalInfo.shortName}
                </span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                {t.hero.bio}
              </p>
            </div>

            {/* Typewriter Terminal Box */}
            <div className="w-full max-w-lg p-3 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800 shadow-inner font-mono text-xs sm:text-sm text-slate-300 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-cyan-400 font-bold shrink-0">&gt; {t.hero.rolePrefix}</span>
              <span className="text-emerald-400 font-semibold truncate">{currentText}</span>
              <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse shrink-0"></span>
            </div>

            {/* Call to Actions */}
            <div className="w-full flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#proyectos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.hero.exploreProjects}</span>
              </a>

              <Link
                href="/cv"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-850 border border-slate-700/80 hover:border-slate-600 shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>{t.hero.viewCv}</span>
              </Link>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-emerald-300 bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-500/30 hover:border-emerald-400 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.whatsapp}</span>
              </a>
            </div>

            {/* Social quick link */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span>{t.hero.verifiedProfile}</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>

          </div>

          {/* Profile Visual Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-indigo-500/20 to-teal-400/20 rotate-6 filter blur-xl opacity-70"></div>
              
              {/* Profile Card Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-800/80 p-2 shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 shadow-xl shadow-black/60 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white leading-tight">{t.hero.badgeServer}</div>
                  <div className="text-[10px] text-slate-400">{t.hero.badgeServerSub}</div>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-indigo-500/30 shadow-xl shadow-black/60 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Server className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white leading-tight">{t.hero.badgeBackend}</div>
                  <div className="text-[10px] text-slate-400">{t.hero.badgeBackendSub}</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {t.hero.stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/25 transition-all text-center sm:text-left"
              >
                <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
