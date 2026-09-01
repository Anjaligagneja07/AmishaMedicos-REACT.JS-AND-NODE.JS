import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FiMenu,
  FiChevronDown,
  FiTag
} from "react-icons/fi";

function Navbar() {

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const categories = [
    {
      name: "Medicines",
      path: "/category/medicines"
    },
    {
      name: "Personal Care",
      path: "/category/personal-care"
    },
    {
      name: "Baby Care",
      path: "/category/baby-care"
    },
    {
      name: "Healthcare",
      path: "/category/healthcare"
    },
    {
      name: "Vitamins & Supplements",
      path: "/category/vitamins-supplements"
    },
    {
      name: "Diabetes Care",
      path: "/category/diabetes-care"
    },
    {
      name: "Ayurveda",
      path: "/category/ayurveda"
    },
    {
      name: "Fitness",
      path: "/category/fitness"
    }
  ];

  return (

    <nav className="navbar">

      <div className="navbar-container">

        {/* SHOP CATEGORY */}
        <div className="category-menu">

          <button
            className="shop-category-btn"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >

            <FiMenu />
            Shop By Category
            <FiChevronDown />
          </button>

          {categoryOpen && (

            <div className="category-dropdown">

              {categories.map((category) => (

                <Link
                  key={category.name}
                  to={category.path}
                  onClick={() => setCategoryOpen(false)}
                >
                  {category.name}
                </Link>

              ))}

            </div>

          )}

        </div>

<div className="nav-marquee">
  <div className="marquee-content">
    <span>💊 Genuine Medicines</span>
    <span>🚚 Fast Delivery</span>
    <span>🔒 Secure Payments</span>
    <span>❤️ Trusted Healthcare</span>
  </div>
</div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <FiMenu />
        </button>


        <div className={`navbar-links ${mobileOpen ? "mobile-show" : ""}`}>

          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/offers" className="offer-link">
            <FiTag />
            Offers
          </Link>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;