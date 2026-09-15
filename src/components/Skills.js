'use client';

import { useState } from 'react';
import { skillsData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import DynamicIcon from './DynamicIcon';
import { Cpu, Server, Terminal, Database, Smartphone, Code2, Box, Wrench } from 'lucide-react';

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.es;

  const [selectedTab, setSelectedTab] = useState('all');

  const categoryIcons = {
    all: Cpu,
    backend: Server,
    devopsAndInfra: Terminal,
    databases: Database,
    flutterApps: Smartphone,
    frontend: Code2,
    creativity3D: Box,
    tools: Wrench,
  };

  const getVisibleSkills = () => {
    const isEn = lang === 'en';
    if (selectedTab === 'all') {
      return [
        { category: isEn ? 'Backend Development & RESTful APIs' : 'Desarrollo Backend & APIs RESTful', items: skillsData.backend, badge: 'Core Backend' },
        { category: isEn ? 'Infrastructure, Linux Servers & DevOps' : 'Infraestructura, Servidores & DevOps', items: skillsData.devopsAndInfra, badge: 'Home-Server & Docker' },
        { category: isEn ? 'Relational & NoSQL Databases' : 'Bases de Datos Relacionales & NoSQL', items: skillsData.databases, badge: 'Persistencia & Backups' },
        { category: isEn ? 'Cross-Platform Mobile & Desktop (Flutter)' : 'Desarrollo Multiplataforma con Flutter', items: skillsData.flutterApps, badge: 'Móvil & Desktop' },
        { category: isEn ? 'Frontend Web Development' : 'Desarrollo Frontend & Web', items: skillsData.frontend, badge: 'Web UI' },
        { category: isEn ? '3D Modeling & Game Engines' : 'Modelado 3D & Motores Gráficos', items: skillsData.creativity3D, badge: 'Blender & Engines' },
        { category: isEn ? 'DevTools, Testing & Methodologies' : 'Herramientas de Trabajo & Testing', items: skillsData.tools, badge: 'DevTools' }
      ];
    }
    const catMap = {
      backend: { category: isEn ? 'Backend Development & RESTful APIs' : 'Desarrollo Backend & APIs RESTful', items: skillsData.backend, badge: 'Core Backend' },
      devopsAndInfra: { category: isEn ? 'Infrastructure, Linux Servers & DevOps' : 'Infraestructura, Servidores & DevOps', items: skillsData.devopsAndInfra, badge: 'Home-Server & Docker' },
      databases: { category: isEn ? 'Relational & NoSQL Databases' : 'Bases de Datos Relacionales & NoSQL', items: skillsData.databases, badge: 'Persistencia & Backups' },
      flutterApps: { category: isEn ? 'Cross-Platform Mobile & Desktop (Flutter)' : 'Desarrollo Multiplataforma con Flutter', items: skillsData.flutterApps, badge: 'Móvil & Desktop' },
      frontend: { category: isEn ? 'Frontend Web Development' : 'Desarrollo Frontend & Web', items: skillsData.frontend, badge: 'Web UI' },
      creativity3D: { category: isEn ? '3D Modeling & Game Engines' : 'Modelado 3D & Motores Gráficos', items: skillsData.creativity3D, badge: 'Blender & Engines' },
      tools: { category: isEn ? 'DevTools, Testing & Methodologies' : 'Herramientas de Trabajo & Testing', items: skillsData.tools, badge: 'DevTools' }
    };
    return [catMap[selectedTab]];
  };

  return (
    <section id="habilidades" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.skills.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Categories Bar (Wrap centrado sin desbordamiento) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto mb-10 px-2">
          {t.skills.categories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Cpu;
            const isActive = selectedTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedTab(cat.id)}
                className={`whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-950/60 font-semibold'
                    : 'bg-slate-900/60 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Groups & Cards */}
        <div className="space-y-12">
          {getVisibleSkills().map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-5">
              
              {/* Group Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span>{group.category}</span>
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-cyan-400 border border-slate-800">
                  {group.badge}
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {group.items.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="group p-5 rounded-2xl bg-slate-900/40 hover:bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all">
                          <DynamicIcon name={skill.icon} className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed font-normal">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
