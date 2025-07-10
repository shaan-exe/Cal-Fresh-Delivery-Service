import "../styles.css";
import { useState } from "react";
export default function RestaurantsList({
  restaurantData,
  selectRestaurantFunction,
}) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  const [searchTerm, setSearchTerm] = useState("");
 
  const filteredRestaurants = restaurantData.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        className="restaurantsSearchBar"
        value={searchTerm}
        placeholder="Search for restaurants"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <section id="Restaurants">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantItem
            key={restaurant.location_id}
            restaurant={restaurant}
            selectRestaurantFunction={selectRestaurantFunction}
          />
        ))}
      </section>
    </>
  );
}

function RestaurantItem({ restaurant, selectRestaurantFunction }) {
  return (
    <div
      className="Restaurant"
      id={restaurant.name}
      onClick={() => selectRestaurantFunction(restaurant.location_id)}
    >
      <RestaurantName name={restaurant.name} />
      <RestaurantAddress address={restaurant.address_obj.address_string} />
      <RestaurantPriceLevel priceLevel={restaurant.price_level} />
      <RestaurantRating rating={restaurant.rating} />
    </div>
  );
}

function RestaurantName({ name }) {
  return <h1 className="RestaurantTitle">{name}</h1>;
}

function RestaurantAddress({ address }) {
  return (
    <div>
      Located at:
      <h5 className="RestaurantAddress">{address}</h5>
    </div>
  );
}

function RestaurantPriceLevel({ priceLevel }) {
  return (
    <div>
      <h5 className="RestaurantPriceLevel">
        {" "}
        {priceLevel ? priceLevel : null}
      </h5>
    </div>
  );
}

function RestaurantRating({ rating }) {
  return (
    <h5 className="RestaurantRating">{rating} / 5 Stars</h5>
    // <h5> No Ratings Available </h5>
  );
}
