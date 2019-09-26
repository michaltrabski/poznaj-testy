import React from "react";
import App from "../components/App";
import { theme } from "../theme/Theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <App />
      </>
    </ThemeProvider>
  );
};

export default Root;
