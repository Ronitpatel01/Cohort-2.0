import React, { useState, useEffect } from "react";
import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PromotionalBanner from "../components/PromotionalBanner";
import FlashSales from "../components/FlashSales";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import "./dashboard.css";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  const scrollRef = React.useRef(null);
  const footerRef = React.useRef(null);
  const topRef = React.useRef(null);

  // Categories data
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper function to get discount percentage
  const getDiscount = (index) => {
    const discounts = [40, 35, 30, 28, 25, 20, 15, 10];
    return discounts[index % discounts.length];
  };

  // Scroll products carousel left/right
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  // Scroll to top of page
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to footer
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle wishlist toggle
  const handleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  // Handle add to cart
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((p) => p.id === product.id);
      if (existingItem) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    alert(`${product.title} added to cart!`);
  };

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="dashboard-container" ref={topRef}>
      {/* Top promotional banner */}
      <TopBanner />

      {/* Navigation bar */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        scrollToTop={scrollToTop}
        scrollToFooter={scrollToFooter}
      />

      <div className="dashboard">
        {/* Category sidebar */}
        <Sidebar categories={categories} />

        {/* Main content area */}
        <main className="main-content">
          {/* Promotional banner */}
          <PromotionalBanner />

          {/* Flash sales section with products */}
          <FlashSales
            products={products}
            timeLeft={timeLeft}
            scrollRef={scrollRef}
            onScroll={handleScroll}
            onWishlist={handleWishlist}
            onAddToCart={handleAddToCart}
            getDiscount={getDiscount}
          />

          {/* About/Features section */}
          <AboutSection />
        </main>
      </div>

      {/* Footer section */}
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
