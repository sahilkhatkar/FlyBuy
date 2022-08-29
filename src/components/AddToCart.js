import React, { useEffect, useState } from 'react';
import './css/AddToCart.css';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import data from "../data.json"

export default function AddToCart() {
  const { id } = useParams();
  const [imgSrc, setImgSrc] = useState()
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  console.log(id)

useEffect(() => {
  window.scrollTo(0, 0)
  for(let i=0; i<data.length; i++){
    if(id==data[i].id){
      console.log(data[i].id)
      setName(data[i].name)
      setPrice(data[i].price)
      setImgSrc(data[i].img)
    }
  }
})

const addProduct = () => {
  
}

  return (
    <>
    <section id="prodetials">
      <div class="single-pro-image">
          <img src = {imgSrc} width="100%" class="active" alt=""/>

        <div id="current-img" class="small-image-group">
          <div class="small-image-col">
            <img name='img1' type="image" src = {imgSrc} width="100%" id="smallImg1" alt=""/>
          </div>

          <div class="small-image-col">
            <img name='img2' type="image" src = {imgSrc} width="100%" id="smallImg2" alt=""/>
          </div>

          <div class="small-image-col">
            <img name='img3' type="image" src = {imgSrc} width="100%" id="smallImg3" alt=""/>
          </div>
        </div>
      </div>

      <div class="single-pro-details">
        <h4>Shop / Shirt</h4>
        <h2>{name}</h2>
        <h3>$ {price}</h3>
        <div id='selects'>
          <select>
            <option>Select size</option>
            <option>S</option>
            <option>M</option>
            <option selected>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
          <select id="qty">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {/* <input type="number" value="1" min="1" max="5"/> */}
        </div>
        <button class="AddToCart-btn" onClick={addProduct}>Add To Cart</button>
        <h2>Product Details</h2>
        <span>- Official Product from Flybuy pvt ltd</span>
      </div>
    </section>

    <Footer/>
    </>
  )
}
