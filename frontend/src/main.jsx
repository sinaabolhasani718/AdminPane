import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./glubal.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
