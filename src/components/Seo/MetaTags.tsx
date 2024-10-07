import { NextSeo } from "next-seo";
import Head from "next/head";

import { LocalesLinks } from "@/models/Locale";

type Props = {
  title: string;
  description: string;
  images: string[];
  canonical: string;
  localesLinks?: LocalesLinks;
  noindex?: boolean;
  nofollow?: boolean;
};
export const MetaTags = ({
  title,
  description,
  images,
  canonical,
  localesLinks,
  noindex,
  nofollow,
}: Props) => (
  <>
    <Head>
      <meta name="title" content={title} />
      {localesLinks && (
        <>
          {Object.entries(localesLinks).map(([locale, link]) => (
            <link key={locale} rel="alternate" hrefLang={locale} href={link} />
          ))}
          <link rel="alternate" hrefLang="x-default" href={localesLinks.en} />
        </>
      )}
    </Head>
    <NextSeo
      noindex={noindex}
      nofollow={nofollow}
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        title: title,
        description: description,
        images: images.map((image) => ({
          url: image,
          secureUrl: image,
          alt: title,
        })),
        siteName: "Perfsol",
      }}
    />
  </>
);
