import React from "react";
import "../style.css";

const FeatureCards = (props) => {
  return (
    <>
      <div className="col-lg-6 my-5">
        <div className="row">
          <div className="col-lg-6 text-center feature-img">
            <img src={props.img} alt="Featurecard" />
          </div>
          <div className="col-lg-6 my-auto feature-text">
            <h5 className="font-weight-bold">{props.head}</h5>
            <p>{props.info}</p>
            <button type="button" className="btn btn-custom">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCards;
