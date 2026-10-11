import React from 'react';
import { Compass, PhoneCall, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { PHONE_NUMBER } from '../utils/whatsapp';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 border-b border-[#EAE3D2] relative overflow-hidden bg-[#FBF8F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-[#EAE3D2] shadow-xl bg-[#111111]/10">
              <img
                src="/images/about-travel.jpg"
                alt="Travelers taking a refreshing scenic break overlooking misty mountain hills"
                loading="lazy"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center transform transition-transform duration-700 hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-[#D49B24]/40 text-white shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D49B24]/20 border border-[#D49B24]/40 flex items-center justify-center text-[#ECC062] shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#ECC062] uppercase tracking-wider">
                    Our Commitment
                  </p>
                  <p className="text-sm font-medium text-[#EAE3D2]">
                    Comfort-first travel experiences across Tamil Nadu & India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D49B24]/40 text-xs font-bold tracking-widest uppercase text-[#B88015] shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#D49B24]" />
              <span>ABOUT SUNSHINE HOLIDAYS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141414] leading-tight">
              Good Journeys Begin with Good Planning.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#615B52] leading-relaxed">
              <p>
                Sunshine Holidays helps travellers plan comfortable journeys from Coimbatore to destinations across India. Whether you are arranging a family holiday, a group outing, or an outstation trip, we help you explore suitable travel options and choose a vehicle for your needs.
              </p>
              <p>
                Our goal is simple: make planning easier and help every journey begin with confidence.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="btn-gold inline-flex items-center justify-center gap-2.5 text-base px-8 py-3.5 rounded-xl shadow-md"
              >
                <PhoneCall className="w-4 h-4 text-[#111111]" />
                <span>Talk to Us</span>
              </a>

              <a
                href="#vehicles"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FBF8F2] text-[#141414] border border-[#EAE3D2] font-bold text-base px-7 py-3.5 rounded-xl transition-all duration-200 shadow-xs focus:outline-none"
              >
                <span>View Fleet</span>
                <ArrowRight className="w-4 h-4 text-[#615B52]" />
              </a>
            </div>

            {/* Location Note */}
            <div className="pt-4 border-t border-[#EAE3D2] flex items-center gap-2 text-xs text-[#615B52]">
              <ShieldCheck className="w-4 h-4 text-[#D49B24]" />
              <span>Operating from NSN Palayam, Coimbatore with travel coverage throughout India.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
