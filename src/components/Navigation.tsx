
import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Code, BarChart3, Database, FileCheck, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: null },
    { name: 'About', href: '#about', icon: null },
    { name: 'Programs', href: '#programs', icon: null },
    { name: 'Verify Certificate', href: '#verify', icon: FileCheck },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-xl shadow-primary/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto container-responsive">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Inlighn
              </span>
              <span className="ml-2 text-foreground font-light">Tech</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative px-4 xl:px-5 py-2.5 text-sm xl:text-base font-medium text-foreground/70 hover:text-foreground transition-all duration-300 rounded-xl hover:bg-muted/60 backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2">
                    {item.icon && <item.icon size={16} />}
                    <span className="hidden xl:inline">{item.name}</span>
                    <span className="xl:hidden">{item.name.split(' ')[0]}</span>
                  </span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-xl text-foreground hover:text-primary hover:bg-muted/60 transition-all duration-300 backdrop-blur-sm border border-border/30"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/60 transition-all duration-300 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            >
              {item.icon && <item.icon size={18} />}
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
