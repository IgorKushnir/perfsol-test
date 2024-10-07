import styled from "@emotion/styled";
import { FaqType } from "@/models";
import { useTranslation } from "next-i18next";
import { FAQPageJsonLd } from "next-seo";

import { FaqDropdown } from "@/components/common/Faq/FaqDropdown";
import { ContactUsCenter, Typography } from "@/components/ui";

type Props = {
  faqs: FaqType[];
};
export const FaqContent = ({ faqs }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <FAQPageJsonLd
        mainEntity={faqs.map((faqItem) => ({
          questionName: faqItem.title,
          acceptedAnswerText: faqItem.description,
        }))}
      />
      <Typography type="h4">FAQ</Typography>
      <Content>
        {faqs.map((faq, i) => (
          <FaqDropdown faq={faq} key={i} />
        ))}
      </Content>
      <ContactUsCenter href={"#contact"}>
        {t("cta.askQuestion")}
      </ContactUsCenter>
    </>
  );
};

const Content = styled.ul`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;
