import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { PalettesContextProvider } from "./Context";

import "./Styles/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <PalettesContextProvider>
      <App />
    </PalettesContextProvider>
  </HashRouter>
);
