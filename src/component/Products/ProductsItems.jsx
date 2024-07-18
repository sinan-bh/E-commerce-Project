import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FetchApi from "../FetchApi/FetchApi";

import "./Products.css";

const ProductsItems = () => {
  const productID = useParams();
  const { products } = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchApi());
  }, [dispatch]);

  const item = products.map((item) => item);
  const items = item.find((list) => list.id == productID.id);
  console.log(items);

  return (
    <div>
      <h1 className="product-name">{items.category} </h1>
      <div className="products-product">
        <div className="product-border">
          <div className="product-image">
            <img
              src={items.image}
              alt={item.category}
              className="product-img"
            />
          </div>
          <div className="product-description">
            <h2>{items.title}</h2>
            <p>{items.description}</p>
            <div className="rete-price">
            <h4>Rate {items.rating.rate}</h4>
            <h4>Price ${items.price}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsItems;
