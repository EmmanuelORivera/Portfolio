import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body,
html {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.primaryColor800};
  color: ${({ theme }) => theme.primaryColor100};
}
`;
