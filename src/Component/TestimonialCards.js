import React from "react";
import "../style.css";

const TestimonialCards = (props) => {
  return (
    <div className="card card-custom py-5">
      <img
        className="card-img-top userImg mx-auto"
        src={props.image}
        alt="testimonial"
      />
      <div className="card-body">
        <p className="card-text text-center my-5">{props.comment}</p>
        <p className="card-text text-right">
          <small className="text-muted">{props.userName}</small>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCards;
