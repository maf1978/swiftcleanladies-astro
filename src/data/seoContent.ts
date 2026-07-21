import type { ServiceArea } from './serviceAreas';
import type { ServiceType } from './serviceTypes';
import { serviceAreas } from './serviceAreas';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Review {
  author: string;
  date: string;
  rating: number;
  text: string;
  area?: string;
  service?: string;
}

const BUSINESS_NAME = 'Swiftclean Ladies';
const PHONE = '(850) 815-6998';
const LICENSE = 'Licensed, Bonded, and Insured';

export function generateFaqs(area: ServiceArea, service?: ServiceType): FaqItem[] {
  const areaName = area.name;
  const nearby = area.nearby
    .map((slug) => serviceAreas.find((a) => a.slug === slug)?.name)
    .filter(Boolean)
    .join(', ');

  const base: FaqItem[] = [
    {
      question: `How much does professional cleaning cost in ${areaName}?`,
      answer: `Quotes in ${areaName} depend on service type, home or office size, condition, and frequency. ${BUSINESS_NAME} does not publish a flat menu price. Call ${PHONE} or request a free quote with your address.`,
    },
    {
      question: `How quickly can ${BUSINESS_NAME} reach ${areaName}?`,
      answer: `${area.responseTime}. Share your street when you book so we can confirm the next open window on the ${area.county} route.`,
    },
    {
      question: `Is ${BUSINESS_NAME} licensed and insured?`,
      answer: `Yes. ${BUSINESS_NAME} is ${LICENSE.toLowerCase()}. Ask for proof when you request a quote or before the first visit.`,
    },
    {
      question: `Do you offer emergency or same-day cleaning in ${areaName}?`,
      answer: `Urgent visits depend on the route that day. Call ${PHONE} first for same-week needs in ${areaName}. We confirm what fits before you rearrange your day.`,
    },
    {
      question: `What other areas near ${areaName} do you serve?`,
      answer: `Along with ${areaName}, we serve ${nearby || 'Crawfordville, Saint Marks, Tallahassee, and Panacea'}. See the full list on our service areas page.`,
    },
  ];

  if (service) {
    base.unshift({
      question: `What does ${service.name.toLowerCase()} include in ${areaName}?`,
      answer: `${service.shortDescription} Request a free quote for ${areaName} and we will match the checklist to your space. Call ${PHONE}.`,
    });
  }

  return base.slice(0, 5);
}

/** Real reviews already published on swiftcleanladies.com */
export const reviews: Review[] = [
  {
    author: 'Maya Key',
    date: '2025-06-01',
    rating: 5,
    text: 'I cannot say enough great things about Swift Clean Ladies! This family-owned business is a true gem in Crawfordville. They are incredibly kind, professional, and genuinely care about the quality of their work.',
    area: 'crawfordville',
    service: 'commercial-and-office-cleaning',
  },
  {
    author: 'Elizabeth Hughes',
    date: '2025-05-15',
    rating: 5,
    text: 'Excellent service! Can highly recommend Swift Clean for all of your needs. They are thorough and trust worthy. Truly go the extra mile to make your home sparkle.',
    area: 'crawfordville',
    service: 'recurring-residential-cleaning',
  },
  {
    author: 'Jenny M.F.',
    date: '2025-06-10',
    rating: 5,
    text: 'I have been using Swift Clean to clean my home for several months now, and I could not be happier. Whether it is routine cleaning or deep cleaning, the ladies are always professional and detail-oriented.',
    area: 'crawfordville',
    service: 'deep-cleaning',
  },
  {
    author: 'Carolyn James',
    date: '2025-04-20',
    rating: 5,
    text: 'Their attention to detail is unmatched, and their team is both professional and friendly. I could not be happier with their service.',
    service: 'recurring-residential-cleaning',
  },
  {
    author: 'Sarah T',
    date: '2025-03-12',
    rating: 5,
    text: 'They consistently deliver exceptional results and go above and beyond to ensure everything is perfect.',
    service: 'one-time-cleaning',
  },
  {
    author: 'Emily Saints',
    date: '2025-02-08',
    rating: 5,
    text: 'The space looks immaculate, and their service is reliable and efficient.',
    service: 'home-organization',
  },
];

export function getReviewsForPage(areaSlug?: string, serviceSlug?: string, count = 3): Review[] {
  const scored = reviews
    .map((r) => {
      let score = 0;
      if (areaSlug && r.area === areaSlug) score += 2;
      if (serviceSlug && r.service === serviceSlug) score += 2;
      return { r, score };
    })
    .sort((a, b) => b.score - a.score || b.r.date.localeCompare(a.r.date));
  return scored.slice(0, count).map((s) => s.r);
}
