import React from "react";
import "../styles.css";

export default function Cart({ cart, onRemoveFromCart, onClick, closeCart }) {
  let totalPrice = cart.reduce((currentTotal, item) => {
    const numPrice = parseFloat(item.price.replace("$", ""));
    let numPriceRounded = Math.round(numPrice * 100) / 100;
    return currentTotal + numPriceRounded;
  }, 0);
  return (
    <div className="cart-modal-cart" onClick={onClick}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="cart">Your cart is empty.</p>
      ) : (
        <div className="cart">
          {cart.map((item, index) => (
            <CartItem cartItem={item} index={index} />
          ))}
        </div>
      )}
      <span>
        <ins>${totalPrice}</ins>
      </span>
    </div>
  );
}

function CartItem({ cartItem, index }) {
  return (
    <div key={index} className="cart-item">
      <span>{cartItem.name}</span>
      <span>{cartItem.price}</span>
    </div>
  );
}
