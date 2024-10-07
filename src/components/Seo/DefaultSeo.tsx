import { DefaultSeo as NextDefaultSeo, OrganizationJsonLd } from "next-seo";
import { useRouter } from "next/router";

import { getLogo } from "@/utils/images";
import { baseUrl } from "@/utils/routes";

import { company } from "./company";

export const DefaultSeo = () => {
  const router = useRouter();
  const noIndexNoFollow = process.env.NODE_ENV !== "production";
  return (
    <>
      <NextDefaultSeo
        dangerouslySetAllPagesToNoIndex={noIndexNoFollow}
        dangerouslySetAllPagesToNoFollow={noIndexNoFollow}
        title="Software Development Company | Offshore Software Development by Perfsol"
        description="Software outsourcing is quite lucrative if you know the right developers. Hire offshore software development company and make your business bloom with Perfsol"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: `https://perfsol.tech${router.asPath}`,
          siteName: "Perfsol",
        }}
        twitter={{
          handle: "@perfsoltech",
          site: "@perfsoltech",
          cardType: "summary_large_image",
        }}
      />
      <OrganizationJsonLd
        type={company.type}
        id={`${baseUrl}/#`}
        logo={getLogo()}
        legalName={company.offices[0].name}
        name={company.offices[0].name}
        address={company.offices.map((office) => ({
          streetAddress: office.streetAddress,
          addressLocality: office.addressLocality,
          addressRegion: office.addressRegion,
          postalCode: office.postalCode,
          addressCountry: office.areaServed,
        }))}
        contactPoint={[
          {
            telephone: company.telephone,
            contactType: company.contactType,
            areaServed: company.offices[0].areaServed,
            availableLanguage: company.availableLanguage,
          },
        ]}
        sameAs={[
          company.linkedInLink,
          company.instagramLink,
          company.twitterLink,
          company.facebookLink,
          company.clutchLink,
        ]}
        url={baseUrl || ""}
      />
    </>
  );
};
