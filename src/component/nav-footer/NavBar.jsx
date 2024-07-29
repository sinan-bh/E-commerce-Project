import React, { useEffect, useState } from "react";
import { FaUserCheck } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { currentUser } from "../Redux/ProductsSlice";

import { Link } from "react-router-dom";

import "./nav.css";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [userData,setUserData] = useState([])

  const {userDatas} = useSelector((state) => state.Products);
  const {cart} = useSelector((state) => state.Products);

  console.log(userDatas);

  const dispatch = useDispatch();
  

  const cartCount = Object.keys(cart).length

  console.log(cartCount);
 
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isUser) {
      const user = JSON.parse(localStorage.getItem("registrationData"));
      const currentUserData = user.find(list => list.id);
      setUserData(currentUserData);
      dispatch(currentUser(userData));
    }
  }, [dispatch]);


  const isUser = JSON.parse(localStorage.getItem("isUser"));

  const handleLogout = () => {
    const userConfirmed = window.confirm("Are you sure you want to Logout?");
    if (userConfirmed) {
      localStorage.removeItem("isUser");
      dispatch(currentUser(null));
    }
  };


  return (
    <nav className={`navbar ${show ? "navbar-show" : "navbar-hide"}`}>
      <div className="navbar-brand">Logo</div>
      <div className=" ">
        <div className="navbar-links">
          <div className="nav-link">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="nav-link">
            <Link to={"/products"}>All Products</Link>
          </div>
          <div className="nav-link">
            <Link to={"/products/men"}>Men</Link>
          </div>
          <div className="nav-link">
            <Link to={"products/women"}>Women</Link>
          </div>
          <div className="nav-link">
            <Link to={"/products/electronics"}>Electronics</Link>
          </div>
          <div className="nav-link">
            <Link to={"/products/jewelery"}>Jewelry</Link>
          </div>
        </div>
      </div>
      <div className="cart-log">
        <div>
          {!isUser ? (
            <div></div>
          ) : (
            <Link to={"/shopingcart"} className="cart-link">
              <button className="nav-link btn-login">
                <FaCartShopping /><a className="cartcount">{cartCount}</a>
              </button>
            </Link>
          )}
        </div>
        {isUser ? (
          <button className="nav-link btn-join" onClick={handleLogout}>
            <Link>
              <FaUserCheck />
              {userDatas.name}
            </Link>
          </button>
        ) : (
          <button className=" btn-join">
            <Link to={"/login"} className="nav-link">
              <FaUser />
              Login
            </Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
