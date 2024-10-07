import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import { PropsWithChildren, ReactNode } from "react";

import {
  DesktopMiddle,
  DesktopSmall,
  MobileSmall,
  Tablet,
  TabletMiddle,
  Typography,
  black,
  primaryBlue,
  primaryYellow,
  white,
} from "@/components/ui";

type Props = {
  isWhite?: boolean;
  title: string;
  text: ReactNode;
};

export const SectionPageHeader = ({
  isWhite,
  title,
  text,
  children,
}: PropsWithChildren<Props>) => {
  const { t } = useTranslation();

  return (
    <Screen isWhite={!!isWhite}>
      <Wrap>
        <Typography as="h1" type="h1">
          {title}
        </Typography>
        <ContentWrap>
          <Branding>
            <Tagline>
              <Typography type="b1">{text}</Typography>
            </Tagline>
            {title !== "404" && (
              <StyledLink href="/contact">{t("cta.contactUs")}</StyledLink>
            )}
          </Branding>
          <Right>{children}</Right>
        </ContentWrap>
      </Wrap>
    </Screen>
  );
};

const Screen = styled.div<{ isWhite: boolean }>`
  box-sizing: border-box;
  padding-top: 70px;
  background-color: ${({ isWhite }) => (isWhite ? white : primaryYellow)};

  ${Tablet} {
    padding-top: 30px;
  }
`;

const Wrap = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 83vw;
  max-width: 1300px;
  padding-left: 4.5vw;
  position: relative;

  ${DesktopSmall} {
    padding-left: 6vw;
  }

  ${TabletMiddle} {
    padding-left: 0;
    width: 86vw;
  }
`;

const Tagline = styled.div`
  position: relative;
  margin-top: 74px;
  margin-left: 5px;
  padding-left: 35px;
  font-size: 20px;
  line-height: 28px;
  border-left: none;

  &::before {
    content: "";
    width: 5px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${black};
  }

  ${TabletMiddle} {
    margin-top: 37px;
  }

  ${Tablet} {
    margin-top: 16px;
    font-size: 15px;
    line-height: 20px;
  }

  ${DesktopMiddle} {
    font-size: 18px;
  }

  ${MobileSmall} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const Right = styled.div`
  position: relative;
  width: 60%;
  height: 22vw;
  max-height: 480px;

  ${DesktopSmall} {
    width: 100%;
    height: 30vw;
    max-width: 465px;
  }
`;

const StyledLink = styled(Link)`
  width: fit-content;
  min-width: max-content;
  height: 18px;
  margin: 40px 35px 30px;
  padding: 12px 38px;
  border: none;
  border-radius: 5px;
  background: ${primaryBlue};
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${white};
  text-decoration: none;
  line-height: 18px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Branding = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  ${DesktopSmall} {
    width: 100%;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  gap: 16px;

  ${DesktopSmall} {
    display: block;
  }
`;
