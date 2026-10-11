export interface Destination {
  id: string;
  name: string;
  tagline: string;
  region: string;
  description: string;
  image: string;
  approxDistance?: string;
}

export const destinations: Destination[] = [
  {
    id: 'ooty',
    name: 'Ooty',
    tagline: 'Hills and Tea Gardens',
    region: 'Tamil Nadu',
    description: 'Breathtaking hairpin bends, cool mountain air, emerald Nilgiri tea estates, and colonial heritage vistas.',
    image: '/images/ooty.jpg',
    approxDistance: 'Nilgiri Hills',
  },
  {
    id: 'kodaikanal',
    name: 'Kodaikanal',
    tagline: 'Lakes and Misty Mountains',
    region: 'Tamil Nadu',
    description: 'Serene star-shaped lake, pine forests, cascading waterfalls, and crisp hillside trails.',
    image: '/images/kodaikanal.jpg',
    approxDistance: 'Princess of Hills',
  },
  {
    id: 'munnar',
    name: 'Munnar',
    tagline: 'Green Landscapes',
    region: 'Kerala',
    description: 'Endless undulating tea hills, mountain fog, spice plantations, and fresh streams in the Western Ghats.',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
    approxDistance: 'Western Ghats',
  },
  {
    id: 'mysuru',
    name: 'Mysuru',
    tagline: 'Heritage and Culture',
    region: 'Karnataka',
    description: 'Historic royal palaces, aromatic sandalwood markets, silk weavers, and grand architectural grandeur.',
    image: '/images/mysuru.jpg',
    approxDistance: 'Royal Heritage',
  },
  {
    id: 'kerala',
    name: 'Kerala',
    tagline: 'Backwaters and Nature',
    region: 'Kerala',
    description: 'Gentle houseboat cruises, palm-fringed lagoons, vibrant cultural arts, and coastal tranquility.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    approxDistance: 'Backwater Circuit',
  },
  {
    id: 'goa',
    name: 'Goa',
    tagline: 'Coastal Escapes',
    region: 'Goa',
    description: 'Golden beaches, Portuguese architecture, scenic seaside highways, and relaxed coastal culture.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    approxDistance: 'Coastal Route',
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    tagline: 'City Getaways',
    region: 'Karnataka',
    description: 'Dynamic cosmopolitan avenues, lush gardens, vibrant food culture, and direct transit hub.',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    approxDistance: 'Garden City Route',
  },
  {
    id: 'rameswaram',
    name: 'Rameswaram',
    tagline: 'Spiritual Journeys',
    region: 'Tamil Nadu',
    description: 'Iconic sea bridge crossing, sacred seaside temples, serene sands, and historic coastal sanctity.',
    image: '/images/rameswaram.jpg',
    approxDistance: 'Temple & Ocean Bridge',
  },
];

