import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import {
  DesktopSmall,
  TabletMiddle,
  primaryBlue,
  primaryGrey,
} from "@/components/ui";
import { Arrow } from "@/components/ui/Arrow";

import { MenuItem } from "@/models/Menu";

type Props = { link: MenuItem; landingPageLinkClick: () => void };

export const HeaderLink = ({ link, landingPageLinkClick }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();
  const hasItems = link.items && link.items.length > 0;
  return (
    <Item isDropdownOpen={isDropdownOpen}>
      <StyledLink
        onClick={(e) => {
          e.stopPropagation();
          if (hasItems) {
            setIsDropdownOpen((dropdownOpen) => !dropdownOpen);
            return;
          }
          landingPageLinkClick();
          router.push(link.path);
        }}
      >
        {hasItems ? (
          <>
            {link.title}
            <Arrow
              color={primaryBlue}
              rotate="45deg"
              margin="0 0 0.25rem 0.5rem"
              onClick={(e) => {
                setIsDropdownOpen((dropdownOpen) => !dropdownOpen);
                e.stopPropagation();
                e.preventDefault();
              }}
            />
          </>
        ) : (
          <Link
            href={link.path}
            locale={link.hasTranslation ? router.locale : "en"}
          >
            {link.title}
          </Link>
        )}
      </StyledLink>

      {hasItems && (
        <DropdownList isDropdownOpen={isDropdownOpen}>
          {link?.items?.map((item, i) => (
            <Link
              href={item.path}
              key={i}
              locale={item.hasTranslation ? router.locale : "en"}
            >
              <DropdownItem onClick={landingPageLinkClick}>
                {t(item.title)}
              </DropdownItem>
            </Link>
          ))}
        </DropdownList>
      )}
    </Item>
  );
};

const DropdownList = styled.ul<{ isDropdownOpen: boolean }>`
  display: none;
  height: 0;
  position: absolute;
  top: 3.75rem;
  flex-direction: column;
  background: white;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  width: max-content;
  box-sizing: border-box;

  ${TabletMiddle} {
    z-index: 100;
    position: relative;
    top: 0;
    padding: 1rem 0 0;
    box-shadow: unset;
    background: inherit;
    margin-right: 1rem;
  }
  &:focus {
    display: flex;
    height: auto;
  }

  ${({ isDropdownOpen }) =>
    isDropdownOpen &&
    `
    ${TabletMiddle} {
            display: flex;
            height: auto;
        }
    `}
`;

const DropdownItem = styled.li`
  padding: 1rem 2rem;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  color: ${primaryGrey};
  cursor: pointer;
  border-left: 3px solid transparent;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;

  ${TabletMiddle} {
    color: white;
    text-align: center;
  }
  &:hover {
    background: #25a9e019;
    border-left-color: ${primaryBlue};
  }
`;

const StyledLink = styled.div`
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${primaryGrey};
  text-decoration: none;
  position: relative;
  transition: all 0.1s ease-in-out;
  white-space: nowrap;

  ${DesktopSmall} {
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.6px;
  }

  ${TabletMiddle} {
    color: #fff;
    font-size: 18px;
  }
`;

const Item = styled.li<{ isDropdownOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem 0;
  height: ${({ isDropdownOpen }) => (isDropdownOpen ? "auto" : "30px")};

  ${TabletMiddle} {
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 20px;
  }

  &:hover {
    ${DropdownList} {
      @media (min-width: 1025px) {
        display: flex;
        height: auto;
      }
    }

    & ${StyledLink} {
      color: ${primaryBlue};
    }
  }
`;
