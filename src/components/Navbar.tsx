import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { PHONE_DISPLAY_1, PHONE_DISPLAY_2, PHONE_NUMBER_1, PHONE_NUMBER_2 } from '../utils/whatsapp';

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
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-800 py-2 px-3 border border-zinc-200/80 rounded-full bg-black/5 hover:border-[#D49B24]/50 shadow-xs whitespace-nowrap shrink-0">
              <Phone className="w-3.5 h-3.5 text-[#D49B24] shrink-0" />
              <a
                href={`tel:${PHONE_NUMBER_1}`}
                className="hover:text-[#B37E10] transition-colors whitespace-nowrap"
                title="Call Sunshine Holidays - Line 1"
              >
                {PHONE_DISPLAY_1}
              </a>
              <span className="text-zinc-400 font-normal">/</span>
              <a
                href={`tel:${PHONE_NUMBER_2}`}
                className="hover:text-[#B37E10] transition-colors whitespace-nowrap"
                title="Call Sunshine Holidays - Line 2"
              >
                {PHONE_DISPLAY_2}
              </a>
            </div>

            <button
              onClick={onPlanTripClick}
              className="btn-gold inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D49B24] whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Plan Your Trip</span>
              <ArrowUpRight className="w-4 h-4 text-[#111111] shrink-0" />
            </button>
          </div>

          {/* Mobile & Tablet Menu Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${PHONE_NUMBER_1}`}
              className="w-10 h-10 flex items-center justify-center text-[#B37E10] bg-black/5 hover:bg-[#D49B24]/10 border border-black/10 rounded-full active:scale-95 transition-all shadow-2xs"
              aria-label="Call Primary Line (88703 42758)"
              title="Call 88703 42758"
            >
              <Phone className="w-4 h-4 text-[#D49B24]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-zinc-900 hover:text-[#B37E10] bg-black/5 border border-black/10 rounded-xl transition-all active:scale-95 focus:outline-none"
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
          mobileMenuOpen ? 'max-h-[620px] border-b border-[#D49B24]/30 bg-white/98 backdrop-blur-2xl shadow-2xl' : 'max-h-0'
        }`}
      >
        <div className="px-5 py-5 space-y-4">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="flex items-center justify-between text-base font-semibold text-zinc-800 hover:text-[#B37E10] py-2.5 px-3 rounded-lg hover:bg-black/5 transition-colors border-b border-zinc-100/80 last:border-b-0"
              >
                <span>{link.label}</span>
                <span className="text-zinc-300 text-xs">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-2 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPlanTripClick();
              }}
              className="w-full text-center btn-gold py-3.5 px-4 rounded-xl shadow-md text-sm font-bold flex items-center justify-center gap-2 active:scale-98"
            >
              <span>Plan Your Trip</span>
              <ArrowUpRight className="w-4 h-4 text-[#111111]" />
            </button>

            {/* Quick Call & WhatsApp Concierge Card */}
            <div className="p-3.5 rounded-xl bg-[#FFFDF9] border border-[#EAE3D2] space-y-2.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#B88015] flex items-center justify-between">
                <span>Direct Contact Lines</span>
                <span className="text-zinc-400 font-normal normal-case">Coimbatore, Tamil Nadu</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${PHONE_NUMBER_1}`}
                  className="flex flex-col p-2 rounded-lg bg-white border border-[#D49B24]/40 hover:border-[#D49B24] transition-colors"
                >
                  <span className="text-[10px] font-semibold text-[#D49B24] uppercase">Primary Call</span>
                  <span className="font-bold text-zinc-900 tracking-tight">{PHONE_DISPLAY_1}</span>
                </a>

                <a
                  href={`tel:${PHONE_NUMBER_2}`}
                  className="flex flex-col p-2 rounded-lg bg-white border border-zinc-200 hover:border-[#D49B24]/60 transition-colors"
                >
                  <span className="text-[10px] font-semibold text-zinc-500 uppercase">Alternate Call</span>
                  <span className="font-bold text-zinc-900 tracking-tight">{PHONE_DISPLAY_2}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
