import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FiMapPin,
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiChevronDown
} from "react-icons/fi";

function Header() {

  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <header className="main-header">

      <div className="header-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          <div className="logo-icon">
            ✚
          </div>

          <div className="logo-text">
            <span>AMISHA</span>
            <span>MEDICOS</span>
          </div>
        </Link>


        {/* LOCATION */}
        <div className="location-box">

          <FiMapPin className="location-icon" />

          <div>
            <small>Deliver to</small>
            <strong>New Delhi, 110001</strong>
          </div>

          <FiChevronDown />

        </div>


        {/* SEARCH */}
        <div className="search-box">

          <input
            type="text"
            placeholder="Search for medicines, healthcare products..."
          />

          <button>
            <FiSearch />
            Search
          </button>

        </div>


        {/* ACCOUNT */}
        <div className="account-wrapper">

          <button
            className="account-button"
            onClick={() => setAccountOpen(!accountOpen)}
          >

            <FiUser className="header-icon" />

            <div>
              <small>Login / Register</small>
              <strong>My Account</strong>
            </div>

            <FiChevronDown />

          </button>


          {accountOpen && (

            <div className="account-dropdown">

              <Link to="/profile">
                My Profile
              </Link>

              <Link to="/orders">
                My Orders
              </Link>

              <Link to="/prescriptions">
                My Prescriptions
              </Link>

            </div>

          )}

        </div>


        {/* WISHLIST */}
        <Link to="/wishlist" className="header-action">

          <div className="icon-with-badge">
            <FiHeart />
          </div>

          <span>My Wishlist</span>

        </Link>


        {/* CART */}
        <Link to="/cart" className="header-action">

          <div className="icon-with-badge">
            <FiShoppingCart />

            <span className="badge">
              0
            </span>
          </div>

          <span>My Cart</span>

        </Link>

      </div>

    </header>
  );
}

export default Header;