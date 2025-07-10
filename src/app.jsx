import "./styles.css";
import RestaurantsList from "./ViewComponents/MultiRestaurant.jsx";
import { useState, useEffect } from "react";
import Restaurant from "./ViewComponents/SingleRestaurant.jsx";
import Cart from "./ViewComponents/Cart.jsx";

export default function App() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [selectedRestaurantID, setSelectedRestaurantID] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartModal, setCartModal] = useState(false);

  useEffect(() => {
    fetch(`https://atdpsites.berkeley.edu/aic/f/api/`)
      .then((response) => response.json())
      .then((jsondata) => {
        setRestaurantData(jsondata.data);
      });
  }, []);

  useEffect(() => {
    if (!selectedRestaurantID) return;

    const fetchURL = `https://atdpsites.berkeley.edu/aic/f/api/?id=${selectedRestaurantID}`;

    fetch(fetchURL)
      .then((response) => response.json())
      .then((jsondata) => {
        setSelectedRestaurant(jsondata);
        setShowModal(true);
      });
  }, [selectedRestaurantID]);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
  }, [showModal]);

  useEffect(() => {});

  function closeModal() {
    setShowModal(false);
    setSelectedRestaurant(null);
  }

  function closeCart() {
    setCartModal(false);
  }

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <>
      <button onClick={() => setCartModal(true)} id="cartBtn">
        View Cart ({cart.length})
      </button>
      {cartModal && (
        <div className="modal-backdrop" onClick={closeCart}>
          <Cart
            cart={cart}
            onRemoveFromCart={handleRemoveFromCart}
            onClick={(e) => e.stopPropagation()}
            closeCart={closeCart}
          />
        </div>
      )}
      {showModal && selectedRestaurant && (
        <div className="modal-backdrop" onClick={closeModal}>
          <Restaurant
            selectedRestaurant={selectedRestaurant}
            onClick={(e) => e.stopPropagation()}
            handleAddToCart={handleAddToCart}
          />
        </div>
      )}

      <RestaurantsList
        restaurantData={restaurantData}
        selectRestaurantFunction={setSelectedRestaurantID}
      />
    </>
  );
}
