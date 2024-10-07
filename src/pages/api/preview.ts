import { fetchBlogPostBySlug } from "./strapiApi";

export default async function preview(req: any, res: any) {
  if (
    req.query.secret !== process.env.STRAPI_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }
  const post = await fetchBlogPostBySlug({
    slug: req.query.slug,
    preview: true,
  });
  if (!post) {
    return res.status(401).json({ message: "Invalid slug" });
  }
  res.setDraftMode({ enable: true });
  res.writeHead(307, { Location: `/${post.slug}` });
  res.end();
}
