import styled from "@emotion/styled";
import { CaseStudyItem } from "@/models";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

import { Typography, greyLine, white } from "@/components/ui";
import { Tablet } from "@/components/ui";

import { getImageUrl } from "@/utils/images";
import { toCaseStudy } from "@/utils/routes";

export type Props = { project: CaseStudyItem };

function PortfolioGridItem({ project }: Props) {
  const imageUrl = getImageUrl(project.mainImage);
  const { t } = useTranslation("case-studies");

  return (
    <Item>
      <StyledLink href={toCaseStudy(project.slug)}>
        <ImageWrap>
          {imageUrl && (
            <Image
              src={imageUrl}
              fill
              style={{
                objectFit: "contain",
              }}
              alt={project.title}
              sizes="100vw"
            />
          )}
        </ImageWrap>
        <ProjectInfo>
          <Title as="h3" type="t1">
            {project.title}
          </Title>
          {project.country?.name && (
            <TextWrap>
              <Typography type="t1">{t("page.country")}: </Typography>
              <Typography type="b1">{project.country?.name}</Typography>
            </TextWrap>
          )}
          {project.industry?.name && (
            <TextWrap>
              <Typography type="t1">{t("page.industry")}: </Typography>
              <Typography type="b1">{project.industry?.name}</Typography>
            </TextWrap>
          )}
          <Text type="b1">{project.teaser}</Text>
        </ProjectInfo>
      </StyledLink>
    </Item>
  );
}

export default PortfolioGridItem;

const Title = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Item = styled.li`
  list-style: none;
  width: calc((100% - 24px) / 2);
  max-width: 700px;
  ${Tablet} {
    width: 100%;
  }
  position: relative;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid ${greyLine};
  background: ${white};
  box-shadow: 0px 6px 20px 10px rgba(200, 210, 226, 0.4);
`;

const Text = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ImageWrap = styled.div`
  width: 370px;
  max-width: 100%;
  height: 210px;
  margin: 0 auto 8px;
  position: relative;
`;

const ProjectInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TextWrap = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  padding: 24px;
  display: block;
`;
