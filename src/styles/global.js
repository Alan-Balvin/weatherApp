import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: ${(props) => (props.theme.darkMode ? "#121212" : "#f0f8ff")};
    color: ${(props) => (props.theme.darkMode ? "#ffffff" : "#000000")};
    margin: 0;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    transition: background-color 0.3s ease-in-out;
  }
`;

export default GlobalStyle;
