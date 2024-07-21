import React from "react";
import { useEffect } from "react";
import FetchApi from "../FetchApi/FetchApi";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import "./Products.css";

function Products({ type }) {
  const { products } = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchApi());
  }, [dispatch]);

  const category =
    type === "all"
      ? products
      : products.filter((list) => list.category === type);

  return (
    <div className="productsName">
      <h1>
        {type === 'all' && 'All Products' } 
        {type === "men's clothing" && 'Mens Clothing'}
        {type === "women's clothing" && 'Womens Clothing'}
        {type === "jewelery" && 'Jewalry'}
        {type === "electronics" && 'Electronics'}
      </h1>
    <div className="product-list">
      {category.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <h5 className="product-title">{product.title}</h5>
          <p className="product-price">${product.price}</p>
          <div className="product-rating">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="star"
                style={{ color: i < product.rating.rate ? '#ffcc00' : '#e4e5e9' }}
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
};

export default Products;
