import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";
import CategoryPage from "./pages/CategoryPage";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Prescription from "./pages/Prescription";
import TrackOrder from "./pages/TrackOrder";
import HelpSupport from "./pages/HelpSupport";
import "./styles/Pages.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="offers" element={<Offers />} />
          
          <Route path="track-order" element={<TrackOrder />} />
          <Route path="help-support" element={<HelpSupport />} />

          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="prescriptions" element={<Prescription />} />

          <Route
            path="category/medicines"
            element={<CategoryPage category="Medicines" />}
          />

          <Route
            path="category/healthcare"
            element={<CategoryPage category="Healthcare" />}
          />

          <Route
            path="category/personal-care"
            element={<CategoryPage category="Personal Care" />}
          />

          <Route
            path="category/baby-care"
            element={<CategoryPage category="Baby Care" />}
          />

          <Route
            path="category/vitamins-supplements"
            element={<CategoryPage category="Vitamins & Supplements" />}
          />

          <Route
            path="category/diabetes-care"
            element={<CategoryPage category="Diabetes Care" />}
          />

          <Route
            path="category/ayurveda"
            element={<CategoryPage category="Ayurveda" />}
          />

          <Route
            path="category/fitness"
            element={<CategoryPage category="Fitness" />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;