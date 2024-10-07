import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import { MobileLarge, Tablet, Typography } from "@/components/ui";

type Props = {
  title: string;
  type: string;
};
export function Breadcrumbs({ title, type }: Props) {
  const [showBreadcrumb, toggleBreadcrumbs] = useState(false);

  const processScroll = () => {
    const browserHeight = window.innerHeight;
    const scroll = window.scrollY;
    toggleBreadcrumbs(scroll > browserHeight ? true : false);
  };

  useEffect(() => {
    document.addEventListener("scroll", processScroll);

    return () => document.removeEventListener("scroll", processScroll);
  }, []);

  return (
    <Wrap show={showBreadcrumb}>
      <div>
        <Title type="t5" textTransform="uppercase">
          {title}
        </Title>
      </div>
      <Line />
      <TitleWrap>
        <Typography type="b3">{type}</Typography>
      </TitleWrap>
    </Wrap>
  );
}

const Title = styled(Typography)`
  display: block;
  max-width: 350px;
  max-height: 36px;
  margin-left: 35px;
  overflow: hidden;

  ${Tablet} {
    transform: rotate(0);
    position: static;
  }
`;

const Wrap = styled.div<{ show: boolean }>`
  position: sticky;
  top: 95%;
  bottom: 60px;
  margin-left: 42px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-end;
  left: 60px;
  z-index: 999;
  transform: rotate(-90deg);
  transform-origin: top left;
  height: 0;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 0.25s;

  ${MobileLarge} {
    display: none;
  }

  ${Tablet} {
    display: none;
  }
`;

const Line = styled.hr`
  width: 100px;
  height: 1px;
  background: #2f333a;
  opacity: 0.5;
  border: none;
  margin: 0 20px;
  transform-origin: left;
`;

const TitleWrap = styled.div`
  transform-origin: left;
`;
