/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Seo } from "@/models/Seo";
import { Localization } from "@/models/Locale";

export type Page = {
  slug: string;
  title: string;
  description: string;
  seo: Seo;
  content: any;
  localizations: Localization[];
};
