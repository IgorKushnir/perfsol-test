import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

import {
  Button,
  CTAImageWrap,
  RightCTAWrap,
  Tablet,
  Typography,
} from "@/components/ui";

import { getImageUrl } from "@/utils/images";

type Props = {
  title: string;
  description: string;
  name?: string;
  position?: string;
  avatar?: string;
};

export const CTA = ({ title, name, position, description, avatar }: Props) => (
  <Wrap>
    <LeftCross />

    <Body>
      <BlockTypography type="h2" as="h4" marginBottom={24}>
        {title}
      </BlockTypography>

      {(avatar || name || position) && (
        <AuthorWrap>
          {avatar && (
            <CTAImageWrap imageSize="m">
              <Image
                src={getImageUrl({ url: avatar })}
                width={80}
                height={80}
                alt="author"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </CTAImageWrap>
          )}
          <div>
            {name && (
              <BlockTypography type="t3" as="h5" marginBottom={8}>
                {name}
              </BlockTypography>
            )}
            {position && (
              <BlockTypography type="b4">{position}</BlockTypography>
            )}
          </div>
        </AuthorWrap>
      )}
      <BlockTypography type="b1" marginBottom={24}>
        {description}
      </BlockTypography>
      <Link href="/contact">
        <Button>Get a tech consultation</Button>
      </Link>
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

const AuthorWrap = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: stretch;
  gap: 24px;
`;

const Body = styled(RightCTAWrap)`
  max-width: 435px;
  margin: 0 auto;
`;
