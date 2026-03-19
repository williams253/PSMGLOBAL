import React from 'react';
import { ArrowRight, Wrench, HardHat, Package } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
const HERO_IMAGE =
'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
export function HeroSection() {
  const { t } = useLanguage();
  const h = t.hero;
  const icons = [Wrench, HardHat, Package];
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-primary-900">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Industrial Facility"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/95 via-primary-900/80 to-neutral-50/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            {h.h1}
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-10 max-w-2xl">
            {h.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-lg text-white bg-accent-500 hover:bg-accent-600 transition-all shadow-lg hover:shadow-accent-500/25">
              
              {h.cta1}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#tecnologia"
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/20 text-base font-bold rounded-lg text-white hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm">
              
              {h.cta2}
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {h.cards.map((card, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100 transform hover:-translate-y-1 transition-transform duration-300">
                
                <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mb-6 border border-neutral-100">
                  <Icon className="h-6 w-6 text-accent-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>);

          })}
        </div>
      </div>
    </section>);

}