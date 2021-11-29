import { createGlobalStyle } from "styled-components";
import { Effects, Fonts } from "./variables";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue-dark: #3B559F;
    --blue: #126FE0;

    --red-dark: #65121A;
    --red: #C90E10;

    --black: #1C1C1C;
    --white: #F1F1F1;
    --yellow: #FFDF00;
  }

  body {
    ${Effects.blackImage};
    min-height: 100vh;
  }

  main {
    height: calc(100vh - 102px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input, p, span, button, b {
    ${Fonts.Oswald.reg24}
  }
`;
