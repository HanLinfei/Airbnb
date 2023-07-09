import { Suspense } from "react";
import ReactDom from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { styleTheme, materialTheme } from "./assets/theme";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";
import "normalize.css";

import store from "./store";
import "@/assets/css/index.less";
import App from "@/App";

ReactDom.createRoot(document.querySelector("#root")).render(
  <Suspense fallback="loading">
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={styleTheme}>
          <MaterialThemeProvider theme={materialTheme}>
            <App />
          </MaterialThemeProvider>
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </Suspense>
);
