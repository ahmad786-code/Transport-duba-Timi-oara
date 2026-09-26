import React, { useState } from 'react';
import { Phone, Menu, X, Clock, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      {/* Top micro bar for non-stop availability & phone prompt */}
      <div className="bg-amber-500 text-slate-950 text-xs font-semibold px-4 py-1">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
            </span>
            <span>DISPONIBILITATE NON-STOP (24/7) ÎN TIMIȘOARA ȘI JUDEȚUL TIMIȘ</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span className="opacity-90">Intervenție rapidă în 30-60 minute</span>
            <span aria-hidden="true">·</span>
            <a href="tel:+40770499023" className="underline hover:text-white font-bold transition-colors">
              +40 770 499 023
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Brand) - Zone 2 (Nav links) - Zone 3 (Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-2.5 text-lg sm:text-xl font-extrabold tracking-tight text-white group">
            <div className="h-9 w-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 shadow-md group-hover:bg-amber-400 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 17a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 9h11v8H3zM14 9h4l3 3v5h-7V9z" />
              </svg>
            </div>
            <span className="whitespace-nowrap font-bold text-white tracking-tight">
              Transport Dubă <span className="text-amber-400 font-extrabold">Timișoara</span>
            </span>
          </a>

          {/* Zone 2: 4-6 Clean Text Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#servicii" className="hover:text-amber-400 transition-colors">Servicii</a>
            <a href="#de-ce-noi" className="hover:text-amber-400 transition-colors">De ce noi?</a>
            <a href="#calculator-oferta" className="hover:text-amber-400 transition-colors">Calculator Ofertă</a>
            <a href="#recenzii" className="hover:text-amber-400 transition-colors">Recenzii</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+40770499023"
              className="hidden sm:flex flex-col text-right items-end mr-1 group"
              title="Apelează direct dispecerat transport"
            >
              <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Dispecerat Non-Stop</span>
              <span className="text-sm font-bold text-amber-400 group-hover:text-amber-300 transition-colors tabular-nums">
                +40 770 499 023
              </span>
            </a>

            <a
              href="tel:+40770499023"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm tracking-tight shadow-md hover:shadow-amber-500/25 transition-all whitespace-nowrap active:scale-95"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Sună Acum</span>
            </a>

            {/* Mobile menu trigger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Deschide meniu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-200">
            <a
              href="#servicii"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Servicii Transport & Mutări
            </a>
            <a
              href="#de-ce-noi"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              De ce să ne alegeți?
            </a>
            <a
              href="#calculator-oferta"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Calculator Estimativ Preț
            </a>
            <a
              href="#recenzii"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Păreri Clienți (Recenzii Reale)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Locație & Date de Contact
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="tel:+40770499023"
              className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-colors text-sm"
            >
              <Phone className="w-4 h-4 fill-current" />
              Sună Acum: +40 770 499 023
            </a>
            <a
              href="https://wa.me/40770499023?text=Buna%20ziua!%20Doresc%20o%20estimare%20de%20pret%20pentru%20un%20transport%20in%20Timisoara."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Scrie pe WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
