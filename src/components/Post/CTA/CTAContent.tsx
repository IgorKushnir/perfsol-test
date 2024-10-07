import styled from "@emotion/styled";
import Link from "next/link";

import { Button, RightCTAWrap, Tablet, Typography } from "@/components/ui";

type Props = {
  title: string;
  description: string;
};

export const CTAContent = ({ title, description }: Props) => (
  <Wrap>
    <LeftCross />

    <Body>
      <BlockTypography type="h2" as="h4" textAlign="center" marginBottom={24}>
        {title}
      </BlockTypography>
      <BlockTypography type="b1" textAlign="center" marginBottom={24}>
        {description}
      </BlockTypography>
      <ButtonWrap>
        <Link href="/contact">
          <Button>Get a tech consultation</Button>
        </Link>
      </ButtonWrap>
    </Body>
  </Wrap>
);

const Wrap = styled.div`
  position: relative;
  padding: 32px 0;
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  margin: 64px 0;

  ${Tablet} {
    padding: 16px 8px;
    gap: 16px;
  }

  &::before {
    position: absolute;
    bottom: 0;
    left: -100vw;
    right: -100vw;
    overflow: hidden;
    content: "";
    height: 100%;
    background-color: rgba(96, 105, 121, 0.09);
    z-index: -1;
  }

  &::after {
    display: block;
    content: "";
    position: absolute;
    background: url("/img/svg/vacancies-lines.svg");
    top: -20px;
    left: 0;
    width: 800px;
    height: 120%;
    z-index: -1;
    transform: scale(1.4) rotate(-10deg);
  }
`;

const BlockTypography = styled(Typography)`
  display: block;
`;

const LeftCross = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  background: url("/img/svg/crosswhite.svg");
  left: -50px;
  top: 36px;
`;

const Body = styled(RightCTAWrap)`
  max-width: 568px;
  margin: 0 auto;
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
