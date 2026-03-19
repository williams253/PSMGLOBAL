import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
const sectionHrefs = ['#inicio', '#tecnologia', '#nosotros', '#contacto'];
export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8 border-t border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-tight text-white">
                PSM <span className="text-accent-500">GLOBAL</span>
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              {f.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">
              {f.linksTitle}
            </h4>
            <ul className="space-y-2">
              {sectionHrefs.map((href, i) =>
              <li key={i}>
                  <a
                  href={href}
                  className="text-neutral-400 hover:text-accent-500 transition-colors text-sm font-medium capitalize">
                  
                    {href.replace('#', '')}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">
              {f.contactTitle}
            </h4>
            <ul className="space-y-3">
              <li className="text-neutral-400 text-sm leading-relaxed">
                Zona Industrial, Av. Principal
                <br />
                Galpón 4, Maracaibo, Venezuela
              </li>
              <li>
                <a
                  href="tel:+584141234567"
                  className="text-neutral-400 hover:text-accent-500 transition-colors text-sm font-medium">
                  
                  +58 414 1234567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@psmglobal.com"
                  className="text-neutral-400 hover:text-accent-500 transition-colors text-sm font-medium">
                  
                  info@psmglobal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} PSM GLOBAL, C.A. {f.copyright}
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-primary-800 hover:bg-accent-500 rounded-full transition-colors group"
            aria-label="Back to top">
            
            <ArrowUp className="h-5 w-5 text-neutral-300 group-hover:text-white" />
          </button>
        </div>
      </div>
    </footer>);

}