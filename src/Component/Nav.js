import React, { useState } from "react";
import "../style.css";
import { Link } from "react-scroll";
import { Link as ButtonLink } from "react-router-dom";
import Logo from "./assets/svg-logo.svg";

const Nav = () => {
  const [navColor, setNavColor] = useState(false);

  const changeNavColor = () => {
    const valueInVH = window.innerHeight * 1;

    if (window.scrollY >= valueInVH) {
      setNavColor(true);
    } else setNavColor(false);
  };

  window.addEventListener("scroll", changeNavColor);
  return (
    <div>
      <nav
        className={
          navColor
            ? "navbar-custom navbar navbar-expand-lg blackcolor bg-custom"
            : "navbar-custom navbar navbar-expand-lg whitecolor bg-custom"
        }
      >
        <Link className="navbar-brand" to="home" smooth={true} duration={1000}>
          <ButtonLink to="/">
            <img src={Logo} alt="logo" />
          </ButtonLink>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <label for="check">
            <input type="checkbox" id="check" />
            <span className={navColor ? " blackcolor" : " whitecolor"}></span>
            <span className={navColor ? " blackcolor" : " whitecolor"}></span>
            <span className={navColor ? " blackcolor" : " whitecolor"}></span>
          </label>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-center mx-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="home"
                smooth={true}
                duration={1000}
              >
                <ButtonLink to="/" className="cartbtn">
                  Home
                </ButtonLink>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="feature"
                smooth={true}
                duration={1000}
              >
                <ButtonLink to="/" className="cartbtn">
                  Features
                </ButtonLink>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="product"
                smooth={true}
                duration={1000}
              >
                <ButtonLink to="/" className="cartbtn">
                  Products
                </ButtonLink>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="blog"
                smooth={true}
                duration={1000}
              >
                <ButtonLink to="/" className="cartbtn">
                  Blog
                </ButtonLink>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="testimonial"
                smooth={true}
                duration={1000}
              >
                <ButtonLink to="/" className="cartbtn">
                  Testimonial
                </ButtonLink>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact"
                smooth={true}
                duration={1000}
              >
                <ButtonLink to="/" className="cartbtn">
                  Contact
                </ButtonLink>
              </Link>
            </li>
          </ul>
          <ButtonLink className="btn btn-custom" to="/cart">
            BOOK NOW!
          </ButtonLink>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
