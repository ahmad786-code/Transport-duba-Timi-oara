/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { QuoteCalculator } from './components/QuoteCalculator';
import { Testimonials } from './components/Testimonials';
import { CoverageMap } from './components/CoverageMap';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Transport Marfă & Achiziții');

  const scrollToCalculator = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const elem = document.getElementById('calculator-oferta');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950 pb-16 md:pb-0">
      {/* Top Header Navigation */}
      <Navbar onOpenQuoteModal={() => scrollToCalculator()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onQuoteClick={() => scrollToCalculator()} />

        {/* 3 Main Service Pillars */}
        <Services onSelectService={(s) => scrollToCalculator(s)} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Interactive Quote Calculator & Offer Request */}
        <QuoteCalculator key={selectedService} initialService={selectedService} />

        {/* Real Customer Testimonials */}
        <Testimonials />

        {/* Coverage & Embedded Timisoara Map */}
        <CoverageMap />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Contact Details & Direct Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile-First Sticky Action Bar */}
      <MobileBottomBar />
    </div>
  );
}
