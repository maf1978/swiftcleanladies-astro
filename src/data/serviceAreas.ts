export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  population: number;
  priority: 'primary' | 'secondary' | 'tertiary';
  lat: number;
  lng: number;
  nearby: string[];
  description: string;
  zipCodes: string[];
  responseTime: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'crawfordville',
    name: 'Crawfordville',
    county: 'Wakulla County',
    population: 5200,
    priority: 'primary',
    lat: 30.176,
    lng: -84.3752,
    nearby: ['saint-marks', 'panacea', 'tallahassee'],
    description:
      'Crawfordville is home base for Swiftclean Ladies. Local homes and small offices get steady recurring care, deep resets, and move-ready cleans without a long wait on the route.',
    zipCodes: ['32327'],
    responseTime: 'Same-day to next-day when the schedule allows',
  },
  {
    slug: 'saint-marks',
    name: 'Saint Marks',
    county: 'Wakulla County',
    population: 300,
    priority: 'secondary',
    lat: 30.158,
    lng: -84.2071,
    nearby: ['crawfordville', 'panacea', 'tallahassee'],
    description:
      'Saint Marks sits on regular coastal routes with Crawfordville. Humidity and guest traffic make recurring and deep cleaning especially useful here.',
    zipCodes: ['32355'],
    responseTime: 'Same-day to next-day when the schedule allows',
  },
  {
    slug: 'tallahassee',
    name: 'Tallahassee',
    county: 'Leon County',
    population: 201000,
    priority: 'secondary',
    lat: 30.4383,
    lng: -84.2807,
    nearby: ['crawfordville', 'saint-marks', 'panacea'],
    description:
      'Tallahassee jobs that fit the schedule are welcome: homes, offices, and new construction turnovers. Confirm the street when you request a quote.',
    zipCodes: ['32301', '32303', '32304', '32308', '32309', '32311', '32312'],
    responseTime: 'Scheduled visits based on route and address',
  },
  {
    slug: 'panacea',
    name: 'Panacea',
    county: 'Wakulla County',
    population: 800,
    priority: 'secondary',
    lat: 29.993,
    lng: -84.396,
    nearby: ['crawfordville', 'saint-marks', 'tallahassee'],
    description:
      'Panacea is part of the coastal service area. Salt air and vacation homes often call for deep cleans and flexible one-time slots.',
    zipCodes: ['32346'],
    responseTime: 'Scheduled visits based on route and address',
  },
];

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getNearbyAreas(area: ServiceArea): ServiceArea[] {
  return area.nearby
    .map((slug) => getAreaBySlug(slug))
    .filter((a): a is ServiceArea => a !== undefined);
}

export function getAreaName(slug: string): string {
  return getAreaBySlug(slug)?.name ?? slug;
}
