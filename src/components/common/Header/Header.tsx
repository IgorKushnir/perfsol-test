import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  ContactUs,
  Container,
  DesktopMiddle,
  Tablet,
  TabletMiddle,
  headerHeight,
  primaryBlue,
} from "@/components/ui";

import { MenuItem } from "@/models/Menu";

import { HeaderLink } from "./HeaderLink";
import { StickyContainer } from "./StickyContainer";

type Props = {
  menu: MenuItem[];
};

export function Header({ menu }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname();

  const landingPageLinkClick = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "unset";
      return !prev;
    });
  };

  return (
    <StickyContainer>
      <Wrap>
        <HeaderContainer>
          <Body>
            {pathname === "/" ? (
              <Image
                src="/img/svg/logo.svg"
                width={91}
                height={30}
                alt="Perfsol logo"
              />
            ) : (
              <Logo href="/" aria-label="Perfsol">
                <Image
                  src="/img/svg/logo.svg"
                  width={91}
                  height={30}
                  alt="Perfsol logo"
                />
              </Logo>
            )}
            <Burger active={isMobileMenuOpen} onClick={toggleMobileMenu}>
              <span />
            </Burger>
            <Menu active={isMobileMenuOpen}>
              <List>
                {menu.map((link, i) => (
                  <HeaderLink
                    link={link}
                    landingPageLinkClick={landingPageLinkClick}
                    key={i}
                  />
                ))}
              </List>
            </Menu>
            <ContactButton href="/contact">
              {t("mainMenu.contact")}
            </ContactButton>
          </Body>
        </HeaderContainer>
      </Wrap>
    </StickyContainer>
  );
}

const Wrap = styled.header`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(5px);
  z-index: 99999;
  transition: all 0.5s ease-in-out;
  max-width: 100vw;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.25s ease;

  ${TabletMiddle} {
    height: ${headerHeight};
  }
`;

const Logo = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  transition: all 0.25s ease;

  ${TabletMiddle} {
    margin-right: 0.5rem;
  }
`;

const Burger = styled.div<{ active: boolean }>`
  display: none;
  cursor: pointer;

  ${TabletMiddle} {
    display: block;
    position: relative;
    width: 18px;
    height: ${({ active }) => (active ? "10px" : "12px")};

    &:before,
    &:after {
      content: "";
      background-color: ${primaryBlue};
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      transition: all 0.3s ease-in-out;
    }

    &:before {
      top: ${({ active }) => (active ? "0.25rem" : 0)};
      transform: rotate(${({ active }) => (active ? "45deg" : 0)});
    }

    &:after {
      bottom: ${({ active }) => (active ? "0.25rem" : 0)};
      transform: rotate(${({ active }) => (active ? "-45deg" : 0)});
    }

    span {
      position: absolute;
      background-color: ${primaryBlue};
      width: 100%;
      height: 2px;
      left: 0;
      top: 5px;
      transition: all 0.3s ease-in-out;
      transform: scale(${({ active }) => (active ? 0 : 1)});
    }
  }
`;

const Menu = styled.nav<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
  }

  ${TabletMiddle} {
    overflow: auto;
    top: ${headerHeight};
    left: ${({ active }) => (active ? 0 : "-100%")};
    position: fixed;
    width: 100%;
    padding-top: 1.5rem;
    height: 101vh;
    min-height: 101vh;
    min-height: -webkit-fill-available;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.3s ease;
    flex-direction: column;
  }
`;

const HeaderContainer = styled(Container)`
  padding: 0 4rem;
  max-width: 100%;

  ${DesktopMiddle} {
    max-width: 100%;
  }

  ${Tablet} {
    padding: 0 1.5rem;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  column-gap: 2rem;

  ${TabletMiddle} {
    column-gap: 1rem;
  }

  ${TabletMiddle} {
    flex-direction: column;
    justify-content: center;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 200px;
  }
`;

const ContactButton = styled(ContactUs)`
  ${TabletMiddle} {
    display: none;
  }
`;
