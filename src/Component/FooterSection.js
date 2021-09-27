import React from "react";
import "../style.css";
import Logo from "./assets/svg-logo.svg";
import { Link } from "react-scroll";

const FooterSection = () => {
  return (
    <>
      <div className="container-fluid footer-gap"></div>
      <div className="container-fluid footer-section p-5" id="contact">
        <div className="container text-white">
          <div className="row footer">
            <div className="col-md-4 mt-5 text-center">
              <Link to="home" smooth={true} duration={1000}>
                <img
                  src={Logo}
                  alt="logo"
                  className="footer-logo-img my-auto"
                />
              </Link>
              <h2 className="mt-5 font-weight-bold">SPACE JOURNEY</h2>
              <p>
                1354 Canaught Place <br /> New Delhi-110001 <br />{" "}
                +91-9582359740
              </p>
            </div>
            <div className="col-md-4 mt-5">
              <h2 className="font-weight-bold mb-5 text-center">QUICK LINKS</h2>
              <ul className="footer-nav">
                <li>
                  <Link
                    to="home"
                    className="footer-link"
                    smooth={true}
                    duration={1000}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="feature"
                    className="footer-link"
                    smooth={true}
                    duration={1000}
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="product"
                    className="footer-link"
                    smooth={true}
                    duration={1000}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="testimonial"
                    className="footer-link"
                    smooth={true}
                    duration={1000}
                  >
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link
                    to="blog"
                    className="footer-link"
                    smooth={true}
                    duration={1000}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    className="footer-link"
                    smooth={true}
                    duration={1000}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mt-5">
              <h2 className="font-weight-bold mb-5 text-center">NEWSLETTER</h2>
              <div className="Newsletter-input p-5">
                <p className="font-weight-bold">
                  We send updates in every week
                </p>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button type="button" className="btn newsletter-btn">
                      GO
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
