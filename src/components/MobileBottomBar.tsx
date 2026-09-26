import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/40770499023?text=Buna%20ziua!%20Doresc%20o%20estimare%20de%20pret%20pentru%20un%20transport%20in%20Timisoara."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs tracking-tight shadow transition-colors"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span className="truncate">WhatsApp Rapid</span>
        </a>

        {/* Call Now Button */}
        <a
          href="tel:+40770499023"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-amber-500 active:bg-amber-600 text-slate-950 font-extrabold text-xs tracking-tight shadow transition-colors"
        >
          <Phone className="w-4 h-4 fill-current shrink-0" />
          <span className="truncate">Sună: 0770 499 023</span>
        </a>

      </div>
    </div>
  );
};
