import React, { useEffect, useState } from "react";
import './Products.css'

const Prd = () => {
  const [data, setData] = useState([]);
  
  console.log(data);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }, []);
  return ( 
    <div className="product-list">
    {data.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.brand} className="product-image" />
        <h2 className="product-title">{product.brand}</h2>
        <p className="product-price">${product.price}</p>
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="star"
              style={{ color: i < product.rating ? '#ffcc00' : '#e4e5e9' }}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);
};

export default Prd;
