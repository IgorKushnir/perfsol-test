import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import { ConsentForm } from "@/components/ConsentForm";
import { company } from "@/components/Seo";
import { SocialLink } from "@/components/SocialNetwork";
import { FooterProps } from "@/components/common/Footer/FooterProps";
import {
  Container,
  DesktopMiddle,
  DesktopSmall,
  MobileLarge,
  MobileMiddle,
  Tablet,
  TabletMiddle,
  Typography,
  primaryGrey,
  white,
} from "@/components/ui";

import { toPolicy } from "@/utils/routes";

import { ContactInfo } from "./ContactInfo";
import { FooterLink } from "./FooterLink";
import { FooterMenuColumn } from "./FooterMenuColumn";

export function Footer({ footerRef, menu }: FooterProps) {
  const { t } = useTranslation();
  return (
    <>
      <FooterWrap ref={footerRef}>
        <Container>
          <Wrap>
            <FooterContainer>
              <Navigation>
                <Menu>
                  {menu.map((link, index) => (
                    <FooterMenuColumn link={link} key={index} />
                  ))}
                </Menu>
              </Navigation>
              <ContactInfo company={company} />
            </FooterContainer>
            <BottomWrapper>
              <SocailsWrapper>
                <SocialsWrap>
                  <SocialLink
                    size={48}
                    href={company.clutchLink}
                    ariaLabel="clutch page"
                  >
                    {/* <DynamicSvg
                      topImage="clutch-icon-white"
                      bottomImage="clutch-icon-blue"
                      size={48}
                      altText="Clutch"
                    /> */}
                  </SocialLink>
                  <SocialLink
                    size={48}
                    href={company.facebookLink}
                    ariaLabel="facebook page"
                  >
                    {/* <DynamicSvg
                      topImage="facebook-icon-white"
                      bottomImage="facebook-icon-blue"
                      size={48}
                      altText="Facebook"
                    /> */}
                  </SocialLink>
                  <SocialLink
                    size={48}
                    href={company.linkedInLink}
                    ariaLabel="linkedIn page"
                  >
                    {/* <DynamicSvg
                      topImage="linkedin-icon-white"
                      bottomImage="linkedin-icon-blue"
                      size={48}
                      altText="Linkedin"
                    /> */}
                  </SocialLink>
                </SocialsWrap>
                <ContactWrapper>
                  <Link href={toPolicy(t("routes.editorial-policy"))}>
                    <FooterLink type="b4" color={white}>
                      {t("footer.editorial-policy")}
                    </FooterLink>
                  </Link>
                  <Link href={toPolicy(t("routes.privacy-policy"))}>
                    <FooterLink type="b4" color={white}>
                      {t("footer.terms")}
                      {" | "}
                      {t("footer.privacy")}
                    </FooterLink>
                  </Link>
                  <Link href={toPolicy(t("routes.cookie-policy"))}>
                    <FooterLink type="b4" color={white}>
                      {t("footer.cookie-policy")}
                    </FooterLink>
                  </Link>
                  <Typography type="b4" color={white} textAlign="end">
                    {t("footer.rightsReserved")}
                  </Typography>
                </ContactWrapper>
              </SocailsWrapper>
            </BottomWrapper>
          </Wrap>
        </Container>
      </FooterWrap>
      <ConsentForm />
    </>
  );
}

const FooterWrap = styled.footer`
  padding: 4.5rem 0;
  background-color: ${primaryGrey};
`;

const Wrap = styled.div`
  margin: 0 auto;

  ${Tablet} {
    padding: 0 2rem;
  }
  @media (max-width: 560px) {
    padding: 0;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1300px;
  column-gap: 2rem;

  ${DesktopMiddle} {
    padding: 0 2rem;
  }
  ${DesktopSmall} {
    padding: 0;
    flex-direction: column;
  }

  @media (max-width: 1300px) {
    margin: 0 auto;
    align-items: center;
    row-gap: 2.5rem;
  }

  ${MobileLarge} {
    display: flex;
    flex-direction: column;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  flex: 1 0 40%;
  ${DesktopSmall} {
    overflow: auto;
  }

  ${TabletMiddle} {
    width: 100%;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 2.5rem;
  row-gap: 1rem;

  ${DesktopMiddle} {
    column-gap: 0.5rem;
  }

  ${DesktopSmall} {
    width: 100%;
  }

  ${TabletMiddle} {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-height: 400px;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: 0;
    align-content: center;
  }

  ${Tablet} {
    max-height: 500px;
  }

  @media (max-width: 620px) {
    max-height: 650px;
  }

  @media (max-width: 560px) {
    column-gap: 2rem;
  }

  ${MobileLarge} {
    grid-template-columns: 1fr;
    justify-content: center;
  }

  ${MobileMiddle} {
    max-height: max-content;
  }
`;

const SocailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 3rem;
  max-width: 100%;

  ${DesktopMiddle} {
    padding: 0 2rem;
  }

  ${DesktopSmall} {
    margin-top: 0;
  }

  ${MobileMiddle} {
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  ${Tablet} {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;
const BottomWrapper = styled.div`
  ${DesktopSmall} {
    border-top: none;
  }

  ${Tablet} {
    padding-top: 1.5rem;
    flex-direction: column;
  }
`;
const SocialsWrap = styled.div`
  margin-right: 1.5rem;
  color: ${white};
  display: flex;
  gap: 24px;

  ${DesktopSmall} {
    margin-right: 0;
  }

  ${Tablet} {
    gap: 0.5rem;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 2.5rem;

  ${TabletMiddle} {
    align-items: center;
  }

  ${Tablet} {
    flex-wrap: wrap;
    column-gap: 1.5rem;
  }

  ${MobileLarge} {
    align-items: center;
  }

  ${MobileMiddle} {
    justify-content: flex-start;
  }
`;
