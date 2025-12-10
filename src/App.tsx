import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  // Set page title and meta description
  React.useEffect(() => {
    document.title = 'Naveen Konada | Supply Chain Analyst Portfolio';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Supply Chain Analyst with 4+ years of experience in SAP, SQL, Python, and Power BI. Portfolio of projects in procurement planning, MRP optimization, vendor performance, and network planning.'
    );
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}