import { baseUrl } from "@/utils/routes";

export const getLogo = (): string => `${baseUrl}/img/svg/Logo.svg`;

export const getImageUrl = (source: { url: string }): string =>
  source ? `${process.env.NEXT_PUBLIC_IMAGES_DOMAIN}${source.url || ""}` : "";
export const localImageUrl = (imageRelativePath: string): string =>
  `${process.env.NEXT_PUBLIC_SITE_URL}${imageRelativePath}`;
