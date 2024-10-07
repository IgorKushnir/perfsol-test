import { ListLocales, LocalesLinks, Localization } from "@/models/Locale";

export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

type Params = {
  withBaseUrl?: boolean;
  locale?: string;
};

export type ToRoute = (link: string, params?: Params) => string;

export const toVacancies = (params?: Params) => toUrl(`vacancies`, params);
export const toVacancy = (slug: string, params?: Params) =>
  toUrl(`vacancies/${slug}`, params);

export const toCaseStudies = (params?: Params) => toUrl(`case-studies`, params);
export const toCaseStudy = (slug: string, params?: Params) =>
  toUrl(`case-studies/${slug}`, params);

export const toBlog = (page: number | null = null, params?: Params) =>
  toUrl(page && page > 1 ? `blog/page/${page}` : "blog", params);
export const toBlogPost = (slug: string, params?: Params) =>
  toUrl(`${slug}`, params);

export const toPage = (slug: string, params?: Params) =>
  toUrl(`${slug}`, params);
export const toAuthor = (slug: string, params?: Params) =>
  toUrl(`authors/${slug}`, params);

export const toAboutUs = (params?: Params) => toUrl(`about-us`, params);

export const toContact = (params?: Params) => toUrl(`contact`, params);

export const toPolicy = (slug: string, params?: Params) =>
  toUrl(`${slug}`, params);

//do not export this
const toUrl = (path: string, params?: Params): string => {
  const parts = [];
  if (params?.withBaseUrl) {
    parts.push(baseUrl);
  } else {
    parts.push(``); //push empty string to start with "/" if there is no baseURL
  }
  if (params?.locale && params.locale !== "en") {
    parts.push(params.locale);
  }
  if (path.length > 0) {
    parts.push(path);
  }
  return parts.join("/");
};

export const buildLocaleLinks = (
  localizations: Localization[],
  currentLocale: ListLocales,
  route: ToRoute,
  currentSlug: string
): LocalesLinks => {
  if (!(localizations && localizations.length)) {
    return undefined;
  }
  return {
    [currentLocale]: route(currentSlug, {
      withBaseUrl: true,
      locale: currentLocale,
    }),
    ...localizations.reduce(
      (acc, { slug, locale }) => ({
        ...acc,
        [locale]: route(slug, { withBaseUrl: true, locale }),
      }),
      {}
    ),
  } as LocalesLinks;
};
