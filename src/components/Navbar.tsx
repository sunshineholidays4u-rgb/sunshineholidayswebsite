import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { PHONE_DISPLAY, PHONE_NUMBER } from '../utils/whatsapp';

interface NavbarProps {
  onPlanTripClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPlanTripClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP initial load entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Vehicles', href: '#vehicles' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Enquiry', href: '#booking' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-b border-[#D49B24]/30 py-3 text-zinc-900'
          : 'bg-white/80 backdrop-blur-lg shadow-[0_2px_16px_rgba(0,0,0,0.06)] border-b border-white/60 py-3.5 text-zinc-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D49B24] rounded-lg shrink-0"
          >
            {/* Authentic Golden & Charcoal S-Ribbon Emblem */}
            <div className="h-9 sm:h-11 w-7 sm:w-9 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/images/golden-charcoal-emblem.png"
                alt="Sunshine Holidays Logo"
                className="h-full w-auto object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
              />
            </div>
            <div className="shrink-0">
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 leading-none whitespace-nowrap">
                Sunshine Holidays
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-[#B37E10] block mt-0.5 whitespace-nowrap">
                Explore · Dream · Discover
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 shrink">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-2 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold text-zinc-700 hover:text-[#B37E10] hover:bg-black/5 rounded-md transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call Link & Primary CTA */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-1.5 text-xs font-bold text-zinc-800 hover:text-[#B37E10] transition-colors py-2 px-3 border border-zinc-200/80 rounded-full bg-black/5 hover:bg-black/10 hover:border-[#D49B24]/50 shadow-xs whitespace-nowrap shrink-0"
              title="Call Sunshine Holidays"
            >
              <Phone className="w-3.5 h-3.5 text-[#D49B24] shrink-0" />
              <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
            </a>

            <button
              onClick={onPlanTripClick}
              className="btn-gold inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D49B24] whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Plan Your Trip</span>
              <ArrowUpRight className="w-4 h-4 text-[#111111] shrink-0" />
            </button>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="p-2 text-[#B37E10] bg-black/5 border border-black/10 rounded-full sm:hidden"
              aria-label="Call Sunshine Holidays"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-zinc-900 hover:text-[#B37E10] bg-black/5 border border-black/10 rounded-lg transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Animated Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] border-b border-[#D49B24]/30 bg-white/95 backdrop-blur-xl shadow-xl' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block text-base font-semibold text-zinc-800 hover:text-[#B37E10] py-2 border-b border-zinc-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPlanTripClick();
              }}
              className="w-full text-center btn-gold py-3 px-4 rounded-xl shadow-md text-sm font-bold"
            >
              Plan Your Trip
            </button>
            <div className="text-center text-xs font-medium text-[#B37E10]">
              Coimbatore, Tamil Nadu · +91 88702 83244
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
