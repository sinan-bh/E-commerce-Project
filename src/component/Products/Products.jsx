import React from "react";
import { useEffect } from "react";
import FetchApi from "../FetchApi/FetchApi";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../Redux/ProductsSlice";

import { MdOutlineShoppingCart } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import "./Products.css";

function Products({ type }) {
  const { products } = useSelector((state) => state.Products);
  // const { cart } = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isUser = JSON.parse(localStorage.getItem("isUser"));

  useEffect(() => {
    dispatch(FetchApi());
  }, [dispatch]);

  const onHandleClick = (id) => {
    if (!isUser) {
      navigate("/login");
    } else {
      dispatch(addToCart(id));
    }
  };

  const category =
    type === "all"
      ? products
      : products.filter((list) => list.category === type);

  return (
    <div className="productsName">
      <h1>
        {type === "all" && "All Products"}
        {type === "men's clothing" && "Mens Clothing"}
        {type === "women's clothing" && "Womens Clothing"}
        {type === "jewelery" && "Jewalry"}
        {type === "electronics" && "Electronics"}
      </h1>
      <div className="product-list">
        {category.map((product) => (
          <div key={product.id} className="product-card">
            <MdOutlineShoppingCart
              className="cart-icon"
              onClick={() => onHandleClick(product.id)}
            />
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h5 className="product-title">{product.title}</h5>
            <p className="product-price">${product.price}</p>
            <div className="product-rating">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="star"
                  style={{
                    color: i < product.rating.rate ? "#ffcc00" : "#e4e5e9",
                  }}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
