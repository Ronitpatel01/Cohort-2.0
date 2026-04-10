import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  searchTerm,
  setSearchTerm,
  cartCount,
  wishlistCount,
  scrollToTop,
  scrollToFooter,
}) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">Exclusive</div>
      <div className="nav-links">
        <button
          onClick={scrollToTop}
          className="nav-link"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "inherit",
          }}
        >
          Home
        </button>
        <button
          onClick={scrollToFooter}
          className="nav-link"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "inherit",
          }}
        >
          Contact
        </button>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/login" className="nav-link">
          Sign Up
        </Link>
      </div>
      <div className="nav-icons">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="icon-btn"
          onClick={() => console.log("Search:", searchTerm)}
        >
          🔍
        </button>
        <button className="icon-btn" title={`Wishlist (${wishlistCount})`}>
          ❤️
        </button>
        <button className="icon-btn" title={`Cart (${cartCount})`}>
          🛒
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
