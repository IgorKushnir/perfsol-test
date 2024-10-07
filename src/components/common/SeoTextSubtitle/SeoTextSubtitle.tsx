import styled from "@emotion/styled";

import {
  Color,
  Container,
  ScreenSection,
  Tablet,
  TabletMiddle,
  Typography,
} from "@/components/ui";

type Props = {
  backgroundColor?: Color;
  content?: {
    title: string;
    description: string;
  };
};

export const SeoTextSubtitle = ({ backgroundColor, content }: Props) => {
  if (!content) {
    return null;
  }

  const { title, description } = content;

  return (
    <ScreenSection backgroundColor={backgroundColor}>
      <Container>
        <Body>
          <TitleWrap>
            <Typography type="h2" as="h3">
              {title}
            </Typography>
            <Line />
          </TitleWrap>

          <Description>
            <Typography type="b3">{description}</Typography>
          </Description>
        </Body>
      </Container>
    </ScreenSection>
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  position: relative;
  min-height: 168px;

  ${Tablet} {
    flex-direction: column;
  }

  ${TabletMiddle} {
    flex-wrap: wrap;
  }
`;

const Description = styled.div`
  width: 70%;

  ${TabletMiddle} {
    width: 100%;
    margin-top: 20px;
  }
`;

const Line = styled.div`
  height: 3px;
  width: 100%;
  background: #44c2f7;
  z-index: 1;
  bottom: 0;
`;

const TitleWrap = styled.div`
  width: 30%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  ${TabletMiddle} {
    width: 100%;
  }
`;
