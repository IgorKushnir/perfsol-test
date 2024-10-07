import styled from "@emotion/styled";
import Link from "next/link";

import { TagsBlock } from "@/components/TagsBlock/TagsBlock";
import {
  Typography,
  black,
  primaryBlue,
  primaryGrey,
  white,
} from "@/components/ui";

import { RelatedBlogPost } from "@/models/Blog";

import { formatDate } from "@/utils/date";
import { toBlogPost } from "@/utils/routes";

type Props = { item: RelatedBlogPost };

export const LatestPostsItem = ({
  item: { title, tags, date, slug },
}: Props) => (
  <Wrap>
    <InnerWrapper>
      <Link href={toBlogPost(slug) || ""} title={title}>
        <Typography as="h3" type="t1" marginBottom={12}>
          {title}
        </Typography>
      </Link>
      <TagsWrap>
        <TagsBlock tags={tags} tagColor={primaryGrey} />
      </TagsWrap>
      {date && <Typography type="b4">{formatDate(date)}</Typography>}
    </InnerWrapper>
    <Link href={toBlogPost(slug) || ""}>
      <Arrow title={title}>{title}</Arrow>
    </Link>
  </Wrap>
);

const Arrow = styled.span`
  margin-left: 13px;
  display: inline-block;
  padding: 3px;
  border-color: ${black};
  border-width: 0 3px 3px 0;
  border-style: solid;
  font-size: 0;
  transform: rotate(-45deg);
  transition: border-color 0.2s;
  cursor: pointer;

  &:hover {
    border-color: ${primaryBlue};
  }
`;

const Wrap = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 0;
  border-bottom: 1px solid ${white};
  transition: transform 0.5s;
  overflow: visible;

  &:hover {
    transform: translateX(30px);

    & ${Arrow} {
      border-color: ${primaryBlue};
    }
  }
`;

const InnerWrapper = styled.div`
  flex-grow: 1;
`;

const TagsWrap = styled.div`
  margin: 12px 0;
`;
