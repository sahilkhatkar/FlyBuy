import React, { useEffect, useState } from "react";
import "./css/Home.css";
import "./css/Spinner.css";
import Spinner from "./Spinner";
import Alert from "./Alert";
import Carousel from "./Carousel";

export const array = [];
// export const wishlistArr = [];
// localStorage.setItem('wishlistArr',"[]")
if(localStorage.getItem('wishlistArr') == null){
  localStorage.setItem('wishlistArr',"[]")
}

export default function Home() {
  useEffect(() => {
    // initCards();
    fetchUrl();
  }, []);

  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState()

  const allCards = document.querySelectorAll(".tinder--card");

  function initCards() {
    let newCards = document.querySelectorAll(".tinder--card:not(.removed)");
    
    newCards.forEach(function (card, index) {
      card.style.zIndex = allCards.length - index;
      // card.style.transform =
      //   "scale(" + (20 - index) / 20 + ") translateY(-" + 30 * index + "px)";
      card.style.opacity = (10 - index) / 10;
    });

    document.querySelector(".tinder").classList.add("loaded");
  }

  function createButtonListener(love) {
    return function (event) {
      let cards = document.querySelectorAll(".tinder--card:not(.removed)");
      let moveOutWidth = document.body.clientWidth * 1.5;

      if (!cards.length) return false;

      let card = cards[0];
      card.classList.add("removed");

      if(love==='add'){}
      else if (love==='accept') {
        card.style.transform =
        "translate(" + moveOutWidth + "px, -100px) rotate(-30deg)";

        let index = Math.abs(cards.length - 5);
        let wishItem = JSON.parse(localStorage.getItem('wishlistArr'))
        wishItem.push(array[index]);

        localStorage.setItem('wishlistArr', JSON.stringify(wishItem))
      }
      else {
        card.style.transform =
        "translate(-" + moveOutWidth + "px, -100px) rotate(30deg)";
      }
      if (cards.length === 1) {
        console.log("cards finished");
        document.getElementById("shop-cart").remove();
        document.getElementById("nope").remove();
        document.getElementById("love").remove();
        document.getElementById("info").remove();
        window.location.reload(true);
      }
      initCards();
      // event.preventDefault();
    };
  }
  let nopeListener = createButtonListener(false);
  let addMe = createButtonListener('add');
  let loveListener = createButtonListener('accept');

  async function fetchUrl() {
    let imgResponse = await fetch(
      "https://source.unsplash.com/355x300/?electronics,laptops"
    );
    array.push(imgResponse.url);
    imgResponse = await fetch(
      "https://source.unsplash.com/355x300/?electronics,accessories"
    );
    array.push(imgResponse.url);
    imgResponse = await fetch(
      "https://source.unsplash.com/355x300/?electronics,headphones"
    );
    array.push(imgResponse.url);
    imgResponse = await fetch(
      "https://source.unsplash.com/355x300/?electronics,mobile"
    );
    array.push(imgResponse.url);
    imgResponse = await fetch(
      "https://source.unsplash.com/355x300/?electronics,pc"
    );
    array.push(imgResponse.url);
    // console.log(array[0])
    // console.log(array[1])
    // console.log(array[2])
    // console.log(array[3])
    // console.log(array[4])
    setLoading(false)
  }

  const addToCart = ()=>{
    
    setAlert(true)
    setTimeout(()=>{
      setAlert(null)
    }, 2000)
  }

  return (
    <>
      <Alert alert={alert}/>

      <div className="tinder">
        <div className="tinder--cards">
          <div className="tinder--card">
            <img src={array[0]} alt="card"/>
            <h3>Product Name</h3>
            <div className="product-info">
              <li className="price">&#8377; 45000</li>
              <li id="avail"><i className="fa-solid fa-share"></i></li>
              <li id="avail"><i className="fa-solid fa-location-dot"></i> Deliverable</li>
            </div>
          </div>

          <div className="tinder--card">
            <img
              src={array[1]}
              alt="card"
            />
            <h3>Product Name</h3>
            <div className="product-info">
              <li className="price">&#8377; 45000</li>
              <li id="avail">
                <i className="fa-solid fa-share"></i>
              </li>
              <li id="avail">
                <i className="fa-solid fa-location-dot"></i> Deliverable
              </li>
            </div>
          </div>

          <div className="tinder--card">
            <img
              src={array[2]}
              alt="card"
            />
            <h3>Product Name</h3>
            <div className="product-info">
              <li className="price">&#8377; 45000</li>
              <li id="avail">
                <i className="fa-solid fa-share"></i>
              </li>
              <li id="avail">
                <i className="fa-solid fa-location-dot"></i> Deliverable
              </li>
            </div>
          </div>

          <div className="tinder--card">
            <img
              src={array[3]}
              alt="card"
            />
            <h3>Product Name</h3>
            <div className="product-info">
              <li className="price">&#8377; 45000</li>
              <li id="avail">
                <i className="fa-solid fa-share"></i>
              </li>
              <li id="avail">
                <i className="fa-solid fa-location-dot"></i> Deliverable
              </li>
            </div>
          </div>

          <div className="tinder--card">
            <img
              src={array[4]}
              alt="card"
            />
            <h3>Product Name</h3>
            <div className="product-info">
              <li className="price">&#8377; 45000</li>
              <li id="avail">
                <i className="fa-solid fa-share"></i>
              </li>
              <li id="avail">
                <i className="fa-solid fa-location-dot"></i> Deliverable
              </li>
            </div>
          </div>
        </div>

        <Spinner loading={loading} />

        <div className="tinder--buttons">
          <button
            id="shop-cart"
            title="Add to Cart"
            onClick={() => {
              addToCart();
              addMe();
            }}
          >
            <i className="uil uil-shopping-cart-alt"></i>
          </button>
          <button
            id="nope"
            title="Reject"
            onClick={() => {
              nopeListener();
            }}
          >
            <i className="uil uil-multiply"></i>
          </button>
          <button
            id="love"
            title="Accept"
            onClick={() => {
              loveListener();
            }}
          >
            <i className="uil uil-heart-alt"></i>
          </button>
          <button>
            <span
              id="info"
              title="Info."
              onClick={() => {
                alert("FlyBuy's Product info");
              }}
            >
              <i className="uil uil-info-circle"></i>
            </span>
          </button>
        </div>
      </div>

      {/* <div className="Home__feature-products">
        <h1>Feature Products</h1>
        <Carousel/>
      </div> */}
    </>
  );
}
