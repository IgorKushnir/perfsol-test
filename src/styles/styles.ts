import { css } from "@emotion/react";

import { primaryGrey } from "@/components/ui";

export const globalStyles = css`
  // reset
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  caption,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  *[hidden] {
    display: none;
  }
  body {
    line-height: 0;
  }
  menu,
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  a:focus,
  div:focus,
  input:focus,
  button:focus,
  textarea:focus {
    outline: none !important;
  }

  textarea {
    resize: vertical;
  }

  button {
    padding: 1px 6px;
    margin: 0;
  }
  // end reset

  html {
    font-family: "Roboto", sans-serif;
    scroll-behavior: smooth;
    color: ${primaryGrey};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: never;
  }

  //using in useNormalScrollRoutes custom hook
  html.normal-scroll {
    scroll-behavior: auto;
  }

  body {
    -webkit-scroll-behavior: smooth;
    scroll-behavior: smooth;
    -webkit-scroll-snap-type: y proximity;
    scroll-snap-type: y proximity;
  }

  body.lock {
    overflow: hidden;
  }
`;
