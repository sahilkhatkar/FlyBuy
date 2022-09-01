import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { Profile } from "./Profile";
import "./css/Navbar.css";
import Cart from "./Cart";

export default function Navbar() {
  const toggleNavbar = () => {
    document.querySelector(".header").classList.toggle("active");
    if (document.querySelector(".header").classList.contains("active")){
      document.querySelector("html").style.overflow = "hidden";
      document.getElementById('wishlist').classList.add("icon-off");
      document.getElementById('add2cart').classList.add("icon-off");
    }
    
    else{
      document.querySelector("html").style.overflow = "auto";
      document.getElementById('wishlist').classList.remove("icon-off");
      document.getElementById('add2cart').classList.remove("icon-off");
    }
    
  };
  const navClick = () => {
    document.querySelector(".header").classList.toggle("active");
    document.querySelector("html").style.overflow = "auto";
  };

  return (
    <div className="header">
      <div id="mob-icons-left">
        <div className="mobile-nav" onClick={() => toggleNavbar()}>
          <i className="fa-solid fa-bars" name="bars"></i>
          <i className="fa-solid fa-xmark" name="cross"></i>
        </div>
        <div className="logo">
          {/* <img src="logo192.png" alt="" width="25"/> */}
          <Link className="navbar-title" to="/">
            FlyBuy
          </Link>
        </div>
      </div>

      <ul className="navbar">
        <li>
          <Link to="/" onClick={navClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={navClick}>
            Shop{" "}
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={navClick}>
            Blog{" "}
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={navClick}>
            About Us
          </Link>
        </li>
        <div className="dropdown">
          <li id="profile">
            <i className="fa-solid fa-user"></i>
          </li>
          <div className="dropdown-content">
            <Profile />
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
        <li>
          <Link to="/wishlist" title="Wishlist" id="wishlist" onClick={navClick}>
            <i className="fa-solid fa-heart"></i>
          </Link>
        </li>
        <li>
          <Link to="/cart" title="Add to Cart" id="add2cart" onClick={navClick}>
            {/* <i className="fa-solid fa-cart-shopping"></i> */}
            <img id="cart-img" src="./images/shopping-cart.png" alt="cart-img"/>
          </Link>
        </li>
      </ul>
        
        <div id="mob-icons-right">
          <Link to="/wishlist" title="Wishlist" id="wishlist">
            <i className="fa-solid fa-heart"></i>
          </Link>
          <Link to="/cart" title="Add to Cart" id="add2cart">
            <img id="cart-img" src="./images/shopping-cart.png" alt="cart-img"/>
          </Link>
        </div>
      {/* </div> */}
    </div>
  );
}
