import React from "react";

import "./nav-footer.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className="navbar-menu">
        <div className="navbar-items">
          <div className="navbar-item">
            <Link to={'/'}>Home</Link>
          </div>
          <div className="navbar-item">
            <Link to={'/products'}>All Products</Link>
          </div>
          <div className="navbar-item">
            <Link to={'/products/men'}>Men</Link>
          </div>
          <div className="navbar-item">
            <Link to={'products/women'}>Women</Link>
          </div>
          <div className="navbar-item">
            <Link to={'/products/electronics'}>Electronics</Link>
          </div>
          <div className="navbar-item">
            <Link to={'/products/jewelery'}>Jewelry</Link>
          </div>
        </div>
      </div>
      <div className="navbar-item">Login</div>
    </nav>
  );
};

export default NavBar;
