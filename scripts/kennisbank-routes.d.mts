export function expectedKennisbankUrl(lang: 'nl' | 'en', folderName: string): string;

export class KennisbankUrlError extends Error {}
export class KennisbankIdError extends Error {}

export function assertKennisbankUrl(args: {
  lang: 'nl' | 'en';
  folderName: string;
  url: string;
  id: string;
  file: string;
}): void;

export function assertUniqueKennisbankIds(
  pages: Array<{ id: string; lang: 'nl' | 'en'; file: string }>
): void;
