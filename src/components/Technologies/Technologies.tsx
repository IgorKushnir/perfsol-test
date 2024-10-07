import styled from "@emotion/styled";
import { Technologies as TechnologiesType } from "@/models";

import { NativeGrid } from "@/components/common/NativeGrid";
import {
  ContactUsCenter,
  Container,
  ScreenSection,
  TabletMiddle,
} from "@/components/ui";

export type Props = {
  technologies: TechnologiesType;
};

export const Technologies = ({ technologies }: Props) => {
  const { title, description, list } = technologies;
  return (
    <ScreenSection data-target="section-item" id="technologies">
      <Container>
        <NativeGrid
          title={title}
          description={description}
          elements={list}
          gridTheme={"white"}
        />
        <ContactUs>Get in touch</ContactUs>
      </Container>
    </ScreenSection>
  );
};

const ContactUs = styled(ContactUsCenter)`
  ${TabletMiddle} {
    display: none;
  }
`;
