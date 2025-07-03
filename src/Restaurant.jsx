import "./styles.css";

import restaurantsJSON from "./RestaurantJSON/restaurantsList.json";

export default function Restaurant() {
  return <RestaurantCard />;
}

function RestaurantCard() {
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "10vh",

        display: "flex",
        border: "1px solid black",
        boxShadow: "0 0 10px black",
        borderRadius: "10px",
        height: "700px",
        width: "800px",
      }}
    >
      <RestaurantDetails />
      <GoogleMaps />
    </div>
  );
}

function RestaurantDetails() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        gap: "20px",
        alignItems: "center",
        padding: "20px",
        minWidth: "300px",
      }}
    >
      <RestaurantWebsite website={blondies.website} name={blondies.name} />
      <RestaurantAddress address={blondies.address_obj} />
      <RestaurantRatings rating={blondies.rating} />
      <RestaurantPricing price={blondies.price_level} />
      <RestaurantHours hours={blondies.hours.weekday_text} />
      <RestaurantMenu menuItems={blondies.menu} />

console.log(restaurantsJSON);
export default function RestaurantsList() {
  return (
    <section id="Restaurants">
      <Restaurants />
    </section>
  );
}

function RestaurantRatings({ rating }) {
  return (
    <h3 className="RestaurantDetail" id="ratings">
      {rating} / 5 Stars
    </h3>
  );
}

function RestaurantWebsite({ website, name }) {
  return (
    <a href={website} style={{ textDecoration: "underline", color: "black" }}>
      <h1>{name}</h1>
    </a>
  );
}

function RestaurantPricing({ price }) {
  return (
    <h4 className="RestaurantDetail" id="pricing" style={{ color: "green" }}>
      {price}
    </h4>
  );
}

function RestaurantHours({ hours }) {
  const newHours = hours.map((hour) => {
    return <h3 key={hour}>{hour}</h3>;

function Restaurants() {
  const RestaurantData = restaurantsJSON.data;

  const RestaurantList = RestaurantData.map((Restaurant) => {
    return (
      <RestaurantItem Restaurant={Restaurant} key={Restaurant.location_id} />
    );

  });
  return RestaurantList;
}


function RestaurantAddress({ address }) {
  return (
    <h3 className="RestaurantDetail" id="address">
      {address.street1 + address.city + ", " + address.state}
    </h3>
  );
}

function RestaurantMenu({ menuItems }) {
  const newMenu = menuItems.map((item) => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3
          className="RestaurantDetail"
          id="menu"
          key={item.name}
          style={{
            scrollSnapAlign: "start",
          }}
        >
          {item.name}
        </h3>
        <h3>{item.price}</h3>
      </div>
    );
  });


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
