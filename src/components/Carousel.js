import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data.json";
import "./css/Carousel.css";
import './css/Shop.css'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel() {
const [viewCard, setViewCard] = useState(5)
  const [screenSize, setScreenSize] = useState(document.body.clientWidth.target);
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
          data && data.map((product) => {
            return (
            <SwiperSlide className="slides" key={product.id}>
            <div className="product">
              <div className="img-box" target="_blank" onClick={()=>{goTo(product)}}>
                <img src={product.img} alt={product.id} />
              </div>
              <p className="detail">
                {product.name}<p className="price">&#8377; {product.price}/-</p>
              </p>
              <div className="cart" onClick={()=>{console.log("clickedddd")}}>
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
