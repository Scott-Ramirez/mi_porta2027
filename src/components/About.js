'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { User, Terminal, GraduationCap, Globe, CheckCircle2 } from 'lucide-react';

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.es;

  return (
    <section id="sobre-mi" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>{t.about.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Technical Bio Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t.about.bioTitle}
                </h3>
              </div>

              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
            </div>

            {/* Technical Detail Badges */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{t.about.boxSpecialty}</span>
                <span className="text-xs sm:text-sm font-bold text-cyan-400">{t.about.boxSpecialtyVal}</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{t.about.boxServer}</span>
                <span className="text-xs sm:text-sm font-bold text-slate-200">{t.about.boxServerVal}</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{t.about.boxSecurity}</span>
                <span className="text-xs sm:text-sm font-bold text-slate-200">{t.about.boxSecurityVal}</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{t.about.boxAuto}</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400">{t.about.boxAutoVal}</span>
              </div>
            </div>
          </div>

          {/* Education & Languages Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-8">
            
            {/* Education Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t.about.eduTitle}
                </h3>
              </div>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/40 space-y-2">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400"></div>
                
                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg font-bold text-white">SENATI</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/40 text-emerald-300 border border-emerald-500/30">
                    {t.about.eduStatus}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-cyan-400">
                  {t.about.eduDegree}
                </h4>
                <span className="block text-xs font-mono text-slate-400">
                  {t.about.eduPeriod}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {t.about.eduDesc}
                </p>
              </div>
            </div>

            {/* Languages Section */}
            <div className="pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {t.about.langTitle}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-white">{t.about.lang1Name}</div>
                      <div className="text-xs text-slate-400">{t.about.lang1Level}</div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-white">{t.about.lang2Name}</div>
                      <div className="text-xs text-slate-400">{t.about.lang2Level}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
