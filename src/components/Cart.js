import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Marquee from "react-fast-marquee";
import QtyBtn from "./QtyBtn";
import "./css/Shop.css";
import "./css/Cart.css";
import data from "../data.json";

export default function Cart() {
  let mrp = 0
  let discount = 200
  const [productArray, setProductArray] = useState([])

  let a = JSON.parse(localStorage.getItem('localData'))
  let uniqueChars = a.filter((c, index) => {
    return a.indexOf(c) === index;
});
localStorage.setItem('localData', JSON.stringify(uniqueChars))
  
  if(JSON.parse(localStorage.getItem('localData')).length === 0){
    localStorage.setItem('localData',"[1, 5, 2]")
  }
  

  const removeItem = (id) => {
    console.log(id)
    a = a.filter(item => item !== id)
    console.log(a)
    for(let i = 0; i<data.length; i++){
      if(id === data[i].id){
      localStorage.setItem('localData', JSON.stringify(a))
      }
    }
    window.location.reload()
  }

  useEffect(() => {

      console.log(a)
      console.log(data)
    for(let i = 0; i<data.length; i++){
      for(let j = 0; j<a.length; j++){

      if(a[j] == data[i].id){
        setProductArray(current => [...current, {id: data[i].id,name: data[i].name,price: data[i].price,imgURI: data[i].imgURI,img: data[i].img}]);
        }
      }
    }

  }, [setProductArray])
  console.log(productArray)

  for(let i = 0; i<productArray.length; i++){
    mrp += productArray[i].price
  }

  return (
    <>
      <section id="hero2">
        <h2>#Cart</h2>
        <p>Read all case studies about our products!</p>
      </section>

      <div className="cart-container">
        <div className="cart-product-container">

          {
            productArray && productArray.map( product => {
              return(
                <div className="cart-product" key={product.id}>
                  <div className="cart-img">
                    <img src={ product.img } alt="FlyBuy product" />
                  </div>
                  <div className="cart-product-detail">
                    <div className="product-name-delivery">
                      <h4>{product.name}</h4>
                      <span>Delivery by Mon</span>
                    </div>
                    <div className="price-qty">
                      <span>{product.price}</span>
                      <QtyBtn />
                    </div>
                    <div className="cart-product-icons">
                      <span>
                        <i className="fa-solid fa-heart" title="Save For Later"></i>
                      </span>
                      <span>
                        <i
                          className="fa-solid fa-trash"
                          title="Remove"
                          onClick={()=>{removeItem(product.id)}}
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>        
              )
            })
          }

          {/* <div className="cart-product">
            <div className="cart-img">
              <img src="images/image15.jpg" alt="FlyBuy product" />
            </div>
            <div className="cart-product-detail">
              <div className="product-name-delivery">
                <h4>Product Name</h4>
                <span>Delivery by Mon</span>
              </div>
              <div className="price-qty">
                <span>Rs 299</span>
                <QtyBtn />
              </div>
              <div className="cart-product-icons">
                <span>
                  <i className="fa-solid fa-heart" title="Save For Later"></i>
                </span>
                <span>
                  <i className="fa-solid fa-trash" title="Remove"></i>
                </span>
              </div>
            </div>
          </div> */}

        </div>

        <section className="card-add">
          <div id="coupon">
            <h2>Apply Coupon</h2>
            <input type="text" placeholder="Enter Coupon here" />
            <button>Apply</button>
          </div>

          <div className="subtotal">
            <h3>PRICE DETAILS</h3>
            <div className="more-details">
              <span>Price ({productArray.length} items)</span>
              <span>{mrp}</span>
            </div>
            <div className="more-details">
              <span>Discount</span>
              <span>- {discount}</span>
            </div>
            <div className="more-details">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <div className="more-details">
              <span><strong>Total</strong></span>
              <span><strong>{mrp-discount}</strong></span>
            </div>
            <button>Proceed to checkout</button>
          </div>
        </section>
      </div>
      <Marquee className="marquee" gradient={false} direction="right">
        Thanks for purchasing the product from FlyBuy.
      </Marquee>

      <Footer />
    </>
  );
}
