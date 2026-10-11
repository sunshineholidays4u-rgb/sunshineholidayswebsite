import React from 'react';
import { Compass, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { destinations, type Destination } from '../data/destinations';

interface DestinationsProps {
  onSelectDestination: (destName: string) => void;
  onCustomDestination: () => void;
}

export const Destinations: React.FC<DestinationsProps> = ({
  onSelectDestination,
  onCustomDestination,
}) => {
  return (
    <section
      id="destinations"
      className="py-16 sm:py-24 border-b border-[#EAE3D2] relative bg-[#FFFDF9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D49B24]/40 text-xs font-bold tracking-widest uppercase text-[#B88015] mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#D49B24]" />
            <span>WHERE WILL YOU GO NEXT?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141414] leading-tight">
            From Local Escapes to Adventures Across India.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#615B52] leading-relaxed">
            Every destination has something worth discovering. Let Sunshine Holidays help you get there.
          </p>
          <p className="mt-1 text-xs text-[#615B52]/80 italic">
            * Popular destination routes for inspiration. We arrange custom routes anywhere across India based on your plan.
          </p>
        </div>

        {/* Destination Grid: 8 destinations + 1 Custom Journey Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {destinations.map((dest: Destination) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest.name)}
              className="destination-card group cursor-pointer relative rounded-2xl overflow-hidden bg-white border border-[#EAE3D2] shadow-xs hover:shadow-xl hover:border-[#D49B24]/60 transition-all duration-300 flex flex-col justify-between"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectDestination(dest.name);
                }
              }}
              aria-label={`Enquire trip to ${dest.name}`}
            >
              {/* Image Container with Overlay */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#111111]/10">
                <img
                  src={dest.image}
                  alt={`${dest.name} travel destination`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 will-change-transform group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-[#111111]/30 to-transparent transition-opacity duration-300" />

                {/* Region Tag */}
                <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#ECC062] border border-[#D49B24]/30 shadow-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#D49B24]" />
                  <span>{dest.region}</span>
                </div>

                {/* Distance pill */}
                {dest.approxDistance && (
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white/90 px-2 py-0.5 rounded text-[11px] font-medium border border-white/10">
                    {dest.approxDistance}
                  </div>
                )}

                {/* Title over image on bottom */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-[#EAE3D2] font-medium">
                    {dest.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-4 bg-white border-t border-[#EAE3D2] flex items-center justify-between text-xs font-bold text-[#141414] group-hover:text-[#D49B24] transition-colors">
                <span className="flex items-center gap-1">
                  Enquire Trip to {dest.name}
                </span>
                <div className="w-7 h-7 rounded-full bg-[#FBF8F2] group-hover:bg-[#D49B24] group-hover:text-[#111111] flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}

          {/* Final 9th Card: Have Somewhere Else in Mind? */}
          <div
            onClick={onCustomDestination}
            className="destination-card group cursor-pointer relative rounded-2xl overflow-hidden bg-[#141414] text-white p-7 flex flex-col justify-between shadow-xl transition-all duration-300 border border-[#D49B24]/40 hover:border-[#D49B24]"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onCustomDestination();
              }
            }}
            aria-label="Plan a Custom Journey"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#D49B24]/15 border border-[#D49B24]/30 flex items-center justify-center text-[#ECC062]">
                <Sparkles className="w-6 h-6 text-[#D49B24]" />
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#ECC062]">
                <span>CUSTOM ITINERARIES</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                Have Somewhere Else in Mind?
              </h3>

              <p className="text-sm text-[#D5CEBF] leading-relaxed font-light">
                We welcome enquiries for journeys across India. Whether it is a multi-city pilgrimage, a hidden village in the Nilgiris, or a coastal family road trip, tell us where you wish to go.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-sm font-bold text-[#ECC062] group-hover:text-white transition-colors">
                Plan a Custom Journey
              </span>
              <div className="w-9 h-9 rounded-full bg-[#D49B24] text-[#111111] flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
