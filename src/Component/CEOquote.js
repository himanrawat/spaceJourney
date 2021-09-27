import React from "react";
import "../style.css";
import CEO from "./assets/ceo.jpg";

const CEOquote = () => {
  return (
    <div className="quote-wrap" id="ceo">
      <div className="imgquote"></div>
      <div className="container quote text-center my-auto">
        <h2>&#8220;Right time to invest into space&#8221;</h2>
        <p>
          Nmet nullam sed habitasse dignissim viverra congue nisl. Lacus purus
          eu, mauris pretium mollis ac id mauris eget.
        </p>
        <div className="row">
          <div className="col-md-6 ceoimg text-right">
            <img src={CEO} alt="ceo" className="ceoimg" />
          </div>
          <div className="col-md-6 text-left my-auto">
            <h4 className="font-weight-bold">ELON MUSK</h4>
            <p className="font-weight-bold">CEO, SPACE JOURNEY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOquote;
