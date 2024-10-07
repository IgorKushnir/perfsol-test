import styled from "@emotion/styled";
import { PaginationItem } from "@/models";
import Image from "next/image";
import { CSSProperties, useEffect, useMemo, useState } from "react";

import {
  DesktopLargeMax,
  MobileL,
  Tablet,
  middleGray,
  primaryBlue,
  primaryGrey,
} from "@/components/ui";

type Props = {
  paginationStyle?: CSSProperties;
  currentSection: number;
  links: PaginationItem[];
};

export const PaginationWithDots = ({
  paginationStyle,
  currentSection,
  links,
}: Props) => {
  const [animateChangePageDown, setAnimateChangePageDown] = useState(false);

  const nextSection = useMemo(() => {
    if (links[currentSection + 1] && currentSection !== links.length - 1) {
      return links[currentSection + 1].href;
    }
    return links[0].href;
  }, [currentSection, links]);

  useEffect(() => {
    let isScrolling: NodeJS.Timeout;
    let ticking = false;
    let hasScrollAlreadyStarted = false;

    let lastScrollTop = 0;

    const paginatorTransition = () => {
      clearTimeout(isScrolling);

      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (!hasScrollAlreadyStarted && st > lastScrollTop) {
        if (!ticking) {
          requestAnimationFrame(() => {
            window.requestAnimationFrame(function () {
              setAnimateChangePageDown(true);
              ticking = false;
            });

            ticking = true;
          });

          setTimeout(() => {
            requestAnimationFrame(() => {
              setAnimateChangePageDown(false);
              ticking = false;
            });

            ticking = true;
          }, 200);
        }
      }

      setTimeout(() => {
        hasScrollAlreadyStarted = true;
      }, 60);

      isScrolling = setTimeout(() => {
        hasScrollAlreadyStarted = false;
      }, 66);

      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", paginatorTransition);
    return () => {
      window.removeEventListener("scroll", paginatorTransition);
    };
  });

  return (
    <Wrap style={paginationStyle}>
      <Pointer
        href={`#${nextSection}`}
        pageScrolled={animateChangePageDown}
        itemRotated={currentSection === links.length - 1}
        aria-label="change page"
      >
        <Image
          src="/img/svg/mouse-down.svg"
          width={21}
          height={34}
          alt="mouse"
        />
      </Pointer>
      <Line />
      <nav>
        <List>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                active={currentSection === index}
                data-page-name={link.name}
                href={`#${link.href}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </List>
      </nav>
    </Wrap>
  );
};

const Line = styled.div`
  width: 1px;
  height: 52px;
  background-color: ${middleGray};
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 30%;
  right: 0;
  z-index: 999;
  margin-right: 42px;
  margin-bottom: 85px;
  width: max-content;
  row-gap: 16px;

  ${DesktopLargeMax} {
    margin-right: 34px;
    bottom: 0;
  }

  ${Tablet} {
    display: none;
  }

  @media screen and (orientation: landscape) and (max-height: ${MobileL}) {
    top: 111px;
    bottom: 15px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    margin-bottom: 20px;

    @media screen and (orientation: landscape) and (max-height: ${MobileL}) {
      margin-bottom: 10px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Link = styled.a<{ active: boolean }>`
  box-sizing: border-box;
  height: 13px;
  width: 13px;
  display: block;
  background-color: ${({ active }) =>
    active ? `${primaryGrey}` : "transparent"};
  border: 2px solid ${primaryGrey};
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  font-size: 0;

  &:hover {
    transform: scale(1.3);
    background-color: ${primaryBlue};
    border: 2px solid ${primaryBlue};
  }
`;

const Pointer = styled.a<{ pageScrolled: boolean; itemRotated: boolean }>`
  cursor: pointer;
  transition: all 0.1s ease-out;

  transform: ${({ pageScrolled, itemRotated }) =>
    `${pageScrolled ? "translateY(5px)" : ""}  ${
      itemRotated ? "rotate(180deg)" : ""
    } `};

  svg {
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
      color: ${primaryBlue};
    }
  }
`;
