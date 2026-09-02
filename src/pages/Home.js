import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroSlide1 from "../Images/hero-slide1.png";
import heroSlide2 from "../Images/hero-slide2.png";
import heroSlide3 from "../Images/hero-slide3.png";
import Crocin from "../Images/Crocin.png";
import Dolo from "../Images/Dolo.png";
import Azithral from "../Images/Azithromycin.png";
import Calcium from "../Images/Calcium.png";
import Ceitirizine from "../Images/Ceitirizine.png";
import {FiArrowRight,FiChevronLeft,FiChevronRight,FiHeart,FiShoppingCart,FiUploadCloud,FiGrid,FiShield,FiTruck,FiCreditCard,FiHeadphones,FiActivity, FiCheckCircle} from "react-icons/fi";
import "../styles/Home.css";
function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroSlide1,
      title: "Your Health,\nOur Priority",
      description:
        "Genuine medicines, trusted care and fast delivery to your doorstep."
    },
    {
      image: heroSlide2,
      title: "Healthcare\nMade Simple",
      description:
        "Everything you need for your health and wellness."
    },
    {
      image: heroSlide3,
      title: "Care That\nComes Home",
      description:
        "Order medicines and healthcare products with ease."
    }
  ];


  const categories = [
    {
      name: "Medicines",
      discount: "Up to 20% OFF",
      icon: "💊",
      path: "/category/medicines"
    },
    {
      name: "Healthcare",
      discount: "Up to 30% OFF",
      icon: "🩺",
      path: "/category/healthcare"
    },
    {
      name: "Vitamins",
      discount: "Up to 25% OFF",
      icon: "🥗",
      path: "/category/vitamins-supplements"
    },
    {
      name: "Personal Care",
      discount: "Up to 30% OFF",
      icon: "🧴",
      path: "/category/personal-care"
    },
    {
      name: "Baby Care",
      discount: "Up to 25% OFF",
      icon: "👶",
      path: "/category/baby-care"
    },
    {
      name: "Fitness",
      discount: "Up to 20% OFF",
      icon: "🏋️",
      path: "/category/fitness"
    },
    {
      name: "Diabetes Care",
      discount: "Up to 25% OFF",
      icon: "🩸",
      path: "/category/diabetes-care"
    },
    {
      name: "Ayurveda",
      discount: "Up to 20% OFF",
      icon: "🌿",
      path: "/category/ayurveda"
    }
  ];


  const products = [
    {
      name: "Crocin 650mg Tablet",
      quantity: "15 Tablets",
      price: "₹25.50",
      oldPrice: "₹30.00",
      discount: "15% OFF",
      image: Crocin
    },
    {
      name: "Dolo 650mg Tablet",
      quantity: "15 Tablets",
      price: "₹20.00",
      oldPrice: "₹26.00",
      discount: "20% OFF",
      image: Dolo
    },
    {
      name: "Azithral 500mg Tablet",
      quantity: "3 Tablets",
      price: "₹105.00",
      oldPrice: "₹135.00",
      discount: "22% OFF",
      image: Azithral
    },
    {
      name: "Calcium + Vitamin D3",
      quantity: "30 Tablets",
      price: "₹180.00",
      oldPrice: "₹225.00",
      discount: "20% OFF",
      image: Calcium
    },
    {
      name: "Cetirizine 10mg Tablet",
      quantity: "10 Tablets",
      price: "₹18.00",
      oldPrice: "₹22.00",
      discount: "18% OFF",
      image: Ceitirizine
    }
  ];


  const healthConcerns = [
    {
      name: "Fever",
      icon: "🌡️"
    },
    {
      name: "Cough & Cold",
      icon: "🤧"
    },
    {
      name: "Pain Relief",
      icon: "🩹"
    },
    {
      name: "Stomach Care",
      icon: "🫃"
    },
    {
      name: "Diabetes",
      icon: "🩸"
    },
    {
      name: "Blood Pressure",
      icon: "❤️"
    },
    {
      name: "Skin Care",
      icon: "🧴"
    }
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };


  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };


  return (
    <div className="home-page">

      {/* ================= HERO ================= */}

      <section className="hero-section">

        <img
          src={slides[currentSlide].image}
          alt="Healthcare"
          className="hero-image"
        />

        <div className="hero-overlay"></div>


        <button
          className="hero-arrow hero-left"
          onClick={previousSlide}
        >
          <FiChevronLeft />
        </button>


        <div className="hero-content">

          <span className="genuine-badge">
            ✓ 100% Genuine Medicines
          </span>

          <h1>
            {slides[currentSlide].title
              .split("\n")
              .map((text, index) => (
                <React.Fragment key={index}>
                  {text}
                  <br />
                </React.Fragment>
              ))}
          </h1>

          <p>
            {slides[currentSlide].description}
          </p>


          <div className="hero-buttons">

            <Link
              to="/category/medicines"
              className="primary-btn"
            >
              Shop Medicines
              <FiArrowRight />
            </Link>

          </div>

        </div>


        <div className="hero-features">

          <div>
            <FiShield />
            <span>
              <strong>Genuine Products</strong>
              100% Original
            </span>
          </div>

          <div>
            <FiTruck />
            <span>
              <strong>Fast Delivery</strong>
              On time delivery
            </span>
          </div>

          <div>
            <FiCreditCard />
            <span>
              <strong>Secure Payment</strong>
              100% Safe & Secure
            </span>
          </div>

          <div>
            <FiHeadphones />
            <span>
              <strong>Expert Support</strong>
              24/7 Assistance
            </span>
          </div>

        </div>


        <button
          className="hero-arrow hero-right"
          onClick={nextSlide}
        >
          <FiChevronRight />
        </button>


        <div className="hero-dots">

          {slides.map((_, index) => (

            <button
              key={index}
              className={currentSlide === index ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
            />

          ))}

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="section-container categories-section">
        <div className="categories-row">
        <div className="categories-grid">

          {categories.map((category) => (

            <Link
              to={category.path}
              className="category-card"
              key={category.name}
            >

              <div className="category-icon">
                {category.icon}
              </div>

              <h3>
                {category.name}
              </h3>

              <p>
                {category.discount}
              </p>

            </Link>

          ))}

        </div>
         <Link
      to="/category/medicines"
      className="categories-view-all"
    >
      View All
      <FiArrowRight />
    </Link>

  </div>

      </section>


      {/* ================= POPULAR MEDICINES ================= */}

      <section className="section-container">

        <div className="section-heading">

          <h2>
            POPULAR MEDICINES 
          </h2>

          <Link to="/category/medicines">
            View All
            <FiArrowRight />
          </Link>

        </div>


        <div className="product-grid">

          {products.map((product) => (

            <div className="product-card" key={product.name}>

              <button className="wishlist-button">
                <FiHeart />
              </button>


              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>


              <div className="product-info">

                <h3>
                  {product.name}
                </h3>

                <p className="quantity">
                  {product.quantity}
                </p>


                <div className="price-row">

                  <strong>
                    {product.price}
                  </strong>

                  <del>
                    {product.oldPrice}
                  </del>

                  <span>
                    {product.discount}
                  </span>

                </div>


                <button className="cart-button">

                  <FiShoppingCart />

                  Add to Cart

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      <section className="section-container promo-layout">

        <div className="promo-banner">
    <div className="promo-content">

            <span>
              SPECIAL OFFER
            </span>

            <h2>
              Flat 20% OFF
            </h2>

            <p>
              On Medicines
            </p>

            <small>
              Use Code: <strong>AMISHA20</strong>
            </small>

            <Link to="/offers">
              Shop Now
            </Link>

          </div>

          <div className="promo-visual">

  <div className="promo-circle circle-one"></div>
  <div className="promo-circle circle-two"></div>
  <div className="promo-circle circle-three"></div>

  <div className="medical-card">
    <div className="medical-icon">
      <FiHeart />
    </div>

    <div className="medical-content">
      <strong>Healthy You</strong>
      <span>Trusted Healthcare</span>
    </div>

    <FiCheckCircle className="check-icon" />

  </div>

  <div className="floating-icon icon-shield">
    <FiShield />
  </div>

  <div className="floating-icon icon-activity">
    <FiActivity />
  </div>

</div>
        </div>
      </section>

      {/* ================= HEALTH CONCERNS ================= */}

      <section className="section-container health-section">

        <div className="section-heading">

          <h2>
            TOP HEALTH CONCERNS
          </h2>

        </div>


        <div className="health-grid">

          {healthConcerns.map((item) => (

            <Link
              to="/category/healthcare"
              className="health-card"
              key={item.name}
            >

              <span>
                {item.icon}
              </span>

              <strong>
                {item.name}
              </strong>

            </Link>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;