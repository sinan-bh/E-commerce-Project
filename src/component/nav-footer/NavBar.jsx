import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import { Link } from "react-router-dom";

import "./nav-footer.css";

const NavBar = () => {

  const isUser = JSON.parse(localStorage.getItem('isUser'))
  const usrData = JSON.parse(localStorage.getItem('registrationData'))

  const handleLogout = () => {
    const userConfirmed = window.confirm("Are you sure you want to Logout?");
    if (userConfirmed) {
      localStorage.removeItem('isUser')
  }
}

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
      <div className="cart-log">
      <div>
        <button className="cart"><FaCartShopping /></button>
      </div>
      {isUser ?(
        <button className="buttonLogout" onClick={handleLogout}><FaUserCheck />{usrData.name}</button >
      ) : (
      <button className="buttonLogout"><Link to={'/login'}><FaUser />Login</Link></button>
    )}
    </div>
    </nav>
  );
};

export default NavBar;
