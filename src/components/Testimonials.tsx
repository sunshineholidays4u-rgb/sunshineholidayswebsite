import React from 'react';
import { Star, MapPin, Car, CheckCircle } from 'lucide-react';
import { reviewsData } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...reviewsData, ...reviewsData];

  return (
    <section
      id="reviews"
      className="py-16 sm:py-24 border-b border-[#EAE3D2] relative bg-[#FBF8F2] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        {/* Section Header in Pure English */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D49B24]/40 text-xs font-bold tracking-wider text-[#B88015] mb-3 shadow-xs uppercase">
            <span>CUSTOMER EXPERIENCES · 100% VERIFIED TOURS</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight tracking-tight">
            Making Journeys Beautiful.{' '}
            <span className="text-gold-gradient italic font-normal">
              Keeping Memories Timeless.
            </span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#615B52] leading-relaxed font-light">
            Read genuine travel experiences from families, tourists, and corporate groups who explored Coimbatore, South India, and destinations across India with Sunshine Holidays.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs font-semibold text-[#141414]">
            <div className="flex items-center gap-1 bg-[#FDF4E3] px-2.5 py-1 rounded-full border border-[#D49B24]/30">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D49B24] text-[#D49B24]" />
              ))}
              <span className="font-bold text-[#B88015] ml-1">4.9 / 5.0</span>
            </div>
            <span className="text-[#615B52]">· Based on 500+ successful outstation trips & cab rentals (Hover to pause)</span>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Soft Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FBF8F2] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FBF8F2] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-4 sm:gap-6 hover:[animation-play-state:paused] active:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[290px] sm:w-[380px] shrink-0 p-5 sm:p-6 rounded-2xl bg-white border border-[#EAE3D2] shadow-sm hover:shadow-xl hover:border-[#D49B24]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Author Info with Initial Monogram */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#FDF4E3] border border-[#D49B24]/40 flex items-center justify-center font-bold text-base text-[#B88015] shrink-0 shadow-2xs font-serif">
                      {item.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-[#141414] leading-tight flex items-center gap-1.5">
                        <span>{item.name}</span>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 inline" />
                      </h4>
                      <p className="text-xs text-[#615B52] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#D49B24]" />
                        <span>{item.location}</span>
                      </p>
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center gap-0.5 bg-[#FDF4E3] px-2 py-1 rounded-full border border-[#D49B24]/30 shrink-0">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#D49B24] text-[#D49B24]" />
                    ))}
                  </div>
                </div>

                {/* Tags: Vehicle & Trip */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-[#141414]">
                  <span className="inline-flex items-center gap-1 bg-[#FBF8F2] border border-[#EAE3D2] px-2.5 py-1 rounded-md text-[#B88015]">
                    <Car className="w-3 h-3 text-[#D49B24]" />
                    {item.vehicle}
                  </span>
                  <span className="bg-[#FBF8F2] border border-[#EAE3D2] px-2.5 py-1 rounded-md text-[#615B52]">
                    {item.trip}
                  </span>
                </div>

                {/* English Review Quote */}
                <p className="text-sm text-[#141414] leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Review Card Footer */}
              <div className="mt-5 pt-3.5 border-t border-[#EAE3D2] flex items-center justify-between text-[11px] text-[#615B52]">
                <span className="font-medium text-emerald-700 flex items-center gap-1">
                  ✓ Verified Customer
                </span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
