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

// Primary Contact (Call & WhatsApp)
export const PHONE_NUMBER_PRIMARY = '+918870342758';
export const PHONE_DISPLAY_PRIMARY = '+91 88703 42758';
export const WHATSAPP_RAW_PRIMARY = '918870342758';

// Secondary / Alternate Line
export const PHONE_NUMBER_SECONDARY = '+918870283244';
export const PHONE_DISPLAY_SECONDARY = '+91 88702 83244';
export const WHATSAPP_RAW_SECONDARY = '918870283244';

// Backward compatibility & aliases
export const PHONE_NUMBER_1 = PHONE_NUMBER_PRIMARY;
export const PHONE_DISPLAY_1 = PHONE_DISPLAY_PRIMARY;
export const WHATSAPP_RAW_NUMBER_1 = WHATSAPP_RAW_PRIMARY;

export const PHONE_NUMBER_2 = PHONE_NUMBER_SECONDARY;
export const PHONE_DISPLAY_2 = PHONE_DISPLAY_SECONDARY;
export const WHATSAPP_RAW_NUMBER_2 = WHATSAPP_RAW_SECONDARY;

export const PHONE_NUMBER = PHONE_NUMBER_PRIMARY;
export const PHONE_DISPLAY = `${PHONE_DISPLAY_PRIMARY} / ${PHONE_DISPLAY_SECONDARY}`;
export const WHATSAPP_RAW_NUMBER = WHATSAPP_RAW_PRIMARY;

export const createWhatsAppEnquiryUrl = (data: TripEnquiryData, whatsappNumber: string = WHATSAPP_RAW_NUMBER): string => {
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
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const createQuickVehicleWhatsAppUrl = (vehicleName: string, whatsappNumber: string = WHATSAPP_RAW_NUMBER): string => {
  const message = `Hello Sunshine Holidays, I would like to enquire about booking the *${vehicleName}* for a trip. Could you please share the availability and details?`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const createQuickDestinationWhatsAppUrl = (destinationName: string, whatsappNumber: string = WHATSAPP_RAW_NUMBER): string => {
  const message = `Hello Sunshine Holidays, I am planning a journey to *${destinationName}*. Could you please provide information on vehicle options and trip planning?`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};
