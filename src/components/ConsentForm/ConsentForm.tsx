import cookieCutter from "@boiseitguru/cookie-cutter";
import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

import {
  Button,
  Tablet,
  Typography,
  primaryBlue,
  primaryGrey,
  white,
} from "@/components/ui";
import { ToggleInput } from "@/components/ui/ToggleInput";

import { toPolicy } from "@/utils/routes";

export function ConsentForm() {
  const { t } = useTranslation();
  const [decisionMade, setDecisionMade] = useState(true);
  const [necessary, setNecessary] = useState(true);
  const [marketing, setMarketing] = useState(true);
  const [personalization, setPersonalization] = useState(true);

  const sendConsent = useCallback((consent: object) => {
    if (typeof window === "undefined") return;

    window.dataLayer = window?.dataLayer || [];
    window.dataLayer.push({
      event: "consent_update",
      consent: consent,
    });
  }, []);

  useEffect(() => {
    if (cookieCutter.get("consent_agree") !== undefined) {
      setDecisionMade(true);
    } else {
      setDecisionMade(false);
    }
  }, [setDecisionMade]);

  const handleDecision = () => {
    const consent = {
      ad_storage: necessary ? "granted" : "denied",
      analytics_storage: necessary ? "granted" : "denied",
      ad_user_data: marketing ? "granted" : "denied",
      ad_personalization: personalization ? "granted" : "denied",
    };
    cookieCutter.set("consent_agree", JSON.stringify(consent), {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      path: "/",
    });

    sendConsent(consent);
    setDecisionMade(true);
  };

  return decisionMade ? (
    <></>
  ) : (
    <Wrap>
      <div>
        <Typography type="t1" color={white}>
          {t("consent.header")}
        </Typography>
        <Typography type="b3" color={white}>
          <>
            {t("consent.text")}{" "}
            <StyledLink href={toPolicy(t("routes.cookie-policy"))}>
              {t("footer.cookie-policy")}
            </StyledLink>
          </>
        </Typography>
      </div>
      <Grid>
        <Typography type="t3" color={white}>
          {t("consent.necessary")}
        </Typography>
        <Typography type="t3" color={white}>
          {t("consent.marketing")}
        </Typography>
        <Typography type="t3" color={white}>
          {t("consent.personalization")}
        </Typography>
        <ToggleInput
          name="necessary"
          value={necessary}
          onChange={() => setNecessary((prev) => !prev)}
        />
        <ToggleInput
          name="marketing"
          value={marketing}
          onChange={() => setMarketing((prev) => !prev)}
        />
        <ToggleInput
          name="personalization"
          value={personalization}
          onChange={() => setPersonalization((prev) => !prev)}
        />
      </Grid>
      <ButtonWrap>
        <Button size="stretch" onClick={() => handleDecision()}>
          {t("ok")}
        </Button>
      </ButtonWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 1.25rem 2.5rem;
  position: fixed;
  gap: 10px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${primaryGrey};
  z-index: 2000;

  ${Tablet} {
    flex-direction: column;
    gap: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 30px 24px;
  column-gap: 10px;
`;

const ButtonWrap = styled.div`
  width: 7.75rem;
  display: flex;
  align-items: center;

  ${Tablet} {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  color: ${primaryBlue};
`;
