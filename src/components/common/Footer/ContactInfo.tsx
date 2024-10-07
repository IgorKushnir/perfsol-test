import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { company as companyData } from "@/components/Seo";

import {
  Button,
  DesktopSmall,
  Tablet,
  TabletMiddle,
  Typography,
  primaryBlue,
  primaryGrey,
  white,
} from "@/components/ui";

export function ContactInfo({ company }: { company: typeof companyData }) {
  const { t } = useTranslation();
  const { offices } = company;
  return (
    <ContactInfoWrap>
      <AddressWrap>
        <StyledImage
          src="/img/svg/place-icon.svg"
          width={24}
          height={24}
          alt="address"
        />
        <Content>
          <Typography type="t1" as="h3" color={white}>
            {t("contacts.visitUs")}
          </Typography>

          {offices.map((office, index) => (
            <TextLink
              key={index}
              href={office.googleMapsLink}
              target="_blank"
              rel="nofollow noreferrer"
            >
              <Text type="b3" color={white}>
                {office.addressLocality}, {office.streetAddress}
              </Text>
            </TextLink>
          ))}
        </Content>
      </AddressWrap>
      <AddressWrap>
        <StyledImage
          src="/img/svg/email-icon.svg"
          width={24}
          height={24}
          alt="email"
        />
        <Content>
          <Typography type="t1" as="h3" color={white}>
            {t("contacts.sendEmail")}
          </Typography>
          <TextLink href={`mailto:info@perfsol.tech`} rel="nofollow">
            <Text type="b3" color={white}>
              info@perfsol.tech
            </Text>
          </TextLink>
        </Content>
      </AddressWrap>
      <AddressWrap>
        <StyledImage
          src="/img/svg/whatsapp-icon.svg"
          width={24}
          height={24}
          alt="Whatsapp"
        />
        <Content>
          <TextLink
            href="https://api.whatsapp.com/send/?phone=380630687002&text&app_absent=0"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Text type="t1" as="h3" color={white}>
              {t("contacts.whatsapp")}
            </Text>
          </TextLink>
        </Content>
      </AddressWrap>
      <Link href="/contact">
        <StyledButton apperance="white" size="stretch">
          {t("cta.contactUs")}
        </StyledButton>
      </Link>
    </ContactInfoWrap>
  );
}

const StyledImage = styled(Image)`
  position: relative;
  top: 6px;
`;

const AddressWrap = styled.div`
  width: 100%;
  min-width: 176px;
  display: flex;
  & svg {
    position: relative;
    top: 6px;
  }
`;

const ContactInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
  align-items: center;
  background-color: #23262c;
  ${DesktopSmall} {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  ${TabletMiddle} {
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    gap: 50px;
    flex-wrap: wrap;
    padding: 40px 22px;
  }
  ${Tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  color: ${primaryGrey};
  ${TabletMiddle} {
    width: 100%;
  }
`;

const TextLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Text = styled(Typography)`
  transition: color 0.25s;
  &:hover {
    color: ${primaryBlue};
  }
`;
const StyledButton = styled(Button)`
  min-width: 158px;
`;
