export interface TripEnquiryData {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  travelDate: string;
  returnDate?: string;
  vehicle: string;
  passengers: string;
  requirements?: string;
}

export const PHONE_NUMBER = '+918870283244';
export const PHONE_DISPLAY = '+91 88702 83244';
export const WHATSAPP_RAW_NUMBER = '918870283244';

export const createWhatsAppEnquiryUrl = (data: TripEnquiryData): string => {
  const lines = [
    `*Trip Enquiry — Sunshine Holidays*`,
    `--------------------------------`,
    `*Name:* ${data.name.trim()}`,
    `*Phone:* ${data.phone.trim()}`,
    `*Pickup Location:* ${data.pickup.trim()}`,
    `*Destination:* ${data.destination.trim()}`,
    `*Travel Date:* ${data.travelDate}`,
    data.returnDate ? `*Return Date:* ${data.returnDate}` : null,
    `*Vehicle Preference:* ${data.vehicle}`,
    `*Passengers:* ${data.passengers || '1'}`,
    data.requirements?.trim() ? `*Additional Requirements:* ${data.requirements.trim()}` : null,
    `--------------------------------`,
    `_Sent via Sunshine Holidays Website_`
  ].filter(Boolean);

  const message = lines.join('\n');
  return `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const createQuickVehicleWhatsAppUrl = (vehicleName: string): string => {
  const message = `Hello Sunshine Holidays, I would like to enquire about booking the *${vehicleName}* for a trip. Could you please share the availability and details?`;
  return `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const createQuickDestinationWhatsAppUrl = (destinationName: string): string => {
  const message = `Hello Sunshine Holidays, I am planning a journey to *${destinationName}*. Could you please provide information on vehicle options and trip planning?`;
  return `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(message)}`;
};
