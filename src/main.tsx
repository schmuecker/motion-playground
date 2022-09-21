import React from "react";
import ReactDOM from "react-dom/client";
import { setup, strict } from "twind";
import * as colors from "twind/colors";
import App from "./App";
import "./index.css";

setup({
  mode: strict, // Throw errors for invalid rules instead of logging
  preflight: true, // Enable Tailwind preflight (https://tailwindcss.com/docs/preflight)
  theme: {
    extend: {
      colors, // Enable Tailwind v2 color palette
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
