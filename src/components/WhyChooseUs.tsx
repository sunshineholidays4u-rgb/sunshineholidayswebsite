import React from 'react';
import { Compass, Shield, Route, Users, MapPin } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: 'Comfortable Journeys',
      description: 'Travel in a vehicle suited to your trip and group, from compact sedans to spacious family SUVs and group travellers.',
      icon: Shield,
    },
    {
      title: 'Flexible Travel Plans',
      description: 'Enquire about local trips, outstation journeys, hill station tours, and longer holiday routes across state borders.',
      icon: Route,
    },
    {
      title: 'Personalised Assistance',
      description: 'Discuss your route, travel dates, and vehicle requirements directly with us for a tailored itinerary.',
      icon: Users,
    },
    {
      title: 'Journeys Across India',
      description: 'Plan journeys to destinations throughout India, subject to route confirmation and schedule availability.',
      icon: MapPin,
    },
  ];

  return (
    <section
      id="why-us"
      className="py-16 sm:py-24 border-b border-[#EAE3D2] relative overflow-hidden bg-[#FFFDF9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Benefits & Editorial Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D49B24]/40 text-xs font-bold tracking-widest uppercase text-[#B88015] shadow-xs">
                <Compass className="w-3.5 h-3.5 text-[#D49B24]" />
                <span>WHY SUNSHINE HOLIDAYS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141414] leading-tight">
                Designed for Calm, Dependable Travel.
              </h2>
              <p className="text-base sm:text-lg text-[#615B52] leading-relaxed">
                Whether you are setting out on a quiet weekend escape or coordinating a large family road trip, we prioritize thoughtful travel planning and vehicle comfort.
              </p>
            </div>

            {/* 4 Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-[#EAE3D2] space-y-3 shadow-xs hover:border-[#D49B24]/60 hover:shadow-lg transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#FDF4E3] border border-[#D49B24]/30 flex items-center justify-center text-[#D49B24]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#141414]">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[#615B52] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High Quality Travel Editorial Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#EAE3D2] shadow-xl bg-[#111111]/10">
              <img
                src="/images/scenic-landscape.jpg"
                alt="Scenic Western Ghats mountain road in Tamil Nadu"
                loading="lazy"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center transform transition-transform duration-700 hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Caption Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-[#D49B24]/40 text-white shadow-lg">
                <p className="text-xs font-bold text-[#ECC062] uppercase tracking-wider">
                  The Open Road Beckons
                </p>
                <p className="text-sm text-[#EAE3D2] font-medium mt-0.5">
                  Travel from Coimbatore to scenic destinations across South India and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
