import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "../src/components/context/UserContext.jsx";
import "./glubal.css";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
