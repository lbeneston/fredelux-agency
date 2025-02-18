import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export const GlobalStyle = createGlobalStyle`
    /*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
    html,
    body,
    p,
    ol,
    ul,
    li,
    dl,
    dt,
    dd,
    blockquote,
    figure,
    fieldset,
    legend,
    textarea,
    pre,
    iframe,
    hr,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    margin: 0;
    padding: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    font-size: 100%;
    font-weight: normal;
    }
    ul {
    list-style: none;
    }
    button,
    input,
    select,
    textarea {
    margin: 0;
    }
    html {
    box-sizing: border-box;
    }
    *,
    *::before,
    *::after {
    box-sizing: inherit;
    }
    img,
    video {
    height: auto;
    max-width: 100%;
    }
    iframe {
    border: 0;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    td,
    th {
    padding: 0;
    }
    td:not([align]),
    th:not([align]) {
    text-align: left;
    }
    a {
    text-decoration: none;
    color: inherit;
    }

  html {
    font-size: 60%;
    scroll-behavior: smooth;

    @media (min-width: 768px) {
    font-size: 60%;
  }
}

    body {
    background-color: ${colors.anthraciteGrey}; 
    font-family: Helvetica, sans-serif;
    font-size: 60%;

    &::-webkit-scrollbar {
        width: 10px;
        background-color: ${colors.anthraciteGrey}; 
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${colors.grey}; 
    }
    }
`
