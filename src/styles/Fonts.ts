import { createGlobalStyle } from 'styled-components'

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: "LogoFont";
    src: url("${process.env.PUBLIC_URL}/fonts/Cremona.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`
