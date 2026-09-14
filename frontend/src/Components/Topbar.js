import React from "react";
import { Link } from "react-router-dom";
import { FiTruck, FiMapPin, FiHelpCircle } from "react-icons/fi";

function TopBar() {
  return (
    <div className="topbar">

      <div className="topbar-left">
        <span>
          Welcome to Amisha Medicos - Your Health, Our Priority
        </span>
      </div>

      <div className="topbar-right">
        <Link to="/track-order">
        <FiTruck />
          Track Order
        </Link>

        <span className="top-divider">|</span>

        <Link to="/help-support">
          <FiHelpCircle />
          Help & Support
        </Link>

      </div>

    </div>
  );
}

export default TopBar;