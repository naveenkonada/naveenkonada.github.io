import React from 'react';
import { Database, Package, Workflow } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Supply Chain Planning & Optimization',
      icon: Package,
      skills: [
        'SAP S/4HANA & SAP MM (materials & purchasing)',
        'SAP IBP (demand & supply planning)',
        'Inventory optimization, MRP, safety stock & ROP',
        'Procurement, supplier management, PPV analysis',
        'Production & material planning across plants/DCs',
      ],
    },
    {
      category: 'Data Analysis & Visualization',
      icon: Database,
      skills: [
        'SQL (joins, CTEs, window functions)',
        'Python (Pandas, NumPy, time-series forecasting)',
        'Power BI & Tableau (data modeling, DAX, dashboards)',
        'Advanced Excel (Solver, pivots, VLOOKUP/XLOOKUP)',
        'Data storytelling & KPI design for stakeholders',
      ],
    },
    {
      category: 'Process Improvement & Project Management',
      icon: Workflow,
      skills: [
        'Lean Six Sigma (Green Belt), DMAIC, Kaizen, RCA',
        'Value Stream Mapping & process redesign',
        'FMEA, OTIF tracking, continuous improvement',
        'Cross-functional workshops & stakeholder alignment',
        'Documentation, SOPs, and training materials',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set combining technical proficiency, supply chain expertise, 
            and strong interpersonal abilities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <category.icon className="text-blue-600" size={20} />
                </div>
                <h3>{category.category}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}