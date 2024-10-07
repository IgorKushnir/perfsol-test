/* eslint-disable  @typescript-eslint/no-explicit-any */

import { paginationHandler } from "./api/menu";
import {
  fetchBlogPosts,
  fetchMainPage,
  footerMenuHandler,
  menuHandler,
} from "./api/strapiApi";
// import { AboutProps } from '@/components/Landing/About'
// import { BlogProps } from '@/components/Landing/BlogLanding'
import { Domains } from '@/components/Landing/Domains'
import { Main } from "@/components/Landing/Main";
// import { PortfolioProps } from '@/components/Landing/Portfolio'
import { Services } from "@/components/Landing/Services";
// import { WorkflowProps } from '@/components/Landing/Workflow'
import { MetaTags, Rating } from '@/components/Seo'
import { FollowUs } from "@/components/SocialNetwork";
import { PositionType } from "@/components/SocialNetwork/FollowUs";
import { Technologies } from '@/components/Technologies'
// import { FaqProps } from '@/components/common/Faq'
// import { FooterProps } from '@/components/common/Footer'
import { Header } from "@/components/common/Header/Header";
// import { PaginationWithDots } from '@/components/common/PaginationWithDots'
import { Fullscreen, Wrap } from "@/components/ui";
import {
  About as AboutType,
  DomainsType,
  FaqType,
  ListLocales,
  MenuItem,
  PaginationItem,
  RelatedBlogPost,
  SectionCasesStudies,
  Seo,
  Technologies as TechnologiesType,
  WorkflowSection,
} from "@/models";
import { Section } from "@/models/Section";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import dynamic from 'next/dynamic'
import Head from "next/head";
import { useCallback, useEffect, useRef, useState } from "react";
import { getImageUrl } from '@/utils/images'
import { toPage } from "@/utils/routes";
import {Workflow} from "@/components/Landing/Workflow";
import {Portfolio} from "@/components/Landing/Portfolio";
import {BlogLanding} from "@/components/Landing/BlogLanding";
import {About} from "@/components/Landing/About";

// const About = dynamic<AboutProps>(() => import('@/components/Landing/About').then((res) => res.About))
// const BlogLanding = dynamic<BlogProps>(() => import('@/components/Landing/BlogLanding').then((res) => res.BlogLanding))
// const Faq = dynamic<FaqProps>(() => import('@/components/common/Faq').then((res) => res.Faq))
// const ContactSection = dynamic(() => import('@/components/Landing/ContactSection').then((res) => res.ContactSection))
// const Domains = dynamic<DomainsProps>(() => import('@/components/Landing/Domains').then((res) => res.Domains))
// const Footer = dynamic<FooterProps>(() => import('@/components/common/Footer').then((res) => res.Footer))
// const Portfolio = dynamic<PortfolioProps>(() => import('@/components/Landing/Portfolio').then((res) => res.Portfolio))
// const Technologies = dynamic<TechnologiesProps>(() => import('@/components/Technologies').then((res) => res.Technologies))
// const Workflow = dynamic<WorkflowProps>(() => import('@/components/Landing/Workflow').then((res) => res.Workflow))

type StaticProps = {
  locale: ListLocales;
};
export async function getStaticProps({ locale = 'en' }: StaticProps) {
  const blogPosts = await fetchBlogPosts({ locale, page: 1, pageSize: 3 });
  return {
    props: {
      mainPage: await fetchMainPage(locale),
      blogPosts: blogPosts.data,
      paginationLinks: paginationHandler(),
      menu: await menuHandler(locale),
      footerMenu: await footerMenuHandler(locale),
      ...(await serverSideTranslations(locale, ["common", "case-studies"])),
      locale,
    },
    revalidate: Number(process.env.UPDATE_FREQUENCY),
  };
}

type ServiceMainPage = Section<{
  title: string;
  description: string;
  id: number;
  slug: string;
  menu: {
    id: number;
    title: string;
    description: string;
  };
}>;

