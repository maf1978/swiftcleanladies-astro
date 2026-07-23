import type { FaqItem } from './seoContent';

export interface LandingPhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface ServiceLanding {
  /** URL segment without slashes, e.g. house-cleaning-crawfordville */
  slug: string;
  /** Short title for <title> (brand appended by SEO.astro) */
  title: string;
  metaDescription: string;
  h1: string;
  /** Answer-first intro under H1 */
  explanation: string;
  icon: string;
  heroImage: string;
  heroImageAlt: string;
  included: string[];
  whoFor: string[];
  areas: { name: string; href: string }[];
  faqs: FaqItem[];
  photos: LandingPhoto[];
  /** Optional link to related /services/ page */
  relatedServiceHref?: string;
  relatedServiceLabel?: string;
  /** For testimonials targeting */
  reviewAreaSlug?: string;
  reviewServiceSlug?: string;
  /** Extra internal links */
  relatedLinks?: { label: string; href: string }[];
}

export const serviceLandings: ServiceLanding[] = [
  {
    slug: 'house-cleaning-crawfordville',
    title: 'House Cleaning Crawfordville',
    metaDescription:
      'House cleaning in Crawfordville, FL by SwiftClean Ladies. Recurring kitchens, baths, and floors. Licensed team. Call (850) 815-6998.',
    h1: 'House Cleaning in Crawfordville, FL',
    explanation:
      'House cleaning in Crawfordville means scheduled upkeep for kitchens, bathrooms, floors, and living areas so your home stays closer to baseline between visits. SwiftClean Ladies provides recurring residential cleaning from our Crawfordville base, with weekly or biweekly plans matched to your household.',
    icon: 'lucide:calendar-check',
    heroImage: '/images/services/recurring-residential-cleaning.webp',
    heroImageAlt: 'House cleaning service in Crawfordville',
    included: [
      'Kitchen counters, sink, stovetop, and appliance exteriors',
      'Bathroom toilets, tubs/showers, sinks, and mirrors',
      'Vacuuming carpets and rugs; mopping hard floors',
      'Dusting of accessible surfaces and light tidying',
      'Trash emptied in cleaned rooms',
      'Optional add-ons scoped during your free quote',
    ],
    whoFor: [
      'Busy households that want weekends back',
      'Families and pet owners who need steady upkeep',
      'Homeowners starting after a deep clean reset',
      'Anyone comparing weekly vs biweekly schedules',
    ],
    areas: [
      { name: 'Crawfordville', href: '/areas/crawfordville/' },
      { name: 'Saint Marks', href: '/areas/saint-marks/' },
      { name: 'Tallahassee', href: '/areas/tallahassee/' },
      { name: 'Panacea', href: '/areas/panacea/' },
    ],
    faqs: [
      {
        question: 'What does house cleaning in Crawfordville include?',
        answer:
          'Recurring house cleaning covers kitchens, bathrooms, floors, dusting, and general tidying of living areas and bedrooms. Deep tasks like full baseboard scrubs or oven interiors are usually separate or add-ons.',
      },
      {
        question: 'How often should I schedule house cleaning?',
        answer:
          'Most homes do well with biweekly visits. Weekly fits pets, kids, or heavy kitchen use. We confirm frequency during your free quote.',
      },
      {
        question: 'Do I need to be home during the visit?',
        answer:
          'No. Many clients leave access instructions. The team works your checklist and can note questions for follow-up.',
      },
      {
        question: 'How much does house cleaning cost in Crawfordville?',
        answer:
          'Price depends on size, bathrooms, frequency, pets, and condition. SwiftClean Ladies does not publish a flat rate. Call (850) 815-6998 for a free quote.',
      },
      {
        question: 'Is SwiftClean Ladies licensed and insured?',
        answer:
          'Yes. SwiftClean Ladies is licensed, bonded, and insured. Ask for proof when you book.',
      },
    ],
    photos: [
      {
        src: '/images/services/recurring-residential-cleaning.webp',
        alt: 'Recurring residential house cleaning',
        caption: 'Recurring house cleaning — kitchens, baths, and living areas',
      },
      {
        src: '/images/services/one-time-cleaning.webp',
        alt: 'One-time house cleaning visit',
        caption: 'One-time cleaning option for catch-up or guest prep',
      },
      {
        src: '/images/services/deep-cleaning.webp',
        alt: 'Deep cleaning detail work',
        caption: 'Deep cleaning when the home needs a fuller reset first',
      },
      {
        src: '/images/hero.webp',
        alt: 'SwiftClean Ladies cleaning service',
        caption: 'SwiftClean Ladies — Crawfordville-based cleaning team',
      },
    ],
    relatedServiceHref: '/services/recurring-residential-cleaning/',
    relatedServiceLabel: 'Recurring residential cleaning details',
    reviewAreaSlug: 'crawfordville',
    reviewServiceSlug: 'recurring-residential-cleaning',
    relatedLinks: [
      { label: 'House cleaning cost guide', href: '/blog/house-cleaning-cost-crawfordville/' },
      { label: 'What cleaning includes', href: '/blog/what-does-house-cleaning-include/' },
      { label: 'Weekly vs biweekly', href: '/blog/weekly-vs-biweekly-house-cleaning/' },
    ],
  },
  {
    slug: 'deep-cleaning-crawfordville',
    title: 'Deep Cleaning Crawfordville',
    metaDescription:
      'Deep cleaning in Crawfordville, FL: appliances, baseboards, baths, and detail reset. Licensed SwiftClean Ladies. Call (850) 815-6998.',
    h1: 'Deep Cleaning in Crawfordville, FL',
    explanation:
      'Deep cleaning in Crawfordville is a detailed reset for buildup that regular visits maintain but do not fully remove — appliance interiors when scoped, baseboards, bathrooms, and overlooked corners. SwiftClean Ladies serves Crawfordville homes with licensed, bonded, and insured deep cleaning before recurring care or as a seasonal scrub.',
    icon: 'lucide:sparkles',
    heroImage: '/images/services/deep-cleaning.webp',
    heroImageAlt: 'Deep cleaning service in Crawfordville',
    included: [
      'Detailed bathroom scrubbing including tracks and fixtures',
      'Kitchen detail: counters, sink, stove, microwave; oven/fridge interiors when scoped',
      'Full baseboard and trim wipe-down',
      'Dusting of fans, blinds, and reachable fixtures',
      'Vacuuming and mopping throughout accessible rooms',
      'High-touch switches and door handles',
    ],
    whoFor: [
      'Homes that have not had a professional reset in months',
      'Move-in or seasonal deep scrubs',
      'Households starting a recurring plan on a clean baseline',
      'Pet homes with heavy hair and tracked-in dirt',
    ],
    areas: [
      { name: 'Crawfordville', href: '/areas/crawfordville/' },
      { name: 'Saint Marks', href: '/areas/saint-marks/' },
      { name: 'Tallahassee', href: '/areas/tallahassee/' },
      { name: 'Panacea', href: '/areas/panacea/' },
    ],
    faqs: [
      {
        question: 'What is included in a deep cleaning in Crawfordville?',
        answer:
          'Deep cleaning covers detailed kitchens and baths, baseboards, higher dusting, floors, and appliance interiors when agreed in scope. See our deep cleaning includes guide for a full breakdown.',
      },
      {
        question: 'How long does a deep clean take?',
        answer:
          'A typical three-bedroom home often takes several hours with a two-person team. Pets, clutter, and buildup add time. We estimate during your free quote.',
      },
      {
        question: 'Is deep cleaning the same as recurring cleaning?',
        answer:
          'No. Recurring cleaning maintains a baseline. Deep cleaning resets buildup and detail zones so maintenance stays faster afterward.',
      },
      {
        question: 'Do you bring supplies?',
        answer:
          'Yes. The team brings cleaning supplies and equipment. Prefer specific products? Mention that during the walkthrough.',
      },
      {
        question: 'How do I prepare?',
        answer:
          'Clear floors and counters of personal clutter so surfaces are reachable. You do not need to pre-clean.',
      },
    ],
    photos: [
      {
        src: '/images/services/deep-cleaning.webp',
        alt: 'Deep cleaning detail work',
        caption: 'Deep cleaning — detail reset for buildup and overlooked areas',
      },
      {
        src: '/images/services/recurring-residential-cleaning.webp',
        alt: 'Home after deep clean maintenance',
        caption: 'Many clients move to recurring cleaning after a deep reset',
      },
      {
        src: '/images/services/one-time-cleaning.webp',
        alt: 'Timed cleaning visit',
        caption: 'One-time slots can focus on deep-clean priorities when hours allow',
      },
      {
        src: '/images/hero.webp',
        alt: 'SwiftClean Ladies team cleaning',
        caption: 'Local Crawfordville cleaning team',
      },
    ],
    relatedServiceHref: '/services/deep-cleaning/',
    relatedServiceLabel: 'Deep cleaning service page',
    reviewAreaSlug: 'crawfordville',
    reviewServiceSlug: 'deep-cleaning',
    relatedLinks: [
      { label: 'What deep cleaning includes', href: '/blog/what-is-included-in-deep-cleaning/' },
      { label: 'Florida deep clean checklist', href: '/blog/deep-cleaning-checklist-florida-homes/' },
      { label: 'Deep vs recurring', href: '/blog/deep-cleaning-vs-recurring-cleaning/' },
    ],
  },
  {
    slug: 'move-out-cleaning-crawfordville',
    title: 'Move-Out Cleaning Crawfordville',
    metaDescription:
      'Move-out cleaning in Crawfordville and Wakulla County. One-time or deep scope for rentals and homes. Call (850) 815-6998.',
    h1: 'Move-Out Cleaning in Crawfordville, FL',
    explanation:
      'Move-out cleaning in Crawfordville is a one-time or deep clean focused on kitchens, bathrooms, appliances, baseboards, and floors so landlords or buyers can walk the home. SwiftClean Ladies books fixed-time visits with two professionals and scopes the checklist to your deadline.',
    icon: 'lucide:door-open',
    heroImage: '/images/services/one-time-cleaning.webp',
    heroImageAlt: 'Move-out cleaning in Crawfordville',
    included: [
      'Kitchen counters, sink, stove, and microwave',
      'Oven and refrigerator interiors when scoped',
      'Full bathroom scrubbing and floors',
      'Baseboards and reachable dusting',
      'Vacuum and mop all accessible rooms',
      'Closets and cabinet interiors when emptied and requested',
    ],
    whoFor: [
      'Renters protecting a deposit',
      'Home sellers preparing for showings or closing',
      'Buyers wanting a sanitized move-in',
      'Landlords turning units between tenants',
    ],
    areas: [
      { name: 'Crawfordville', href: '/areas/crawfordville/' },
      { name: 'Saint Marks', href: '/areas/saint-marks/' },
      { name: 'Panacea', href: '/areas/panacea/' },
      { name: 'Tallahassee', href: '/areas/tallahassee/' },
    ],
    faqs: [
      {
        question: 'Is move-out cleaning the same as a regular visit?',
        answer:
          'No. Move-out work is usually a one-time or deep clean with more appliance and baseboard attention than a light recurring visit.',
      },
      {
        question: 'How far ahead should I book in Crawfordville?',
        answer:
          'Book as soon as you have keys and a deadline. Peak move weekends fill faster. Call (850) 815-6998.',
      },
      {
        question: 'Do you clean empty units only?',
        answer:
          'Empty or nearly empty homes work best. Heavy furniture and packed boxes limit access to floors and cabinets.',
      },
      {
        question: 'Can you do move-in cleaning too?',
        answer:
          'Yes. Move-in uses a similar checklist before you unpack. Tell us which milestone you need when you quote.',
      },
      {
        question: 'Do you serve other Wakulla towns?',
        answer:
          'Yes — Saint Marks and Panacea are in area, along with Tallahassee. See our Wakulla County cleaning services page.',
      },
    ],
    photos: [
      {
        src: '/images/services/one-time-cleaning.webp',
        alt: 'One-time move-out cleaning',
        caption: 'One-time cleaning — timed slots for move deadlines',
      },
      {
        src: '/images/services/deep-cleaning.webp',
        alt: 'Deep clean for move-out',
        caption: 'Deep cleaning when the unit needs a fuller reset',
      },
      {
        src: '/images/services/new-construction-cleaning.webp',
        alt: 'Empty home surface cleaning',
        caption: 'Empty surfaces and floors get a thorough pass',
      },
      {
        src: '/images/hero.webp',
        alt: 'SwiftClean Ladies move cleaning',
        caption: 'Crawfordville-based team for Wakulla move cleans',
      },
    ],
    relatedServiceHref: '/services/one-time-cleaning/',
    relatedServiceLabel: 'One-time cleaning details',
    reviewAreaSlug: 'crawfordville',
    reviewServiceSlug: 'one-time-cleaning',
    relatedLinks: [
      { label: 'Move-out cleaning Wakulla guide', href: '/blog/move-out-cleaning-wakulla-county/' },
      { label: 'Deep cleaning includes', href: '/blog/what-is-included-in-deep-cleaning/' },
      { label: 'Prep checklist', href: '/blog/what-to-do-before-professional-cleaning-visit/' },
    ],
  },
  {
    slug: 'commercial-cleaning-crawfordville',
    title: 'Commercial Cleaning Crawfordville',
    metaDescription:
      'Commercial and office cleaning in Crawfordville, FL. After-hours schedules that limit disruption. Free quotes — call (850) 815-6998.',
    h1: 'Commercial Cleaning in Crawfordville, FL',
    explanation:
      'Commercial cleaning in Crawfordville covers offices and small business spaces — desks, restrooms, break rooms, floors, and high-touch points — on a schedule that limits disruption. SwiftClean Ladies offers licensed commercial and office cleaning for Crawfordville workplaces, with evening or flexible windows when needed.',
    icon: 'lucide:building-2',
    heroImage: '/images/services/commercial-and-office-cleaning.webp',
    heroImageAlt: 'Commercial office cleaning in Crawfordville',
    included: [
      'Workstation and desk surface wiping; trash emptying',
      'Restroom sanitizing and supply restocking when arranged',
      'Break room and kitchenette counters and sinks',
      'Vacuuming and mopping of common areas',
      'High-touch door handles, switches, and shared points',
      'Entry and reception glass and mats as scoped',
    ],
    whoFor: [
      'Small offices and professional suites in Crawfordville',
      'Businesses that need after-hours or low-disruption visits',
      'Client-facing spaces that must look ready each morning',
      'Managers comparing in-house staff vs a licensed cleaning team',
    ],
    areas: [
      { name: 'Crawfordville', href: '/areas/crawfordville/' },
      { name: 'Tallahassee', href: '/areas/tallahassee/' },
      { name: 'Saint Marks', href: '/areas/saint-marks/' },
      { name: 'Panacea', href: '/areas/panacea/' },
    ],
    faqs: [
      {
        question: 'Do you clean offices after hours in Crawfordville?',
        answer:
          'Yes. We schedule around your access window so staff are not interrupted. Tallahassee offices can use evening or night windows as well.',
      },
      {
        question: 'What is included in commercial cleaning?',
        answer:
          'Typical visits cover desks, restrooms, break rooms, floors, and high-touch surfaces. Exact scope is confirmed in a walkthrough.',
      },
      {
        question: 'How often should an office be cleaned?',
        answer:
          'Small offices often need weekly service. Higher headcount or client traffic may need multiple visits per week. We recommend based on your space.',
      },
      {
        question: 'Are you insured for commercial sites?',
        answer:
          'SwiftClean Ladies is licensed, bonded, and insured. Ask for documentation when you request a quote.',
      },
      {
        question: 'Can we start with a one-time clean?',
        answer:
          'Yes. Many offices start with a one-time or deep clean, then move to a recurring schedule.',
      },
    ],
    photos: [
      {
        src: '/images/services/commercial-and-office-cleaning.webp',
        alt: 'Commercial office cleaning',
        caption: 'Commercial and office cleaning — desks, restrooms, common areas',
      },
      {
        src: '/images/services/deep-cleaning.webp',
        alt: 'Office deep clean detail',
        caption: 'Deep cleaning for offices that need a fuller reset',
      },
      {
        src: '/images/services/one-time-cleaning.webp',
        alt: 'One-time office cleaning',
        caption: 'One-time commercial visits for events or catch-up',
      },
      {
        src: '/images/hero.webp',
        alt: 'SwiftClean Ladies commercial team',
        caption: 'Local licensed team serving Crawfordville workplaces',
      },
    ],
    relatedServiceHref: '/services/commercial-and-office-cleaning/',
    relatedServiceLabel: 'Commercial cleaning service page',
    reviewAreaSlug: 'crawfordville',
    reviewServiceSlug: 'commercial-and-office-cleaning',
    relatedLinks: [
      { label: 'After-hours office cleaning Tallahassee', href: '/blog/office-cleaning-after-hours-tallahassee/' },
      { label: 'Office cleaning in Crawfordville', href: '/services/crawfordville/commercial-and-office-cleaning/' },
    ],
  },
  {
    slug: 'new-construction-cleaning-crawfordville',
    title: 'New Construction Cleaning Crawfordville',
    metaDescription:
      'New-construction cleaning in Crawfordville: rough and final dust removal for builders and new homes. Call (850) 815-6998.',
    h1: 'New-Construction Cleaning in Crawfordville, FL',
    explanation:
      'New-construction cleaning in Crawfordville removes drywall dust, debris, and film after building or remodeling so units are ready for walkthroughs or move-in. SwiftClean Ladies provides rough and final cleans for builders and new homeowners across Crawfordville and nearby cities.',
    icon: 'lucide:hard-hat',
    heroImage: '/images/services/new-construction-cleaning.webp',
    heroImageAlt: 'New construction cleaning in Crawfordville',
    included: [
      'Construction dust removal from floors, fixtures, and surfaces',
      'Cabinet and counter cleaning as accessible',
      'Window sills and interior glass when scoped',
      'Rough clean and/or final clean milestones',
      'Finish pass for owner, tenant, or inspector walkthroughs',
      'Follow-up options if punch lists create new dust',
    ],
    whoFor: [
      'Builders and remodelers near Crawfordville',
      'New homeowners before furniture arrives',
      'Investors preparing units for lease',
      'Anyone needing post-renovation dust cleanup',
    ],
    areas: [
      { name: 'Crawfordville', href: '/areas/crawfordville/' },
      { name: 'Tallahassee', href: '/areas/tallahassee/' },
      { name: 'Saint Marks', href: '/areas/saint-marks/' },
      { name: 'Panacea', href: '/areas/panacea/' },
    ],
    faqs: [
      {
        question: 'What is the difference between rough and final clean?',
        answer:
          'Rough clean happens after major construction dust so trades can finish. Final clean is the presentation pass before move-in or walkthrough.',
      },
      {
        question: 'Do you clean after renovations, not only new builds?',
        answer:
          'Yes. Post-renovation dust cleaning is a common request. Tell us remodel vs new build when you quote.',
      },
      {
        question: 'Should all trades be finished before the final clean?',
        answer:
          'Yes when possible. Ongoing cutting and sanding recreate dust after the clean.',
      },
      {
        question: 'How do I schedule in Crawfordville?',
        answer:
          'Call (850) 815-6998 with the address, milestone (rough or final), and target date. We provide a free quote.',
      },
      {
        question: 'Are you licensed for job sites?',
        answer:
          'SwiftClean Ladies is licensed, bonded, and insured. Share site access rules during booking.',
      },
    ],
    photos: [
      {
        src: '/images/services/new-construction-cleaning.webp',
        alt: 'New construction cleaning',
        caption: 'New-construction cleaning — dust and finish for move-in ready units',
      },
      {
        src: '/images/services/deep-cleaning.webp',
        alt: 'Detail cleaning after construction',
        caption: 'Detail work on fixtures and surfaces after construction dust',
      },
      {
        src: '/images/services/one-time-cleaning.webp',
        alt: 'Timed construction clean visit',
        caption: 'Timed visits aligned to your rough or final milestone',
      },
      {
        src: '/images/hero.webp',
        alt: 'SwiftClean Ladies construction clean',
        caption: 'Local team serving Crawfordville builders and homeowners',
      },
    ],
    relatedServiceHref: '/services/new-construction-cleaning/',
    relatedServiceLabel: 'New-construction cleaning details',
    reviewAreaSlug: 'crawfordville',
    reviewServiceSlug: 'new-construction-cleaning',
    relatedLinks: [
      { label: 'Local new-construction guide', href: '/blog/new-construction-cleaning-near-me/' },
      {
        label: 'New-construction in Crawfordville',
        href: '/services/crawfordville/new-construction-cleaning/',
      },
    ],
  },
  {
    slug: 'cleaning-services-wakulla-county',
    title: 'Cleaning Services Wakulla County',
    metaDescription:
      'Cleaning services in Wakulla County, FL: Crawfordville, Saint Marks, and Panacea. Licensed SwiftClean Ladies. Call (850) 815-6998.',
    h1: 'Cleaning Services in Wakulla County, FL',
    explanation:
      'SwiftClean Ladies provides residential and commercial cleaning services across Wakulla County communities we serve — Crawfordville, Saint Marks, and Panacea — plus Tallahassee on the Leon County side of our route. From recurring house cleaning to deep cleans, move-outs, offices, and new-construction turnovers, we match the checklist to your address.',
    icon: 'lucide:map-pin',
    heroImage: '/images/hero.webp',
    heroImageAlt: 'Cleaning services across Wakulla County',
    included: [
      'Recurring residential house cleaning',
      'One-time and move-out cleaning',
      'Deep cleaning and detail resets',
      'Commercial and office cleaning',
      'New-construction rough and final cleans',
      'Home organization projects when scoped',
    ],
    whoFor: [
      'Wakulla County homeowners in Crawfordville, Saint Marks, and Panacea',
      'Renters and landlords needing move cleans',
      'Small offices and local businesses',
      'Builders and new homeowners needing dust removal',
    ],
    areas: [
      { name: 'Crawfordville', href: '/areas/crawfordville/' },
      { name: 'Saint Marks', href: '/areas/saint-marks/' },
      { name: 'Panacea', href: '/areas/panacea/' },
      { name: 'Tallahassee', href: '/areas/tallahassee/' },
    ],
    faqs: [
      {
        question: 'Which Wakulla County towns do you serve?',
        answer:
          'Crawfordville, Saint Marks, and Panacea are in our Wakulla coverage, along with Tallahassee. Confirm your street when you request a quote.',
      },
      {
        question: 'How fast can you reach Crawfordville?',
        answer:
          'Crawfordville is home base. Same-day to next-day is often possible when the schedule allows. Call (850) 815-6998.',
      },
      {
        question: 'Do you serve Panacea and Saint Marks?',
        answer:
          'Yes. Both are part of our service area. See our Panacea and Saint Marks cleaning guide for details.',
      },
      {
        question: 'What services can I book in Wakulla County?',
        answer:
          'Recurring house cleaning, one-time, deep cleaning, commercial/office, new-construction, and home organization — scoped to your property.',
      },
      {
        question: 'How do I get a free quote?',
        answer:
          'Call (850) 815-6998 or use the contact form with your city, property type, and service needed. We confirm scope before work starts.',
      },
    ],
    photos: [
      {
        src: '/images/services/recurring-residential-cleaning.webp',
        alt: 'House cleaning Wakulla County',
        caption: 'House cleaning for Wakulla County homes',
      },
      {
        src: '/images/services/deep-cleaning.webp',
        alt: 'Deep cleaning Wakulla',
        caption: 'Deep cleaning for humidity and buildup',
      },
      {
        src: '/images/services/commercial-and-office-cleaning.webp',
        alt: 'Office cleaning Wakulla',
        caption: 'Commercial cleaning for local workplaces',
      },
      {
        src: '/images/services/new-construction-cleaning.webp',
        alt: 'New construction cleaning Wakulla',
        caption: 'New-construction cleaning for local builds',
      },
    ],
    relatedServiceHref: '/services/',
    relatedServiceLabel: 'All cleaning services',
    reviewAreaSlug: 'crawfordville',
    relatedLinks: [
      { label: 'Panacea & Saint Marks coverage', href: '/blog/cleaning-service-panacea-saint-marks/' },
      { label: 'House cleaning Crawfordville', href: '/house-cleaning-crawfordville/' },
      { label: 'All service areas', href: '/areas/' },
    ],
  },
];

export function getLandingBySlug(slug: string): ServiceLanding | undefined {
  return serviceLandings.find((l) => l.slug === slug);
}
