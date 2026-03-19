import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronRight } from 'lucide-react';
export function EquipmentSection() {
  const { t } = useLanguage();
  const e = t.equipment;
  const [activeTab, setActiveTab] = useState(2); // Default to first actual content section
  return (
    <section id="tecnologia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900">
            {e.title}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-primary-900 rounded-2xl p-4 shadow-xl lg:sticky lg:top-28">
              <nav className="space-y-1">
                {e.sidebar.map((item, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setActiveTab(idx)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${isActive ? 'bg-accent-500 text-white shadow-md' : 'text-neutral-300 hover:bg-primary-800 hover:text-white'}`}>
                      
                      {item.name}
                      {isActive && <ChevronRight className="h-4 w-4" />}
                    </a>);

                })}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="bg-neutral-50 rounded-2xl p-6 md:p-10 border border-neutral-100 shadow-sm min-h-[500px]">
              <div className="space-y-8">
                {e.sections.map((sec, idx) =>
                <div
                  key={idx}
                  id={sec.id}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                  
                    {/* Red Accent Line */}
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-500 transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary-900">
                          {sec.title}
                        </h3>
                        <p className="text-neutral-500 font-medium mt-1">
                          {sec.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 bg-neutral-50 px-3 py-1.5 rounded-full border border-neutral-200 self-start">
                        <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
                        <span className="text-xs font-bold text-primary-900 uppercase tracking-wider">
                          {sec.badge}
                        </span>
                      </div>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">
                      {sec.desc}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}