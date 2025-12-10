import React from 'react';
import { BarChart3, TrendingUp, Globe } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Using SQL, Python, and BI tools to translate noisy operational data into clear, actionable insights for planners and leaders.',
    },
    {
      icon: TrendingUp,
      title: 'Cost & Inventory Optimization',
      description: 'Balancing service levels, working capital, and logistics cost through smarter MRP tuning, safety stock, and supplier strategies.',
    },
    {
      icon: Globe,
      title: 'Global & Cross-Functional',
      description: 'Experience across India and the U.S., collaborating with procurement, planning, logistics, and finance teams to ship real solutions, not just dashboards.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Supply chain and analytics professional with 4+ years of experience improving forecasting, procurement, and inventory performance across manufacturing and specialty chemicals. I leverage SAP S/4HANA & MM, SAP IBP, SAP Ariba, SQL, Python, and Power BI to turn messy operational data into decisions that actually move KPIs.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I've led projects that improved OTIF by 9–11%, reduced stockouts by 10%+, increased inventory turns from around 4.8 to 7.1, cut freight cost per unit, and eliminated excess and obsolete inventory—partnering closely with planning, procurement, finance, and operations teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}