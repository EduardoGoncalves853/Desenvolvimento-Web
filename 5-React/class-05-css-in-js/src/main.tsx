import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App.tsx";
import { GlobalStyle } from "./styles/reset.ts";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
    <App />
    <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
