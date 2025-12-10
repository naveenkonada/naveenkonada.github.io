import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Supply Chain Analyst',
      company: 'Cabot Corporation, USA',
      period: 'Jan 2025 - Present',
      responsibilities: [
        'Led cross-functional procurement planning improvements in SAP MM and Power BI, boosting OTIF by 9% and reducing stockouts by 11% across key materials',
        'Conducted purchase price variance (PPV) analysis and negotiated supplier contracts, reducing procurement spend by $450K annually through data-driven supplier selection',
        'Optimized MRP parameters including safety stock, MOQ, and reorder points, improving forecast accuracy by 8% and increasing inventory turns from 5.2 to 7.1 cycles per year',
        'Applied Lean methodologies and root cause analysis (RCA) to eliminate supply bottlenecks, improving logistics throughput and reducing lead time by 5.6 days per shipment cycle',
        'Automated the 3-way match process using SQL-based reporting dashboards, cutting financial reconciliation time from 6 days to 2 days',
      ],
    },
    {
      title: 'Supply Chain Analyst',
      company: 'Reliance Industries, India',
      period: 'Mar 2021 - Aug 2023',
      responsibilities: [
        'Improved forecast accuracy by developing Python-based time series forecasting models, reducing MAPE from 22% to 8% and enabling better demand-supply alignment across five business units',
        'Managed raw material procurement using SAP APO, achieving a 12% reduction in working capital while improving material availability by 16%',
        'Implemented vendor scorecards and freight analytics dashboards in Power BI to improve OTIF delivery from 84% to 93% and reduce average freight cost per unit by 7%',
        'Conducted excess and obsolete (E&O) inventory audits using SQL, eliminating ₹6.3 crore of idle stock and increasing overall inventory turnover ratio from 4.8 to 6.4',
        'Automated invoice and PO reconciliation through SQL-based scripts, reducing 3-way match cycle time by 35 hours monthly',
      ],
    },
    {
      title: 'Supply Chain Assistant',
      company: 'Reliance Industries, India',
      period: 'Feb 2020 - Feb 2021',
      responsibilities: [
        'Supported daily procurement activities through SAP MM including vendor onboarding, PO creation, and logistics tracking, improving vendor compliance rates to 97%',
        'Automated Excel-based approval workflows and validation scripts, cutting invoice processing time from 10 days to 4 days',
        'Partnered with logistics and finance teams to identify cost-saving opportunities, optimizing freight routing to achieve a 6% reduction in per-unit transport cost',
        'Developed Power BI dashboards to monitor lead times, supplier performance, and procurement KPIs, enabling real-time decision-making for 250+ POs',
      ],
    },
  ];

  const certifications = [
    'Six Sigma Green Belt – IISE (Mar 2024 - Mar 2027)',
    'Supply Chain Foundations: The Essentials – CSCMP (Sep 2025)',
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Experience, Education & Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Real-world roles where I applied SAP, analytics, and process improvement to ship measurable supply chain results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="mb-6">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-600">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-gray-900">{exp.title}</h4>
                        <p className="text-blue-600">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-gray-600 flex gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-6">Certifications</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Briefcase className="text-blue-600" size={16} />
                    </div>
                    <p className="text-gray-700">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h4 className="mb-4">Education</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-900">Master of Science in Industrial Engineering</p>
                  <p className="text-gray-600">Northeastern University, Boston, MA, USA</p>
                  <p className="text-gray-500">Sep 2023 - May 2025</p>
                </div>
                <div>
                  <p className="text-gray-900">Bachelor of Technology in Mechanical Engineering</p>
                  <p className="text-gray-600">Jawaharlal Nehru Technological University, Hyderabad, India</p>
                  <p className="text-gray-500">Aug 2017 - May 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}