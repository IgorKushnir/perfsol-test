import styled from "@emotion/styled";
import { AdvantageType } from "@/models";

import { Typography, primaryBlue } from "@/components/ui";

type Props = {
  advantage: AdvantageType;
  number: number;
};

export const Advantage = ({ advantage, number }: Props) => (
  <Wrap>
    <Heading>
      <NumberWrap>0{number}</NumberWrap>
      <div>
        <Typography as="h5" type="t1">
          {advantage.title}
        </Typography>
      </div>
    </Heading>
    <DescriptionWrap>
      <Description type="b3">{advantage.description}</Description>
    </DescriptionWrap>
  </Wrap>
);

const Wrap = styled.div`
  flex-basis: 340px;
  flex-wrap: wrap;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background: white;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15));

  @media (max-width: 1380px) {
    flex-basis: 310px;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const NumberWrap = styled.div`
  font-weight: 900;
  font-size: 60px;
  line-height: 55px;
  color: ${primaryBlue};
  margin-right: 10px;
`;

const DescriptionWrap = styled.div`
  font-size: 14px;
  line-height: 24px;
`;

const Description = styled(Typography)`
  line-height: 24px;
`;
