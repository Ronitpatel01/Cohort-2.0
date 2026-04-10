import React from "react";

const ProductCard = ({
  product,
  discount,
  onWishlist,
  onAddToCart,
}) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <div className="discount-badge">-{discount}%</div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <div className="product-actions">
          <button
            className="action-btn"
            onClick={() => onWishlist(product)}
            title="Add to Wishlist"
          >
            ❤️
          </button>
          <button className="action-btn" title="Quick View">
            👁️
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <div className="product-price">
          <span className="original-price">
            ${(product.price * 1.5).toFixed(2)}
          </span>
          <span className="current-price">${product.price}</span>
        </div>
        <div className="product-rating">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="rating-count">
            {Math.floor(Math.random() * 500)}
          </span>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
