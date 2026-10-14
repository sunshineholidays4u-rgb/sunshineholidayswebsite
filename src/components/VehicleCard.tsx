import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { Vehicle } from '../data/vehicles';

interface VehicleCardProps {
  vehicle: Vehicle;
  onEnquire: (vehicleName: string) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onEnquire }) => {
  return (
    <div className="vehicle-card flex flex-col bg-white border border-[#EAE3D2] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[#D49B24]/60 transition-all duration-300 group hover:-translate-y-1">
      {/* Vehicle Image Container */}
      <div className="relative aspect-16/10 overflow-hidden bg-[#111111]/5">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} - ${vehicle.category}`}
          loading="lazy"
          className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle top category badge */}
        <div className="absolute top-3 left-3 bg-[#111111]/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#ECC062] border border-[#D49B24]/40 shadow-xs">
          {vehicle.category}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-7 flex flex-col flex-1 justify-between space-y-4 sm:space-y-5">
        <div className="space-y-3">
          <div className="flex items-baseline justify-between">
            <h3 className="font-serif text-2xl font-bold text-[#141414] group-hover:text-[#D49B24] transition-colors">
              {vehicle.name}
            </h3>
            <span className="text-xs text-[#615B52] font-semibold tracking-wide">
              {vehicle.category}
            </span>
          </div>

          <p className="text-sm text-[#615B52] leading-relaxed">
            {vehicle.description}
          </p>

          {/* Features List */}
          <div className="pt-2 border-t border-[#EAE3D2] space-y-2">
            {vehicle.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#141414] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D49B24] shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-3 border-t border-[#EAE3D2]">
          <button
            onClick={() => onEnquire(vehicle.enquiryValue)}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#141414] hover:bg-[#D49B24] text-[#FFFFFF] hover:text-[#111111] text-sm font-bold py-3.5 px-4 rounded-xl transition-all duration-200 shadow-xs group-hover:shadow focus:outline-none focus:ring-2 focus:ring-[#D49B24] active:scale-98"
          >
            <span>{vehicle.ctaText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
