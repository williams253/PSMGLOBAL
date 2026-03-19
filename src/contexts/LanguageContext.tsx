import React, { useState, createContext, useContext } from 'react';
export type Lang = 'en' | 'es';
interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)['es'];
}
const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      tech: 'Tecnología',
      logistics: 'Logística',
      contact: 'Contacto',
      cta: 'Solicitar Cotización'
    },
    hero: {
      h1: 'Optimización Industrial: Procura, Servicios y Mantenimiento',
      subtitle:
      'Líderes en ingeniería y soluciones integrales para los sectores más exigentes de la industria.',
      cta1: 'Solicitar Cotización',
      cta2: 'Nuestros Servicios',
      cards: [
      {
        title: 'Ingeniería y Proyectos',
        desc: 'Diseño conceptual y de detalle para proyectos industriales.'
      },
      {
        title: 'Mantenimiento Técnico',
        desc: 'Tanques, plantas y restauración industrial.'
      },
      {
        title: 'Procura y Suministros',
        desc: 'Tuberías, válvulas y equipos de seguridad.'
      }]

    },
    equipment: {
      title: 'Equipos y Capacidades',
      sidebar: [
      {
        name: 'Inicio',
        href: '#inicio'
      },
      {
        name: 'Servicios',
        href: '#tecnologia'
      },
      {
        name: 'Tecnología McElroy',
        href: '#mcelroy'
      },
      {
        name: 'Sistemas Well-Point',
        href: '#wellpoint'
      },
      {
        name: 'Logística',
        href: '#logistica'
      },
      {
        name: 'Contacto',
        href: '#contacto'
      }],

      sections: [
      {
        id: 'mcelroy',
        title: 'Termofusión Certificada',
        badge: 'Certificado',
        subtitle: 'Respaldo Técnico Tulsa, USA',
        desc: 'Equipos de termofusión de alta precisión para unión de tuberías HDPE, garantizando uniones seguras y duraderas bajo los más estrictos estándares internacionales.'
      },
      {
        id: 'wellpoint',
        title: 'Bombeo por Vacío de Alta Eficiencia',
        badge: 'Disponible',
        subtitle: 'Sistemas Well-Point',
        desc: 'Soluciones avanzadas para el abatimiento del nivel freático en excavaciones y proyectos de construcción, asegurando áreas de trabajo secas y estables.'
      },
      {
        id: 'logistica',
        title: 'Flota de Transporte Pesado y Alquiler',
        badge: 'Disponible',
        subtitle: 'Logística Integral',
        desc: 'Amplia flota de vehículos y maquinaria pesada disponible para transporte de equipos, materiales y soporte logístico en campo.'
      }]

    },
    whyChoose: {
      title: '¿Por qué PSM Global?',
      cards: [
      {
        title: 'Alta Especialización',
        desc: 'Expertos en planificación y control de proyectos complejos.'
      },
      {
        title: 'Solución Integral',
        desc: 'Desde la procura de materiales hasta la ejecución técnica.'
      },
      {
        title: 'Aliado Estratégico',
        desc: 'Eficiencia y confiabilidad comprobada en el sector petrolero.'
      }]

    },
    contact: {
      h2: '¿Necesita una solución industrial?',
      subtitle:
      'Solicite su cotización o consulta técnica. Nuestro equipo especializado le responderá a la brevedad.',
      infoTitle: 'Información de Contacto',
      infoSubtitle:
      'Visítenos en nuestras oficinas o contáctenos a través de nuestros canales digitales.',
      office: 'Sede Principal',
      address: 'Zona Industrial, Av. Principal\nGalpón 4, Maracaibo, Venezuela',
      phone: 'Teléfono',
      email: 'Correo',
      formTitle: 'Envíenos un Mensaje',
      name: 'Nombre Completo',
      namePlaceholder: 'Juan Pérez',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'juan@empresa.com',
      phoneLabel: 'Teléfono',
      phonePlaceholder: '+58 414 1234567',
      serviceLabel: 'Servicio de Interés',
      serviceOptions: [
      {
        value: 'ingenieria',
        label: 'Ingeniería'
      },
      {
        value: 'mantenimiento',
        label: 'Mantenimiento'
      },
      {
        value: 'procura',
        label: 'Procura'
      },
      {
        value: 'mcelroy',
        label: 'Tecnología McElroy'
      },
      {
        value: 'wellpoint',
        label: 'Well-Point'
      },
      {
        value: 'logistica',
        label: 'Logística'
      }],

      messageLabel: 'Mensaje o Detalles del Requerimiento',
      messagePlaceholder:
      'Describa el equipo, repuesto o material requerido...',
      submitBtn: 'Enviar Mensaje',
      successMsg: 'Gracias por su mensaje. Nos pondremos en contacto pronto.'
    },
    footer: {
      tagline:
      'Líderes en ingeniería y soluciones integrales para los sectores más exigentes de la industria.',
      linksTitle: 'Enlaces Rápidos',
      contactTitle: 'Contacto',
      copyright: 'Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      tech: 'Technology',
      logistics: 'Logistics',
      contact: 'Contact',
      cta: 'Request Quote'
    },
    hero: {
      h1: 'Industrial Optimization: Procurement, Services & Maintenance',
      subtitle:
      'Leaders in engineering and comprehensive solutions for the most demanding industrial sectors.',
      cta1: 'Request Quote',
      cta2: 'Our Services',
      cards: [
      {
        title: 'Engineering & Projects',
        desc: 'Conceptual and detailed design for industrial projects.'
      },
      {
        title: 'Technical Maintenance',
        desc: 'Tanks, plants, and industrial restoration.'
      },
      {
        title: 'Procurement & Supplies',
        desc: 'Piping, valves, and safety equipment.'
      }]

    },
    equipment: {
      title: 'Equipment & Capabilities',
      sidebar: [
      {
        name: 'Home',
        href: '#inicio'
      },
      {
        name: 'Services',
        href: '#tecnologia'
      },
      {
        name: 'McElroy Technology',
        href: '#mcelroy'
      },
      {
        name: 'Well-Point Systems',
        href: '#wellpoint'
      },
      {
        name: 'Logistics',
        href: '#logistica'
      },
      {
        name: 'Contact',
        href: '#contacto'
      }],

      sections: [
      {
        id: 'mcelroy',
        title: 'Certified Thermofusion',
        badge: 'Certified',
        subtitle: 'Technical Support Tulsa, USA',
        desc: 'High-precision thermofusion equipment for HDPE pipe joining, ensuring safe and durable joints under the strictest international standards.'
      },
      {
        id: 'wellpoint',
        title: 'High Efficiency Vacuum Pumping',
        badge: 'Available',
        subtitle: 'Well-Point Systems',
        desc: 'Advanced solutions for groundwater level reduction in excavations and construction projects, ensuring dry and stable work areas.'
      },
      {
        id: 'logistica',
        title: 'Heavy Transport Fleet & Rental',
        badge: 'Available',
        subtitle: 'Comprehensive Logistics',
        desc: 'Large fleet of vehicles and heavy machinery available for equipment transport, materials, and field logistics support.'
      }]

    },
    whyChoose: {
      title: 'Why PSM Global?',
      cards: [
      {
        title: 'High Specialization',
        desc: 'Experts in planning and controlling complex projects.'
      },
      {
        title: 'Comprehensive Solution',
        desc: 'From material procurement to technical execution.'
      },
      {
        title: 'Strategic Ally',
        desc: 'Proven efficiency and reliability in the oil sector.'
      }]

    },
    contact: {
      h2: 'Need an industrial solution?',
      subtitle:
      'Request your quote or technical consultation. Our specialized team will respond promptly.',
      infoTitle: 'Contact Information',
      infoSubtitle:
      'Visit our offices or contact us through our digital channels.',
      office: 'Main Office',
      address: 'Industrial Zone, Main Ave\nWarehouse 4, Maracaibo, Venezuela',
      phone: 'Phone',
      email: 'Email',
      formTitle: 'Send Us a Message',
      name: 'Full Name',
      namePlaceholder: 'John Smith',
      emailLabel: 'Email Address',
      emailPlaceholder: 'john@company.com',
      phoneLabel: 'Phone',
      phonePlaceholder: '+58 414 1234567',
      serviceLabel: 'Service of Interest',
      serviceOptions: [
      {
        value: 'ingenieria',
        label: 'Engineering'
      },
      {
        value: 'mantenimiento',
        label: 'Maintenance'
      },
      {
        value: 'procura',
        label: 'Procurement'
      },
      {
        value: 'mcelroy',
        label: 'McElroy Technology'
      },
      {
        value: 'wellpoint',
        label: 'Well-Point'
      },
      {
        value: 'logistica',
        label: 'Logistics'
      }],

      messageLabel: 'Message or Details',
      messagePlaceholder:
      'Describe the equipment, spare part, or material required...',
      submitBtn: 'Send Message',
      successMsg: 'Thank you for your message. We will contact you shortly.'
    },
    footer: {
      tagline:
      'Leaders in engineering and comprehensive solutions for the most demanding industrial sectors.',
      linksTitle: 'Quick Links',
      contactTitle: 'Contact',
      copyright: 'All rights reserved.'
    }
  }
} as const;
const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  setLang: () => {},
  t: translations['es']
});
export function LanguageProvider({ children }: {children: React.ReactNode;}) {
  const [lang, setLang] = useState<Lang>('es');
  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang]
      }}>
      
      {children}
    </LanguageContext.Provider>);

}
export function useLanguage() {
  return useContext(LanguageContext);
}