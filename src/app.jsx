import "./styles.css";
// import your JSON in here too!
import RestaurantsList from "./ViewComponents/MultiRestaurant.jsx";
import Restaurant from "./ViewComponents/SingleRestaurant.jsx";
export default function App() {
  return (
    <>
      <RestaurantsList />
      <Restaurant />
    </>
  );
}

// more components down here!
