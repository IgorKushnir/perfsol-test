import styled from "@emotion/styled";

import { Markdown } from "@/components/Markdown";
import {
  Container,
  ScreenSection,
  Tablet,
  TabletMiddle,
  Typography,
} from "@/components/ui";

import { Frameworks as FrameworksType } from "@/models/Frameworks";

import { Framework } from "./Framework";

type Props = {
  frameworks: FrameworksType;
};
export const Frameworks = ({ frameworks }: Props) => {
  if (!frameworks) {
    return null;
  }

  const { title, description, list } = frameworks;

  return (
    <ScreenSection>
      <Container>
        <Body>
          <Typography type="h2" as="h3">
            {title}
          </Typography>
          <Description>
            <Markdown>{description}</Markdown>
          </Description>
          <List>
            {list.map((framework) => (
              <Framework key={framework.id} framework={framework} />
            ))}
          </List>
        </Body>
      </Container>
    </ScreenSection>
  );
};

const Body = styled.div`
  max-width: 1300px;
  padding: 0 100px;
  margin: 0 auto;

  ${Tablet} {
    padding: 0;
  }

  ${TabletMiddle} {
    flex-wrap: wrap;
  }
`;

const Description = styled.div`
  margin: 28px 0px 48px;
`;

const List = styled.ul`
  padding-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
