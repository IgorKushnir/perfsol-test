import axios, { AxiosRequestConfig } from "axios";
import {
  BlogPost,
  ListLocales,
  LocaleType,
  Page,
  PaginationType,
  Vacancy,
} from "@/models";

const http = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACK_API}/api`,
  headers: {
    accept: "application/json",
  },
});

export const fetchMainPage = (locale: LocaleType) =>
  http
    .get("main-page", {
      params: {
        populate: [
          "seo",
          "about.testimonials",
          "about.testimonials.image",
          "faq",
          "services.list",
          "domains.list.image",
          "technologies.list.image",
          "workflow.flow.list",
          "portfolio.list.tags",
          "portfolio.list.mainImage",
        ],
        locale,
      },
    })
    .then((c) => c.data.data);

export const fetchVacancies = (
  page = null,
  pageSize = null
): Promise<Vacancy[]> => {
  let params = {
    sort: "createdAt:DESC",
    populate: "tags",
    fields: ["id", "slug", "title", "createdAt", "MetaDescription"],
  };
  if (page && pageSize) {
    params = {
      ...params,
      "pagination[page]": 1,
      "pagination[pageSize]": 3,
    } as AxiosRequestConfig["params"];
  }
  return http
    .get("/jobs", {
      params,
    })
    .then(({ data }) => data.data);
};

export const fetchVacancyBySlug = (slug: string) =>
  http.get(`/jobs/${slug}`).then(({ data }) => data.data);

export const fetchBlogPosts = ({
  locale,
  page,
  pageSize,
}: {
  locale?: LocaleType;
  page?: null | number;
  pageSize?: null | number;
}): Promise<{
  data: BlogPost[];
  meta: {
    pagination: PaginationType;
  };
}> => {
  let params = {
    sort: "date:DESC",
    populate: "tags,seo.image,localizations",
    fields: ["id", "slug", "date", "title", "description", "locale"],
    locale,
  };
  if (page || pageSize) {
    params = {
      ...params,
      "pagination[page]": page,
      "pagination[pageSize]": pageSize,
    } as AxiosRequestConfig["params"];
  }
  return http
    .get("/blogs", {
      params,
    })
    .then(({ data }) => data);
};

type FetchBlogPostBySlugProps = {
  slug: string;
  locale?: LocaleType;
  preview?: boolean;
};
export const fetchBlogPostBySlug = ({
  slug,
  locale,
  preview,
}: FetchBlogPostBySlugProps): Promise<BlogPost> => {
  const params = {
    "filters[slug]": slug,
    publicationState: "preview",
    locale,
    populate: [
      "localizations",
      "seo.image",
      "tags",
      "author.image",
      "faq",
      "relatedBlogs",
      "relatedBlogs.tags",
      "relatedBlogs.seo.image",
    ],
  };
  if (preview) {
    params["publicationState"] = "preview";
  }

  return http
    .get<{ data: BlogPost[] }>(`/blogs`, { params })
    .then(({ data }) => data.data[0]);
};

export const fetchCases = ({
  locale,
  ids = [],
}: {
  ids?: number[];
  locale?: LocaleType;
}) => {
  const filters: any = {
    locale,
  };
  if (ids.length) {
    ids.forEach((id, index) => {
      filters[`filters[id][$in][${index}]`] = id;
    });
  }
  return http
    .get("/portfolios", {
      params: {
        ...filters,
        populate: ["mainImage", "tags", "country", "industry", "localizations"],
        fields: ["id", "slug", "title", "teaser", "createdAt", "locale"],
      },
    })
    .then((c) => c.data.data);
};

export const fetchCaseBySlug = async ({
  slug,
  locale,
}: {
  slug: string;
  locale: ListLocales;
}) => {
  const params = {
    locale,
    "filters[slug]": slug,
    populate: [
      "localizations",
      "teaserImage",
      "mainImage",
      "seo.image",
      "tags",
      "videos",
      "sections",
      "images",
      "images.image",
      "testimonial",
      "testimonial.image",
      "relatedCases",
      "relatedCases.tags",
      "relatedCases.mainImage",
      "country",
      "industry",
    ],
  };
  return http.get(`/portfolios`, { params }).then(({ data }) => data.data[0]);
};

export const fetchAuthors = () =>
  http.get("/authors").then(({ data }) => data.data);

export const fetchAuthor = (slug: string) => {
  const params = {
    "filters[slug]": slug,
    populate: ["blogs", "blogs.tags", "blogs.seo.image", "image", "seo"],
  };

  return http.get("/authors", { params }).then(({ data }) => data.data[0]);
};

export const fetchPages = (locale?: LocaleType) => {
  const params = {
    locale,
    fields: ["slug", "locale"],
    populate: ["localizations"],
  };
  return http
    .get("/pages", {
      params,
    })
    .then(({ data }) => data.data);
};

export const fetchPage = ({
  slug,
  locale,
}: {
  slug: string;
  locale?: LocaleType;
}): Promise<Page> => {
  const params = {
    locale,
    "filters[slug]": slug,
    populate: [
      "localizations",
      "seo.image",
      "content.testimonials",
      "content.testimonials.image",
      "content.list.image",
      "content.list.tags",
      "content.list.teaserImage",
      "content.list.mainImage",
      "content.list.cv",
      "content.list.tags",
      "content.list.seo.image",
      "content.flow.list",
    ],
  };
  return http
    .get("/pages", {
      params,
    })
    .then(({ data }) => data.data[0]);
};

const fetchMenu = (id: number, locale: LocaleType) =>
  http
    .get(`navigation/render/${id}`, {
      params: {
        type: "TREE",
        locale,
      },
    })
    .then(({ data }) => data);

export const menuHandler = (locale: LocaleType) => fetchMenu(1, locale);
export const footerMenuHandler = (locale: LocaleType) => fetchMenu(2, locale);

export const fetchPolicies = (locale?: LocaleType) => {
  const params = {
    locale,
    fields: ["slug", "locale"],
    populate: ["localizations"],
  };
  return http
    .get("/policies", {
      params,
    })
    .then(({ data }) => data.data);
};

export const fetchPolicy = ({
  slug,
  locale,
}: {
  slug: string;
  locale?: LocaleType;
}) => {
  const params = {
    locale,
    "filters[slug]": slug,
    populate: ["localizations", "seo.image"],
  };
  return http
    .get("/policies", {
      params,
    })
    .then(({ data }) => data.data[0]);
};
