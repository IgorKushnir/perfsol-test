import styled from "@emotion/styled";
import { TechnologyItem } from "@/models";
import Image from "next/image";
import Link from "next/link";

import {
  DesktopMiddle,
  DesktopSmall,
  MobileLarge,
  MobileMiddle,
  Tablet,
  TabletMiddle,
  Typography,
  primaryBlue,
  primaryGrey,
  white,
} from "@/components/ui";
import { Arrow } from "@/components/ui/Arrow";

import { getImageUrl } from "@/utils/images";
import { ToRoute } from "@/utils/routes";

import { ConditionalWrapper } from "../ConditionalWrapper";

export type GridTheme = "yellow" | "white";

export type GridElement = TechnologyItem;

type Props = {
  gridTheme?: GridTheme;
  element: GridElement;
  toRoute?: ToRoute;
  hideSeparator?: boolean;
};

export const NativeGridItem = ({
  gridTheme = "white",
  element,
  toRoute,
  hideSeparator,
}: Props) => (
  <ConditionalWrapper
    condition={!!element.slug}
    trueWrapper={(children) => (
      <StyledLink href={toRoute ? toRoute(element.slug || "") : ""} locale="en">
        {children}
      </StyledLink>
    )}
    falseWrapper={(children) => <>{children}</>}
  >
    <GridItem
      gridTheme={gridTheme}
      element={element}
      hideSeparator={hideSeparator}
    />
  </ConditionalWrapper>
);

const GridItem = ({ gridTheme, element, hideSeparator }: Props) => {
  const { title, image, slug, description } = element;

  return (
    <Wrap gridTheme={gridTheme || "white"} hideSeparator={hideSeparator}>
      <DomainImage>
        <Image src={getImageUrl(image)} width={80} height={80} alt={title} />
      </DomainImage>

      <Content isClickable={!!slug}>
        <Typography type="h3" as="h5" color={primaryGrey}>
          {title}
        </Typography>
        <Description>
          <Typography type="b3">
            {description}
            <Arrow color={primaryBlue} rotate="-45deg" margin="0 0 0 10px" />
          </Typography>
        </Description>
      </Content>
    </Wrap>
  );
};

const DomainImage = styled.div`
  ${TabletMiddle} {
    display: flex;
    flex-direction: row;
    column-gap: 50px;
    min-height: 80px;
    align-items: center;
  }
  ${Tablet} {
    column-gap: 25px;
  }
`;

const Description = styled.div`
  margin-top: 24px;
  transition: 0.2s;

  ${TabletMiddle} {
    margin-top: 12px;
  }

  ${Tablet} {
    margin-top: 0px;
  }

  ${MobileLarge} {
    max-width: 95%;
  }

  ${MobileMiddle} {
    font-size: 12px;
    line-height: 16px;
    margin-top: 5px;
  }
`;

const Content = styled.div<{ isClickable: boolean }>`
  width: 80%;
  transition: all 0.5s;

  & ${Arrow} {
    opacity: 0;
  }

  ${Tablet} {
    width: unset;
  }

  ${({ isClickable }) =>
    isClickable &&
    `&:hover {
        transform: translateX(30px);

        & ${Arrow} {
            opacity: 1;
        }
    }`}
`;

const Wrap = styled.div<{ gridTheme: GridTheme; hideSeparator?: boolean }>`
  max-width: 500px;
  padding: 38px 0;
  display: flex;
  gap: 24px;
  align-items: center;
  position: relative;
  text-transform: none;
  text-decoration: none;

  ${DesktopMiddle} {
    max-width: 405px;
  }

  ${DesktopSmall} {
    max-width: 650px;
  }

  @media (max-width: 500px) {
    padding: 25px 0;
    min-width: 327px;
  }

  &::after {
    content: "";
    position: absolute;
    display: ${({ hideSeparator }) => (hideSeparator ? "none" : "block")};
    height: 1px;
    width: 100%;
    bottom: 0;
    background-color: ${({ gridTheme }) =>
      gridTheme === "yellow" ? white : primaryBlue};
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
`;
