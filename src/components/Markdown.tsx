/* eslint-disable  @typescript-eslint/no-explicit-any */

import styled from "@emotion/styled";
import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import directive from "remark-directive";
import { visit } from "unist-util-visit";

import { CTA, CTAContent } from "@/components/Post/CTA";
import { ClutchWidget as ClutchWidgetComponent } from "@/components/Post/ClutchWidget";
import { RatioNextImage } from "@/components/RatioNextImage";
import { Tablet, Typography, primaryBlue } from "@/components/ui";

import { getImageUrl } from "@/utils/images";
import { baseUrl } from "@/utils/routes";

type Props = {
  children: string;
};
export const Markdown = ({ children }: Props) => (
  <MarkdownContent>
    <ReactMarkdown
      remarkPlugins={[directive, reactMarkdownRemarkDirective, remarkBreaks]}
      components={MarkdownComponents as any}
    >
      {children}
    </ReactMarkdown>
  </MarkdownContent>
);

const reactMarkdownRemarkDirective = () => (tree: any) =>
  visit(
    tree,
    ["textDirective", "leafDirective", "containerDirective"],
    (node: any) => {
      node.data = {
        hName: node.name,
        hProperties: node.attributes,
        ...node.data,
      };
      return node;
    }
  );

const CallToActionPerson = (props: any) => <CTA {...props} />;

const CallToActionContent = (props: any) => <CTAContent {...props} />;

const ClutchWidget = (props: any) => <ClutchWidgetComponent {...props} />;

const MarkdownComponents = {
  CallToActionPerson,
  CallToActionContent,
  ClutchWidget,
  img: (image: any) => (
    <RatioNextImage
      src={getImageUrl({ url: image?.src || "" })}
      alt={image?.alt || ""}
      width={700}
      height={300}
    />
  ),
  a: ({ children, href }: { children: ReactNode; href?: string }) => {
    const nofollow = !href?.startsWith(baseUrl || "") && !href?.startsWith("#");
    return (
      <StyledLink href={href} rel={nofollow ? "nofollow" : undefined}>
        {!!children ? String((children as string)[0]) : ""}
      </StyledLink>
    );
  },
  h1: (props: any) => {
    const arr = props.children[0]?.split("{");
    const id = arr[1]?.replace("#", "")?.replace("}", "");

    return (
      <Typography as="h1" type="h3" id={id}>
        {arr[0]}
      </Typography>
    );
  },
  h2: (props: any) => {
    const arr = props.children[0]?.split("{");
    const id = arr[1]?.replace("#", "")?.replace("}", "");

    return (
      <Typography as="h2" type="h4" id={id}>
        {arr[0]}
      </Typography>
    );
  },
  h3: (props: any) => {
    const arr = props.children[0]?.split("{");
    const id = arr[1]?.replace("#", "")?.replace("}", "");

    return (
      <Typography as="h3" type="t2" id={id} marginBottom={16}>
        {arr[0]}
      </Typography>
    );
  },
  p: ({ children }: { children: any }) => {
    if (
      ["CallToActionPerson", "CallToActionContent", "ClutchWidget"].includes(
        children[0].props?.node?.tagName
      )
    ) {
      return <>{children}</>;
    }
    return (
      <Typography type="b1" marginBottom={8}>
        {children}
      </Typography>
    );
  },
};

const MarkdownContent = styled.div`
  ul,
  ol {
    padding: 0 0 0 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    position: relative;
    list-style: initial;
    font-size: 18px;
    line-height: 26px;

    ${Tablet} {
      font-size: 16px;
      line-height: 24px;
    }
  }

  li:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }

  li strong {
    display: block;
    margin-bottom: 0.25rem;
  }

  strong {
    font-weight: 500;
  }

  em {
    font-style: italic;
  }

  blockquote {
    margin: 0;
  }

  blockquote p {
    padding: 1rem;
    background: #eee;
    border-radius: 5px;
  }

  blockquote p::before {
    content: "\201C";
  }
  table,
  th,
  td {
    border: 1px solid rgba(47, 51, 58, 0.2);
    border-spacing: 0;
  }
  td {
    padding: 0.5rem;
  }
  pre code {
    display: block;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    max-width: 100%;
    min-width: 100px;
    overflow: auto;
    background: #ffeff0;
    line-height: 20px;
    white-space: pre;
    -webkit-overflow-scrolling: touch;
    word-wrap: break-word;
    box-decoration-break: clone;
    border-radius: 0.2rem;
  }
  li a {
    cursor: pointer;
    color: inherit;
    &:hover {
      color: ${primaryBlue};
    }
  }
`;

const StyledLink = styled.a`
  color: ${primaryBlue};
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;
