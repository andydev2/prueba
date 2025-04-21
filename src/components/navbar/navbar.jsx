import React from "react";
import "./navbar.css";

const navLinks = document.querySelectorAll(".links");
const sections = document.querySelectorAll("section");

let currentSection = "home";
window.addEventListener("scroll", () => {
  sections.forEach((sections) => {
    if (window.scrollY >= sections.offsetTop - sections.clientHeight / 1.5) {
      currentSection = sections.id;
    }
  });

  navLinks.forEach((navLinks) => {
    if (navLinks.href.includes(currentSection)) {
      document.querySelector(".active").classList.remove("active");
      navLinks.classList.add("active");
    }
  });
});

const Navbar = () => {
  return (
    <header className="header content">
      <nav className="nav">
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <a
              aria-label="this button will take u to home"
              href="#home"
              className="nav-link active links"
            >
              Home
            </a>
          </li>
          <li className="nav-menu-item">
            <a
              aria-label="this button will take you tu projects section"
              href="#projects"
              className="nav-link links"
            >
              Projects
            </a>
          </li>
          <li className="nav-menu-item">
            <a
              aria-label="this button will take you to about page"
              href="assets/html/about.html"
              className="nav-link"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
