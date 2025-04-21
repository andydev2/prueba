import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <h3>Made with ❤️ by Andy Mendoza</h3>
      <div className="footer-container">
        <div className="footer-items">
          <h4 className="footer-title">Sections</h4>
          <a
            aria-label="this button will take you to home section"
            className="footer-links"
            href="#home"
          >
            Home
          </a>
          <a
            aria-label="this button will take you to project section"
            className="footer-links"
            href="#projects"
          >
            Projects
          </a>
          <a
            aria-label="this button will take you to the about page"
            className="footer-links"
            href="assets/html/about.html"
          >
            About
          </a>
        </div>
        <div className="footer-items">
          <h4 className="footer-title">Socials</h4>
          <a
            aria-label="this link will take you to my instagram profile"
            className="footer-links"
            href="https://www.instagram.com/akira.san__"
            target="_blank"
          >
            Instagram
          </a>
          <a
            aria-label="this link will take you to my whatsapp"
            className="footer-links"
            href="https://walink.co/f08335"
            target="_blank"
          >
            Whatsapp
          </a>
          <a
            aria-label="this link will take you to my github profile"
            className="footer-links"
            href="https://github.com/andydev2"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
