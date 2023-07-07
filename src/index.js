import { Suspense } from "react";
import ReactDom from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./store";
import theme from "./assets/theme";
import "normalize.css";

import "@/assets/css/index.less";
import App from "@/App";
ReactDom.createRoot(document.querySelector("#root")).render(
  <Suspense fallback="loading">
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </Suspense>
);
