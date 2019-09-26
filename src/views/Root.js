import React from "react";
import App from "../components/App";
import { theme } from "../theme/Theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import ConfigContext, { config } from "../context/ConfigContext";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <ConfigContext.Provider value={config}>
          <GlobalStyle />
          <App />
        </ConfigContext.Provider>
      </>
    </ThemeProvider>
  );
};

export default Root;
