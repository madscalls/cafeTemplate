// Steep & Spine palette (from the design mockup). The pages use these hex values inline;
// search and replace a value across src/pages to re-skin the template.
export const PALETTE = {
  shadowGrey: '#252323', // headings, footer
  body: '#4A4644', // body text
  cyanDeep: '#3A6667', // buttons (white text passes contrast)
  cyanText: '#345D5E', // links and small labels
  darkCyan: '#548687', // book spines and covers
  parchment: '#F5F1ED', // page background
  card: '#FAF8F5', // cards and forms
  bone: '#DAD2BC', // bands
  khaki: '#A99985', // fills with dark text
};

export function useTheme(pageDefaults) {
  return { ...pageDefaults };
}
