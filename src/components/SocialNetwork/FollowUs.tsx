import styled from "@emotion/styled";

import {
  DesktopLargeMax,
  MobileL,
  Tablet,
  Typography,
  primaryGrey,
} from "@/components/ui";

import { SocialLink } from "./SocialLink";

export type PositionType = "absolute" | "relative" | "fixed" | "static";

type Props = {
  position?: PositionType;
};

const getComponentStyles = (position?: PositionType) =>
  position
    ? `
            display: flex;
            justify-content: flex-start;
            position: ${position};
            height: auto;
            margin-left:  2.5rem;
            margin-bottom: 50px;
            transform: rotate(-90deg); 
            ${Tablet} {
                display: none; 
            }
            `
    : `
            display: none;
            justify-content: space-between;
            position: relative; 
            height: 50px;
            margin-top: 15px;
            ${Tablet} {
                display: flex; 
            }
            `;

export const FollowUs = ({ position }: Props) => (
  <Wrap position={position}>
    <IconsWrap>
      <SocialLink
        size={30}
        href="https://www.facebook.com/perfsol"
        ariaLabel="facebook page"
      >
        {/* <DynamicSvg
          topImage="facebook-icon-dark"
          bottomImage="facebook-icon-blue"
          size={30}
          altText="Facebook"
        /> */}
      </SocialLink>
      <SocialLink
        size={30}
        href="https://www.linkedin.com/company/perfsol/"
        ariaLabel="linkedIn page"
      >
        {/* <DynamicSvg
          topImage="linkedin-icon-dark"
          bottomImage="linkedin-icon-blue"
          size={30}
          altText="Linkedin"
        /> */}
      </SocialLink>
    </IconsWrap>
    <Line />
    <TitleWrap>
      <Typography type="b3">Follow us</Typography>
    </TitleWrap>
  </Wrap>
);

const Wrap = styled.div<{ position?: PositionType }>`
  width: 100%;
  max-width: 315px;
  align-items: center;
  bottom: 30%;
  left: 0;
  z-index: 999;
  transform-origin: top left;

  ${DesktopLargeMax} {
    bottom: 0;
  }
  ${Tablet} {
    position: absolute;
    bottom: 20px;
    left: 24px;
  }

  ${({ position }) => getComponentStyles(position)};

  @media screen and (orientation: landscape) and (max-height: ${MobileL}) {
    bottom: -15px;
  }
`;

const IconsWrap = styled.div`
  display: flex;
  gap: 8px;

  ${Tablet} {
    align-items: center;
  }
`;

const Line = styled.hr`
  width: 100px;
  height: 1px;
  margin: 0 20px;
  background: ${primaryGrey};
  opacity: 0.5;
  border: none;

  ${Tablet} {
    margin: 0;
  }

  @media screen and (orientation: landscape) and (max-height: ${MobileL}) {
    width: 60px;
  }
`;

const TitleWrap = styled.div`
  transform-origin: left;

  ${Tablet} {
    margin: 0;
  }
`;
