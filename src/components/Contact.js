'use client';

import { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { Mail, MessageSquare, MapPin, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.es;

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
    const subjectPrefix = lang === 'es' ? 'Contacto desde Portafolio de' : 'Portfolio Inquiry from';
    const bodyReply = lang === 'es' ? 'Responder a:' : 'Reply to:';
    const mailtoLink = `mailto:${personalInfo.email}?subject=${subjectPrefix} ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message + '\n\n' + bodyReply + ' ' + formState.email)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.contact.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t.contact.directChannels}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t.contact.directDesc}
              </p>
            </div>

            <div className="space-y-3">
              {/* WhatsApp Action */}
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-emerald-950/20 hover:bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-emerald-400 font-semibold">{t.contact.whatsappLabel}</span>
                    <span className="text-sm sm:text-base font-bold text-white">{personalInfo.phone}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email Action with Copy */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">{t.contact.emailLabel}</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate block">{personalInfo.email}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t.contact.copiedBtn}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contact.copyBtn}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">{t.contact.locationLabel}</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">{t.contact.locationVal}</span>
                </div>
              </div>
            </div>

            {/* Socials Link */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">GitHub:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>{t.contact.githubLabel}</span>
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              {t.contact.formDesc}
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  {t.contact.fieldName}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder={lang === 'es' ? 'Ej. Carlos Mendoza' : 'E.g. John Doe'}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  {t.contact.fieldEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="ejemplo@empresa.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  {t.contact.fieldMsg}
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  placeholder={t.contact.fieldMsgPlaceholder}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-500 text-sm outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.sendBtn}</span>
              </button>

              {sent && (
                <p className="text-center text-xs text-emerald-400 font-semibold pt-1">
                  {t.contact.sentFeedback}
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
