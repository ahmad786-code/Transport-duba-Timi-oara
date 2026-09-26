import React from 'react';
import { MapPin, Navigation, Clock, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const CoverageMap: React.FC = () => {
  const neighborhoods = [
    "Circumvalațiunii", "Centru / Cetate", "Calea Aradului", "Calea Șagului",
    "Calea Lipovei", "Soarelui", "Girocului", "Dâmbovița",
    "Iosefin", "Elisabetin", "Fabric", "Mehala",
    "Dacia", "Freidorf", "Torontalului", "Bucovina"
  ];

  const metropolitanZones = [
    "Dumbrăvița", "Giroc", "Chișoda", "Ghiroda",
    "Moșnița Nouă", "Moșnița Veche", "Săcălaz", "Sânandrei",
    "Giarmata Vii", "Remetea Mare", "Șag", "Lugoj (la cerere)"
  ];

  return (
    <section id="zone-acoperire" className="py-20 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            Arie de Acoperire & Sediu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Intervenții Rapide în Tot Județul Timiș
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Baza noastră este situată strategic pe <strong className="text-white">Bulevardul General Ion Dragalina</strong>, ceea ce ne permite să ajungem în orice zonă din Timișoara în 30–45 de minute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Zones List */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Base address card */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Sediu / Punct de Plecare</span>
                  <h3 className="text-lg font-bold text-white mt-0.5">Bulevardul General Ion Dragalina</h3>
                  <p className="text-sm text-slate-300">300158 Timișoara, Județul Timiș, România</p>
                  
                  <div className="mt-3 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Disponibilitate Dispecerat: NON-STOP (24/7)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Neighborhoods in Timișoara */}
            <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Cartiere Timișoara Deservite:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                {neighborhoods.map((n, i) => (
                  <div key={i} className="flex items-center gap-1.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{n}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metropolitan & Peri-Urban Areas */}
            <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-amber-400" />
                Zona Peri-Urbană & Județeană:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                {metropolitanZones.map((z, i) => (
                  <div key={i} className="flex items-center gap-1.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{z}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Google Map Placeholder / Embedded Map */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              
              {/* Map Top Bar */}
              <div className="bg-slate-850 px-5 py-3 border-b border-slate-700 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="font-bold">Hartă Localizare: B-dul General Ion Dragalina, Timișoara</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Bulevardul+General+Ion+Dragalina,+300158+Timisoara,+Romania"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold underline"
                >
                  Deschide în Google Maps
                </a>
              </div>

              {/* Responsive Embedded Map Iframe */}
              <div className="relative w-full h-[400px] sm:h-[480px] bg-slate-950">
                <iframe
                  title="Harta Locatie Transport Duba Timisoara - Bulevardul General Ion Dragalina"
                  src="https://maps.google.com/maps?q=Bulevardul%20General%20Ion%20Dragalina%2C%20300158%20Timisoara%2C%20Romania&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-105"
                  loading="lazy"
                  allowFullScreen
                ></iframe>

                {/* Overlay Badge for Dispatch */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white rounded-xl p-3 shadow-lg max-w-xs pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-bold text-amber-400">Centru Operațional Activ</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    B-dul General Ion Dragalina, 300158 Timișoara
                  </p>
                </div>
              </div>

              {/* Map Footer Banner */}
              <div className="p-4 bg-slate-800/90 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Trasee optimizate fără întârzieri prin traficul din Timișoara</span>
                </div>
                <a
                  href="tel:+40770499023"
                  className="font-bold text-amber-400 hover:underline"
                >
                  Sună Dispecerat: +40 770 499 023
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