type Props = {
  mainPage: {
    title: string;
    description: string;
    services: ServiceMainPage;
    domains: DomainsType;
    about: AboutType;
    faq: FaqType[];
    seo: Seo;
    technologies: TechnologiesType;
    workflow: Omit<WorkflowSection, "list"> & {
      flow: { list: WorkflowSection["list"] };
    };
    portfolio: SectionCasesStudies;
  };
  blogPosts: RelatedBlogPost[];
  defaultFlow: WorkflowSection;
  paginationLinks: PaginationItem[];
  menu: MenuItem[];
  footerMenu: MenuItem[];
  locale: ListLocales;
};

export default function Home({
  mainPage,
  menu,
  locale,
  blogPosts,
}: //  paginationLinks,
// footerMenu, 
Props) {
  const {
    services, seo, domains, technologies, workflow, portfolio, about,
    //  faq,   
  } = mainPage;

  const { t } = useTranslation("common");

  const [floatingElementsPosition, setFloatingElementsPosition] =
    useState<PositionType>("fixed");
  // const [currentSection, setCurrentSection] = useState(0)

  const bodyRef = useRef(null);
  // const footerRef = useRef(null);

  // const changeLinkState = useCallback(() => {
  //     const sections = bodyRef.current?.querySelectorAll('[data-target="section-item"]')
  //     if (sections?.length === 0) {
  //         return
  //     }

  //     let visibleSectionIndex = sections?.length || 0

  //     while (--visibleSectionIndex > -1 && window.scrollY + 96 < sections[visibleSectionIndex].offsetTop) {}

  //     if (paginationLinks[visibleSectionIndex]) {
  //         setCurrentSection(visibleSectionIndex)
  //     }
  // }, [paginationLinks])

  const checkOffset = useCallback(() => {
    // if (
      // bodyRef.current?.scrollTop + window.innerHeight <
      // footerRef.current?.getBoundingClientRect().top
    // ) {
      setFloatingElementsPosition("fixed");
    // } else {
    //   setFloatingElementsPosition("absolute");
    // }
  }, []);

  useEffect(() => {
    // window.addEventListener('scroll', changeLinkState)
    window.addEventListener("scroll", checkOffset);
    return () => {
      // window.removeEventListener('scroll', changeLinkState)
      window.removeEventListener("scroll", checkOffset);
    };
  });

  return (
    <>
      <Head>
        <link
          rel="preload"
          fetchPriority="auto"
          as="image"
          href="/img/svg/facebook-icon-dark.svg"
        />
        <link
          rel="preload"
          fetchPriority="auto"
          as="image"
          href="/img/svg/linkedin-icon-dark.svg"
        />
      </Head>
      <MetaTags
              title={seo.title}
              description={seo.description}
              images={[getImageUrl(seo.image)]}
              localesLinks={{
                  en: toPage(``, { withBaseUrl: true, locale: 'en' }),
                  de: toPage(``, { withBaseUrl: true, locale: 'de' }),
              }}
              canonical={toPage(``, { withBaseUrl: true, locale })}
          />
      <Rating title={t('home')} />
      <Wrap>
        <FollowUs position={floatingElementsPosition} />
        {/* <PaginationWithDots
                  paginationStyle={{ position: floatingElementsPosition } as CSSProperties}
                  currentSection={currentSection}
                  links={paginationLinks}
              /> */}
        <Fullscreen ref={bodyRef}>
          <Header menu={menu} />
          <Main title={mainPage.title} description={mainPage.description} />
          {services && <Services services={services} route={toPage} />}
          {domains && <Domains domains={domains} />}
          {technologies && <Technologies technologies={technologies} />}
          <Workflow
                      flow={{
                          id: 1,
                          title: workflow.title,
                          description: workflow.description,
                          list: workflow.flow.list,
                      }}
                  />
          <Portfolio cases={portfolio.list} title={portfolio.title} description={portfolio.description} />
          <BlogLanding blogPosts={blogPosts} />
          {about && <About about={about} />}
          {/* {faq && <Faq faqs={faq} background={primaryYellow} />} */}
          {/* <ContactSection /> */}
        </Fullscreen>
      </Wrap>
      {/* <Footer footerRef={footerRef} menu={footerMenu} /> */}
    </>
  );
}
