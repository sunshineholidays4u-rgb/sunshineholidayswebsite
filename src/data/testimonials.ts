export interface ReviewItem {
  id: string;
  name: string;
  initial: string;
  location: string;
  rating: number;
  vehicle: string;
  trip: string;
  date: string;
  quote: string;
}

export const reviewsData: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Karthik Subramanian',
    initial: 'K',
    location: 'RS Puram, Coimbatore',
    rating: 5,
    vehicle: 'Innova Crysta',
    trip: 'Ooty Family Holiday',
    date: 'Last week',
    quote: '“We traveled to Ooty with my family. The Innova Crysta was remarkably comfortable and spotless. The driver handled the steep mountain hairpin curves with utmost care and confidence. Truly a 5-star experience!”',
  },
  {
    id: 'rev-2',
    name: 'Meena Senthilkumar',
    initial: 'M',
    location: 'Tiruppur',
    rating: 5,
    vehicle: 'Swift Dzire',
    trip: 'Kodaikanal Hill Station Tour',
    date: '2 weeks ago',
    quote: '“Booked a Swift Dzire for our Kodaikanal sightseeing tour. Punctual doorstep pickup and smooth driving throughout. Sunshine Holidays customer assistance was friendly, clear, and reassuring.”',
  },
  {
    id: 'rev-3',
    name: 'Anand Natarajan',
    initial: 'A',
    location: 'Gandhipuram, Coimbatore',
    rating: 5,
    vehicle: 'Force Traveller',
    trip: 'Rameswaram Pilgrimage Tour',
    date: '3 weeks ago',
    quote: '“We organized a temple pilgrimage to Rameswaram and Madurai with 12 family members. The Traveller had wonderful pushback seats and suspension. Nobody felt tired, and the pricing was completely transparent.”',
  },
  {
    id: 'rev-4',
    name: 'Priya Chandrasekar',
    initial: 'P',
    location: 'Pollachi',
    rating: 5,
    vehicle: 'Innova Crysta',
    trip: 'Munnar Scenic Getaway',
    date: '1 month ago',
    quote: '“Took a 3-day family road trip to Munnar tea plantations and waterfalls. The vehicle was immaculately clean with chilling AC. The kids and elders enjoyed every bit of the mountain ride.”',
  },
  {
    id: 'rev-5',
    name: 'Vigneshwaran R.',
    initial: 'V',
    location: 'Erode',
    rating: 5,
    vehicle: 'Swift Dzire',
    trip: 'Coimbatore Airport Transfer',
    date: 'Recently',
    quote: '“Needed an early morning airport drop to Coimbatore International Airport. The cab arrived 10 minutes prior to schedule. Very polite driver, safe transit, and reasonable fares.”',
  },
  {
    id: 'rev-6',
    name: 'Revathi Murugan',
    initial: 'R',
    location: 'Saravanampatti, Coimbatore',
    rating: 5,
    vehicle: 'Innova Crysta',
    trip: 'Wayanad 3-Day Nature Trip',
    date: '2 weeks ago',
    quote: '“Booked the Crysta for a long weekend trip to Wayanad. The driver knew the best sightseeing viewpoints and safe restaurants. We felt thoroughly looked after from start to finish.”',
  },
  {
    id: 'rev-7',
    name: 'Saravanan Balaji',
    initial: 'S',
    location: 'Salem',
    rating: 5,
    vehicle: 'Force Traveller',
    trip: 'Mysuru & Coorg Tour',
    date: '1 month ago',
    quote: '“Went on a college reunion trip to Mysuru Palace and Coorg hills. The music system and spacious legroom in the Traveller made the road journey unforgettable. Highly recommended for group travel!”',
  },
  {
    id: 'rev-8',
    name: 'Deepa Vijay',
    initial: 'D',
    location: 'Peelamedu, Coimbatore',
    rating: 5,
    vehicle: 'Swift Dzire',
    trip: 'Valparai Hairpin Bends Circuit',
    date: 'Recently',
    quote: '“Navigating the 40 hairpin curves of Valparai requires skilled driving, and our driver was calm, patient, and extremely courteous. Felt completely safe traveling with senior citizens.”',
  },
  {
    id: 'rev-9',
    name: 'Senthil Nathan',
    initial: 'S',
    location: 'Chennai',
    rating: 5,
    vehicle: 'Innova Crysta',
    trip: 'Kongu Temple Heritage Tour',
    date: '3 weeks ago',
    quote: '“Traveled from Chennai to Coimbatore by train and Sunshine Holidays received us at the junction. The vehicle was in showroom condition. Fast booking confirmation over WhatsApp with zero hassle!”',
  },
  {
    id: 'rev-10',
    name: 'Jayashree Ramamoorthy',
    initial: 'J',
    location: 'Mettupalayam',
    rating: 5,
    vehicle: 'Innova Crysta',
    trip: 'Goa Coastal Road Tour',
    date: 'Last month',
    quote: '“For long-distance outstation travel across states, Sunshine Holidays is unbeatable. Plush seating, well-maintained tires, smooth air conditioning, and top-tier professionalism throughout.”',
  },
];
