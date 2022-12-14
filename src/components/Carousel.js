import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import productData from "../data.json";
import dress from "../dress-data.json";
import bags from "../bags-data.json";
import jewellery from "../jewellery-data.json";
import "./css/Carousel.css";
import './css/Shop.css'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel(props) {
const [viewCard, setViewCard] = useState(5)
  const [screenSize, setScreenSize] = useState(document.body.clientWidth.target);
  const data = props.data
  useEffect(() => {
    window.addEventListener('resize', setScreenSize);
  // console.log(screenSize)

  if(document.body.clientWidth >= 1520)
    {setViewCard(5)}
  else if((document.body.clientWidth <= 1520) && (document.body.clientWidth >= 1225))
    {setViewCard(4)}
  else if((document.body.clientWidth <= 1225) && (document.body.clientWidth >= 920))
    {setViewCard(3)}
  else if((document.body.clientWidth <= 920) && (document.body.clientWidth >= 607))
    {setViewCard(2)}
  else
    {setViewCard(1)}

    return(() => {
        window.removeEventListener('resize', setScreenSize);
    })
  }, [screenSize])

  const addProduct = (product) => {

    let id = product.id
    console.log(id)
  
    if(JSON.parse(localStorage.getItem('localData')).length === 0){
      localStorage.setItem('localData',"[]")
    }
    id = parseInt(id)
    let a = JSON.parse(localStorage.getItem('localData'))
    a.push(id)
    console.log(a)
    localStorage.setItem('localData', JSON.stringify(a))
  }

  let navigate = useNavigate()

    const goTo = (product) => {
        navigate(`/addtocart/${product.id}`)
    };

//  Shuffle function for product shuffle

//   if(data){
//     data = data
//      .map(value => ({ value, sort: Math.random() }))
//      .sort((a, b) => a.sort - b.sort)
//      .map(({ value }) => value)
//      console.log(data)
// }

  if(data==="dress"){
    return (
    <>
    {/* This is used to check the width of the client machine */}
    {/* <div><center>Width: `${document.body.clientWidth}`</center></div> */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={1}
        slidesPerView={viewCard}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <div>
        {
          dress && dress.map((product) => {
            return (
            <SwiperSlide className="slides" key={product.id}>
            <div className="product">
              <div className="img-box" target="_blank" onClick={()=>{goTo(product)}}>
                <img src={product.img} alt={product.id} />
              </div>
              <p className="detail">
                {product.name}<p className="price">&#8377; {product.price}/-</p>
              </p>
              <div className="cart" onClick={()=>{addProduct(product)}}>
                <Link to="">Add to Cart</Link>
              </div>
            </div>
        </SwiperSlide>
          );
        })}
        </div>
      </Swiper>
    </>
  );
}
if(data==="bags"){
  return (
  <>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={1}
      slidesPerView={viewCard}
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      <div>
      {
        bags && bags.map((product) => {
          return (
          <SwiperSlide className="slides" key={product.id}>
          <div className="product">
            <div className="img-box" target="_blank" onClick={()=>{goTo(product)}}>
              <img src={product.img} alt={product.id} />
            </div>
            <p className="detail">
              {product.name}<p className="price">&#8377; {product.price}/-</p>
            </p>
            <div className="cart" onClick={()=>{addProduct(product)}}>
              <Link to="">Add to Cart</Link>
            </div>
          </div>
      </SwiperSlide>
        );
      })}
      </div>
    </Swiper>
  </>
);
}
if(data==="jewellery"){
  return (
  <>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={1}
      slidesPerView={viewCard}
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      <div>
      {
        jewellery && jewellery.map((product) => {
          return (
          <SwiperSlide className="slides" key={product.id}>
          <div className="product">
            <div className="img-box" target="_blank" onClick={()=>{goTo(product)}}>
              <img src={product.img} alt={product.id} />
            </div>
            <p className="detail">
              {product.name}<p className="price">&#8377; {product.price}/-</p>
            </p>
            <div className="cart" onClick={()=>{addProduct(product)}}>
              <Link to="">Add to Cart</Link>
            </div>
          </div>
      </SwiperSlide>
        );
      })}
      </div>
    </Swiper>
  </>
);
}

}
