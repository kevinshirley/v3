export const locales = ['en', 'fr'] as const;

export type Locale = (typeof locales)[number];

// Requiring every locale means a missing translation fails the build.
export type Localized<T = string> = Record<Locale, T>;

export const localePaths: Localized = {
  en: '/',
  fr: '/fr',
};

export const switchLabels: Localized = {
  en: 'View this site in English',
  fr: 'Voir ce site en français',
};
