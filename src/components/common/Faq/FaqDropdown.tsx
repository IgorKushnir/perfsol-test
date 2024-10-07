import styled from "@emotion/styled";
import { FaqType } from "@/models";
import { useState } from "react";

import { Typography, lightGray, primaryBlue } from "@/components/ui";

type Props = {
  faq: FaqType;
};
export const FaqDropdown = ({ faq }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <Dropdown>
      <TitleWrap onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <Typography type="t3">{faq.title}</Typography>
        <Arrow active={isDropdownOpen} />
      </TitleWrap>
      <Description active={isDropdownOpen}>
        <Typography type="b2">{faq.description}</Typography>
      </Description>
    </Dropdown>
  );
};

const Dropdown = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 100%;
    height: 1px;
    background: ${lightGray};
    opacity: 0.3;
  }
`;

const Arrow = styled.i<{ active: boolean }>`
  width: 2px;
  height: 3px;
  position: relative;
  left: -2px;
  transform: rotate(${({ active }) => (active ? "225deg" : "45deg")});
  border: solid ${primaryBlue};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transition: all 0.2s;
  cursor: pointer;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const Description = styled.div<{ active: boolean }>`
  top: 50px;
  max-height: ${({ active }) => (active ? "500px" : 0)};
  transition: max-height 0.25s ease-out;
  overflow: hidden;
  box-sizing: border-box;
  display: ${({ active }) => (active ? "block" : "none")};
`;
