export interface Vehicle {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  ctaText: string;
  enquiryValue: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 'swift-dzire',
    name: 'Swift Dzire',
    category: 'Comfortable Sedan',
    tagline: 'Smooth, reliable & comfortable rides for small families and airport transfers.',
    description:
      'An ideal choice for everyday travel, airport transfers, couples, small families, and comfortable outstation journeys.',
    features: ['Sedan comfort', 'Ideal for small groups', 'City and outstation travel'],
    image: '/images/swift-dzire.jpg',
    ctaText: 'Enquire About Sedan',
    enquiryValue: 'Swift Dzire',
  },
  {
    id: 'innova-crysta',
    name: 'Innova Crysta',
    category: 'Premium Family Travel',
    tagline: 'Superior comfort and spacious road presence for long-distance family holidays.',
    description:
      'Enjoy extra comfort and a spacious ride for family holidays, longer road trips, and special journeys.',
    features: ['Spacious family travel', 'Comfortable long-distance journeys', 'Suitable for group outings'],
    image: '/images/innova-crysta.jpg',
    ctaText: 'Enquire About Innova',
    enquiryValue: 'Innova Crysta',
  },
  {
    id: 'force-traveller',
    name: 'Traveller',
    category: 'Group Travel',
    tagline: 'Unified travel experience for larger families, corporate groups & temple pilgrimages.',
    description:
      'Travel together with friends, family, or colleagues in a practical group-travel vehicle suited to tours and larger outings.',
    features: ['Group trips', 'Family tours', 'Outstation travel'],
    image: '/images/force-traveller.jpg',
    ctaText: 'Enquire About Traveller',
    enquiryValue: 'Traveller',
  },
];
