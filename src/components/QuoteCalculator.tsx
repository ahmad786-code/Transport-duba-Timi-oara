import React, { useState } from 'react';
import { Calculator, Send, MessageSquare, Phone, CheckCircle2, AlertCircle, ArrowRight, HelpCircle } from 'lucide-react';

interface QuoteCalculatorProps {
  initialService?: string;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ initialService }) => {
  const [service, setService] = useState<string>(initialService || 'Transport Marfă & Achiziții');
  const [pickupZone, setPickupZone] = useState('Timișoara - Calea Șagului / Dâmbovița');
  const [dropoffZone, setDropoffZone] = useState('Timișoara - Centru / Cetate');
  const [floorLevel, setFloorLevel] = useState('parter');
  const [hasElevator, setHasElevator] = useState(true);
  const [helpers, setHelpers] = useState('driver-only');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Price estimate logic
  const calculateEstimate = () => {
    let baseMin = 120;
    let baseMax = 180;

    if (service === 'Mutare Rezidențială / Sediu') {
      baseMin = 220;
      baseMax = 450;
    } else if (service === 'Debarasare & Moloz') {
      baseMin = 250;
      baseMax = 500;
    }

    // Zone logic
    const isPeriphery = (zone: string) => 
      zone.includes('Dumbrăvița') || zone.includes('Giroc') || zone.includes('Ghiroda') || zone.includes('Moșnița') || zone.includes('Săcălaz') || zone.includes('Alte localități');

    if (isPeriphery(pickupZone) || isPeriphery(dropoffZone)) {
      baseMin += 40;
      baseMax += 60;
    }

    // Helper logic
    if (helpers === 'driver-plus-1') {
      baseMin += 80;
      baseMax += 130;
    } else if (helpers === 'driver-plus-2') {
      baseMin += 160;
      baseMax += 250;
    }

    // Floor logic without elevator
    if (!hasElevator && floorLevel !== 'parter') {
      const floorNum = parseInt(floorLevel.replace(/\D/g, '') || '1');
      baseMin += floorNum * 25;
      baseMax += floorNum * 40;
    }

    return { min: baseMin, max: baseMax };
  };

  const estimate = calculateEstimate();

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Salut! Doresc o ofertă pentru transport în Timișoara:\n` +
      `• Serviciu: ${service}\n` +
      `• Preluare: ${pickupZone}\n` +
      `• Destinație: ${dropoffZone}\n` +
      `• Etaj: ${floorLevel} (${hasElevator ? 'Cu Lift' : 'Fără Lift'})\n` +
      `• Ajutor manipulare: ${helpers === 'driver-only' ? 'Doar șofer' : helpers === 'driver-plus-1' ? 'Șofer + 1 om' : 'Șofer + 2 oameni'}\n` +
      (description ? `• Detalii marfă: ${description}\n` : '') +
      `• Estimare orientativă: ${estimate.min} - ${estimate.max} RON`
    );
    window.open(`https://wa.me/40770499023?text=${text}`, '_blank');
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="calculator-oferta" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            Calculator Rapid & Estimare Corectă
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Află Prețul Estimativ în 30 de Secunde
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Selectează detaliile cursei tale și primești imediat o estimare transparentă, fără nicio obligație.
          </p>
        </div>

        {/* Interactive Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Solicitarea a fost trimisă cu succes!</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Vă mulțumim! Un dispecer vă va contacta la numărul <strong className="text-amber-400">{phone}</strong> în cel mult 10-15 minute pentru confirmare și detalii finale.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:+40770499023"
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm"
                >
                  Sună dacă este urgență: 0770 499 023
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-slate-800 text-slate-300 text-sm hover:bg-slate-700"
                >
                  Calculează alt traseu
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitForm} className="space-y-8">
              
              {/* Step 1: Select Service */}
              <div>
                <label className="block text-sm font-bold text-slate-200 mb-3">
                  1. Alege Tipul Serviciului
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'Transport Marfă & Achiziții', label: 'Transport Marfă / Magazine', sub: 'IKEA, Dedeman, mobilier, etc.' },
                    { id: 'Mutare Rezidențială / Sediu', label: 'Mutare Locuință / Birou', sub: 'Apartamente, case, firme' },
                    { id: 'Debarasare & Moloz', label: 'Debarasare Mobilă / Moloz', sub: 'Golire spații, resturi renovare' },
                  ].map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setService(s.id)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        service === s.id
                          ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <span className={`block font-bold text-sm ${service === s.id ? 'text-amber-400' : 'text-white'}`}>
                        {s.label}
                      </span>
                      <span className="block text-xs text-slate-400 mt-1">
                        {s.sub}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Zones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Locație Preluare (Încărcare)
                  </label>
                  <select
                    value={pickupZone}
                    onChange={(e) => setPickupZone(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="Timișoara - Centru / Cetate">Timișoara - Centru / Cetate</option>
                    <option value="Timișoara - Circumvalațiunii / Dacia">Timișoara - Circumvalațiunii / Dacia</option>
                    <option value="Timișoara - Calea Șagului / Dâmbovița">Timișoara - Calea Șagului / Dâmbovița</option>
                    <option value="Timișoara - Calea Aradului / Torontalului">Timișoara - Calea Aradului / Torontalului</option>
                    <option value="Timișoara - Soarelui / Girocului">Timișoara - Soarelui / Girocului</option>
                    <option value="Timișoara - Fabric / Traian / Modern">Timișoara - Fabric / Traian / Modern</option>
                    <option value="Timișoara - Iosefin / Elisabetin">Timișoara - Iosefin / Elisabetin</option>
                    <option value="Timișoara - Calea Lipovei / Ion Ionescu">Timișoara - Calea Lipovei / Ion Ionescu</option>
                    <option value="Dumbrăvița (IKEA / Dedeman)">Dumbrăvița (IKEA / Dedeman)</option>
                    <option value="Giroc / Chișoda">Giroc / Chișoda</option>
                    <option value="Ghiroda / Moșnița Nouă">Ghiroda / Moșnița Nouă</option>
                    <option value="Săcălaz / Sânandrei">Săcălaz / Sânandrei</option>
                    <option value="Alte localități județul Timiș">Alte localități județul Timiș</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Locație Destinație (Descărcare)
                  </label>
                  <select
                    value={dropoffZone}
                    onChange={(e) => setDropoffZone(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="Timișoara - Centru / Cetate">Timișoara - Centru / Cetate</option>
                    <option value="Timișoara - Circumvalațiunii / Dacia">Timișoara - Circumvalațiunii / Dacia</option>
                    <option value="Timișoara - Calea Șagului / Dâmbovița">Timișoara - Calea Șagului / Dâmbovița</option>
                    <option value="Timișoara - Calea Aradului / Torontalului">Timișoara - Calea Aradului / Torontalului</option>
                    <option value="Timișoara - Soarelui / Girocului">Timișoara - Soarelui / Girocului</option>
                    <option value="Timișoara - Fabric / Traian / Modern">Timișoara - Fabric / Traian / Modern</option>
                    <option value="Timișoara - Iosefin / Elisabetin">Timișoara - Iosefin / Elisabetin</option>
                    <option value="Timișoara - Calea Lipovei / Ion Ionescu">Timișoara - Calea Lipovei / Ion Ionescu</option>
                    <option value="Dumbrăvița (IKEA / Dedeman)">Dumbrăvița (IKEA / Dedeman)</option>
                    <option value="Giroc / Chișoda">Giroc / Chișoda</option>
                    <option value="Ghiroda / Moșnița Nouă">Ghiroda / Moșnița Nouă</option>
                    <option value="Săcălaz / Sânandrei">Săcălaz / Sânandrei</option>
                    <option value="Alte localități județul Timiș">Alte localități județul Timiș</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Floor, Elevator & Helpers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Etaj Destinație
                  </label>
                  <select
                    value={floorLevel}
                    onChange={(e) => setFloorLevel(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="parter">Parter / Casă</option>
                    <option value="etaj 1">Etaj 1</option>
                    <option value="etaj 2">Etaj 2</option>
                    <option value="etaj 3">Etaj 3</option>
                    <option value="etaj 4">Etaj 4</option>
                    <option value="etaj 5+">Etaj 5+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Există Lift Funcțional?
                  </label>
                  <div className="grid grid-cols-2 gap-2 h-[46px]">
                    <button
                      type="button"
                      onClick={() => setHasElevator(true)}
                      className={`rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
                        hasElevator
                          ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      Da, cu lift
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasElevator(false)}
                      className={`rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
                        !hasElevator
                          ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      Fără lift
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Ajutor la Manipulare
                  </label>
                  <select
                    value={helpers}
                    onChange={(e) => setHelpers(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="driver-only">Doar șofer (asistență la aranjat)</option>
                    <option value="driver-plus-1">Șofer + 1 Manipulant</option>
                    <option value="driver-plus-2">Șofer + 2 Manipulanți</option>
                  </select>
                </div>
              </div>

              {/* Optional brief description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Detalii Marfă / Obiecte (Opțional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: canapea extensibilă, 1 dulap demontat, 4 cutii sau 15 saci moloz..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Live Estimate Card */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-500/50 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    <Calculator className="w-4 h-4" />
                    <span>Cost orientativ estimat</span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-white tabular-nums">
                      {estimate.min} – {estimate.max}
                    </span>
                    <span className="text-xl font-bold text-amber-400">RON</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    *Prețul final exact se stabilește telefonic înainte de pornirea cursei. Fără surprize.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  {/* WhatsApp Quick Dispatch */}
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Trimite pe WhatsApp</span>
                  </button>

                  {/* Direct Call Button */}
                  <a
                    href="tel:+40770499023"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Sună: 0770 499 023</span>
                  </a>
                </div>
              </div>

              {/* Alternative: Callback Request Input */}
              <div className="pt-2 border-t border-slate-800">
                <label className="block text-xs font-semibold text-slate-400 mb-2">
                  Sau lasă numărul tău și te sunăm noi în 10 minute:
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="tel"
                    required
                    placeholder="Număr de telefon (ex: 07xx xxx xxx)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-sm border border-amber-500/30 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Trimite Solicitarea
                  </button>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
