import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

const HeroText = () => {
  return (
    <div className="hero-text">
      {/* <div>
        <h1>Looking for the cheapest return flights from Mars to Earth?</h1>
      </div>
      <button type="button" className="btn btn-custom">
        BOOK YOUR SEATS NOW
      </button> */}
      <div className="">
        <h6>A ONCE IN A LIFETIME GATEWAY</h6>
        <h1 className=" font-weight-bold">THE GRAND TOUR</h1>
        <h2 className="lead font-weight-bold">with SPACE TRAVEL AGENCY</h2>
        <hr className="my-4" />
        <p className="mb-2">
          Looking for the cheapest return flights from Mars to Earth?
        </p>
        <Link to="/cart" className="btn btn-custom my-2">
          BOOK YOUR SEATS NOW!{" "}
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
