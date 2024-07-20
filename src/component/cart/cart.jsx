import React, { useState } from "react";
import "./cart.css";

const cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sandals",
      price: 99.99,
      quantity: 1,
      image: "path_to_image/sandals.jpg",
      size: "39",
      color: "White",
    },
    {
      id: 2,
      name: "Zebra purse",
      price: 29.96,
      quantity: 2,
      image: "path_to_image/zebra_purse.jpg",
      size: "One Size",
      color: "Black Mix",
    },
    {
      id: 3,
      name: "Knitted top",
      price: 29.99,
      quantity: 1,
      image: "path_to_image/knitted_top.jpg",
      size: "S",
      color: "Powder Pink",
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  return (
    <div className="shopping-cart">
      <div className="cart-items">
        <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>#{item.id}</p>
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>
              </div>
            </div>
            <div className="item-price">${item.price.toFixed(2)}</div>
            <div className="item-quantity">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>
                +
              </button>
            </div>
            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <button
              className="remove-item"
              onClick={() => handleRemoveItem(item.id)}
            >
              x
            </button>
          </div>
        ))}
        </div>
        <div>
          <div className="cart-summary">
            <h2>Cart Total: ${getTotal()}</h2>
            <p>Shipping & taxes calculated at checkout</p>
            <div className="terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I agree to Terms & Conditions</label>
            </div>
            <button className="checkout-button">Checkout</button>
            <button className="paypal-button">PayPal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
