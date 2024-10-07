import styled from "@emotion/styled";
import { Phase } from "@/models";
import { useTranslation } from "next-i18next";

import {
  DesktopMiddle,
  DesktopSmall,
  MobileLarge,
  MobileMiddle,
  Tablet,
  TabletMiddle,
  Typography,
  primaryBlue,
} from "@/components/ui";

type Props = { title: string; phasesList: Phase[] };

export const WorkflowPhaseItem = ({ title, phasesList }: Props) => {
  const { t } = useTranslation();
  return (
    <Wrap>
      <Title>
        <Typography type="t1" as="h5">
          {t(title)}
        </Typography>
      </Title>
      <List>
        {phasesList.map(({ id, text }) => (
          <Item key={id}>
            <Typography type="b3" as="span">
              {t(text)}
            </Typography>
          </Item>
        ))}
      </List>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${DesktopSmall} {
    margin-left: 35px;
  }

  ${MobileLarge} {
    margin-left: 0px;
  }
`;

const Title = styled.div`
  margin: 32px 0;

  ${DesktopSmall} {
    margin: 0;
  }

  ${MobileMiddle} {
    margin-top: 20px;
  }
`;

const Item = styled.li`
  position: relative;
  left: 10px;
  list-style: none;
  margin-bottom: 24px;

  &::before {
    content: "";
    position: absolute;
    top: 9px;
    left: -10px;
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #2f333a;
    ${DesktopMiddle} {
      background-color: transparent;
      background-image: url("/img/svg/WorkflowArrows.svg");
      background-repeat: no-repeat;
      background-size: 100%;
      top: 4px;
      left: -16px;
      width: 16px;
      height: 16px;
    }
  }
  ${DesktopSmall} {
    margin: 0;
    left: 0;
    margin-right: 12px;
    &::before {
      display: inline-block;
      position: relative;
      left: -5px;
    }
    &:first-of-type {
      padding-left: 0;
      &::before {
        content: none;
      }
      left: 0;
    }
  }
  ${TabletMiddle} {
    display: flex;
  }
  ${Tablet} {
    width: 230px;

    &:first-of-type {
      &::before {
        content: "";
      }
    }
  }

  ${MobileLarge} {
    width: 195px;
    margin-right: 0;
  }

  &:last-child {
    &::after {
      height: 300px;
      left: -30px;
      top: 16px;
      width: 1px;
      z-index: 999;
      background-color: ${primaryBlue};
    }
  }
`;

const List = styled.ul`
  line-height: 21px;
  margin: 10px 0 36px;
  width: 120px;
  position: relative;

  ${DesktopSmall} {
    display: flex;
    width: fit-content;
    margin: 0;
  }

  ${Tablet} {
    padding-top: 15px;
    gap: 12px;
    font-size: 16px;
    width: 300px;
    display: flex;
    flex-direction: column;
  }

  ${MobileMiddle} {
    margin-top: 20px;
  }

  &::before {
    display: block;
    position: absolute;
    width: 1px;
    background: #2f333a;
    left: -20px;
    top: 5px;
    z-index: 9;

    ${TabletMiddle} {
      height: 90%;
      align-items: center;
    }
  }

  ${TabletMiddle} {
    &::before {
      height: 98px;
    }
  }
  ${Tablet} {
    width: auto;
  }
`;
