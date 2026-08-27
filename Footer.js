import React from "react";
import { Link } from "react-router-dom";

import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiTwitter
} from "react-icons/fi";

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <div className="footer-logo">
            <div className="footer-logo-icon">
              ✚
            </div>

            <div>
              <strong>AMISHA</strong>
              <span>MEDICOS</span>
            </div>
          </div>

          <p>
            Your trusted online pharmacy for genuine medicines,
            healthcare products and wellness solutions.
          </p>

          <div className="social-icons">
            <a href="#">
              <FiFacebook />
            </a>

            <a href="#">
              <FiInstagram />
            </a>

            <a href="#">
              <FiTwitter />
            </a>
          </div>

        </div>


        <div className="footer-column">

          <h3>
            Quick Links
          </h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/about-us">
            About Us
          </Link>

          <Link to="/contact-us">
            Contact Us
          </Link>

          <Link to="/offers">
            Offers
          </Link>

        </div>


        <div className="footer-column">

          <h3>
            Categories
          </h3>

          <Link to="/category/medicines">
            Medicines
          </Link>

          <Link to="/category/healthcare">
            Healthcare
          </Link>

          <Link to="/category/personal-care">
            Personal Care
          </Link>

          <Link to="/category/baby-care">
            Baby Care
          </Link>

          <Link to="/category/ayurveda">
            Ayurveda
          </Link>

        </div>


        <div className="footer-column">

          <h3>
            Customer Support
          </h3>

          <Link to="/help-support">
            Help & Support
          </Link>

          <Link to="/track-order">
            Track Order
          </Link>

          <Link to="/store-locator">
            Store Locator
          </Link>


        </div>


        <div className="footer-contact">

          <h3>
            Contact Us
          </h3>

          <p>
            <FiPhone />
            +91 98765 43210
          </p>

          <p>
            <FiMail />
            support@amishamedicos.com
          </p>

          <p>
            <FiMapPin />
            Sirsa, Haryana, India
          </p>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 Amisha Medicos. All Rights Reserved.
        </span>

        <div>
          <Link to="/privacy-policy">
            Privacy Policy
          </Link>
          &nbsp; | &nbsp;
          <Link to="/terms">
            Terms & Conditions
          </Link>
        </div>

      </div>

    </footer>
  );
}

export default Footer;