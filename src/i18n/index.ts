import type { Locale } from './locales';
import { nl } from './dict.nl';
import { en } from './dict.en';

export * from './locales';
export { localeFromPath } from '../data/routes';

const dictionaries: Record<Locale, typeof nl> = { nl, en };

export function t(loc: Locale) {
  return dictionaries[loc];
}
