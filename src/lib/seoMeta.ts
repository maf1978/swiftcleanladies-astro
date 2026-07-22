/** Short SEO labels for service titles (keep final title ≤ ~60 chars with brand). */
export const serviceSeoName: Record<string, string> = {
  'recurring-residential-cleaning': 'Recurring Cleaning',
  'one-time-cleaning': 'One-Time Cleaning',
  'deep-cleaning': 'Deep Cleaning',
  'commercial-and-office-cleaning': 'Office Cleaning',
  'new-construction-cleaning': 'New Build Cleaning',
  'home-organization': 'Home Organization',
};

export function shortServiceName(slug: string, fallback: string): string {
  return serviceSeoName[slug] || fallback;
}

/** Soft targets used by meta checkers: title ≤60, description 120–155. */
export function clipMetaDescription(text: string, max = 155): string {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= max) return cleaned;
  const sliced = cleaned.slice(0, max - 1);
  const lastSpace = sliced.lastIndexOf(' ');
  return `${(lastSpace > 100 ? sliced.slice(0, lastSpace) : sliced).trim()}…`;
}
