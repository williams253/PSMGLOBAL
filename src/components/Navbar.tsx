import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: t.nav.home,
    href: '#inicio'
  },
  {
    name: t.nav.services,
    href: '#tecnologia'
  },
  {
    name: t.nav.tech,
    href: '#mcelroy'
  },
  {
    name: t.nav.logistics,
    href: '#logistica'
  },
  {
    name: t.nav.contact,
    href: '#contacto'
  }];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary-800/95 backdrop-blur-sm shadow-lg py-3' : 'bg-primary-900 py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="#inicio" className="flex items-center gap-2 group">
              <span className="text-white font-extrabold text-2xl tracking-tight">
                PSM <span className="text-accent-500">GLOBAL</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className="text-neutral-300 hover:text-white font-medium text-sm uppercase tracking-wider transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">
              
                {link.name}
              </a>
            )}

            {/* Language Toggle */}
            <div className="flex items-center bg-primary-800 rounded-full p-0.5 border border-primary-700">
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${lang === 'es' ? 'bg-white text-primary-900 shadow-sm' : 'text-neutral-400 hover:text-white'}`}>
                
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${lang === 'en' ? 'bg-white text-primary-900 shadow-sm' : 'text-neutral-400 hover:text-white'}`}>
                
                EN
              </button>
            </div>

            <a
              href="#contacto"
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-lg font-bold transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200 text-sm">
              
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile: language toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-4">
            <div className="flex items-center bg-primary-800 rounded-full p-0.5 border border-primary-700">
              <button
                onClick={() => setLang('es')}
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold transition-all duration-200 ${lang === 'es' ? 'bg-white text-primary-900' : 'text-neutral-400'}`}>
                
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold transition-all duration-200 ${lang === 'en' ? 'bg-white text-primary-900' : 'text-neutral-400'}`}>
                
                EN
              </button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu">
              
              {isOpen ?
              <X className="h-6 w-6" /> :

              <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-primary-800 border-t border-primary-700 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 text-base font-medium text-neutral-300 hover:text-white hover:bg-primary-700 rounded-md transition-colors">
            
              {link.name}
            </a>
          )}
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="block mt-4 text-center bg-accent-500 hover:bg-accent-600 text-white px-3 py-3 rounded-lg font-bold transition-colors">
            
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>);

}