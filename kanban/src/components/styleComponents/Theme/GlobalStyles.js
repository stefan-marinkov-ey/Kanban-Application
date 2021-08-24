import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }
  body {
    color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.primary};
    transition: all 0.50s linear;

  text-align: center;
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  }
  `;
