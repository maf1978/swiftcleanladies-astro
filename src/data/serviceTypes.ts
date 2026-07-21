export interface ProcessStep {
  title: string;
  description: string;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface ServiceType {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  priceRange: PriceRange;
  emergency: boolean;
  icon: string;
  image: string;
  processSteps: ProcessStep[];
}

export const serviceTypes: ServiceType[] = [
  {
    slug: 'recurring-residential-cleaning',
    name: 'Recurring Residential Cleaning',
    shortDescription: 'Scheduled upkeep for kitchens, baths, and living areas so the home stays closer to baseline.',
    description:
      'Recurring residential cleaning keeps high-use rooms on a steady plan. Visits cover kitchens, baths, living areas, and bedrooms, with optional detail work when you ask for it.',
    priceRange: { min: 0, max: 0 },
    emergency: false,
    icon: 'lucide:calendar-check',
    image: '/images/services/recurring-residential-cleaning.png',
    processSteps: [
      { title: 'Share your priorities', description: 'Tell us rooms, frequency, and any add-ons before the first visit.' },
      { title: 'Confirm the plan', description: 'We match scope to your home and lock a recurring window.' },
      { title: 'Clean on schedule', description: 'The team works the checklist for kitchens, baths, and living spaces.' },
      { title: 'Adjust as needed', description: 'Change extras or frequency when your routine changes.' },
    ],
  },
  {
    slug: 'one-time-cleaning',
    name: 'One-Time Cleaning',
    shortDescription: 'Fixed 2 to 5-hour slots with two professionals focused on your priority list.',
    description:
      'One-time cleaning is booked in fixed 2 to 5-hour slots with two professionals. Ideal before guests, after a busy week, or as a trial before recurring service.',
    priceRange: { min: 0, max: 0 },
    emergency: false,
    icon: 'lucide:clock',
    image: '/images/services/one-time-cleaning.png',
    processSteps: [
      { title: 'Pick a time block', description: 'Choose a 2 to 5-hour slot that matches how much you want done.' },
      { title: 'Rank the rooms', description: 'List kitchens, baths, floors, or guest areas first.' },
      { title: 'Two cleaners work the list', description: 'The pair stays productive inside the purchased window.' },
      { title: 'Decide next steps', description: 'Stay one-and-done or move into a recurring plan.' },
    ],
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    shortDescription: 'A detailed reset for buildup, appliances, baseboards, and overlooked corners.',
    description:
      'Deep cleaning goes beyond a surface pass: appliance interiors, fixtures, floors, baseboards, trim, and interior glass. Many clients start here before recurring care.',
    priceRange: { min: 0, max: 0 },
    emergency: false,
    icon: 'lucide:sparkles',
    image: '/images/services/deep-cleaning.png',
    processSteps: [
      { title: 'Assess buildup', description: 'We note kitchens, baths, and detail zones that need extra time.' },
      { title: 'Detail the hard areas', description: 'Appliances, fixtures, baseboards, and overlooked surfaces get attention.' },
      { title: 'Reset floors and living spaces', description: 'Vacuuming, mopping, dusting, and trash complete the pass.' },
      { title: 'Plan maintenance', description: 'Optional: shift into recurring visits so the reset lasts.' },
    ],
  },
  {
    slug: 'commercial-and-office-cleaning',
    name: 'Commercial and Office Cleaning',
    shortDescription: 'Offices and common spaces cleaned on a schedule that limits disruption.',
    description:
      'Commercial and office cleaning covers reception, workstations, meeting rooms, common areas, and high-touch points. Schedules can sit around business hours.',
    priceRange: { min: 0, max: 0 },
    emergency: false,
    icon: 'lucide:building-2',
    image: '/images/services/commercial-and-office-cleaning.png',
    processSteps: [
      { title: 'Walk the site', description: 'Share floor plan, access, and preferred visit windows.' },
      { title: 'Set the checklist', description: 'Reception, desks, rooms, and high-touch points are scoped.' },
      { title: 'Clean on your schedule', description: 'Crews work when disruption is lowest.' },
      { title: 'Review and renew', description: 'Adjust frequency as traffic or seasons change.' },
    ],
  },
  {
    slug: 'new-construction-cleaning',
    name: 'New-Construction Cleaning',
    shortDescription: 'Dust and finish cleaning so new builds and units are move-in ready.',
    description:
      'New-construction cleaning removes dust and debris so developments and units are presentable before occupancy. Timing follows rough and final clean milestones.',
    priceRange: { min: 0, max: 0 },
    emergency: false,
    icon: 'lucide:hard-hat',
    image: '/images/services/new-construction-cleaning.png',
    processSteps: [
      { title: 'Confirm the milestone', description: 'Rough clean, final clean, or both.' },
      { title: 'Clear construction dust', description: 'Surfaces, floors, and fixtures get a thorough pass.' },
      { title: 'Finish for walkthrough', description: 'Units look ready for owners, tenants, or inspectors.' },
      { title: 'Hand off clean', description: 'Schedule follow-ups if punch lists create new dust.' },
    ],
  },
  {
    slug: 'home-organization',
    name: 'Home Organization',
    shortDescription: 'Closets, pantries, offices, and storage sorted for how you actually use the space.',
    description:
      'Home organization builds systems for closets, pantries, home offices, garages, and storage. Projects are scoped room by room around your habits.',
    priceRange: { min: 0, max: 0 },
    emergency: false,
    icon: 'lucide:boxes',
    image: '/images/services/home-organization.png',
    processSteps: [
      { title: 'Pick the room', description: 'Start with the closet, pantry, office, or garage that frustrates you most.' },
      { title: 'Sort and decide', description: 'Keep, relocate, or clear items with a clear plan.' },
      { title: 'Build the system', description: 'Zones and labels match how you use the space.' },
      { title: 'Maintain the win', description: 'Optional cleaning visits help the system stick.' },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return serviceTypes.find((s) => s.slug === slug);
}

export function getServiceName(slug: string): string {
  return getServiceBySlug(slug)?.name ?? slug;
}

export function getEmergencyServices(): ServiceType[] {
  return serviceTypes.filter((s) => s.emergency);
}
