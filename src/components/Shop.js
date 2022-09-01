import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./css/Shop.css";
import FeatureProduct from "./FeatureProduct";
import Carousel from "./Carousel";

export default function Shop() {
  let navigate = useNavigate();

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const goTo = (e) => {

    // window.open(window.location.origin + "/addtocart", '_blank', 'toolbar=0,location=0,menubar=0');
    // window.open(window.location.origin + "/addtocart", '_blank');

    navigate("/addtocart")
    // prints the object
    // console.log(e)

    // prints the element array of current image clicked
    // console.log(e.nativeEvent.path)

    // Name of the product
    // console.log(e.nativeEvent.path[2].childNodes[2].childNodes[0].data)

    // Price of the product
    // console.log(e.nativeEvent.path[2].childNodes[2].childNodes[1].childNodes[0].data.split(' ')[2])

    // Prints the image source
    // console.log(e.target.currentSrc)
  };

  return (
    <>
      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value Deal</h2>
        <h1>On all Products</h1>
        <p>Save more with coupans & up to 70% off!</p>
        <button>SHOP NOW</button>
      </section>

      <center>
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
      </center>
      <div id="feature">
        {/* <FeatureProduct/> */}
        <Carousel/>
      </div>

      <section className="banner">
        <h3>Repair Services</h3>
        <h2>
          Up to <span>70% Off</span> All the T-Shirt & Accessories
        </h2>
        <button className="normal">Explore More</button>
      </section>

      <center>
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
      </center>
      <section id="feature">
        <Carousel/>
      </section>

      <div className="bag-collection-container">
        <h2>Bag collection</h2>
        <p>Bag Collection New Modren Design</p>
      </div>

      <Carousel/>

      <center style={{margin: "2rem 0 0 0 "}}>
        <h2>Jewellery & Accessories</h2>
        <p>Traditional Collection New Modern Design</p>
      </center>
      <div id="feature">
        {/* <FeatureProduct/> */}
        <Carousel/>
      </div>

      {/* <section id="feature">
        <div className="product" onClick={goTo}>
          <div className="img-box">
            <img src="images/image9.jpg" alt="1" />
          </div>
          <p className="detail">
            Black top<Link to="">Price: $ 23 /-</Link>
          </p>
          <div className="cart">
            <Link to="#">Add to Cart</Link>
          </div>
        </div>

        <div className="product" onClick={goTo}>
          <div className="img-box">
            <img src="images/image14.jpg" alt="1" />
          </div>
          <p className="detail">
            Black top<Link to="">Price: $ 23 /-</Link>
          </p>
          <div className="cart">
            <Link to="#">Add to Cart</Link>
          </div>
        </div>

        <div className="product" onClick={goTo}>
          <div className="img-box">
            <img src="images/image1.jpg" alt="1" />
          </div>
          <p className="detail">
            Black top<Link to="">Price: $ 23 /-</Link>
          </p>
          <div className="cart">
            <Link to="#">Add to Cart</Link>
          </div>
        </div>

        <div className="product" onClick={goTo}>
          <div className="img-box">
            <img src="images/image1.jpg" alt="1" />
          </div>
          <p className="detail">
            Black top<Link to="">Price: $ 23 /-</Link>
          </p>
          <div className="cart">
            <Link to="#">Add to Cart</Link>
          </div>
        </div>
      </section> */}

      <section id="sm-banner">
        <div className="banner-box">
          <h4>Crazy Deals</h4>
          <h2>Buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at Zara</span>
          <br />
          <br />
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box1">
          <h4>Spring Summer</h4>
          <h2>Upcoming Season</h2>
          <span>The best classic dress is on sale at Zara</span>
          <br />
          <br />
          <button className="white">Collection</button>
        </div>
      </section>

      <section id="banner3">
        <div className="banner-box">
          <h2>Season SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>NEW FOOTWEAR COLLECTION</h2>
          <h3>Spring / Summer New Collection</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>T - SHIRTS</h2>
          <h3>New Trendy Prints</h3>
        </div>
      </section>
      <Footer />
    </>
  );
}
