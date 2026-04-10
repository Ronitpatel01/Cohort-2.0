import React from "react";
import { Link } from "react-router-dom";

const TopBanner = () => {
  return (
    <div className="top-banner">
      <span>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </span>
      <Link to="#" className="shop-link">
        ShopNow
      </Link>
      <div className="language-selector">
        <select>
          <option>English</option>
          <option>Español</option>
          <option>Français</option>
        </select>
      </div>
    </div>
  );
};

export default TopBanner;
