import React from 'react';
import { ArrowDown, Linkedin, Mail } from 'lucide-react';
import profileImage from 'figma:asset/9bc6126e3f8d1474becaedb2bcd50121f893be2b.png';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    const element = document.querySelector('#experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    scrollToExperience();
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600"
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV0d29yayUyMGFic3RyYWN0fGVufDF8fHx8MTc2NTM1NDcxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={profileImage}
                alt="Naveen Konada"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl">
              Naveen Konada
            </h1>
            <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl text-blue-100">
              Supply Chain Analyst
            </h2>
            <p className="mb-3 text-base sm:text-lg text-white max-w-2xl">
              I help manufacturing and distribution teams cut stockouts, improve OTIF, and optimize inventory using SAP, SQL, Python, and Power BI.
            </p>
            <p className="mb-4 text-sm text-blue-200 max-w-2xl">
              4+ years • SAP S/4HANA, IBP, MM, Ariba • SQL, Python, Power BI • Experience in India & USA
            </p>
            <p className="mb-6 text-sm sm:text-base text-blue-200 max-w-2xl">
              Open to: Supply Chain Analyst · Procurement / Inventory Analyst · Material Planner · Operations / Supply Chain Analytics
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
              <button
                onClick={scrollToProjects}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowDown size={20} />
              </button>
              <button
                onClick={handleResumeClick}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start items-center">
              <a
                href="https://www.linkedin.com/in/naveen-konada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
              >
                <Linkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:naveenkonada958@gmail.com"
                className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
              >
                <Mail size={20} />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white" size={32} />
      </div>
    </section>
  );
}