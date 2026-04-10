import React from "react";
import { Link } from "react-router-dom";

const PromotionalBanner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>iPhone 14 Series</h2>
        <h1>Up to 10% off Voucher</h1>
        <Link to="#" className="shop-btn">
          Shop Now →
        </Link>
      </div>
      <div className="banner-image">
        <div className="iphone-mockup">📱</div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
