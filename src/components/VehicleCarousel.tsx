import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { vehicles, type Vehicle } from '../data/vehicles';

interface VehicleCarouselProps {
  onSelectVehicle: (vehicleName: string) => void;
}

export const VehicleCarousel: React.FC<VehicleCarouselProps> = ({ onSelectVehicle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = vehicles.length;
  const currentVehicle: Vehicle = vehicles[currentIndex];

  const animateToSlide = useCallback((newIndex: number, direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
      return;
    }

    const xOffset = direction === 'next' ? 60 : -60;

    // Out animation
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(newIndex);
        // In animation
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.96, x: -xOffset },
          { opacity: 1, scale: 1, x: 0, duration: 0.55, ease: 'power2.out' }
        );
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', delay: 0.1 }
        );
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.35,
            ease: 'back.out(1.5)',
            onComplete: () => setIsAnimating(false),
          }
        );
      },
    });

    tl.to(imageRef.current, {
      opacity: 0,
      scale: 0.96,
      x: xOffset,
      duration: 0.35,
      ease: 'power2.in',
    });
    tl.to(
      contentRef.current,
      {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: 'power2.in',
      },
      '-=0.25'
    );
  }, [isAnimating]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    const nextIdx = (currentIndex + 1) % total;
    animateToSlide(nextIdx, 'next');
  }, [currentIndex, isAnimating, total, animateToSlide]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    const prevIdx = (currentIndex - 1 + total) % total;
    animateToSlide(prevIdx, 'prev');
  }, [currentIndex, isAnimating, total, animateToSlide]);

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    animateToSlide(index, index > currentIndex ? 'next' : 'prev');
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      ref={slideContainerRef}
      className="relative w-full rounded-2xl bg-[#FFF9F0] border border-[#E6DCCB] p-4 sm:p-6 lg:p-7 shadow-sm transition-all overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Sunshine Holidays Fleet Carousel"
    >
      {/* Top Slide Header: Category & Counter */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E6DCCB]/60 text-xs text-[#766F65]">
        <div ref={badgeRef} className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#B87543]"></span>
          <span className="font-semibold tracking-wider uppercase text-[#B87543]">
            {currentVehicle.category}
          </span>
        </div>
        <div className="flex items-center gap-1 font-mono tracking-widest text-[#26231F] font-bold">
          <span>{`0${currentIndex + 1}`}</span>
          <span className="text-[#766F65]/50">/</span>
          <span className="text-[#766F65]">{`0${total}`}</span>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative mt-4 aspect-16/10 sm:aspect-16/9 rounded-xl overflow-hidden bg-[#252923]/5 group">
        <img
          ref={imageRef}
          src={currentVehicle.image}
          alt={`${currentVehicle.name} - ${currentVehicle.category}`}
          loading="eager"
          className="w-full h-full object-cover object-center transform transition-transform duration-700 will-change-transform group-hover:scale-102"
        />

        {/* Ambient Warm Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#252923]/40 via-transparent to-transparent pointer-events-none" />

        {/* Verified fleet tag badge */}
        <div className="absolute top-3 left-3 bg-[#FFF9F0]/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-medium text-[#26231F] border border-[#E6DCCB]/80 flex items-center gap-1.5 shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-[#B87543]" />
          <span>Real Fleet Model</span>
        </div>
      </div>

      {/* Slide Text Content & CTA */}
      <div ref={contentRef} className="mt-5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#26231F]">
            {currentVehicle.name}
          </h3>
          <span className="text-xs text-[#766F65] font-medium">
            {currentVehicle.category}
          </span>
        </div>

        <p className="text-sm text-[#766F65] leading-relaxed line-clamp-2">
          {currentVehicle.tagline}
        </p>

        {/* Action Row */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            onClick={() => onSelectVehicle(currentVehicle.enquiryValue)}
            className="inline-flex items-center justify-center gap-2 bg-[#252923] hover:bg-[#B87543] text-[#FFF9F0] text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#B87543]"
          >
            <span>Enquire About {currentVehicle.name.split(' ')[0]}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Navigation Controls & Pagination Dots */}
          <div className="flex items-center justify-between sm:justify-end gap-3">
            {/* Dots */}
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Slide dots">
              {vehicles.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  role="tab"
                  aria-selected={idx === currentIndex}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    idx === currentIndex
                      ? 'w-6 bg-[#B87543]'
                      : 'w-2 bg-[#E6DCCB] hover:bg-[#B87543]/50'
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                disabled={isAnimating}
                aria-label="Previous vehicle slide"
                className="p-2 rounded-full border border-[#E6DCCB] bg-[#FBF2E4] hover:bg-[#FFF9F0] text-[#26231F] hover:text-[#B87543] disabled:opacity-40 transition-colors focus:outline-none"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={isAnimating}
                aria-label="Next vehicle slide"
                className="p-2 rounded-full border border-[#E6DCCB] bg-[#FBF2E4] hover:bg-[#FFF9F0] text-[#26231F] hover:text-[#B87543] disabled:opacity-40 transition-colors focus:outline-none"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
