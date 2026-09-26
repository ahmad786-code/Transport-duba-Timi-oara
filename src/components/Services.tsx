import React from 'react';
import { Truck, Home, Trash2, CheckCircle, ArrowRight, ShieldCheck, ShoppingBag, Phone } from 'lucide-react';
import vanImage from '../assets/images/van_transport_timisoara_1790414152739.jpg';
import movingImage from '../assets/images/moving_relocation_team_1790414168298.jpg';
import clearanceImage from '../assets/images/furniture_clearance_service_1790414179555.jpg';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="servicii" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            Servicii Complete de Transport & Logistică
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Serviciile Noastre în Timișoara
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Acoperim toate necesitățile dumneavoastră de transport, de la o singură canapea cumpărată din magazin până la mutarea completă a unei locuințe sau debarasarea molozului.
          </p>
        </div>

        {/* The 3 Main Pillars as specified in the prompt */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Pillar 1: Transport Marfă & Achiziții */}
          <div className="bg-slate-800/80 rounded-2xl border border-slate-700 overflow-hidden flex flex-col hover:border-amber-500/60 transition-all duration-300 shadow-xl hover:shadow-amber-500/10 group">
            <div className="relative h-56 overflow-hidden bg-slate-950">
              <img
                src={vanImage}
                alt="Transport marfă și achiziții magazine IKEA Dedeman Timișoara"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-md shadow uppercase tracking-wide">
                Pilonul 1
              </div>
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <span className="p-2 rounded-lg bg-slate-900/90 text-amber-400 border border-slate-700">
                  <Truck className="w-5 h-5" />
                </span>
                <span className="text-xs font-semibold text-slate-200 bg-slate-900/80 px-2 py-1 rounded">
                  Livrare Promptă în Aceeași Zi
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  Transport Marfă & Achiziții Magazine
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Ai cumpărat mobilă sau electrocasnice mari și nu ai cu ce să le transporți? Mergem direct la magazin, preluăm marfa și o aducem la adresa ta în siguranță deplină.
                </p>

                {/* Popular store pickups */}
                <div className="mt-4 pt-4 border-t border-slate-700/60">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-2">
                    Ridicări rapide din marile magazine:
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                    <span className="bg-slate-700/70 px-2.5 py-1 rounded text-slate-200">IKEA Timișoara</span>
                    <span className="bg-slate-700/70 px-2.5 py-1 rounded text-slate-200">Dedeman</span>
                    <span className="bg-slate-700/70 px-2.5 py-1 rounded text-slate-200">Leroy Merlin</span>
                    <span className="bg-slate-700/70 px-2.5 py-1 rounded text-slate-200">Jysk</span>
                    <span className="bg-slate-700/70 px-2.5 py-1 rounded text-slate-200">Hornbach</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="mt-5 space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Frigidere transportate vertical (în picioare), mașini de spălat, canapele</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Materiale de construcții, gresie, faianță, parchet, tâmplărie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Chingi de ancorare profesionale pentru protecție totală</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Tarif estimativ</span>
                  <span className="text-base font-bold text-amber-400">De la 120 RON</span>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectService('Transport Marfă & Magazine')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  <span>Cere Preț</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Pillar 2: Mutări (Relocations) */}
          <div className="bg-slate-800/80 rounded-2xl border-2 border-amber-500/70 overflow-hidden flex flex-col hover:border-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/5 relative group">
            <div className="absolute top-3 right-3 z-10 bg-amber-500 text-slate-950 font-bold text-[11px] px-2.5 py-0.5 rounded shadow">
              CEL MAI SOLICITAT
            </div>

            <div className="relative h-56 overflow-hidden bg-slate-950">
              <img
                src={movingImage}
                alt="Mutări mobilă apartamente și firme Timișoara cu manipulanți"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-md shadow uppercase tracking-wide">
                Pilonul 2
              </div>
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <span className="p-2 rounded-lg bg-slate-900/90 text-amber-400 border border-slate-700">
                  <Home className="w-5 h-5" />
                </span>
                <span className="text-xs font-semibold text-slate-200 bg-slate-900/80 px-2 py-1 rounded">
                  Manipulare Inclusă la Cerere
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  Mutări Rezidențiale & Sedii Firme
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Relocări complete fără bătăi de cap pentru garsoniere, apartamente, case și birouri în Timișoara și în afara orașului. Avem grijă de bunurile tale ca și cum ar fi ale noastre.
                </p>

                {/* Scope of service */}
                <div className="mt-4 pt-4 border-t border-slate-700/60">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-2">
                    Acoperim orice tip de relocare:
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                    <span className="bg-slate-700/70 px-2.5 py-1 rounded text-slate-200">Garsoniere & Studio</span>
                    <span className="bg-slate-700/70 px-2.5 py-1 rounded text-slate-200">Apartamente 2-4 camere</span>
                    <span className="bg-slate-700/70 px-2.5 py-1 rounded text-slate-200">Case / Vile</span>
                    <span className="bg-slate-700/70 px-2.5 py-1 rounded text-slate-200">Birouri & Firme</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="mt-5 space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Manipulare (încărcare / descărcare) pe scări sau cu lift</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Pături textile groase de protecție pentru mobilier lăcuit & sticlă</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Echipă formată din 1 până la 3 manipulanți experimentați</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Tarif estimativ</span>
                  <span className="text-base font-bold text-amber-400">De la 200 RON</span>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectService('Mutare Apartament / Sediu')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  <span>Cere Preț</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Pillar 3: Debarasări & Curățenie (Clearances) */}
          <div className="bg-slate-800/80 rounded-2xl border border-slate-700 overflow-hidden flex flex-col hover:border-amber-500/60 transition-all duration-300 shadow-xl hover:shadow-amber-500/10 group">
            <div className="relative h-56 overflow-hidden bg-slate-950">
              <img
                src={clearanceImage}
                alt="Debarasare apartamente garaje poduri și moloz renovări Timișoara"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-md shadow uppercase tracking-wide">
                Pilonul 3
              </div>
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <span className="p-2 rounded-lg bg-slate-900/90 text-amber-400 border border-slate-700">
                  <Trash2 className="w-5 h-5" />
                </span>
                <span className="text-xs font-semibold text-slate-200 bg-slate-900/80 px-2 py-1 rounded">
                  Transport la Rampe Autorizate
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  Debarasări & Curățenie Totală
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Eliberăm complet spații aglomerate de vechituri, mobilier degradat și deșeuri. Ne ocupăm de încărcare, coborâre și transport către centre autorizate de reciclare.
                </p>

                {/* Clearance categories */}
                <div className="mt-4 pt-4 border-t border-slate-700/60">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-2">
                    Servicii de eliberare & debarasare:
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                    <span className="bg-slate-700/70 px-2.5 py-1 rounded text-slate-200">Golire Apartamente</span>
                    <span className="bg-slate-700/70 px-2.5 py-1 rounded text-slate-200">Poduri & Mansarde</span>
                    <span className="bg-slate-700/70 px-2.5 py-1 rounded text-slate-200">Garaje & Boxe</span>
                    <span className="bg-slate-700/70 px-2.5 py-1 rounded text-slate-200">Moloz în Saci</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="mt-5 space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Evacuare mobilier vechi: canapele, fotolii, dulapuri, saltele</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Eliminare moloz, cărămidă, faianță și resturi din renovări</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Lăsăm spațiul măturat și curat la finalul intervenției</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Tarif estimativ</span>
                  <span className="text-base font-bold text-amber-400">De la 250 RON</span>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectService('Debarasare & Moloz')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  <span>Cere Preț</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Contact Banner inside services */}
        <div className="mt-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 sm:p-8 text-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-black">
              Ai o urgență sau ai nevoie de transport chiar astăzi?
            </h4>
            <p className="text-sm font-medium text-slate-900/90">
              Dispeceratul nostru este activ NON-STOP. Răspundem la apel și putem trimite duba în 30–60 de minute.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+40770499023"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-400 font-extrabold text-sm sm:text-base shadow-lg transition-transform active:scale-95 whitespace-nowrap"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>0770 499 023</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
