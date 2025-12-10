import React from 'react';
import { TrendingDown, Truck, BarChart3, Package, Users } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Procurement Planning Workflow Integration',
      description: 'Designed and implemented procurement planning workflows integrating SAP MM with supplier performance dashboards in Power BI, improving OTIF and reducing stockouts by double digits.',
      icon: Package,
      impact: 'Improved OTIF · Fewer stockouts',
      tags: ['SAP MM', 'Power BI', 'Procurement Planning'],
      image: 'https://images.unsplash.com/photo-1627915589334-14a3c3e3a741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9jdXJlbWVudCUyMHN1cHBsaWVyfGVufDF8fHx8MTc2NTM0MjI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'MRP Parameter Optimization',
      description: 'Optimized MRP parameters including safety stock, MOQ, and reorder points across multiple materials, improving forecast accuracy and increasing inventory turns while maintaining service levels.',
      icon: TrendingDown,
      impact: 'Better forecast accuracy & turns',
      tags: ['MRP', 'Inventory Optimization', 'SAP / Excel'],
      image: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbnZlbnRvcnklMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc2NTM0MjI3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Optimization of Raw Material Procurement',
      description: 'Developed a supplier allocation model to optimize cost, MOQ, and lead time, demonstrating a significant improvement in procurement profitability and cycle time using Excel Solver, Gurobi, and LINGO.',
      icon: Truck,
      impact: 'Higher procurement profitability',
      tags: ['Excel Solver', 'Gurobi', 'LINGO', 'Optimization'],
      image: 'https://images.unsplash.com/photo-1725449264087-28926bc1a610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBzaGlwcGluZyUyMGNvbnRhaW5lcnN8ZW58MXx8fHwxNzY1MzEzOTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Multi-Period Production Planning & Facility Siting',
      description: 'Modeled multi-period production, inventory, and facility location decisions to maximize profit under capacity and demand constraints, supporting long-term network design choices.',
      icon: BarChart3,
      impact: 'Network profit & capacity uplift',
      tags: ['Network Design', 'MILP', 'Facility Planning'],
      image: 'https://images.unsplash.com/photo-1758304481470-e575d1d44efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMHBsYW5uaW5nfGVufDF8fHx8MTc2NTM0MjI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Vendor Performance & Supplier Scorecard',
      description: 'Built a supplier performance and freight analytics scorecard in Power BI using OTIF, lead time, defect rate, and cost metrics to identify under-performing vendors, improve delivery reliability, and support negotiations.',
      icon: Users,
      impact: 'Stronger vendor performance',
      tags: ['Power BI', 'Supplier Scorecard', 'OTIF / Freight KPIs'],
      image: 'https://images.unsplash.com/photo-1627915589334-14a3c3e3a741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9jdXJlbWVudCUyMHN1cHBsaWVyfGVufDF8fHx8MTc2NTM0MjI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Key Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Selected supply chain and analytics projects that delivered measurable business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md">
                  <project.icon className="text-blue-600" size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {project.impact}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1">
                  View case study →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {projects.slice(3).map((project, index) => (
            <div
              key={index + 3}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md">
                  <project.icon className="text-blue-600" size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {project.impact}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1">
                  View case study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}