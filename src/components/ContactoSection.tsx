import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export function ContactoSection() {
  const { t } = useLanguage();
  const c = t.contact;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'ingenieria',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({
      name: '',
      email: '',
      phone: '',
      service: 'ingenieria',
      message: ''
    });
  };
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900">
            {c.h2}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-500">
            {c.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Card */}
          <div className="bg-primary-900 rounded-2xl p-8 text-white shadow-xl lg:col-span-1 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-accent-500 rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-neutral-500 rounded-full opacity-10 blur-2xl"></div>

            <div className="relative z-10 flex-1">
              <h3 className="text-2xl font-bold mb-2">{c.infoTitle}</h3>
              <p className="text-neutral-300 mb-8 text-sm">{c.infoSubtitle}</p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="font-bold text-white text-sm">{c.office}</p>
                    <p className="text-neutral-300 text-sm mt-1 whitespace-pre-line">
                      {c.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="font-bold text-white text-sm">{c.phone}</p>
                    <p className="text-neutral-300 text-sm mt-1">
                      +58 414 1234567
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="font-bold text-white text-sm">{c.email}</p>
                    <p className="text-neutral-300 text-sm mt-1">
                      info@psmglobal.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-neutral-50 rounded-2xl shadow-sm border border-neutral-100 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">
              {c.formTitle}
            </h3>

            {submitted &&
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 font-medium text-sm">
                ✓ {c.successMsg}
              </div>
            }

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-primary-900 mb-1.5">
                    
                    {c.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all bg-white"
                    placeholder={c.namePlaceholder}
                    required />
                  
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-primary-900 mb-1.5">
                    
                    {c.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all bg-white"
                    placeholder={c.emailPlaceholder}
                    required />
                  
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-primary-900 mb-1.5">
                    
                    {c.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all bg-white"
                    placeholder={c.phonePlaceholder} />
                  
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-bold text-primary-900 mb-1.5">
                    
                    {c.serviceLabel}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all bg-white">
                    
                    {c.serviceOptions.map((opt) =>
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-primary-900 mb-1.5">
                  
                  {c.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all resize-none bg-white"
                  placeholder={c.messagePlaceholder}
                  required>
                </textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-lg text-white bg-accent-500 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 transition-all shadow-lg hover:shadow-xl">
                  
                  {c.submitBtn}
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>);

}