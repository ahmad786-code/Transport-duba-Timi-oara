import React from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const reviews: Testimonial[] = [
    {
      id: "1",
      name: "Ioan Ioan",
      location: "Timișoara",
      service: "Debarasare completă apartament",
      rating: 5,
      text: "Super profesioniști. Am debarasat un apartament întreg. Totul a decurs bine, rapid și eficient. Băieții sunt de nota 10.",
      date: "Client verificat",
      verified: true,
    },
    {
      id: "2",
      name: "Artene Neculai",
      location: "Timișoara",
      service: "Debarasare garaj & mobilă domiciliu",
      rating: 5,
      text: "Debarasare completă de garaj plus mobilă dintr-o cameră la domiciliu, foarte mulțumit de băieți.🤟",
      date: "Client verificat",
      verified: true,
    },
    {
      id: "3",
      name: "Marius Dumitrescu",
      location: "Giroc / Timișoara",
      service: "Transport mobilier Dedeman Calea Șagului",
      rating: 5,
      text: "Am cumpărat un colțar masiv și două dulapuri din Dedeman. Băieții au ajuns în 40 de minute la magazin, au încărcat rapid și au urcat totul la etajul 3 fără lift, cu mare grijă. Preț corect și oameni de cuvânt.",
      date: "Client verificat",
      verified: true,
    },
    {
      id: "4",
      name: "Simona Vasilescu",
      location: "Zona Circumvalațiunii, Timișoara",
      service: "Mutare birou & echipamente IT",
      rating: 5,
      text: "Am apelat pentru mutarea sediului firmei noastre. Ne-au emis factură fiscală imediat, băieții au fost politicoși, rapizi și extrem de atenți cu monitoarele și birourile. Recomand fără ezitare!",
      date: "Client verificat",
      verified: true,
    },
  ];

  return (
    <section id="recenzii" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            Părerea Clienților Noștri
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Recenzii Reale de la Clienți
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Reputația noastră se bazează pe fiecare transport efectuat la timp și pe fiecare client mulțumit din Timișoara.
          </p>

          {/* Aggregate Rating Scoreboard */}
          <div className="mt-6 inline-flex items-center gap-4 bg-slate-800/80 border border-slate-700 rounded-xl px-5 py-3 shadow-md">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="text-left text-xs sm:text-sm">
              <span className="font-bold text-white text-base mr-1">5.0 / 5.0</span>
              <span className="text-slate-400">Calificativ maxim din peste 350+ curse</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-800/60 rounded-2xl p-7 border border-slate-700/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative group"
            >
              <div>
                {/* Header row: stars & service tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                    {rev.service}
                  </span>
                </div>

                {/* Review Text */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-slate-700 absolute -top-2 -left-2 -z-0 opacity-40" />
                  <p className="text-base text-slate-200 leading-relaxed relative z-10 italic">
                    "{rev.text}"
                  </p>
                </div>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    {rev.name}
                  </h4>
                  <span className="text-xs text-slate-400">
                    {rev.location}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-950/40 border border-emerald-800/40 px-2 py-1 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live quote prompt */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400 mb-4">
            Vrei și tu o experiență fără bătăi de cap? Sună-ne sau solicită o cotație rapidă!
          </p>
          <a
            href="tel:+40770499023"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <ThumbsUp className="w-4 h-4" />
            <span>Fii următorul client mulțumit: 0770 499 023</span>
          </a>
        </div>

      </div>
    </section>
  );
};
