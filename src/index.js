import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/main.css";
import "typeface-dancing-script";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { LanguageProvider } from "./components/Multilanguage/LanguageProvider";
import { ThemeProvider } from "./components/DarkMode/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();