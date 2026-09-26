import React from 'react';
import { FileText, Users, Clock, DollarSign, ShieldCheck, Sparkles, Check, Truck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: FileText,
      title: "Factură Fiscală pentru Firme & Persoane Fizice",
      desc: "Emitem factură fiscală și chitanță pentru fiecare cursă sau contract. Ideal pentru companii care decontează cheltuielile sau persoane fizice care doresc siguranță 100% legală.",
      badge: "Deductibilitate 100%",
    },
    {
      icon: Users,
      title: "Echipă Serioasă, Politicoasă & Punctuală",
      desc: "Respectăm ora stabilită la milimetru. Fără întârzieri neanunțate, fără anulări pe ultima sută de metri. Băieții noștri sunt energici, atenți cu pereții și ușile blocului și au grijă deplină de bunuri.",
      badge: "Zero Zgârieturi",
    },
    {
      icon: Clock,
      title: "Disponibilitate NON-STOP (24/7)",
      desc: "Lucrăm 24 de ore din 24, 7 zile din 7, inclusiv sâmbătă, duminică și de sărbători legale. Dacă ai nevoie de transport la ore târzii sau în weekend, suntem gata de drum.",
      badge: "Intervenție Rapidă",
    },
    {
      icon: DollarSign,
      title: "Prețuri Corecte și 100% Transparente",
      desc: "Stabilim costul de la început, în funcție de distanță, volum și etaj. Fără taxe ascunse la finalul cursei, fără 'negocieri' pe trotuar. Plătești exact ceea ce am agreat inițial.",
      badge: "Fără Costuri Ascunse",
    },
    {
      icon: Truck,
      title: "Dubă Spațioasă de 3.5 Tone, Curată",
      desc: "Autoutilitară modernă de 3.5T, carosată și igienizată periodic. Dotată cu chingi profesionale de fixare, cărucior pentru greutăți și pături groase pentru protecția mobilei.",
      badge: "Echipament Complet",
    },
    {
      icon: ShieldCheck,
      title: "Acoperire Timișoara & Întreg Județul Timiș",
      desc: "Ne deplasăm rapid în oricare cartier din Timișoara și în localitățile din jur (Dumbrăvița, Giroc, Ghiroda, Moșnița, Săcălaz, Chișoda, Lugoj etc.) și la cerere pe rute naționale.",
      badge: "Local & Județean",
    },
  ];

  return (
    <section id="de-ce-noi" className="py-20 bg-slate-950 text-white relative border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            Garanția Calității Noastre
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            De ce să ne alegeți pe noi?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Știm cât de stresantă poate fi o mutare sau o debarasare. De aceea oferim seriozitate maximă, transparență totală și respect pentru timpul și banii dumneavoastră.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 rounded-2xl p-7 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-800 px-2.5 py-1 rounded">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-emerald-400">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Standard garantat la fiecare cursă</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct comparison strip */}
        <div className="mt-14 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white text-center mb-6">
            Diferența dintre noi și transportatorii ocazionali
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="bg-red-950/20 border border-red-900/40 rounded-xl p-5 space-y-3">
              <h4 className="font-bold text-red-400 flex items-center gap-2">
                <span>✕</span> Alți transportatori ocazionali
              </h4>
              <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
                <li>• Întârzieri frecvente sau nu mai răspund la telefon</li>
                <li>• Refuză să ofere factură sau cer extra pentru ea</li>
                <li>• Prețul crește brusc la descărcare („a fost mai greu”)</li>
                <li>• Manipulează neglijent și zgârie pereții sau mobila</li>
              </ul>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-800/40 rounded-xl p-5 space-y-3">
              <h4 className="font-bold text-emerald-400 flex items-center gap-2">
                <span>✓</span> Transport Dubă Timișoara
              </h4>
              <ul className="space-y-2 text-slate-200 text-xs sm:text-sm">
                <li>• Punctualitate garantată și comunicare clară pe tot parcursul</li>
                <li>• Factură fiscală legală fără nicio discuție</li>
                <li>• Preț clar stabilit de la început, fix și corect</li>
                <li>• Pături de protecție, chingi de ancorare și băieți atenți</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
