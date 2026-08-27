import React from "react";
import { Outlet } from "react-router-dom";

import TopBar from "./Topbar";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../styles/Layout.css";

function Layout() {
  return (
    <div className="app">

      <TopBar />

      <Header />

      <Navbar />

      <main className="page-content">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default Layout;