import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Wishlist.css";
import Footer from "./Footer";

export default function Wishlist() {
  let navigate = useNavigate();

  let wishlistArr = JSON.parse(localStorage.getItem('wishlistArr'))
  // console.log(wishlistArr)

  if(wishlistArr.length===0){
    return (
      <>
      <div className="about-empty">
        <div className="emptyness">
          <h1>Your WishList</h1>
          <span>No items are present</span>
        </div>
        <button
          id="add-more"
          onClick={() => {
            navigate("/");
          }}
          >
          Add more items
        </button>
      </div>
      </>
    );
  }
  else{

    return (
      <>
      <div className="about">
      <div className="emptyness">
        <h1>Your WishList</h1>
        <span>Favorite items are:-</span>
      </div>
        <button
          // className="button-85"
          id="add-more"
          onClick={() => {
            navigate("/");
          }}
          >
          Add more items
        </button>
        <div className="card-container">
          {
            wishlistArr && wishlistArr.map( item => {
              return(
                <>
                <div className="product" target="_blank">
              <div className="img-box">
                <img src={item} alt={item} style={{width: "15rem", height: "20rem", objectFit: "cover", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem"}} />
              </div>
              <p className="detail">
                {}Name<p className="price">&#8377; {}99.00</p>
              </p>
              <div className="cart" onClick={()=>{console.log("clickedddd")}}>
                <Link to="">Add to Cart</Link>
              </div>
            </div>
                </>
              )
            })
          }
        </div>
      </div>

      <Footer/>
    </>
  );
}
}
