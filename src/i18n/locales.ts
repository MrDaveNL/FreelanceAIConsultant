// Eén bron van waarheid voor de ondersteunde talen. Een taal toevoegen betekent
// dit bestand uitbreiden; hreflang, sitemap en taalwisselaar volgen automatisch.
export type Locale = 'en' | 'nl';
export const LOCALES: Locale[] = ['en', 'nl'];
export const DEFAULT_LOCALE: Locale = 'en';

export const HTML_LANG: Record<Locale, string> = { en: 'en', nl: 'nl' };
export const OG_LOCALE: Record<Locale, string> = { en: 'en_US', nl: 'nl_NL' };
export const SCHEMA_LANG: Record<Locale, string> = { en: 'en-US', nl: 'nl-NL' };
export const RSS_LANGUAGE: Record<Locale, string> = { en: 'en-us', nl: 'nl-nl' };
export const SWITCHER_LABEL: Record<Locale, string> = { en: 'EN', nl: 'NL' };

export const otherLocale = (loc: Locale): Locale => (loc === 'en' ? 'nl' : 'en');
