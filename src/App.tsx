import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EquipmentSection } from './components/EquipmentSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ContactoSection } from './components/ContactoSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-accent-500 selection:text-white">
        <Navbar />
        <main>
          <HeroSection />
          <EquipmentSection />
          <WhyChooseSection />
          <ContactoSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>);

}