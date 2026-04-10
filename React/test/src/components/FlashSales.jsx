import React from "react";
import ProductCard from "./ProductCard";
import Countdown from "./Countdown";

const FlashSales = ({
  products,
  timeLeft,
  scrollRef,
  onScroll,
  onWishlist,
  onAddToCart,
  getDiscount,
}) => {
  return (
    <section className="flash-sales">
      <div className="section-header">
        <div className="section-title">
          <span className="badge">Today's</span>
          <h2>Flash Sales</h2>
        </div>
        <Countdown timeLeft={timeLeft} />
      </div>

      {/* Products Grid */}
      <div className="products-container">
        <button
          className="scroll-arrow"
          onClick={() => onScroll("left")}
          title="Scroll Left"
        >
          ←
        </button>
        <div className="products-scroll-wrapper" ref={scrollRef}>
          <div className="products-grid">
            {products.slice(0, 8).map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                discount={getDiscount(index)}
                onWishlist={onWishlist}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
        <button
          className="scroll-arrow"
          onClick={() => onScroll("right")}
          title="Scroll Right"
        >
          →
        </button>
      </div>

      <div className="view-all-btn-wrapper">
        <button className="view-all-btn">View All Products</button>
      </div>
    </section>
  );
};

export default FlashSales;
