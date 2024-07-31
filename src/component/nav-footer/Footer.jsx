import React from "react";

import { IoHomeOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./nav.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logos">
          <span className="logo">
            <Link to={"/"}>
              <IoHomeOutline />
            </Link>
          </span>
          <span className="logo">
            <FaInstagram />
          </span>
          <span className="logo">
            <FaXTwitter />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
