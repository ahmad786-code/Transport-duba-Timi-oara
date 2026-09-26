export interface ServicePillar {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
  popularFor: string[];
  startingPrice: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
  date: string;
  verified?: boolean;
}

export interface QuoteFormData {
  serviceType: string;
  pickupZone: string;
  dropoffZone: string;
  floor: string;
  hasElevator: boolean;
  helpers: string;
  preferredDate: string;
  phone: string;
  notes: string;
}
