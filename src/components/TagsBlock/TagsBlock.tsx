import styled from "@emotion/styled";
import { Tag } from "@/models";

import { Color, Typography } from "@/components/ui";

type Props = {
  tags: Tag[];
  tagColor: Color;
};

export function TagsBlock({ tags, tagColor }: Props) {
  return (
    <Wrap>
      {tags.map((tag) => (
        <Item key={tag.id} type="t6" tagColor={tagColor}>
          {tag.name}
        </Item>
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const Item = styled(Typography)<{ tagColor: Color }>`
  padding: 0.25rem 1rem;
  color: ${({ tagColor }) => tagColor};
  border: 2px solid ${({ tagColor }) => tagColor};
`;
