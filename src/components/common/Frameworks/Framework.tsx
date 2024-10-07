import styled from "@emotion/styled";
import { FrameworkItem } from "@/models";
import Image from "next/image";

import { Tablet, Typography } from "@/components/ui";

import { getImageUrl } from "@/utils/images";

type Props = {
  framework: FrameworkItem;
};

export const Framework = ({ framework }: Props) => (
  <Wrap>
    <Heading>
      <Image
        src={getImageUrl(framework.image)}
        width={55}
        height={55}
        alt={framework.title}
      />
      <div>
        <Typography type="t1">{framework.title}</Typography>
      </div>
    </Heading>
    <Typography type="b3">{framework.description}</Typography>
  </Wrap>
);

const Wrap = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
  flex-basis: 360px;
  height: 360px;
  padding: 36px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  align-self: flex-start;

  ${Tablet} {
    height: fit-content;
  }
`;

const Heading = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;
