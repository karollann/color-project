import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PalettesContextProvider } from "./Context";

import "./Styles/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <PalettesContextProvider>
      <App />
    </PalettesContextProvider>
  </BrowserRouter>
);
