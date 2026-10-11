import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Car, MapPin } from 'lucide-react';
import { vehicles, type Vehicle } from '../data/vehicles';

interface HeroProps {
  onSelectVehicle?: (vehicleName: string) => void;
  onExploreVehicles: () => void;
  onBookTrip: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectVehicle: _onSelectVehicle,
  onExploreVehicles,
  onBookTrip,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentVehicle: Vehicle = vehicles[currentIndex];
  const total = vehicles.length;

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % total);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, total]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  // Autoplay timer
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="hero"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-[100dvh] lg:h-screen lg:min-h-[680px] flex items-center overflow-x-hidden bg-[#111111] pt-24 pb-24 sm:pt-28 sm:pb-20 lg:py-0"
    >
      {/* Background Full-Bleed Carousel Images - Crisp & Clear, Fills Entire Hero */}
      {vehicles.map((vehicle, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={vehicle.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
          >
            <img
              src={vehicle.image}
              alt={`${vehicle.name} - ${vehicle.category}`}
              className={`w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out ${isActive ? 'scale-103' : 'scale-100'
                }`}
            />
          </div>
        );
      })}

      {/* Hero Content Overlaid on Carousel - Ultra-Clear & Lightweight Frosted Glass Cards */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 sm:py-10 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 items-end">
          
          {/* Left Side: Grand Headline & Brand Identity */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/25 backdrop-blur-md border border-[#D49B24]/40 shadow-lg">
              <img
                src="/images/golden-charcoal-emblem.png"
                alt="Sunshine Holidays Emblem"
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
              />
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#ECC062] font-semibold drop-shadow-sm">
                All-India Travel · Premium Cabs
              </span>
            </div>

            <div className="bg-black/20 backdrop-blur-md p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/20 shadow-2xl max-w-xl transition-all">
              <h1 className="font-serif text-3.5xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] sm:leading-[1] drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
                Sunshine <span className="text-gold-gradient">Holidays</span>
              </h1>

              {/* Trust Indicator */}
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-3.5 border-t border-white/20 flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1 text-xs sm:text-sm text-white font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                <span className="flex items-center gap-1.5 text-[#ECC062] font-semibold">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  Cab Rentals & Tours
                </span>
                <span className="text-white/40">·</span>
                <span>All-India Travel</span>
                <span className="text-white/40">·</span>
                <span>Comfort-First Journeys</span>
              </div>
            </div>
          </div>

          {/* Right Side: Sub-headline, Description & Action Buttons */}
          <div className="lg:col-span-5 space-y-4 lg:pb-1">
            <div className="bg-black/20 backdrop-blur-md p-4 sm:p-6 lg:p-7 rounded-2xl border border-white/20 shadow-2xl space-y-3.5 sm:space-y-4 transition-all">
              <div className="space-y-2 sm:space-y-3">
                <h2 className="font-serif text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#F8F1E5] font-normal leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                  Every Journey Has a Story.{' '}
                  <span className="block sm:inline">
                    Let&apos;s Make Yours{' '}
                    <span className="text-[#ECC062] italic font-normal">Unforgettable.</span>
                  </span>
                </h2>

                {/* Supporting Description */}
                <p className="text-xs sm:text-sm lg:text-base text-white/95 leading-relaxed font-light drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)]">
                  From peaceful family getaways to exciting road trips across India,
                  travel comfortably with Sunshine Holidays. Choose your ride, plan your
                  route, and let us take care of the journey.
                </p>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                <button
                  onClick={onBookTrip}
                  className="btn-gold inline-flex items-center justify-center gap-2 text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl shadow-xl active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#D49B24] whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4 text-[#111111]" />
                  <span>Book Your Trip</span>
                </button>

                <button
                  onClick={onExploreVehicles}
                  className="inline-flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 text-white border border-[#D49B24]/40 hover:border-[#D49B24] font-semibold text-sm sm:text-base px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl transition-all duration-200 backdrop-blur-md shadow-lg focus:outline-none whitespace-nowrap"
                >
                  <Car className="w-4 h-4 text-[#ECC062]" />
                  <span>Explore Vehicles</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Minimal Sleek Bottom Carousel Bar - Adaptive on mobile and safe from floating WhatsApp button */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 right-20 sm:left-auto sm:right-28 lg:right-32 z-25 flex items-center justify-between sm:justify-end gap-2 sm:gap-3">
        {/* Subtle Frosted Vehicle Tag */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-black/40 backdrop-blur-md border border-[#D49B24]/40 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs text-white shadow-lg">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D49B24] animate-pulse" />
          <span className="text-[#ECC062] font-bold">{currentVehicle.name}</span>
          <span className="hidden sm:inline text-white/40">·</span>
          <span className="hidden sm:inline text-white/80">{currentVehicle.category}</span>
          <span className="text-white/40">·</span>
          <span className="font-mono text-white/90">0{currentIndex + 1}/0{total}</span>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md border border-white/20 p-1 rounded-full shadow-lg">
          <button
            onClick={prevSlide}
            aria-label="Previous vehicle slide"
            className="p-1.5 sm:p-2 rounded-full hover:bg-[#D49B24] hover:text-[#111111] text-white transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1 px-1">
            {vehicles.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1 sm:h-1.5 transition-all duration-300 rounded-full ${idx === currentIndex
                  ? 'w-4 sm:w-5 bg-[#D49B24]'
                  : 'w-1 sm:w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next vehicle slide"
            className="p-1.5 sm:p-2 rounded-full hover:bg-[#D49B24] hover:text-[#111111] text-white transition-colors focus:outline-none"
          >
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
