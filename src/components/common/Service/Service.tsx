import styled from "@emotion/styled";
import { ServiceItem } from "@/models";

import {
  Tablet,
  Typography,
  middleGray,
  primaryBlue,
  white,
} from "@/components/ui";

type Props = { service: ServiceItem };

export const Service = ({ service: { title, description } }: Props) => (
  <Wrap>
    <Title>
      <Typography as="h3" type="h3" marginBottom={30}>
        {title}
      </Typography>
    </Title>
    <Typography type="b3" color={middleGray}>
      {description}
    </Typography>
  </Wrap>
);

const Wrap = styled.div`
  position: relative;
  padding: 26px 34px 29px 31px;
  min-height: 140px;
  box-sizing: border-box;
  height: 100%;
  background-color: ${white};
  box-shadow: 0px 6px 20px 10px rgba(200, 210, 226, 0.4);

  ${Tablet} {
    width: 100%;
  }
`;

const Title = styled.div`
  padding-left: 20px;
  border-left: 3px solid ${primaryBlue};
`;
