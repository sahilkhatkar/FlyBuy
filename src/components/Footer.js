import React from 'react'
import { Link } from 'react-router-dom';
import "./css/Footer.css";

export default function Footer() {
  return (
    <>
    <section id="newsletter">
      <div>
        <span>Sign up for NewsLetters</span>
        <p>Get E - mail updates about our latest shop and <span>special offer</span></p>
      </div>

      <div className="form">
        <input type="email" name="email" placeholder="Your email address"/>
        <button>Sign up</button>
      </div>
    </section>

    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><Link to="/about">about us</Link></li>
              <li><Link to="#">our services</Link></li>
              <li><Link to="#">privacy policy</Link></li>
              <li><Link to="#">affiliate program</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><Link to="#">FAQ</Link></li>
              <li><Link to="#">shipping</Link></li>
              <li><Link to="#">returns</Link></li>
              <li><Link to="/cart">order status</Link></li>
              <li><Link to="#">payment options</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><Link to="/shop">jewellery & accessories</Link></li>
              <li><Link to="/shop">bag</Link></li>
              <li><Link to="/shop">dress</Link></li>
              <li><Link to="/shop">footwear</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <Link to="#"><i className="fab fa-facebook-f"></i></Link>
              <Link to="#"><i className="fab fa-twitter"></i></Link>
              <Link to="#"><i className="fab fa-instagram"></i></Link>
              <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}