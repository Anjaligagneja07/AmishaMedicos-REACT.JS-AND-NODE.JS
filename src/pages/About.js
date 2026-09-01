import React from "react";
import {
  FiShield,
  FiTruck,
  FiCreditCard,
  FiHeadphones,
  FiUsers,
  FiPackage,
  FiMapPin,
  FiTarget,
  FiEye,
  FiTag,
  FiRefreshCw,
  FiHeart,
  FiLock,
  FiCheckCircle,
} from "react-icons/fi";

import "../styles/About.css";

import heroImage from "../Images/about-hero.png";
import missionImage from "../Images/mission.png";
import teamImage from "../Images/team.png";

const About = () => {
  return (
    <div className="about-page">

      {/* ================= HERO SECTION ================= */}
      <section className="about-hero">
        <div className="about-container">

          {/* LEFT CONTENT */}
          <div className="about-hero-content">
            <h1>
              About Us <span>♥</span>
            </h1>

            <h2>Your Health, Our Priority</h2>

            <p>
              Amisha Medicos is an online pharmacy dedicated to
              providing genuine medicines, healthcare products and
              trusted care right at your doorstep.
            </p>

            <p>
              We are committed to making healthcare accessible,
              affordable and convenient for everyone.
            </p>

            {/* HERO FEATURES */}
            <div className="hero-features">

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-hero-image">
            <img src={heroImage} alt="Amisha Medicos Team" />
          </div>

        </div>
      </section>


      {/* ================= STATS SECTION ================= */}
      <section className="stats-section">
        <div className="stats-container">

          <div className="stat-item">
            <FiUsers className="stat-icon" />

            <div>
              <h3>100,000+</h3>
              <p>Happy Customers</p>
            </div>
          </div>


          <div className="stat-divider"></div>


          <div className="stat-item">
            <FiPackage className="stat-icon" />

            <div>
              <h3>10,000+</h3>
              <p>Products</p>
            </div>
          </div>


          <div className="stat-divider"></div>


          <div className="stat-item">
            <FiTruck className="stat-icon" />

            <div>
              <h3>25,000+</h3>
              <p>Orders Delivered</p>
            </div>
          </div>


          <div className="stat-divider"></div>


          <div className="stat-item">
            <FiHeart className="stat-icon" />

            <div>
              <h3>200+</h3>
              <p>Healthcare Experts</p>
            </div>
          </div>


          <div className="stat-divider"></div>


          <div className="stat-item">
            <FiMapPin className="stat-icon" />

            <div>
              <h3>500+</h3>
              <p>Cities Served</p>
            </div>
          </div>

        </div>
      </section>


      {/* ================= MISSION VISION ================= */}
      <section className="mission-vision-section">

        <div className="mission-vision-container">

          {/* MISSION */}
          <div className="mission-box">

            <div className="mission-icon">
              <FiTarget />
            </div>

            <div className="mission-content">
              <h3>Our Mission</h3>

              <p>
                To deliver genuine medicines and healthcare
                products with trust, care and convenience.
                We aim to improve the quality of life by
                making healthcare simple and accessible
                to everyone.
              </p>
            </div>

          </div>


          {/* CENTER IMAGE */}
          <div className="mission-image">
            <img
              src={missionImage}
              alt="Medicines and Healthcare Products"
            />
          </div>


          {/* VISION */}
          <div className="vision-box">

            <div className="vision-icon">
              <FiEye />
            </div>

            <div className="vision-content">
              <h3>Our Vision</h3>

              <p>
                To become India’s most trusted online
                pharmacy, known for our reliability,
                customer care and commitment to a
                healthier tomorrow.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">

        <div className="section-heading">
          <h2>Why Choose Amisha Medicos?</h2>
          <div className="heading-line"></div>
        </div>


        <div className="why-container">

          {/* ITEM 1 */}
          <div className="why-item">

            <div className="why-icon">
              <FiCheckCircle />
            </div>

            <h3>100% Genuine</h3>

            <p>
              All medicines are sourced from licensed
              and trusted manufacturers.
            </p>

          </div>


          <div className="why-divider"></div>


          {/* ITEM 2 */}
          <div className="why-item">

            <div className="why-icon">
              <FiTruck />
            </div>

            <h3>On-Time Delivery</h3>

            <p>
              We ensure fast and reliable delivery
              to your doorstep.
            </p>

          </div>


          <div className="why-divider"></div>


          {/* ITEM 3 */}
          <div className="why-item">

            <div className="why-icon">
              <FiLock />
            </div>

            <h3>Secure Payments</h3>

            <p>
              Multiple secure payment options for
              a safe and smooth experience.
            </p>

          </div>


          <div className="why-divider"></div>


          {/* ITEM 4 */}
          <div className="why-item">

            <div className="why-icon">
              <FiHeadphones />
            </div>

            <h3>24/7 Support</h3>

            <p>
              Our customer support team is always
              here to help you.
            </p>

          </div>


          <div className="why-divider"></div>


          {/* ITEM 5 */}
          <div className="why-item">

            <div className="why-icon">
              <FiTag />
            </div>

            <h3>Best Prices</h3>

            <p>
              Affordable prices with exciting
              offers and discounts.
            </p>

          </div>


          <div className="why-divider"></div>


          {/* ITEM 6 */}
          <div className="why-item">

            <div className="why-icon">
              <FiRefreshCw />
            </div>

            <h3>Easy Returns</h3>

            <p>
              Hassle-free return and refund policy
              for your peace of mind.
            </p>

          </div>

        </div>

      </section>


      {/* ================= TEAM SECTION ================= */}
      <section className="team-section">

        <div className="team-container">

          {/* TEAM TEXT */}
          <div className="team-content">

            <h2>Our Team</h2>

            <p>
              Our team of pharmacists, healthcare experts
              and support staff work round the clock to ensure
              you get the best service and products.
            </p>

          </div>


          {/* TEAM IMAGE */}
          <div className="team-image">
            <img
              src={teamImage}
              alt="Amisha Medicos Team"
            />
          </div>


          {/* QUOTE */}
          <div className="team-quote">

            <div className="quote-mark">“</div>

            <p>
              We don’t just deliver medicines,
              <br />
              we deliver trust and care.
            </p>

            <strong>
              – Team Amisha Medicos
            </strong>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;