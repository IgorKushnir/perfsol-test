import { Seo } from "@/models/Seo";
import { Localization } from "@/models/Locale";

export type Policy = {
  title: string;
  slug: string;
  content: string;
  seo: Seo;
  localizations: Localization[];
};
