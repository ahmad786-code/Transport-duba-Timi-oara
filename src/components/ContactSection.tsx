import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Mail, Send, CheckCircle2, FileText, Shield } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Transport Marfă',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone.trim()) return;
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            Contact & Comenzi Rapide
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Suntem Aici NON-STOP pentru Tine
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Ai nevoie de o dubă acum sau vrei să programezi o mutare pe zilele următoare? Contactează-ne prin telefon, WhatsApp sau formularul de mai jos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Phone Call Card */}
            <a
              href="tel:+40770499023"
              className="block bg-slate-900 border border-slate-800 hover:border-amber-500 rounded-2xl p-6 transition-all duration-300 shadow-lg group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Telefon Dispecerat (Non-Stop)
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-amber-400 group-hover:text-amber-300 transition-colors tabular-nums">
                    +40 770 499 023
                  </span>
                  <span className="text-xs text-emerald-400 block mt-1">
                    ● Răspuns imediat la apel
                  </span>
                </div>
              </div>
            </a>

            {/* WhatsApp Quick Chat */}
            <a
              href="https://wa.me/40770499023?text=Buna%20ziua!%20As%20dori%20o%20estimare%20de%20pret%20pentru%20un%20transport%20in%20Timisoara."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-900 border border-slate-800 hover:border-emerald-500 rounded-2xl p-6 transition-all duration-300 shadow-lg group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shrink-0">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    WhatsApp Chat Rapid
                  </span>
                  <span className="text-lg sm:text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
                    Scrie-ne pe WhatsApp
                  </span>
                  <span className="text-xs text-slate-400 block mt-1">
                    Trimite poze cu mobilierul sau molozul pentru cotație instantă
                  </span>
                </div>
              </div>
            </a>

            {/* Physical Location */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Adresă & Bază Operațională
                  </span>
                  <span className="text-base font-bold text-white block mt-0.5">
                    Bulevardul General Ion Dragalina
                  </span>
                  <span className="text-sm text-slate-300 block">
                    Cod Poștal 300158, Timișoara, România
                  </span>
                  <span className="text-xs text-slate-400 block mt-1">
                    Zonă accesibilă pentru plecări rapide către orice cartier
                  </span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Program de Lucru
                  </span>
                  <span className="text-lg font-bold text-amber-400 block mt-0.5">
                    NON-STOP (24 ore din 24)
                  </span>
                  <span className="text-xs text-slate-300 block">
                    Luni – Duminică, inclusiv sărbători legale
                  </span>
                </div>
              </div>
            </div>

            {/* B2B Invoicing Note */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
              <FileText className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                Colaborăm cu persoane fizice și persoane juridice (SRL, PFA). Factură fiscală cu TVA la cerere.
              </span>
            </div>

          </div>

          {/* Right Column: Direct Contact / Reservation Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-9 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Trimite un Mesaj sau Solicită Programare
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Completează formularul și te vom contacta în maxim 15 minute cu toate detaliile necesare.
              </p>

              {sent ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Mesaj recepționat!</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Mulțumim, {formData.name || 'stimate client'}. Dispecerul nostru te va apela la numărul <strong className="text-amber-400">{formData.phone}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setFormData({ name: '', phone: '', service: 'Transport Marfă', message: '' });
                    }}
                    className="px-5 py-2.5 bg-slate-800 text-slate-300 rounded-xl text-xs hover:bg-slate-700"
                  >
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Numele Tău *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Andrei Popescu"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Număr de Telefon *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: 0770 123 456"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Serviciul Dorit
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Transport Marfă & Magazine">Transport Marfă & Achiziții Magazine (IKEA/Dedeman)</option>
                      <option value="Mutare Apartament / Sediu">Mutare Apartament / Casă / Sediu Firmă</option>
                      <option value="Debarasare Mobilă / Moloz">Debarasare Mobilă Veche / Evacuare Moloz</option>
                      <option value="Alt tip de transport">Alt tip de transport cu dubă</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Mesaj sau Detalii Suplimentare (Locație, Dată, Obiecte voluminoase)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Descrie pe scurt ce ai de transportat, de unde până unde și dacă ai nevoie de băieți pentru urcat la etaj..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base tracking-tight shadow-xl shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Trimite Solicitarea Acum</span>
                  </button>

                  <p className="text-center text-xs text-slate-400 pt-1">
                    🔒 Datele tale sunt utilizate exclusiv pentru a te contacta în legătură cu această cursă.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
