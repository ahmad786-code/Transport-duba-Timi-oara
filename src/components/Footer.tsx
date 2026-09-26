import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, ShieldCheck, Heart, Truck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      {/* Upper Footer: Branding & Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Proposition */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md">
                <Truck className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                Transport Dubă <span className="text-amber-400">Timișoara</span>
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Serviciul tău local de încredere pentru transport marfă, mutări complete de locuințe și sedii de firme, precum și debarasări de mobilier și moloz în Timișoara și județul Timiș.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Disponibil NON-STOP (24/7)</span>
            </div>
          </div>

          {/* Column 2: Servicii Principale */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Servicii Oferite
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#servicii" className="hover:text-amber-400 transition-colors">
                  • Transport Marfă & Achiziții Magazine (IKEA / Dedeman)
                </a>
              </li>
              <li>
                <a href="#servicii" className="hover:text-amber-400 transition-colors">
                  • Mutări Apartamente, Garsoniere & Case
                </a>
              </li>
              <li>
                <a href="#servicii" className="hover:text-amber-400 transition-colors">
                  • Relocări Birouri & Sedii Firme cu Factură
                </a>
              </li>
              <li>
                <a href="#servicii" className="hover:text-amber-400 transition-colors">
                  • Debarasări Mobilier Vechi & Golire Apartamente
                </a>
              </li>
              <li>
                <a href="#servicii" className="hover:text-amber-400 transition-colors">
                  • Evacuare Moloz & Resturi Renovare la Rampă
                </a>
              </li>
              <li>
                <a href="#servicii" className="hover:text-amber-400 transition-colors">
                  • Manipulare Profesionistă cu Băieți la Etaj
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Cartiere & Zone Timișoara */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Zone Deservite Rapid
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Timișoara (Centru, Circumvalațiunii, Lipovei, Soarelui, Girocului, Dacia, Iosefin, Mehala, Calea Șagului, Calea Aradului), Dumbrăvița, Giroc, Chișoda, Ghiroda, Moșnița Nouă, Săcălaz, Sânandrei, Giarmata Vii, Lugoj.
            </p>
            <div className="pt-2">
              <a
                href="#zone-acoperire"
                className="text-xs text-amber-400 hover:text-amber-300 font-semibold underline"
              >
                Vezi harta detaliată de intervenție →
              </a>
            </div>
          </div>

          {/* Column 4: Date de Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact Rapid
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Bulevardul General Ion Dragalina, 300158 Timișoara, România</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+40770499023" className="text-white hover:text-amber-400 font-bold tabular-nums">
                  +40 770 499 023
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-amber-400 font-semibold">NON-STOP (24 ore / 7 zile)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/40770499023?text=Buna%20ziua!%20Doresc%20o%20estimare%20de%20pret%20pentru%20un%20transport%20in%20Timisoara."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Conversație WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Transport Dubă Timișoara | Mutări Mobilă | Debarasări. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Timișoara, România</span>
            <span>·</span>
            <span>Factură Fiscală la Cerere</span>
            <span>·</span>
            <span>Tarife Corecte & Transparente</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
