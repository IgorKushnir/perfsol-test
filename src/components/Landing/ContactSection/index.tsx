import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { useIntersectionObserver } from "react-intersection-observer-hook";

import { ContactModal } from "@/components/Modal/ContactModal";
import { Video } from "@/components/Video";
import {
  Container,
  DesktopLargeMax,
  MobileMiddle,
  ScreenSection,
  TabletMiddle,
  Typography,
  headerHeight,
} from "@/components/ui";

const Form = dynamic(() => import("./Form"));

export function ContactSection() {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;
  const { t } = useTranslation();

  return (
    <>
      <ContactScreen id="contact" ref={ref} data-target="section-item">
        <Container>
          <Body>
            <TitleWrap>
              <Typography type="h2" as="h2">
                {t("contacts.dropMessage")}
              </Typography>
            </TitleWrap>
            <DesktopDiv></DesktopDiv>
            <div>{isVisible && <Form />}</div>
            <VideoWrap>
              <Video name="boy" preload="none" />
            </VideoWrap>
          </Body>
        </Container>
      </ContactScreen>
      <ContactModal />
    </>
  );
}

const ContactScreen = styled(ScreenSection)`
  background-image: url("/img/svg/contact-lines.svg");
  background-repeat: no-repeat, no-repeat;
  background-position: 100% 100%, 100% 100%;
  box-sizing: border-box;
  display: flex;
  min-height: calc(100vh - ${headerHeight});
  overflow: hidden;

  ${DesktopLargeMax} {
    background-size: 60%;
  }

  @media (min-height: 1100px) {
    min-height: calc(50vh - ${headerHeight});
  }
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 54px auto;
  column-gap: 40px;
  align-content: space-evenly;
  position: relative;

  ${TabletMiddle} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    row-gap: 20px;
    column-gap: 0;
    align-content: space-between;
    justify-items: stretch;
  }
`;

const TitleWrap = styled.div`
  @media (max-width: 1365px) {
    font-size: 26px;
    line-height: 26px;
  }

  ${TabletMiddle} {
    padding: 0;
  }

  ${MobileMiddle} {
    font-size: 18px;
  }
`;

const VideoWrap = styled.div`
  position: relative;
  align-self: end;
  max-width: 576px;
  min-width: 360px;
  max-height: 360px;
  min-height: 200px;
  margin-bottom: 20px;

  ${TabletMiddle} {
    display: none;
  }

  img {
    width: 100%;
  }
`;

const DesktopDiv = styled.div`
  display: block;

  ${TabletMiddle} {
    display: none;
  }
`;
