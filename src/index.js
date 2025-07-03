import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import RestaurantsList from "./restaurantsList.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RestaurantsList/>
  </StrictMode>
);
