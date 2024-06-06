import React from "react";
import './footer.css'; // Assuming you have a CSS file for the footer styles

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <hr className="footer-line"/>
      <p className="footer-text">Copyright © tdzuonggggg</p>
    </footer>
  );
}

export default Footer;
