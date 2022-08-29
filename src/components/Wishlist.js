import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Wishlist.css";
import Footer from "./Footer";
import { wishlistArr } from "./Home";

export default function Wishlist() {
  let navigate = useNavigate();

  useEffect(() => {
    const list = document.querySelector(".card-container");
    for (let i = 0; i < wishlistArr.length; i++) {
      console.log(wishlistArr[i]);
      list.innerHTML += "<div className='card'><img src=" + wishlistArr[i] + "alt='unsplash-picture' style='width: 15rem; height: 20rem; object-fit: cover;'/></div>";
    }
  }, []);

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
        </div>
      </div>

      <Footer/>
    </>
  );
}
}
