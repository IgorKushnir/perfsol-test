import styled from "@emotion/styled";
import { RelatedBlogPost } from "@/models";
import { useTranslation } from "next-i18next";
// import Image from "next/image";

// import { LatestPosts } from "@/components/LatestPosts";
import {
  ArrowBtn,
  Container,
  ScreenSection,
  Tablet,
  TabletMiddle,
  Typography,
  primaryYellow,
} from "@/components/ui";

import { toBlog } from "@/utils/routes";

export type Props = { blogPosts: RelatedBlogPost[] };

export function BlogLanding({}: Props) {
  const { t } = useTranslation();
  return (
    <Wrap data-target="section-item" id="blog" backgroundColor={primaryYellow}>
      <Container>
        <Body>
          <Header>
            <ImageWrap>
              {/* <Image
                src="/img/svg/BlogHeaderImg.svg"
                width={340}
                height={260}
                alt="Perfsol blog"
                loading="lazy"
              /> */}
            </ImageWrap>
            <InfoWrapper>
              <Typography as="h2" type="h2" marginBottom={20}>
                {t("blog.title")}
              </Typography>
              <Subtitle type="b3" marginBottom={24}>
                {t("blog.subtitle")}
              </Subtitle>
            </InfoWrapper>
            <ButtonWrap>
              <ArrowBtn href={toBlog()}>{t("cta.seeAllArticles")}</ArrowBtn>
            </ButtonWrap>
          </Header>
          <ListWrapper>
            <LatestPostsWrapper>
              {/* <LatestPosts items={blogPosts} /> */}
            </LatestPostsWrapper>
            <BottomButtonWrap>
              <ArrowBtn href={toBlog()}>{t("cta.seeAllArticles")}</ArrowBtn>
            </BottomButtonWrap>
          </ListWrapper>
        </Body>
      </Container>
    </Wrap>
  );
}

const Subtitle = styled(Typography)`
  @media (min-width: 110px) {
    max-width: 410px;
  }
`;

const Wrap = styled(ScreenSection)`
  background-repeat: no-repeat, no-repeat;
  background-image: url("/img/svg/vacancies-lines.svg"),
    url("/img/svg/header-cross.svg");
  background-position: -25px -150px, 99px 82px;
  position: relative;
  overflow: hidden;
  display: flex;

  ${Tablet} {
    background-image: none;
  }
`;

const Body = styled.div`
  @media (min-width: 1100px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Header = styled.div`
  padding-bottom: 26px;
  border-bottom: 1px solid #fff;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1100px) {
    border-bottom: none;
    display: block;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 52px;

  ${TabletMiddle} {
    display: none;
  }
`;

const InfoWrapper = styled.div`
  ${TabletMiddle} {
    margin-bottom: 32px;
  }

  ${Tablet} {
    padding-left: 0;
  }
`;

const ButtonWrap = styled.div`
  ${TabletMiddle} {
    display: none;
  }
`;

const ListWrapper = styled.div`
  @media (min-width: 1100px) {
    display: flex;
    align-items: center;
    flex-basis: 50%;
  }
`;

const BottomButtonWrap = styled.div`
  display: none;

  ${TabletMiddle} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LatestPostsWrapper = styled.div`
  margin-bottom: 30px;
`;
