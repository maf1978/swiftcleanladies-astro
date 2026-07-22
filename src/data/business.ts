export interface BusinessHours {
  days: string;
  hours: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Business {
  name: string;
  legalName: string;
  owner: string;
  phone: string;
  phoneHref: string;
  email: string;
  website: string;
  address: Address;
  coordinates: Coordinates;
  hours: BusinessHours[];
  license: string;
  yearEstablished: number;
  serviceRadius: string;
  schemaType: string;
  description: string;
  tagline: string;
  /** GoHighLevel inbound webhook for quote / contact forms */
  ghlWebhookUrl: string;
}

export const business: Business = {
  name: 'SwiftClean Ladies',
  legalName: 'SwiftClean Ladies',
  owner: 'SwiftClean Ladies Team',
  phone: '(850) 815-6998',
  phoneHref: 'tel:+18508156998',
  email: 'swift.clean25@gmail.com',
  website: 'https://www.swiftcleanladies.com',
  address: {
    street: '117 Allen Harvey ST',
    city: 'Crawfordville',
    state: 'FL',
    zip: '32327',
  },
  coordinates: { lat: 30.176, lng: -84.3752 },
  hours: [
    { days: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
    { days: 'Saturday', hours: 'By appointment' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  license: 'Licensed, Bonded, and Insured',
  yearEstablished: 0,
  serviceRadius: 'Crawfordville, Saint Marks, Tallahassee, and Panacea, FL',
  schemaType: 'CleaningService',
  description:
    'SwiftClean Ladies delivers dependable, detail-focused cleaning for homes, offices, and new house developments in Crawfordville, Saint Marks, Tallahassee, and Panacea, FL.',
  tagline: 'Professional cleaning that fits the way you live and work',
  ghlWebhookUrl:
    'https://services.leadconnectorhq.com/hooks/gGtmQYvc0s6yNrsidLE4/webhook-trigger/257e084b-3f54-4aa8-a321-ec451c2d80c8',
};

export function yearsInBusiness(): number | null {
  if (!business.yearEstablished) return null;
  return new Date().getFullYear() - business.yearEstablished;
}
