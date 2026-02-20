import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav-container">
      <h1 className="nav-title">Horizon Courts</h1>

      <div className="nav-links-wrapper">
        <a href="#about">About us</a>
        <a href="#services">Services</a>
        <a href="#coaches">Coaches</a>
        <a href="#events">Events</a>
        <a href="#contacts">Contacts</a>
      </div>

      <button className="book-btn">
        Book now <span>↗</span>
      </button>
    </nav>
  );
};

export default Nav;