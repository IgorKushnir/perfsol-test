import styled from "@emotion/styled";
import { Author } from "@/models";
import Image from "next/image";
import Link from "next/link";

import { SocialLink } from "@/components/SocialNetwork/";
import {
  CTAImageWrap,
  Color,
  RightCTAWrap,
  Tablet,
  Typography,
} from "@/components/ui";

import { getImageUrl } from "@/utils/images";
import { toAuthor } from "@/utils/routes";

type Props = {
  author: Author;
  titleColor: Color;
  descriptionColor: Color;
  showSocialNetworks?: boolean;
  showDescription?: boolean;
  sectionSize?: "s" | "m";
};

export const PostAuthor = ({
  author,
  descriptionColor,
  titleColor,
  showSocialNetworks,
  showDescription,
  sectionSize = "s",
}: Props) => {
  const { facebook, linkedin, name, position, description, image, slug } =
    author;
  return (
    <Wrap sectionSize={sectionSize}>
      <LeftWrap>
        <CTAImageWrap imageSize={sectionSize}>
          <Image
            width={sectionSize === "s" ? 60 : 100}
            height={sectionSize === "s" ? 60 : 100}
            src={getImageUrl(image)}
            alt={name}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </CTAImageWrap>
        {showSocialNetworks && (
          <SocialsWrap>
            {facebook && (
              <SocialLink size={30} ariaLabel="facebook page" href={facebook}>
                {/* <DynamicSvg
                  topImage="facebook-icon-dark"
                  bottomImage="facebook-icon-blue"
                  size={30}
                  altText="Facebook"
                /> */}
              </SocialLink>
            )}
            {linkedin && (
              <SocialLink href={linkedin} size={30} ariaLabel="linkedIn page">
                {/* <DynamicSvg
                  topImage="linkedin-icon-dark"
                  bottomImage="linkedin-icon-blue"
                  size={30}
                  altText="Linkedin"
                /> */}
              </SocialLink>
            )}
          </SocialsWrap>
        )}
      </LeftWrap>
      <RightCTAWrap>
        <Typography
          type="t6"
          color={titleColor}
          marginBottom={sectionSize === "s" ? 0 : 8}
        >
          Author
        </Typography>
        <Typography
          type="t3"
          color={descriptionColor}
          marginBottom={sectionSize === "s" ? 0 : 8}
        >
          <Link href={toAuthor(slug)}>{name}</Link>
        </Typography>
        <Typography type="b4" color={descriptionColor}>
          {position}
        </Typography>
        {showDescription && (
          <DescriptionTypography type="b2" color={descriptionColor}>
            {description}
          </DescriptionTypography>
        )}
      </RightCTAWrap>
    </Wrap>
  );
};

const Wrap = styled.div<{ sectionSize: "s" | "m" }>`
  padding: ${({ sectionSize }) => (sectionSize === "m" ? "2.5rem 0 3rem" : 0)};
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 2rem;
  border-top: 1px solid rgba(47, 51, 58, 0.2);

  ${Tablet} {
    padding: ${({ sectionSize }) =>
      sectionSize === "m" ? "2.5rem 0.5rem" : 0};
  }
`;

const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialsWrap = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;

  & > * {
    margin: 0;
  }
`;

const DescriptionTypography = styled(Typography)`
  padding-top: 1.5rem;
`;
