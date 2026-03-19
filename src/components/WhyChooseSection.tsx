import React from 'react';
import { Target, ShieldCheck, Handshake } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export function WhyChooseSection() {
  const { t } = useLanguage();
  const w = t.whyChoose;
  const icons = [Target, Handshake, ShieldCheck];
  return (
    <section id="nosotros" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900">
            {w.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {w.cards.map((card, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-10 shadow-sm border border-neutral-100 text-center group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                
                <div className="w-16 h-16 mx-auto bg-neutral-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-50 transition-colors">
                  <Icon className="h-8 w-8 text-accent-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed">{card.desc}</p>
              </div>);

          })}
        </div>
      </div>
    </section>);

}