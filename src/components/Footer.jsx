import React from 'react';
import '../styling/footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section contact">
        <h3>Contact Us</h3>
        <p>Email: support@sportmark.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Stadium Road, City, Country</p>
      </div>

      <div className="footer-section social">
        <h3>Follow Us</h3>
        <div className="icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>

      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      <div className="footer-section legal">
        <h3>Legal</h3>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Cookie Policy</a></li>
          <li><a href="#">Disclaimer</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SPORTMARK. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
