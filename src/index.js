import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import RestaurantsList from "./restaurantsList.jsx";
import Restaurant from "./Restaurant.jsx"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RestaurantsList/>
    <Restaurant />
  </StrictMode>
);
