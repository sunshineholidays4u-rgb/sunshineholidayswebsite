import React, { useState, useEffect } from 'react';
import { Send, Calendar, Users, MapPin, Car, Phone, User, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { createWhatsAppEnquiryUrl, type TripEnquiryData } from '../utils/whatsapp';

interface BookingFormProps {
  selectedVehicle?: string;
  selectedDestination?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedVehicle,
  selectedDestination,
}) => {
  const [formData, setFormData] = useState<TripEnquiryData>({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    travelDate: '',
    returnDate: '',
    vehicle: 'Swift Dzire',
    passengers: '1-3 Passengers',
    requirements: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccessRedirect, setIsSuccessRedirect] = useState(false);

  // Sync selectedVehicle from parent when changed
  useEffect(() => {
    if (selectedVehicle) {
      setFormData((prev) => ({ ...prev, vehicle: selectedVehicle }));
    }
  }, [selectedVehicle]);

  // Sync selectedDestination from parent when changed
  useEffect(() => {
    if (selectedDestination) {
      setFormData((prev) => ({ ...prev, destination: selectedDestination }));
    }
  }, [selectedDestination]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone.replace('+91', ''))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.pickup.trim()) {
      newErrors.pickup = 'Please provide your pickup location';
    }

    if (!formData.destination.trim()) {
      newErrors.destination = 'Please specify your travel destination';
    }

    if (!formData.travelDate) {
      newErrors.travelDate = 'Please select your planned travel date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const whatsappUrl = createWhatsAppEnquiryUrl(formData);
    setIsSuccessRedirect(true);

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSuccessRedirect(false);
    }, 4000);
  };

  return (
    <section id="booking" className="py-16 sm:py-24 border-b border-[#EAE3D2] relative bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141414] border border-[#D49B24]/40 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden text-white">
          {/* Subtle gold glow & ambient emblem watermark */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D49B24]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D49B24]/5 rounded-full blur-3xl pointer-events-none" />
          <img
            src="/images/golden-charcoal-emblem.png"
            alt=""
            className="absolute -bottom-10 -right-6 w-80 h-96 opacity-[0.06] pointer-events-none object-contain"
          />

          {/* Form Header featuring Golden and Charcoal S-Ribbon Emblem */}
          <div className="max-w-4xl mb-10 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="w-16 h-20 sm:w-20 sm:h-24 shrink-0 flex items-center justify-center p-2 bg-[#1A1917]/90 rounded-2xl border border-[#D49B24]/50 shadow-xl">
                <img
                  src="/images/golden-charcoal-emblem.png"
                  alt="Sunshine Holidays Golden & Charcoal Emblem"
                  className="h-full w-auto object-contain drop-shadow-md"
                />
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1917] border border-[#D49B24]/40 text-xs font-bold tracking-widest uppercase text-[#ECC062] mb-1 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#D49B24]" />
                  <span>TRIP ENQUIRY & INSTANT QUOTE</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  Plan Your Journey with Sunshine Holidays
                </h2>
                <p className="text-sm sm:text-base text-[#D5CEBF] font-light">
                  Enter your trip details below. Your quote request opens instantly in WhatsApp addressed to our Coimbatore team for rapid pricing & vehicle confirmation.
                </p>
              </div>
            </div>
          </div>

          {/* Form Grid */}
          <form onSubmit={handleSubmit} noValidate className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#ECC062] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#D49B24]" />
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  className={`w-full px-4 py-3 bg-[#1F1E1B] border rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#D49B24] transition-all ${
                    errors.name ? 'border-red-400' : 'border-[#33302B]'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#ECC062] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#D49B24]" />
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 98765 43210"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  className={`w-full px-4 py-3 bg-[#1F1E1B] border rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#D49B24] transition-all ${
                    errors.phone ? 'border-red-400' : 'border-[#33302B]'
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Pickup Location */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#ECC062] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D49B24]" />
                  Pickup Location <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. City, Airport, Railway Station, or Landmark"
                  value={formData.pickup}
                  onChange={(e) => {
                    setFormData({ ...formData, pickup: e.target.value });
                    if (errors.pickup) setErrors({ ...errors, pickup: '' });
                  }}
                  className={`w-full px-4 py-3 bg-[#1F1E1B] border rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#D49B24] transition-all ${
                    errors.pickup ? 'border-red-400' : 'border-[#33302B]'
                  }`}
                />
                {errors.pickup && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.pickup}
                  </p>
                )}
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#ECC062] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D49B24]" />
                  Destination <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ooty, Munnar, Mysuru..."
                  value={formData.destination}
                  onChange={(e) => {
                    setFormData({ ...formData, destination: e.target.value });
                    if (errors.destination) setErrors({ ...errors, destination: '' });
                  }}
                  className={`w-full px-4 py-3 bg-[#1F1E1B] border rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#D49B24] transition-all ${
                    errors.destination ? 'border-red-400' : 'border-[#33302B]'
                  }`}
                />
                {errors.destination && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.destination}
                  </p>
                )}
              </div>

              {/* Travel Date */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#ECC062] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D49B24]" />
                  Travel Date <span className="text-red-400">*</span>
                </label>
                <input
                  type="date"
                  value={formData.travelDate}
                  onChange={(e) => {
                    setFormData({ ...formData, travelDate: e.target.value });
                    if (errors.travelDate) setErrors({ ...errors, travelDate: '' });
                  }}
                  className={`w-full px-4 py-3 bg-[#1F1E1B] border rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D49B24] transition-all ${
                    errors.travelDate ? 'border-red-400' : 'border-[#33302B]'
                  }`}
                />
                {errors.travelDate && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.travelDate}
                  </p>
                )}
              </div>

              {/* Return Date (Optional) */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#D5CEBF] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-white/50" />
                  Return Date <span className="text-xs font-normal opacity-70">(optional)</span>
                </label>
                <input
                  type="date"
                  value={formData.returnDate || ''}
                  onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1F1E1B] border border-[#33302B] rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D49B24] transition-all"
                />
              </div>

              {/* Vehicle Preference */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#ECC062] flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#D49B24]" />
                  Vehicle Preference
                </label>
                <select
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1F1E1B] border border-[#33302B] rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D49B24] transition-all"
                >
                  <option value="Swift Dzire">Swift Dzire (Sedan)</option>
                  <option value="Innova Crysta">Innova Crysta (Premium SUV)</option>
                  <option value="Traveller">Traveller (Group Van)</option>
                  <option value="Not sure yet">Not sure yet (Need recommendation)</option>
                </select>
              </div>

              {/* Number of Passengers */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#ECC062] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#D49B24]" />
                  Passengers
                </label>
                <select
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1F1E1B] border border-[#33302B] rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D49B24] transition-all"
                >
                  <option value="1-3 Passengers">1 - 3 Passengers</option>
                  <option value="4-6 Passengers">4 - 6 Passengers</option>
                  <option value="7-12 Passengers">7 - 12 Passengers</option>
                  <option value="12+ Passengers">12+ Passengers (Group Tour)</option>
                </select>
              </div>
            </div>

            {/* Additional Requirements */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#ECC062] flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#D49B24]" />
                Additional Requirements / Special Itinerary Notes
              </label>
              <textarea
                rows={2}
                placeholder="Mention sightseeing stops, flight/train timing, hotel stops, or any specific requests..."
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full px-4 py-3 bg-[#1F1E1B] border border-[#33302B] rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#D49B24] transition-all resize-none"
              />
            </div>

            {/* Action Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <p className="text-xs text-[#D5CEBF] font-light">
                🔒 Direct personal quote via WhatsApp with Sunshine Holidays Coimbatore. Zero hidden charges.
              </p>

              <button
                type="submit"
                className="w-full sm:w-auto btn-gold inline-flex items-center justify-center gap-2.5 text-base px-9 py-4 rounded-xl shadow-xl active:scale-98 transition-all"
              >
                <span>Request a Trip Quote</span>
                <Send className="w-4 h-4 text-[#111111]" />
              </button>
            </div>

            {isSuccessRedirect && (
              <div className="p-3 bg-emerald-950/80 border border-emerald-600/60 text-emerald-300 rounded-xl text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Redirecting to WhatsApp with your prepared trip details...</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
