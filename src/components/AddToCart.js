import React, { useEffect, useState } from 'react';
import './css/AddToCart.css';
import Alert from "./Alert";
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import productData from "../data.json";
import dress from "../dress-data.json";
import bags from "../bags-data.json";
import jewellery from "../jewellery-data.json";

export default function AddToCart() {
  const { id } = useParams();
  // const [prodId, setProdId] = useState()
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [imgSrc, setImgSrc] = useState()

  const [alert, setAlert] = useState()

useEffect(() => {
  window.scrollTo(0, 0)
  for(let i=0; i<dress.length; i++){
    if(id==dress[i].id){
      // console.log(dress[i].id)
      // setProdId(dress[i].id)
      setName(dress[i].name)
      setPrice(dress[i].price)
      setImgSrc(dress[i].img)
    }
  }

  for(let i=0; i<bags.length; i++){
    if(id==bags[i].id){
      // console.log(bags[i].id)
      // setProdId(bags[i].id)
      setName(bags[i].name)
      setPrice(bags[i].price)
      setImgSrc(bags[i].img)
    }
  }

  for(let i=0; i<jewellery.length; i++){
    if(id==jewellery[i].id){
      // console.log(jewellery[i].id)
      // setProdId(jewellery[i].id)
      setName(jewellery[i].name)
      setPrice(jewellery[i].price)
      setImgSrc(jewellery[i].img)
    }
  }
})

const addProduct = (id) => {

  // console.log(id)

  if(JSON.parse(localStorage.getItem('localData')).length === 0){
    localStorage.setItem('localData',"[]")
  }
  id = parseInt(id)
  let a = JSON.parse(localStorage.getItem('localData'))
  a.push(id)
  console.log(a)
  localStorage.setItem('localData', JSON.stringify(a))

  setAlert(true)
  setTimeout(()=>{
    setAlert(null)
  }, 2500)
}

  return (
    <>
    <Alert alert={alert}/>

    <section id="prodetials">
      <div className="single-pro-image">
          <img src = {imgSrc} width="100%" className="active" alt=""/>

        <div id="current-img" className="small-image-group">
          <div className="small-image-col">
            <img name='img1' type="image" src = {imgSrc} width="100%" id="smallImg1" alt=""/>
          </div>

          <div className="small-image-col">
            <img name='img2' type="image" src = {imgSrc} width="100%" id="smallImg2" alt=""/>
          </div>

          <div className="small-image-col">
            <img name='img3' type="image" src = {imgSrc} width="100%" id="smallImg3" alt=""/>
          </div>
        </div>
      </div>

      <div className="single-pro-details">
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
        <button className="AddToCart-btn" onClick={()=>{addProduct(id)}}>Add To Cart</button>
        <h2>Product Details</h2>
        <span>- Official Product from Flybuy pvt ltd</span>
      </div>
    </section>

    <Footer/>
    </>
  )
}
