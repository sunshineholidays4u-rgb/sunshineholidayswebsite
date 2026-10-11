import React from 'react';
import { Compass } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import { VehicleCard } from './VehicleCard';

interface VehiclesSectionProps {
  onEnquireVehicle: (vehicleName: string) => void;
}

export const VehiclesSection: React.FC<VehiclesSectionProps> = ({ onEnquireVehicle }) => {
  return (
    <section
      id="vehicles"
      className="py-16 sm:py-24 border-b border-[#EAE3D2] relative bg-[#FBF8F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D49B24]/40 text-xs font-bold tracking-widest uppercase text-[#B88015] mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#D49B24]" />
            <span>TRAVEL YOUR WAY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141414] leading-tight">
            The Right Ride for Every Road.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#615B52] leading-relaxed">
            Choose a vehicle that fits your journey, whether you&apos;re travelling solo, with family, or with a group.
          </p>
        </div>

        {/* 3 Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {vehicles.map((v) => (
            <VehicleCard
              key={v.id}
              vehicle={v}
              onEnquire={onEnquireVehicle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
