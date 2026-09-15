'use client';

import { useState } from 'react';
import { skillsData } from '@/data/portfolioData';

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState('all');

  const categories = [
    { id: 'all', name: 'Todas las Competencias' },
    { id: 'backend', name: '🟢 Backend & APIs' },
    { id: 'devopsAndInfra', name: '🐧 Servidores & Docker' },
    { id: 'databases', name: '💾 Bases de Datos' },
    { id: 'flutterApps', name: '📱 Flutter Multiplataforma' },
    { id: 'frontend', name: '⚛️ Frontend' },
    { id: 'creativity3D', name: '🎮 Modelado 3D & Motores' },
    { id: 'tools', name: '🛠️ Herramientas' }
  ];

  const getVisibleSkills = () => {
    if (selectedTab === 'all') {
      return [
        { category: 'Desarrollo Backend & APIs RESTful', items: skillsData.backend, badge: 'Core Backend' },
        { category: 'Infraestructura, Servidores & DevOps', items: skillsData.devopsAndInfra, badge: 'Home-Server & Docker' },
        { category: 'Bases de Datos Relacionales & NoSQL', items: skillsData.databases, badge: 'Persistencia & Backups' },
        { category: 'Desarrollo Multiplataforma con Flutter', items: skillsData.flutterApps, badge: 'Móvil & Desktop' },
        { category: 'Desarrollo Frontend & Web', items: skillsData.frontend, badge: 'Web UI' },
        { category: 'Modelado 3D & Motores Gráficos', items: skillsData.creativity3D, badge: 'Blender & Engines' },
        { category: 'Herramientas de Trabajo & Testing', items: skillsData.tools, badge: 'DevTools' }
      ];
    }
    const catMap = {
      backend: { category: 'Desarrollo Backend & APIs RESTful', items: skillsData.backend, badge: 'Core Backend' },
      devopsAndInfra: { category: 'Infraestructura, Servidores & DevOps', items: skillsData.devopsAndInfra, badge: 'Home-Server & Docker' },
      databases: { category: 'Bases de Datos Relacionales & NoSQL', items: skillsData.databases, badge: 'Persistencia & Backups' },
      flutterApps: { category: 'Desarrollo Multiplataforma con Flutter', items: skillsData.flutterApps, badge: 'Móvil & Desktop' },
      frontend: { category: 'Desarrollo Frontend & Web', items: skillsData.frontend, badge: 'Web UI' },
      creativity3D: { category: 'Modelado 3D & Motores Gráficos', items: skillsData.creativity3D, badge: 'Blender & Engines' },
      tools: { category: 'Herramientas de Trabajo & Testing', items: skillsData.tools, badge: 'DevTools' }
    };
    return [catMap[selectedTab]];
  };

  return (
    <section id="habilidades" className="skills-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">Competencias Técnicas</span>
          <h2 className="section-title">Stack Tecnológico & Habilidades</h2>
          <p className="section-subtitle">
            Especializado en <strong>Desarrollo Backend</strong> e infraestructura Linux: diseño de APIs con <strong>Node.js y NestJS</strong>, gestión de servidores propios con <strong>Ubuntu Server y Docker</strong>, y automatización con <strong>Python</strong>.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn ${selectedTab === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedTab(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Display Grid */}
        <div className="skills-groups">
          {getVisibleSkills().map((group, gIdx) => (
            <div key={gIdx} className="skills-category-card glass-card">
              <div className="category-header">
                <h3 className="category-title">{group.category}</h3>
                <span className="category-badge">{group.badge}</span>
              </div>
              <div className="skills-grid-cards">
                {group.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-card">
                    <div className="skill-item-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <h4 className="skill-name">{skill.name}</h4>
                    </div>
                    <p className="skill-desc">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          padding: 6rem 0;
          position: relative;
        }

        /* Tabs */
        .skills-tabs {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
        }

        .tab-btn {
          padding: 0.55rem 1.25rem;
          border-radius: var(--radius-full);
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-normal);
        }

        .tab-btn:hover {
          color: #fff;
          border-color: var(--accent-cyan);
        }

        .tab-btn.active {
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
          border-color: transparent;
          color: #fff;
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
        }

        /* Skills Groups */
        .skills-groups {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .skills-category-card {
          padding: 2rem 2.5rem;
        }

        .category-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.75rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .category-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #fff;
        }

        .category-badge {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-cyan);
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        .skills-grid-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }

        .skill-item-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          transition: var(--transition-normal);
        }

        .skill-item-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--accent-cyan);
          transform: translateY(-3px);
        }

        .skill-item-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.5rem;
        }

        .skill-icon {
          font-size: 1.25rem;
        }

        .skill-name {
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
        }

        .skill-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
