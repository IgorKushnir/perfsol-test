import styled from "@emotion/styled";
import { AdvantagesType } from "@/models";

import { Markdown } from "@/components/Markdown";
import { Advantage } from "@/components/common/Advantages/Advantage";
import {
  Container,
  MobileLarge,
  ScreenSection,
  Typography,
  backgroundGray,
} from "@/components/ui";

type Props = {
  advantages: AdvantagesType;
};

export const Advantages = ({ advantages }: Props) => {
  if (!advantages) {
    return null;
  }

  const { title, description, list } = advantages;

  return (
    <ScreenSection backgroundColor={backgroundGray}>
      <Container>
        <div>
          <Typography type="h2" as="h2">
            {title}
          </Typography>
        </div>
        <MarkdownWrap>
          <Markdown>{description}</Markdown>
        </MarkdownWrap>
        <Grid>
          {list.map((advantage, i) => (
            <Advantage advantage={advantage} number={i + 1} key={i} />
          ))}
        </Grid>
      </Container>
    </ScreenSection>
  );
};

const MarkdownWrap = styled.div`
  margin-top: 28px;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  column-gap: 20px;
  row-gap: 20px;
  justify-content: space-between;

  @media (max-width: 1380px) {
    justify-content: center;
  }

  ${MobileLarge} {
    align-items: center;
  }
`;
