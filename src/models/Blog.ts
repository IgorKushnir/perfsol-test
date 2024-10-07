import { Author } from "./Author";
import { FaqType } from "./Faq";
import { ImageType } from "./Image";
import { Seo } from "./Seo";
import { Tag } from "./Tags";
import { ArticleJsonLdProps } from "next-seo/lib/jsonld/article";
import { Localization } from "@/models/Locale";

export type RelatedBlogPost = Pick<
  BlogPost,
  | "content"
  | "createdAt"
  | "date"
  | "description"
  | "id"
  | "publishedAt"
  | "slug"
  | "tableOfContents"
  | "title"
  | "updatedAt"
  | "tags"
  | "seo"
  | "preview"
>;

export type BlogPost = {
  content: string;
  createdAt: string;
  date: string;
  description: string;
  id: number;
  publishedAt: string;
  slug: string;
  tableOfContents: string;
  title: string;
  updatedAt: string;
  faq: FaqType[];
  author: Author;
  tags: Tag[];
  relatedBlogs: RelatedBlogPost[];
  seo: Seo;
  preview: ImageType;
  jsonLd?: ArticleJsonLdProps;
  localizations: Localization[];
};
