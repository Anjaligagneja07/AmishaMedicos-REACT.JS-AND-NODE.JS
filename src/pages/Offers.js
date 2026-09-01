import React from "react";
import { Link } from "react-router-dom";
import {FiTag,FiChevronRight,FiChevronLeft,FiHeart,FiShoppingBag,FiPercent,FiTruck,FiRefreshCw,FiShield,FiCheckCircle} from "react-icons/fi";
import "../styles/Offers.css";
import offersBasket from "../Images/offers-basket.png";
import medicineOffer from "../Images/medicine-offer.png";
import healthcareOffer from "../Images/healthcare-offer.png";
import offerVitamins from "../Images/offer-vitamins.png";
import offerPersonalCare from "../Images/offer-personal-care.png";
import offerDelivery from "../Images/offer-delivery.png";
import offerAyurveda from "../Images/offer-ayurveda.png";
function Offers() {
  const offerCategories = [
    {
      name: "All Offers",
      icon: "🏷️",
      link: "/offers"
    },
    {
      name: "Medicines",
      icon: "💊",
      link: "/medicines"
    },
    {
      name: "Healthcare",
      icon: "🩺",
      link: "/healthcare"
    },
    {
      name: "Vitamins",
      icon: "🥗",
      link: "/vitamins"
    },
    {
      name: "Personal Care",
      icon: "🧴",
      link: "/personal-care"
    },
    {
      name: "Baby Care",
      icon: "👶",
      link: "/baby-care"
    },
    {
      name: "Fitness",
      icon: "🏋️",
      link: "/fitness"
    },
    {
      name: "Diabetes Care",
      icon: "🩸",
      link: "/diabetes-care"
    },
    {
      name: "Ayurveda",
      icon: "🌿",
      link: "/ayurveda"
    }
  ];

   const topOffers = [
    {
      discount: "15% OFF",
      title: "On Vitamins & Supplements",
      code: "VIT15",
      image: offerVitamins,
      className: "offer-pink"
    },
    {
      discount: "10% OFF",
      title: "On Personal Care Products",
      code: "CARE10",
      image: offerPersonalCare,
      className: "offer-blue"
    },
    {
      discount: "Flat ₹200 OFF",
      title: "On Orders Above ₹999",
      code: "SAVE200",
      image: offerDelivery,
      className: "offer-purple"
    },
    {
      discount: "Upto 30% OFF",
      title: "On Ayurvedic Products",
      code: "HEALTH30",
      image: offerAyurveda,
      className: "offer-green"
    }
  ];
  return (
    <div className="offers-page">
      <section className="offers-hero">
          <div className="offers-hero-content">
            <div className="offers-hero-text">
              <div className="offers-title-row">
              <h1>Offers & Deals</h1>
              <FiTag className="offers-title-icon" />
            </div>
             <h2>
              Save more on your health & wellness
            </h2>

            <p>
              Grab the best offers on medicines, healthcare products,
              and more. Limited time only!
            </p>
            </div>
             <div className="offers-hero-image">
            <img
              src={offersBasket}
              alt="Best healthcare offers"
            />
          </div>
          </div>
      </section>

      <section className="offer-category-section">

        <div className="offer-category-list">

          {offerCategories.map((category, index) => (

            <Link
              to={category.link}
              className={`offer-category-card ${
                index === 0 ? "active" : ""
              }`}
              key={category.name}
            >

              <span className="offer-category-icon">
                {category.icon}
              </span>

              <span className="offer-category-name">
                {category.name}
              </span>

            </Link>

          ))}

    </div>
    </section>

    <section className="main-offers-section">

        <div className="main-offer-banner medicine-offer">

          <button className="offer-slider-btn offer-prev">
            <FiChevronLeft />
          </button>

          <div className="main-offer-content">

            <span className="main-offer-discount">
              FLAT
            </span>

            <h2>
              20% OFF
            </h2>

            <p>
              On All Medicines
            </p>

            <span className="offer-code">
              Use Code:
              <strong>AMISHA20</strong>
            </span>

            <Link to="/offers">
              Shop Now
            </Link>

          </div>

          <div className="main-offer-image">
            <img
              src={medicineOffer}
              alt="Medicine offer"
            />
          </div>

        </div>


        <div className="main-offer-banner healthcare-offer">

          <div className="main-offer-content">

            <h2>
              Buy 2 Get 1 Free
            </h2>

            <p>
              On Healthcare Products
            </p>

            <span className="offer-code">
              Use Code:
              <strong>B2G1</strong>
            </span>

            <Link to="/offers">
              Shop Now
            </Link>

          </div>

          <div className="main-offer-image">
            <img
              src={healthcareOffer}
              alt="Healthcare products offer"
            />
          </div>

        </div>

      </section>

       <section className="top-offers-section">

        <div className="offers-section-heading">

          <h2>
            TOP OFFERS FOR YOU
          </h2>

          <Link to="/offers">
            View All
            <FiChevronRight />
          </Link>

        </div>
         <div className="top-offers-grid">

          {topOffers.map((offer) => (

            <div
              className={`top-offer-card ${offer.className}`}
              key={offer.code}
            >

              <div className="top-offer-content">

                <h3>
                  {offer.discount}
                </h3>

                <p>
                  {offer.title}
                </p>
                <span className="small-offer-code">
                  Use Code:
                  <strong>{offer.code}</strong>
                </span>

                <Link to="/offers">
                  Shop Now
                </Link>

              </div>

              <div className="top-offer-image">

                <img
                  src={offer.image}
                  alt={offer.title}
                />
                 </div>

            </div>

          ))}

        </div>

      </section>

       <section className="offer-benefits">

        <div className="benefit-item">

          <div className="benefit-icon">
            <FiTag />
          </div>

          <div>
            <strong>Best Prices</strong>
            <span>
              Guaranteed savings
              <br />
              on every order
            </span>
          </div>

        </div>
         <div className="benefit-item">

          <div className="benefit-icon">
            <FiShield />
          </div>

          <div>
            <strong>Genuine Products</strong>
            <span>
              100% genuine medicines
              <br />
              and products
            </span>
          </div>

        </div>
         <div className="benefit-item">

          <div className="benefit-icon">
            <FiTruck />
          </div>

          <div>
            <strong>Fast Delivery</strong>
            <span>
              On-time delivery
              <br />
              at your doorstep
            </span>
          </div>

        </div>
         <div className="benefit-item">

          <div className="benefit-icon">
            <FiRefreshCw />
          </div>

          <div>
            <strong>Easy Returns</strong>
            <span>
              Hassle-free returns
              <br />
              & refund policy
            </span>
          </div>

        </div>

      </section>
      </div>
  );
}

export default Offers;