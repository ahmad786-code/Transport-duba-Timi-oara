import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: "Cât de repede poate ajunge duba la adresa mea în Timișoara?",
      a: "În funcție de trafic și cartier, timpul mediu de sosire este între 30 și 60 de minute de la confirmarea telefonică. Baza noastră este pe Bulevardul General Ion Dragalina, ceea ce ne permite deplasarea rapidă spre orice colț al orașului sau comunele limitrofe (Dumbrăvița, Giroc, Moșnița, Ghiroda)."
    },
    {
      q: "Cum se calculează prețul unei curse sau mutări?",
      a: "Prețul este stabilit transparent de la început și depinde de distanță, volumul mărfurilor și dacă aveți nevoie de manipulanți (încărcat/descărcat pe scări sau lift). Pentru o cursă simplă de marfă în Timișoara prețurile pornesc de la 120 RON. Nu adăugăm costuri ascunse la final!"
    },
    {
      q: "Oferiți factură fiscală pentru decontare firmă sau persoană fizică?",
      a: "Da, absolut! Emitem factură fiscală și chitanță sau factură cu plată prin transfer bancar pentru fiecare intervenție. Lucrăm frecvent atât cu persoane fizice, cât și cu persoane juridice (firme, cabinete medicale, birouri, magazine)."
    },
    {
      q: "Puteți ridica mobila direct din magazine precum IKEA, Dedeman sau Leroy Merlin?",
      a: "Desigur! Este unul dintre serviciile noastre principale. Vă întâlniți cu șoferul la zona de eliberare marfă sau ne puteți lăsa numărul de comandă plătită, iar noi preluăm produsele și le aducem direct la domiciliul dumneavoastră."
    },
    {
      q: "Cum procedați cu debarasările de mobilier vechi și moloz?",
      a: "Echipa noastră demontează, încarcă și transportă mobilierul degradat, canapelele vechi, electrocasnicele defecte sau sacii de moloz direct către rampele autorizate de sortare și reciclare din Timișoara. Respectăm legislația de mediu și nu depozităm nimic pe domeniul public."
    },
    {
      q: "Sunteți disponibili și noaptea sau în zilele de sărbătoare?",
      a: "Da, serviciul nostru este NON-STOP (24 de ore din 24, 7 zile din 7). Înțelegem că multe mutări sau reparații urgente se pot face doar în weekend sau în afara orelor de program."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Întrebări Frecvente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tot ce trebuie să știi înainte de cursă
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Răspunsuri clare la cele mai comune întrebări despre transporturile noastre în Timișoara.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-500 text-slate-950' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-700/50">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-800/50 border border-slate-700 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-white text-base">Ai o situație particulară sau un volum atipic?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Discută direct cu șoferul responsabil și primești răspuns imediat.</p>
          </div>
          <a
            href="tel:+40770499023"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs whitespace-nowrap shadow transition-colors"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Întreabă telefonic: 0770 499 023</span>
          </a>
        </div>

      </div>
    </section>
  );
};
