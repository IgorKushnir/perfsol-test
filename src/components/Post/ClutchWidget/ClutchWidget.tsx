// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import styled from "@emotion/styled";
import Script from "next/script";

import { primaryGrey, primaryYellow } from "@/components/ui";

export const ClutchWidget = () => (
  <Wrap>
    <Script src="https://widget.clutch.co/static/js/widget.js" />
    <Widget
      className="clutch-widget"
      data-url="https://widget.clutch.co"
      data-widget-type="8"
      data-height="300"
      data-nofollow="true"
      data-expandifr="true"
      data-scale="100"
      data-reviews="2121348,2072858,2060574,2050095,2024170,2017869"
      data-clutchcompany-id="1107370"
    />
  </Wrap>
);

const Wrap = styled.div`
  max-width: 915px;
  margin: 0 auto;
  box-shadow: 0 0 25px -10px ${primaryGrey};
`;

const Widget = styled.div`
  overflow: hidden;

  & > body {
    background: ${primaryYellow};
  }
`;
