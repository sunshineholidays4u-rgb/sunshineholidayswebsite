import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VehiclesSection } from './components/VehiclesSection';
import { Destinations } from './components/Destinations';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { BookingForm } from './components/BookingForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>('Swift Dzire');
  const [selectedDestination, setSelectedDestination] = useState<string>('');

  const scrollToBooking = useCallback(() => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const scrollToVehicles = useCallback(() => {
    const vehiclesEl = document.getElementById('vehicles');
    if (vehiclesEl) {
      vehiclesEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSelectVehicle = (vehicleName: string) => {
    setSelectedVehicle(vehicleName);
    scrollToBooking();
  };

  const handleSelectDestination = (destName: string) => {
    setSelectedDestination(destName);
    scrollToBooking();
  };

  const handleCustomDestination = () => {
    setSelectedDestination('Custom Route Across India');
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#141414] flex flex-col font-sans selection:bg-[#D49B24] selection:text-[#111111]">
      {/* Sticky Black & Gold Navbar */}
      <Navbar onPlanTripClick={scrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Full-bleed Cinematic Hero Image Carousel with Overlaid Text */}
        <Hero
          onSelectVehicle={handleSelectVehicle}
          onExploreVehicles={scrollToVehicles}
          onBookTrip={scrollToBooking}
        />

        {/* Fleet & Vehicles Section ("Travel Your Way") */}
        <VehiclesSection onEnquireVehicle={handleSelectVehicle} />

        {/* Destinations Gallery ("Where Will You Go Next?") */}
        <Destinations
          onSelectDestination={handleSelectDestination}
          onCustomDestination={handleCustomDestination}
        />

        {/* Why Sunshine Holidays */}
        <WhyChooseUs />

        {/* Customer Reviews - Tamil */}
        <Testimonials />

        {/* About Sunshine Holidays */}
        <About />

        {/* Trip Enquiry & Quote Panel (At the Bottom) */}
        <BookingForm
          selectedVehicle={selectedVehicle}
          selectedDestination={selectedDestination}
        />

        {/* Contact Section */}
        <Contact onQuickBookClick={scrollToBooking} />
      </main>

      {/* Dark Charcoal & Gold Footer */}
      <Footer onVehicleClick={handleSelectVehicle} />

      {/* Floating WhatsApp Action & Mobile Bar */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
