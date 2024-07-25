import React, { useEffect, useState } from "react";

import FetchApi from "../FetchApi/FetchApi";
import { handleRemoveItem } from "../Redux/ProductsSlice";

import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart, increment } from "../Redux/ProductsSlice";

const cart = () => {

  const { products } = useSelector((state) => state.Products);
  const { cart } = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  const [cartItem,setCartItems] = useState([])
  const [cartTotalPrice,setCartTotalPrice] = useState([])
  const [cartTotalCount,setCartTotalCount] = useState([])

  
  
  
  useEffect(() => {
    setCartItems(cart)
    dispatch(FetchApi());
  }, [dispatch]);

  const increment = (id) => {
    
    setCartItems(prev=> {return { ...prev, [id]: prev[id] + 1 }})
  }
  const decrement = (id) => {
    
    setCartItems(prev=> {return prev[id] > 1 ? { ...prev, [id]: prev[id] - 1 } : { ...prev, [id]: prev[id] = 1 } })
  }

 
  console.log(cartItem);

  useEffect(()=>{

    const totalCount = Object.keys(cart).reduce((total,cart)=> total + cartItem[cart] ,0)
  
    const totalPrice = Object.keys(cart).reduce((total, id) => {
      const price = products.find(
        (value) => value.id === Number(id)
      )?.price;
      return total + cartItem[id] * price;
    }, 0).toFixed(2);

    setCartTotalCount(totalCount)
    setCartTotalPrice(totalPrice)
  },[])



  return (
    <div className="shopping-cart">
      <div className="cart-items">
        <div>

        {products.map((item) =>{
          if (cart[item.id]) {
            return (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    {/* <p>{item.price}</p> */}
                    <p>Size: {item.size}</p>
                    <p>Color: {item.color}</p>
                  </div>
                </div>
                <div className="item-price">${item.price.toFixed(2)}</div>
                <div className="item-quantity">
                  <button
                    onClick={() => decrement(item.id)}
                  >
                    -
                  </button>
                  <span>{cartItem[item.id]}</span>
                  <button onClick={() => increment(item.id)}>
                    +
                  </button>
                </div>
                <div className="item-total">
                  ${(item.price * cartItem[item.id]).toFixed(2)}
                </div>
                <button
                  className="remove-item"
                  onClick={() => dispatch(handleRemoveItem(item.id))}
                >
                  x
                </button>
              </div>
            )
          }
          return null
        })}
        </div>
        <div>
          <div className="cart-summary">
            <h2>Cart Total Items: ${cartTotalCount}</h2>
            <h2>Cart Total: ${cartTotalPrice}</h2>
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
