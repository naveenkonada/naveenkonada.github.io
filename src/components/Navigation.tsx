import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleResumeClick = () => {
    scrollToSection('#experience');
    // Also open resume link
    window.open('/resume.pdf', '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className={`transition-colors ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              Naveen Konada
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleResumeClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleResumeClick}
              className="block w-full text-left px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-lg mt-2"
            >
              <Download size={16} className="inline mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}