import styled from "@emotion/styled";
import { ServiceItem } from "@/models";
import Link from "next/link";

import { ConditionalWrapper } from "@/components/common/ConditionalWrapper";
import { Service } from "@/components/common/Service";

import { ToRoute } from "@/utils/routes";

type Props = {
  service: ServiceItem;
  route: ToRoute;
};

export const ServiceWrapper = ({ service, route }: Props) => (
  <ConditionalWrapper
    condition={!!service.slug}
    trueWrapper={(children) => (
      <StyledLink href={route(service.slug)} locale="en">
        {children}
      </StyledLink>
    )}
    falseWrapper={(children) => <FlexWrap>{children}</FlexWrap>}
  >
    <Service service={service} />
  </ConditionalWrapper>
);

const StyledLink = styled(Link)`
  cursor: pointer;
  transition: all 0.25s;
  flex: 1 0 40%;

  &:hover {
    transform: scale(1.01);
  }
`;

const FlexWrap = styled.div`
  flex: 1 0 40%;
`;
