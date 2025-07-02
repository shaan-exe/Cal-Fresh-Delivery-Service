// Basic index.html file to load the React App
// Don't mess with this!

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import School from "./app.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <School />
  </StrictMode>
);
