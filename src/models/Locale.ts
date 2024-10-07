export const DE = "de";
export const EN = "en";
export const ALL_LOCALES = "all";

export type ListLocales = typeof EN | typeof DE;
export type LocaleType = typeof ALL_LOCALES | ListLocales;

export type LocalesLinks =
  | {
      [key in ListLocales]?: string;
    }
  | undefined;

export type Localization = {
  slug: string;
  locale: ListLocales;
};
