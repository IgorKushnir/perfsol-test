import styled from "@emotion/styled";
import { Services as ServicesType } from "@/models";

import { Markdown } from "@/components/Markdown";
import {
  Container,
  DesktopSmall,
  ScreenSection,
  TabletMiddle,
  Typography,
} from "@/components/ui";

import { ToRoute } from "@/utils/routes";

import { ServiceWrapper } from "./ServiceWrapper";

type Props = {
  services: ServicesType;
  route: ToRoute;
};

export const Services = ({ services, route }: Props) => {
  const { title, description, list } = services;
  return (
    <ScreenSection data-target="section-item" id="services">
      <Container>
        <Typography type="h2" as="h2" marginBottom={24}>
          {title}
        </Typography>
        <MarkdownWrap>
          <Markdown>{description}</Markdown>
        </MarkdownWrap>
        <List>
          {list.map((service, i) => (
            <ServiceWrapper key={i} service={service} route={route} />
          ))}
        </List>
      </Container>
    </ScreenSection>
  );
};

const MarkdownWrap = styled.div`
  margin-bottom: 54px;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
  justify-content: space-between;

  ${DesktopSmall} {
    column-gap: 24px;
    row-gap: 24px;
  }
  ${TabletMiddle} {
    column-gap: 16px;
    row-gap: 16px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
