/* eslint-disable  @typescript-eslint/no-explicit-any */

import styled from "@emotion/styled";
import { useState } from "react";

import useDocumentScrollThrottled from "@/hooks/useDocumentScrollThrottled";

export const StickyContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 300;

  useDocumentScrollThrottled((callbackData: any) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });
  return (
    <Wrap
      shouldShowShadow={shouldShowShadow}
      shouldHideHeader={shouldHideHeader}
    >
      {children}
    </Wrap>
  );
};

const Wrap = styled.div<{
  shouldHideHeader: boolean;
  shouldShowShadow: boolean;
}>`
  max-width: 100vw;
  & > header {
    transform: translateY(0);
    transition: transform 0.5s ease;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    ${({ shouldShowShadow }) =>
      shouldShowShadow && "box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13);"}
    ${({ shouldHideHeader }) =>
      shouldHideHeader &&
      "transform: translateY(-110%); transition: transform 0.5s ease;"}
  }
`;
