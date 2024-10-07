import styled from "@emotion/styled";

import { Tablet, Typography } from "@/components/ui";

export const PortfolioIntro = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => (
  <Wrap>
    <Title as="h2" type="h2" marginBottom={20}>
      {title}
    </Title>
    {description && (
      <Typography as="h3" type="b1" marginBottom={20}>
        {description}
      </Typography>
    )}
  </Wrap>
);

const Title = styled(Typography)`
  text-transform: capitalize;

  ${Tablet} {
    margin-bottom: 8px;
  }
`;
const Wrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
