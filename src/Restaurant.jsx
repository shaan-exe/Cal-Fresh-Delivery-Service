import "./styles.css";

import blondies from "./RestaurantJSON/blondies.json";

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
  });

  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      {newHours}
    </section>
  );
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

  return (
    <section
      style={{
        overflowY: "auto",
        maxHeight: "300px",
        display: "flex",
        gap: "15px",
        flexDirection: "column",
        scrollSnapType: "y mandatory",
        minWidth: "320px",
      }}
    >
      {newMenu}
    </section>
  );
}

function GoogleMaps() {
  let address = blondies.address_obj.address_string;
  const mapUrl = `https://www.google.com/maps?q=${
    blondies.name
  }, ${encodeURIComponent(address)}&output=embed`;
  return (
    <iframe
      src={mapUrl}
      width="50%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      style={{
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
      title="Google Maps"
    />
  );
}
