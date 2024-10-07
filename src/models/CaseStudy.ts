import { Localization } from "@/models/Locale";

import { ImageType } from "./Image";
import { Section } from "./Section";
import { Seo } from "./Seo";
import { Tag } from "./Tags";
import { Testimonial } from "./Testimonial";

export type Video = {
  description: string;
  id: number;
  title: string;
  video: string;
};

export type YoutubeVideo = {
  src: string;
  title: string;
};

export type CaseStudySection = {
  description: string;
  title: string;
  id: number;
};

export type CaseStudyImage = {
  description: string;
  title: string;
  id: number;
  image: ImageType;
  url: string;
};

export type IndustryType = {
  createdAt: string;
  id: number;
  locale: string;
  name: string;
  updatedAt: string;
};

export type CountryType = {
  code: string;
  createdAt: string;
  id: number;
  locale: string;
  name: string;
  updatedAt: string;
};

export type CaseStudyItem = {
  mainImage: ImageType;
  createdAt: string;
  description: string;
  id: number;
  slug: string;
  teaser: string;
  title: string;
  updatedAt: string;
  teaserImage?: string;
  tags?: Tag[];
  sections: CaseStudySection[];
  videos: Video[];
  images: CaseStudyImage[];
  testimonial: Testimonial;
  relatedCases: CaseStudyItem[];
  seo: Seo;
  country: CountryType;
  industry: IndustryType;
  localizations: Localization[];
};

export type SectionCasesStudies = Section<CaseStudyItem>;
