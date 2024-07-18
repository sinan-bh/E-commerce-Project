import React from "react";
import {  useEffect } from "react";
import FetchApi from "../FetchApi/FetchApi";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import './Products.css'



function Products({type}) {

  const {products} = useSelector(state=> state.Products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchApi())
  }, [dispatch]);


  console.log(products);
  const category = type === "all" ? products : products.filter(list=> list.category === type)


  return (
    <div className="category">
      <div className=" m-5">
        <h2 className="product-name">Products</h2>
        <div className="p-5 ">
          <div className="products">
            {category.map((list) => (
              <div key={list.id} className="">
                <Link to={`/products/${list.id}`}>
                <img
                  src={list.image}
                  alt={list.category}
                  className=" category-image"
                />
                </Link>
                <h5 className="text-start text-secondary ">
                  {list.category}
                </h5>
                <div>
                  <h6 className="text-success">$ {list.price}</h6>
                  <small>
                    {/* <p className="text-danger">Rate {list.rating}</p> */}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
