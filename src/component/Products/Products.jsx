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

  console.log(products);
  const category =
    type === "all"
      ? products
      : products.filter((list) => list.category === type);

  return (
    <div className="category">
      <div className=" m-5">
        <h2 className="product-name">Products</h2>
        <div className="product-structure">
          <div className="products">
            {category.map((list) => (
              <div key={list.id} className="border-product">
                <Link to={`/products/${list.id}`}>
                  <div className="image-product">
                    <img
                      src={list.image}
                      alt={list.category}
                      className=" category-image"
                    />
                    <div className="zindex">dhjd</div>
                  </div>
                </Link>
                <div className="product-title-price">
                  <h4 className="product-title">{list.title}</h4>
                  <div>
                    <h5 className="text-success">$ {list.price}</h5>
                    <small>
                      {/* <h6 className="text-danger">Rate {list.rating.rate}</h6> */}
                    </small>
                  </div>
                </div>
                {/* <hr /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
