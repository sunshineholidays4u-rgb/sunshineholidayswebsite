import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_NUMBER, WHATSAPP_RAW_NUMBER } from '../utils/whatsapp';

interface FooterProps {
  onVehicleClick: (vehicleName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onVehicleClick }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#FFFFFF] pt-16 pb-12 border-t border-[#D49B24]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-9 flex items-center justify-center shrink-0">
                <img
                  src="/images/golden-charcoal-emblem.png"
                  alt="Sunshine Holidays Logo"
                  className="h-full w-auto object-contain drop-shadow-[0_2px_8px_rgba(236,192,98,0.4)]"
                />
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-white">
                  Sunshine Holidays
                </span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#ECC062] block">
                  Explore · Dream · Discover
                </span>
              </div>
            </div>

            <p className="text-sm text-[#D5CEBF] max-w-sm leading-relaxed font-light">
              Sunshine Holidays provides reliable cab rentals, outstation travel, family holidays, and group tour vehicles based out of Coimbatore, serving destinations all over India.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 bg-[#1A1917] hover:bg-[#D49B24] hover:text-[#111111] text-xs font-bold px-4 py-2.5 rounded-lg transition-colors border border-white/15"
              >
                <Phone className="w-3.5 h-3.5 text-[#ECC062]" />
                <span>{PHONE_DISPLAY}</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_RAW_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#ECC062]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#D5CEBF]">
              <li>
                <a href="#hero" className="hover:text-[#ECC062] transition-colors">Home</a>
              </li>
              <li>
                <a href="#vehicles" className="hover:text-[#ECC062] transition-colors">Our Vehicles</a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#ECC062] transition-colors">Destinations</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#ECC062] transition-colors">Why Sunshine</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#ECC062] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#ECC062] transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#ECC062] transition-colors">Trip Enquiry</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ECC062] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Vehicle Fleet Categories (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#ECC062]">
              Fleet Options
            </h4>
            <ul className="space-y-2 text-sm text-[#D5CEBF]">
              <li>
                <button
                  onClick={() => onVehicleClick('Swift Dzire')}
                  className="hover:text-[#ECC062] transition-colors text-left"
                >
                  Swift Dzire (Sedan)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onVehicleClick('Innova Crysta')}
                  className="hover:text-[#ECC062] transition-colors text-left"
                >
                  Innova Crysta (SUV)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onVehicleClick('Traveller')}
                  className="hover:text-[#ECC062] transition-colors text-left"
                >
                  Traveller (Group Van)
                </button>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#ECC062] transition-colors">
                  Custom Group Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Office Address (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#ECC062]">
              Coimbatore Office
            </h4>
            <div className="text-sm text-[#D5CEBF] space-y-2 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D49B24] shrink-0 mt-0.5" />
                <span>
                  52A, Sree Guru Brindhavan Complex, NSN Palayam, Coimbatore, Tamil Nadu – 641031, India.
                </span>
              </div>
              <p className="text-xs text-[#D5CEBF]/70 pt-1 font-light">
                Serving all-India road trips, family sightseeing, outstation round-trips & corporate group transfers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D5CEBF]/60">
          <p>
            © {currentYear} Sunshine Holidays. All rights reserved. Coimbatore, Tamil Nadu.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#booking"
              className="hover:text-white transition-colors"
            >
              Booking Policy
            </a>
            <span className="text-white/20">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#ECC062] hover:text-white transition-colors"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
