import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";

import { FollowUs } from "@/components/SocialNetwork";
import { Video } from "@/components/Video";
import {
  ContactUs,
  DesktopLarge,
  DesktopMiddle,
  DesktopSmall,
  HeaderContainer,
  MobileMiddle,
  Tablet,
  TabletMiddle,
  Typography,
  headerHeight,
  primaryGrey,
  primaryYellow,
} from "@/components/ui";

type Props = {
  title: string;
  description: string;
};
export function Main({ title, description }: Props) {
  const { t } = useTranslation("common");
  return (
    <Wrap id="main" data-target="section-item">
      <FollowUs />
      <HeaderContainer>
        <Typography as="h1" type="h1">
          {title}
        </Typography>
        <TagLineWrapper>
          <Branding>
            <Tagline>
              <Typography type="b1">{description}</Typography>
            </Tagline>
            <ContactButton href="/contact">{t("cta.contactUs")}</ContactButton>
          </Branding>
          <ImageWrap>
            <Video name="girl" bottomShift="auto" preload="none" />
          </ImageWrap>
        </TagLineWrapper>
      </HeaderContainer>
    </Wrap>
  );
}

const TagLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContactButton = styled(ContactUs)`
  margin: 42px 35px 30px;
`;

const Wrap = styled.main`
  background-color: ${primaryYellow};
  background-image: url("/img/svg/header-lines.svg"),
    url("/img/svg/header-cross.svg");
  background-repeat: no-repeat, no-repeat;
  background-position: -30px -50px, 56px 46px;
  position: relative;
  overflow: hidden;
  display: flex;
  min-height: 600px;
  box-sizing: border-box;
  padding: 70px 0 0 0;
  ${Tablet} {
    background-image: url("/img/svg/header-lines.svg");
    background-position: -60px 40%, 50% 25px;
    background-size: 660px 370px, 33px 33px;
    min-height: initial;
    height: auto;
    min-height: 0;
  }
  ${DesktopSmall} {
    padding: 66px 0;
  }
  @media (min-height: 1100px) {
    min-height: calc(50vh - ${headerHeight});
  }
`;

const Branding = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  ${DesktopSmall} {
    width: 100%;
  }
  ${Tablet} {
    order: -1;
  }
`;

const Tagline = styled.div`
  margin-top: 29px;
  border-left: 3px solid ${primaryGrey};
  margin-left: 5px;
  padding-left: 39px;
  ${TabletMiddle} {
    margin-top: 37px;
  }
  ${Tablet} {
    margin-top: 74px;
  }
  ${DesktopMiddle} {
    font-size: 18px;
  }
  ${Tablet} {
    font-size: 15px;
    margin-top: 15px;
    line-height: 20px;
  }
  ${MobileMiddle} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 60%;
  height: 100vh;
  max-width: 614px;
  max-height: 401px;
  align-self: center;

  ${DesktopMiddle} {
    max-width: 536px;
    max-height: 348px;
  }

  ${DesktopSmall} {
    max-width: 395px;
    max-height: 258px;
    align-self: end;
  }

  @media (min-width: 1500px) {
    width: 40vw;
  }

  ${DesktopLarge} {
    width: 30vw;
  }
  ${DesktopSmall} {
    width: 100%;
  }
  ${TabletMiddle} {
    max-width: 312px;
    max-height: 204px;
    position: relative;
    bottom: -70px;
  }
  ${Tablet} {
    display: none;
  }
`;
