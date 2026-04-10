import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Exclusive Column */}
        <div className="footer-column">
          <h3>Exclusive</h3>
          <div className="subscribe-section">
            <p className="subscribe-label">Subscribe</p>
            <p className="subscribe-text">Get 10% off your first order</p>
            <div className="email-input-wrapper">
              <input type="email" placeholder="Enter your email" />
              <button className="send-btn">→</button>
            </div>
          </div>
        </div>

        {/* Support Column */}
        <div className="footer-column">
          <h3>Support</h3>
          <ul className="footer-links">
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li><a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a></li>
            <li><a href="tel:+8801588888-9999">+8801588888-9999</a></li>
          </ul>
        </div>

        {/* Account Column */}
        <div className="footer-column">
          <h3>Account</h3>
          <ul className="footer-links">
            <li><a href="/account">My Account</a></li>
            <li><a href="/login">Login / Register</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/wishlist">Wishlist</a></li>
            <li><a href="/shop">Shop</a></li>
          </ul>
        </div>

        {/* Quick Link Column */}
        <div className="footer-column">
          <h3>Quick Link</h3>
          <ul className="footer-links">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms Of Use</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Download App Column */}
        <div className="footer-column">
          <h3>Download App</h3>
          <p className="download-text">Save $3 with App New User Only</p>
          <div className="qr-code">
            <div className="qr-placeholder">📱</div>
          </div>
          <div className="app-links">
            <button className="app-btn">Google Play</button>
            <button className="app-btn">App Store</button>
          </div>
          <div className="social-links">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">𝕏</a>
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">in</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
