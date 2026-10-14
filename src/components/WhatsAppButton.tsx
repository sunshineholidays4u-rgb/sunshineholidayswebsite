import React from 'react';
import { Phone } from 'lucide-react';
import { PHONE_NUMBER, PHONE_DISPLAY_1, PHONE_DISPLAY_2, WHATSAPP_RAW_NUMBER } from '../utils/whatsapp';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
    'Hello Sunshine Holidays, I would like to enquire about your travel & cab rental services.'
  )}`;

  return (
    <>
      {/* Floating Circular WhatsApp Logo Button (Desktop & Tablet only - never covers mobile bar) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 items-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp Sunshine Holidays (${PHONE_DISPLAY_1} / ${PHONE_DISPLAY_2})`}
          title="WhatsApp Sunshine Holidays"
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          {/* Official WhatsApp Logo SVG */}
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 sm:w-9 sm:h-9 fill-current text-white drop-shadow-md"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.031 2c-5.518 0-9.998 4.48-9.998 9.998 0 1.761.459 3.479 1.33 4.991l-1.413 5.161 5.284-1.385c1.455.794 3.097 1.231 4.797 1.231 5.518 0 9.998-4.48 9.998-9.998s-4.48-9.998-9.998-9.998zm0 18.324c-1.504 0-2.977-.406-4.264-1.173l-.306-.182-3.171.832.846-3.092-.199-.317c-.84-1.337-1.285-2.898-1.285-4.502 0-4.62 3.758-8.378 8.379-8.378 4.62 0 8.378 3.758 8.378 8.378 0 4.62-3.758 8.378-8.378 8.378zm4.59-6.262c-.252-.126-1.492-.736-1.724-.82-.232-.084-.4-.126-.569.126-.168.252-.652.82-.799.988-.147.168-.294.189-.546.063-.252-.126-1.066-.393-2.03-1.253-.75-.669-1.256-1.496-1.403-1.748-.147-.252-.016-.388.11-.513.113-.113.252-.294.378-.441.126-.147.168-.252.252-.42.084-.168.042-.315-.021-.441-.063-.126-.569-1.371-.779-1.879-.205-.494-.413-.427-.569-.434l-.484-.007c-.168 0-.441.063-.672.315-.231.252-.883.863-.883 2.105s.904 2.441 1.03 2.609c.126.168 1.777 2.713 4.305 3.805.602.26 1.072.416 1.439.533.606.193 1.157.166 1.593.101.486-.073 1.492-.61 1.702-1.2s.21-1.094.147-1.2-.231-.168-.483-.294z" />
          </svg>
        </a>
      </div>

      {/* Sticky Mobile Bottom Quick Bar (Modern Mobile App Bar) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#111111]/95 backdrop-blur-xl border-t border-[#D49B24]/40 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          {/* Primary Call Action */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center justify-center gap-2 bg-[#1E1D1A] hover:bg-[#2A2824] text-white py-3 px-3 rounded-xl text-xs font-bold border border-[#D49B24]/30 active:scale-95 transition-all shadow-md"
            title="Call Primary Line: 88703 42758"
          >
            <div className="w-6 h-6 rounded-full bg-[#D49B24]/20 flex items-center justify-center shrink-0">
              <Phone className="w-3.5 h-3.5 text-[#ECC062]" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] text-[#ECC062] font-semibold uppercase leading-none">Primary</span>
              <span className="block text-xs font-bold tracking-tight">Call 88703</span>
            </div>
          </a>

          {/* WhatsApp Action */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-3 rounded-xl text-xs font-bold active:scale-95 transition-all shadow-[0_4px_16px_rgba(37,211,102,0.35)]"
            title="Chat on WhatsApp"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current text-white shrink-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.031 2c-5.518 0-9.998 4.48-9.998 9.998 0 1.761.459 3.479 1.33 4.991l-1.413 5.161 5.284-1.385c1.455.794 3.097 1.231 4.797 1.231 5.518 0 9.998-4.48 9.998-9.998s-4.48-9.998-9.998-9.998zm0 18.324c-1.504 0-2.977-.406-4.264-1.173l-.306-.182-3.171.832.846-3.092-.199-.317c-.84-1.337-1.285-2.898-1.285-4.502 0-4.62 3.758-8.378 8.379-8.378 4.62 0 8.378 3.758 8.378 8.378 0 4.62-3.758 8.378-8.378 8.378zm4.59-6.262c-.252-.126-1.492-.736-1.724-.82-.232-.084-.4-.126-.569.126-.168.252-.652.82-.799.988-.147.168-.294.189-.546.063-.252-.126-1.066-.393-2.03-1.253-.75-.669-1.256-1.496-1.403-1.748-.147-.252-.016-.388.11-.513.113-.113.252-.294.378-.441.126-.147.168-.252.252-.42.084-.168.042-.315-.021-.441-.063-.126-.569-1.371-.779-1.879-.205-.494-.413-.427-.569-.434l-.484-.007c-.168 0-.441.063-.672.315-.231.252-.883.863-.883 2.105s.904 2.441 1.03 2.609c.126.168 1.777 2.713 4.305 3.805.602.26 1.072.416 1.439.533.606.193 1.157.166 1.593.101.486-.073 1.492-.61 1.702-1.2s.21-1.094.147-1.2-.231-.168-.483-.294z" />
            </svg>
            <div className="text-left">
              <span className="block text-[10px] text-white/80 font-semibold uppercase leading-none">Instant</span>
              <span className="block text-xs font-bold tracking-tight">WhatsApp</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

