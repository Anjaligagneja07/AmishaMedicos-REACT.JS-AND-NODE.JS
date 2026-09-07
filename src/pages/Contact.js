import React from "react";
import {FiPhone,FiMail,FiMapPin,FiClock,FiSend,FiCheckCircle,} from "react-icons/fi";
import "../styles/Contact.css";
import contactImage from "../Images/contact-hero.png";
import mapImage from "../Images/map.png";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* ================= HERO SECTION ================= */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <div className="contact-hero3-content">
            <h1>
              Contact Us <span>♥</span>
            </h1>
            <h2>We're here to help!</h2>
            <p>
              Have a question or need assistance? Reach out to us and
              our support team will get back to you as soon as possible.
            </p>
          </div>

          <div className="contact-hero-image">
            <img
              src={contactImage}
              alt="Contact Amisha Medicos"
            />
          </div>
        </div>
      </section>

      {/* ================= CONTACT AREA ================= */}
      <section className="contact-main">
        <div className="contact-main-container">
          <div className="contact-info">

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FiPhone />
              </div>

              <div className="contact-info-text">
                <h3>Phone</h3>

                <p>+91 98765 43210</p>

                <span>Mon - Sat: 9:00 AM - 9:00 PM</span>
              </div>

            </div>

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FiMail />
              </div>

              <div className="contact-info-text">
                <h3>Email</h3>

                <p>support@amishamedicos.com</p>

                <span>We reply within 24 hours</span>
              </div>

            </div>

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FiMapPin />
              </div>

              <div className="contact-info-text">
                <h3>Address</h3>

                <p>
                  Amisha Medicos, Barnala Road,
                  <br />
                  Sirsa, Haryana-125055, India
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FiClock />
              </div>
              <div className="contact-info-text">
                <h3>Working Hours</h3>
                <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
                <span>Sunday: 10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>


          {/* ================= CONTACT FORM ================= */}
          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Your Email"
                  />
                </div>

              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Phone Number"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Subject"
                />
              </div>

              <div className="form-group">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="send-message-btn"
              >
                Send Message
                <FiSend />
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= MAP / STORE SECTION ================= */}
      <section className="store-section">
        <div className="store-container">
          <div className="store-map">
            <img
              src={mapImage}
              alt="Amisha Medicos Location"
            />
          </div>

          <div className="find-us">
            <h2>Find Us</h2>
            <p>
              Visit our store for all your
              healthcare needs.
            </p>

            <div className="store-features">
              <div className="store-feature">
                <FiCheckCircle />
                <span>Easy Parking Available</span>
              </div>

              <div className="store-feature">
                <FiCheckCircle />
                <span>Wheelchair Accessible</span>
              </div>

              <div className="store-feature">
                <FiCheckCircle />
                <span>In-store Pickup</span>
              </div>

              <div className="store-feature">
                <FiCheckCircle />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;