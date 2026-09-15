'use client';

import { certificationsData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import DynamicIcon from './DynamicIcon';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.es;

  return (
    <section id="certificados" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t.certs.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.certs.title}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.certs.subtitle}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                    <DynamicIcon name={cert.icon} className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-cyan-300 border border-slate-700">
                    {cert.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  {t.certs.officialDate}
                </span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{t.certs.verify}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
