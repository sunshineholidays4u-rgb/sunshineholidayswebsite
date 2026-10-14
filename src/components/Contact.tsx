import React, { useState } from 'react';
import { Phone, MapPin, Copy, Check, ExternalLink, Navigation } from 'lucide-react';
import { PHONE_DISPLAY_1, PHONE_DISPLAY_2, PHONE_NUMBER_1, PHONE_NUMBER_2, WHATSAPP_RAW_NUMBER } from '../utils/whatsapp';

interface ContactProps {
  onQuickBookClick: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onQuickBookClick }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const addressText = '52A, Sree Guru Brindhavan Complex, NSN Palayam, Coimbatore, Tamil Nadu – 641031, India';
  const mapsSearchUrl = 'https://www.google.com/maps/search/?api=1&query=52A+Sree+Guru+Brindhavan+Complex+NSN+Palayam+Coimbatore+Tamil+Nadu+641031';
  const whatsappUrl = `https://wa.me/${WHATSAPP_RAW_NUMBER}`;

  const copyToClipboard = (text: string, type: 'phone' | 'address') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-b border-[#EAE3D2] relative bg-[#FBF8F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D49B24]/40 text-xs font-bold tracking-widest uppercase text-[#B88015] mb-3 shadow-xs">
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141414] leading-tight">
              Your Next Journey Starts Here.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#615B52]">
              Reach out directly for route suggestions, vehicle availability, or a custom outstation travel quote.
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="bg-white border border-[#EAE3D2] rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Phone & Direct Messaging */}
              <div className="space-y-6">
                <div className="flex items-center gap-3.5">
                  <div className="h-12 w-10 flex items-center justify-center shrink-0">
                    <img
                      src="/images/golden-charcoal-emblem.png"
                      alt="Sunshine Holidays Logo"
                      className="h-full w-auto object-contain drop-shadow-sm"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#141414] mb-0.5">
                      Sunshine Holidays
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[#B88015] font-bold">
                      Travel & Cab Rentals · Coimbatore
                    </p>
                  </div>
                </div>

                {/* Phone block */}
                <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#EAE3D2] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#615B52] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#D49B24]" />
                      Direct Phone Lines
                    </span>
                    <button
                      onClick={() => copyToClipboard(`${PHONE_DISPLAY_1}, ${PHONE_DISPLAY_2}`, 'phone')}
                      className="text-xs text-[#615B52] hover:text-[#D49B24] flex items-center gap-1 transition-colors"
                      title="Copy phone numbers"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Phone Lines with Primary Tag */}
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-xl sm:text-2xl font-bold text-[#141414]">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FDF4E3] text-[#B88015] border border-[#D49B24]/40">Primary</span>
                        <a
                          href={`tel:${PHONE_NUMBER_1}`}
                          className="hover:text-[#D49B24] transition-colors"
                          title="Call Primary Line: +91 88703 42758"
                        >
                          {PHONE_DISPLAY_1}
                        </a>
                      </div>
                      <span className="hidden sm:inline text-[#C4BCAB] font-light">/</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-black/5 text-zinc-600 border border-zinc-200">Alternate</span>
                        <a
                          href={`tel:${PHONE_NUMBER_2}`}
                          className="hover:text-[#D49B24] transition-colors"
                          title="Call Alternate Line: +91 88702 83244"
                        >
                          {PHONE_DISPLAY_2}
                        </a>
                      </div>
                    </div>
                    <p className="text-xs text-[#615B52]">
                      <span className="text-[#D49B24] font-semibold">Line 1 (88703 42758)</span> is connected to 24/7 Calls & Direct WhatsApp booking.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <a
                      href={`tel:${PHONE_NUMBER_1}`}
                      className="inline-flex items-center gap-2 bg-[#141414] hover:bg-[#D49B24] text-white hover:text-[#111111] text-xs font-bold px-4 py-3 rounded-xl transition-all shadow-xs active:scale-95"
                      title="Call 88703 42758"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#ECC062]" />
                      <span>Call 88703 (Primary)</span>
                    </a>

                    <a
                      href={`tel:${PHONE_NUMBER_2}`}
                      className="inline-flex items-center gap-2 bg-black/5 hover:bg-black/10 text-zinc-800 text-xs font-bold px-4 py-3 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-all shadow-xs active:scale-95"
                      title="Call 88702 83244"
                    >
                      <Phone className="w-3.5 h-3.5 text-zinc-600" />
                      <span>Call 88702</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-4 py-3 rounded-xl transition-colors shadow-xs active:scale-95"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5 fill-current text-white shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.031 2c-5.518 0-9.998 4.48-9.998 9.998 0 1.761.459 3.479 1.33 4.991l-1.413 5.161 5.284-1.385c1.455.794 3.097 1.231 4.797 1.231 5.518 0 9.998-4.48 9.998-9.998s-4.48-9.998-9.998-9.998zm0 18.324c-1.504 0-2.977-.406-4.264-1.173l-.306-.182-3.171.832.846-3.092-.199-.317c-.84-1.337-1.285-2.898-1.285-4.502 0-4.62 3.758-8.378 8.379-8.378 4.62 0 8.378 3.758 8.378 8.378 0 4.62-3.758 8.378-8.378 8.378zm4.59-6.262c-.252-.126-1.492-.736-1.724-.82-.232-.084-.4-.126-.569.126-.168.252-.652.82-.799.988-.147.168-.294.189-.546.063-.252-.126-1.066-.393-2.03-1.253-.75-.669-1.256-1.496-1.403-1.748-.147-.252-.016-.388.11-.513.113-.113.252-.294.378-.441.126-.147.168-.252.252-.42.084-.168.042-.315-.021-.441-.063-.126-.569-1.371-.779-1.879-.205-.494-.413-.427-.569-.434l-.484-.007c-.168 0-.441.063-.672.315-.231.252-.883.863-.883 2.105s.904 2.441 1.03 2.609c.126.168 1.777 2.713 4.305 3.805.602.26 1.072.416 1.439.533.606.193 1.157.166 1.593.101.486-.073 1.492-.61 1.702-1.2s.21-1.094.147-1.2-.231-.168-.483-.294z" />
                      </svg>
                      <span>WhatsApp Enquiry</span>
                    </a>
                  </div>
                </div>

                {/* Quick trip quote prompt */}
                <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#EAE3D2] flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-[#141414]">Have specific dates?</p>
                    <p className="text-xs text-[#615B52]">Fill our quick trip quote form</p>
                  </div>
                  <button
                    onClick={onQuickBookClick}
                    className="shrink-0 btn-gold text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-xs"
                  >
                    Trip Enquiry Form
                  </button>
                </div>
              </div>

              {/* Address & Google Maps Link */}
              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#EAE3D2] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#615B52] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D49B24]" />
                      Office Address
                    </span>
                    <button
                      onClick={() => copyToClipboard(addressText, 'address')}
                      className="text-xs text-[#615B52] hover:text-[#D49B24] flex items-center gap-1 transition-colors"
                      title="Copy full address"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="space-y-1 text-sm sm:text-base text-[#141414] font-medium leading-relaxed">
                    <p className="font-bold text-[#141414]">Sunshine Holidays</p>
                    <p>52A, Sree Guru Brindhavan Complex,</p>
                    <p>NSN Palayam,</p>
                    <p>Coimbatore, Tamil Nadu – 641031, India.</p>
                  </div>

                  <div className="pt-2">
                    <a
                      href={mapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#B88015] hover:text-[#D49B24] p-2 bg-[#FDF4E3] border border-[#D49B24]/30 rounded-lg transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Search Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>

                {/* Operating Information */}
                <div className="p-4 rounded-xl border border-[#EAE3D2] text-xs text-[#615B52] space-y-1">
                  <p className="font-bold text-[#141414]">Service Area:</p>
                  <p>Coimbatore local pickups with travel services spanning all districts of Tamil Nadu, Kerala, Karnataka, and destinations across India.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
