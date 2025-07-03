import "../styles.css";

import restaurantsJSON from "../RestaurantJSON/restaurantsList.json";

console.log(restaurantsJSON);
export default function RestaurantsList() {
  return (
    <section id="Restaurants">
      <Restaurants />
    </section>
  );
}

function Restaurants() {
  const RestaurantData = restaurantsJSON.data;

  const RestaurantList = RestaurantData.map((Restaurant) => {
    return (
      <RestaurantItem Restaurant={Restaurant} key={Restaurant.location_id} />
    );
  });
  return RestaurantList;
}

function RestaurantItem({ Restaurant }) {
  return (
    <div className="Restaurant" id={Restaurant.name}>
      <RestaurantName Restaurant={Restaurant} />
      <RestaurantAddress Restaurant={Restaurant} />
      <RestaurantPriceLevel Restaurant={Restaurant} />
      <RestaurantRating Restaurant={Restaurant} />
    </div>
  );
}
function RestaurantName({ Restaurant }) {
  return <h1 className="RestaurantTitle">{Restaurant.name}</h1>;
}
function RestaurantAddress({ Restaurant }) {
  return (
    <p>
      {" "}
      Located at:
      <h5 className="RestaurantAddress">
        {Restaurant.address_obj.address_string}
      </h5>
    </p>
  );
}
function RestaurantPriceLevel({ Restaurant }) {
  return (
    <p>
      Price Level:{" "}
      <h5 className="RestaurantPriceLevel">{Restaurant.price_level}</h5>
    </p>
  );
}
function RestaurantRating({ Restaurant }) {
  return <h5 className="RestaurantRating">{Restaurant.rating} / 5 Stars</h5>;
}
