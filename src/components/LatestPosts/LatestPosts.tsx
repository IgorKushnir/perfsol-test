import { RelatedBlogPost } from "@/models";

import { LatestPostsItem } from "./LatestPostsItem";

type Props = { items: RelatedBlogPost[] };

export function LatestPosts({ items }: Props) {
  if (!items) {
    return null;
  }

  return (
    <ul>
      {items.map((item) => (
        <LatestPostsItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
