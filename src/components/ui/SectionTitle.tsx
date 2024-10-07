import styled from "@emotion/styled";

import { Tablet, Typography, primaryBlue } from "@/components/ui";

type Props = {
  title1: string;
  title2: string;
};

export const SectionTitle = ({ title1, title2 }: Props) => (
  <>
    <Title type="h1">{title1}</Title>
    <SubTitle type="h1" color={primaryBlue}>
      {title2}
    </SubTitle>
    <Line />
  </>
);

const Title = styled(Typography)`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled(Title)`
  margin-left: 0.5rem;
`;

const Line = styled.div`
  width: 60vw;
  max-width: 888px;
  height: 7px;
  background-color: #d0d5dd;
  margin-bottom: 2.5rem;

  ${Tablet} {
    width: 100%;
  }
`;
