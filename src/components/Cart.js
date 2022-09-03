import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Marquee from "react-fast-marquee";
import QtyBtn from "./QtyBtn";
import "./css/Shop.css";
import "./css/Cart.css";

import allProducts from "../all-products.json";
import coupon from "../coupons.json";

export default function Cart() {

  // Date set-Up

  let dt = new Date()
  dt.setDate(dt.getDate() + 3)
  let deliveryDate = JSON.stringify(dt.toDateString()).split(" ")
  deliveryDate[0] = deliveryDate[0].split('"')

  // Setting Up MRP, discount

  let mrp = 0;
  let discount = 20;
  const [productArray, setProductArray] = useState([]);

  let navigate = useNavigate();

  let a = JSON.parse(localStorage.getItem("localData"));
  let uniqueChars = a.filter((c, index) => {
    return a.indexOf(c) === index;
  });
  localStorage.setItem("localData", JSON.stringify(uniqueChars));

  const removeItem = (id) => {
    console.log(id);
    a = a.filter((item) => item !== id);
    console.log(a);

    for (let i = 0; i < allProducts.length; i++) {
      if (id === allProducts[i].id) {
        localStorage.setItem("localData", JSON.stringify(a));
      }
    }
    for (let i =0;i<productArray.length; i++){
      if(productArray[i].id === id)
      setProductArray(productArray.splice(i,1))
    }
    console.log(productArray)
  };

  useEffect(() => {
    // console.log(a);
    for (let i = 0; i < allProducts.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (a[j] == allProducts[i].id) {
          setProductArray((current) => [
            ...current,
            {
              id: allProducts[i].id,
              name: allProducts[i].name,
              price: allProducts[i].price,
              img: allProducts[i].img,
            },
          ]);
        }
      }
    }
    console.log(productArray);
  }, []);
  console.log(productArray);

  for (let i = 0; i < productArray.length; i++) {
    mrp += productArray[i].price;
  }

  const goTo = (product) => {
    navigate(`/addtocart/${product.id}`)
}

  let shipping = 150;
  if (mrp >= 1000) shipping = 0;

  // Applying Coupon

  const [couponName, setCouponName] = useState('')
  const [couponPrice, setCouponPrice] = useState(null)

  function getVal() {
    const val = document.querySelector('#applyCoupon').value.toUpperCase()

    for(let i = 0; i < coupon.length; i++){
      if(coupon[i].coupon === val){
        console.log("coupon applied")
        setCouponName(coupon[i].coupon)
        setCouponPrice(coupon[i].price)
        const btn = document.getElementById('apply-btn');
        btn.style.backgroundColor = "hsl(146, 50%, 60%)"
        btn.textContent = "Applied"
      }
    }
  }

  if(JSON.parse(localStorage.getItem('localData')).length === 0){
    localStorage.setItem('localData',"[]")

    return (
      <>
        <section id="hero2">
          <h2>#Cart</h2>
          <p>Read all case studies about our products!</p>
        </section>

        <div className="about">
      <div className="emptyness">
        <h1>Explore More</h1>
        <span>Your cart is Empty!</span>
      </div>
        <button
          // className="button-85"
          id="add-more"
          onClick={() => {
            navigate("/shop");
          }}
          >
          Shop More
        </button>
        </div>


        <Marquee className="marquee" gradient={false} direction="right">
        Explore our wide selection and find something you like.
        </Marquee>
  
        <Footer />
      </>
    );
  }

  else{
  return (
    <>
      <section id="hero2">
        <h2>#Cart</h2>
        <p>Read all case studies about our products!</p>
      </section>

      <div className="cart-container">
        <div className="cart-product-container">
          {productArray &&
            productArray.map((product) => {
              return (
                <div className="cart-product" key={product.id}>
                  <div className="cart-img">
                    <img src={product.img} onClick={()=>{goTo(product)}} alt="FlyBuy product" />
                  </div>
                  <div className="cart-product-detail">
                    <div className="product-name-delivery">
                      <h4>{product.name}</h4>
                      <span>Delivery by {deliveryDate[0]} {deliveryDate[2]}, {deliveryDate[1]}</span>
                    </div>
                    <div className="price-qty">
                      <span>{product.price}</span>
                      <QtyBtn />
                    </div>
                    <div className="cart-product-icons">
                      <span>
                        <i
                          className="fa-solid fa-heart"
                          title="Save For Later"
                          style={{color: "seagreen"}}
                        ></i>
                      </span>
                      <span>
                        <i
                          className="fa-solid fa-trash"
                          title="Remove"
                          style={{color: "hsl(0, 75%, 50%)"}}
                          onClick={() => {
                            removeItem(product.id);
                          }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <section className="card-add">
          <div id="coupon">
            <h2>Apply Coupon</h2>
            <input type="text" id="applyCoupon" style={{textTransform: "Uppercase"}} placeholder="Enter Coupon here" onBlur={getVal}/>
            <div id="apply-the-coupon">
              <button id="apply-btn">Apply</button>
              <span>{couponName} {couponPrice} %</span>
            </div>
          </div>

          <div className="subtotal">
            <h3>PRICE DETAILS</h3>
            <div className="more-details">
              <span>Price ({productArray.length} items)</span>
              <span>{mrp}</span>
            </div>
            <div className="more-details">
              <span>Discount</span>
              <span>
                <strong>{discount}%</strong> OFF
              </span>
            </div>
            <div className="more-details">
              <span>Shipping</span>
              <span>{shipping}</span>
            </div>
            <div className="more-details">
              <span>
                <strong>Total</strong>
              </span>
              <span>
                <strong>{Math.round((mrp * (100 - discount)) / 100) + shipping}</strong>
              </span>
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
}
