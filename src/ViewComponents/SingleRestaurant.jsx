import "../styles.css";
import blondies from "../RestaurantJSON/blondies.json";
import { useState } from "react";
export default function Restaurant({ selectedRestaurant, handleAddToCart }) {
  return (
      <RestaurantCard
        onAddToCart={handleAddToCart}
        Restaurant={selectedRestaurant}
      />
  );
}

function RestaurantCard({ Restaurant, onAddToCart }) {
  if (Restaurant) {
    return (
      <div className="restaurant-card">
        <RestaurantDetails Restaurant={Restaurant} onAddToCart={onAddToCart} />
        <GoogleMaps address={Restaurant.address_obj.address_string} />
      </div>
    );
  }
  return null;
}

function RestaurantDetails({ Restaurant, onAddToCart }) {
  return (
    <section className="restaurant-details">
      <RestaurantWebsite website={Restaurant.website} name={Restaurant.name} />
      <RestaurantAddress address={Restaurant.address_obj} />
      <RestaurantRatings rating={Restaurant.rating} />
      <RestaurantPricing price={Restaurant.price_level} />
      <RestaurantHours hours={Restaurant.hours.weekday_text} />
      <RestaurantMenu menuItems={Restaurant.menu} onAddToCart={onAddToCart} />
    </section>
  );
}

function RestaurantRatings({ rating }) {
  return (
    <h3 className="restaurant-detail" id="ratings">
      {rating} / 5 Stars
    </h3>
  );
}

function RestaurantWebsite({ website, name }) {
  return (
    <a href={website} className="restaurant-website">
      <h1>{name}</h1>
    </a>
  );
}

function RestaurantPricing({ price }) {
  return (
    <h4 className="restaurant-detail pricing" id="pricing">
      {price}
    </h4>
  );
}

function RestaurantHours({ hours }) {
  return (
    <section className="restaurant-hours">
      {hours.map((hour) => (
        <h3 key={hour}>{hour}</h3>
      ))}
    </section>
  );
}

function RestaurantAddress({ address }) {
  return (
    <h3 className="restaurant-detail" id="address">
      {address.street1 + address.city + ", " + address.state}
    </h3>
  );
}

function RestaurantMenu({ menuItems, onAddToCart }) {
  return (
    <section className="restaurant-menu">
      {menuItems.map((item) => (
        <div className="menu-item" key={item.name}>
          <h3 className="restaurant-detail menu-item-name" id="menu">
            {item.name}
          </h3>
          <h3 className="menu-item-price">{item.price}</h3>
          <button className="AddToCart" onClick={() => onAddToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </section>
  );
}

function GoogleMaps({ address }) {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <iframe
      className="restaurant-map"
      src={mapUrl}
      allowFullScreen=""
      loading="lazy"
      title="Google Maps"
    />
  );
}
