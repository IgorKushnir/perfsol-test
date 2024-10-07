import { FaqType } from "@/models";

import { FaqContent } from "@/components/common/Faq/FaqContent";
import { Color, Container, ScreenSection } from "@/components/ui";

export type Props = {
  faqs: FaqType[];
  background?: Color;
};

export const Faq = ({ faqs, background }: Props) => {
  if (!faqs) {
    return null;
  }

  return (
    <ScreenSection
      data-target="section-item"
      id="faq"
      backgroundColor={background}
    >
      <Container>
        <FaqContent faqs={faqs} />
      </Container>
    </ScreenSection>
  );
};
