import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  a,
  abbr,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  i,
  iframe,
  img,
  ins,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  ruby,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    margin: 0;
    padding: 0;
    border: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  a,
  a:visited {
    text-decoration: none;
  }

  button {
    background-color: transparent;
    text-shadow: none;
    outline: none;
    border: 0;
    cursor: pointer;
  }

  input {
    background-color: transparent;
    outline: none;
    border: 0;
  }

  * {
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
  `;

export default Reset;
