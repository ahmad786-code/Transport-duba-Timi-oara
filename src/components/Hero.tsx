import React from 'react';
import { Phone, ShieldCheck, Clock, FileText, CheckCircle2, ArrowRight, MapPin, Truck } from 'lucide-react';
import vanImage from '../assets/images/van_transport_timisoara_1790414152739.jpg';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-slate-800">
      {/* Background glow subtleties */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Direct Response Copywriting */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location & Status Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-xs sm:text-sm text-slate-200">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
              <span className="font-semibold text-amber-400">Timișoara & Împrejurimi</span>
              <span className="text-slate-500">|</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Bd. G-ral Ion Dragalina
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-white leading-[1.15] text-balance">
              Transport, Mutări și <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400">Debarasări Rapide</span> în Timișoara
            </h1>

            {/* Subheadline as requested: fair prices, professional team, non-stop availability */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Asigurăm servicii complete cu dubă spațioasă de 3.5T, echipă serioasă și punctuală, la <strong className="text-white font-semibold">prețuri corecte și transparente</strong>. Suntem disponibili <strong className="text-amber-400 font-semibold">NON-STOP (24/7)</strong> pentru mutări locuințe, transport marfă din magazine și debarasări complete.
            </p>

            {/* Key Micro Value Props */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-200 bg-slate-800/60 rounded-lg p-2.5 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium">Sosire în 30–60 min</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200 bg-slate-800/60 rounded-lg p-2.5 border border-slate-700/60">
                <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium">Factură fiscală firme</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-slate-200 bg-slate-800/60 rounded-lg p-2.5 border border-slate-700/60">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium">Disponibil NON-STOP</span>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              {/* Primary CTA: Cere o Ofertă */}
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base tracking-tight shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
              >
                <span>Cere o Ofertă</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Secondary CTA: Sună Acum */}
              <a
                href="tel:+40770499023"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base border border-slate-600 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <Phone className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                <span>Sună Acum: 0770 499 023</span>
              </a>
            </div>

            {/* Quick trust reassurance */}
            <p className="text-xs text-slate-400 pt-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Fără costuri ascunse. Calculăm prețul corect înainte de începerea cursei.</span>
            </p>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 group">
              <img
                src={vanImage}
                alt="Transport dubă Timișoara - Dubă comercială 3.5 tone pregătită pentru mutări și debarasări"
                className="w-full h-[320px] sm:h-[400px] lg:h-[430px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-4 text-left">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                      <Truck className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm text-white">Dubă 3.5 Tone Volum Mare</span>
                  </div>
                  <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                    24/7 ACTIV
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  Spațiu generos pentru mobilier întreg, canapele, dulapuri, electrocasnice și saci moloz. Chingi speciale de fixare incluse.
                </p>
              </div>
            </div>

            {/* Quick Stats Pill under image */}
            <div className="mt-3 flex items-center justify-between px-2 text-xs text-slate-400 font-medium">
              <span>📍 Baza de plecare: B-dul Dragalina</span>
              <span className="text-emerald-400 font-semibold">● Răspundem la telefon imediat</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
