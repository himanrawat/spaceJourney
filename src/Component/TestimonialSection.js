import React from "react";
import "../style.css";
import TestimonialCards from "./TestimonialCards";
import User1 from "./assets/user1.jpg";
import User2 from "./assets/user2.jpg";
import User3 from "./assets/user3.jpg";

const TestimonialSection = () => {
  return (
    <div
      id="testimonial"
      className="container-fluid py-5"
      style={{ backgroundColor: "#F7F9FC" }}
    >
      <div className="container py-5">
        <h2 className="font-weight-bold my-5 text-center">Testimonial</h2>
        <div className="row">
          <div className="card-deck">
            <TestimonialCards
              comment="I brought a rocket for my son in his 14th birthday. I liked their service. Love it."
              userName="George Taylor"
              image={User1}
            />
            <TestimonialCards
              comment="They delivered my custom rocket as fast as the rocket itself. Mindblowing."
              userName="Robert"
              image={User2}
            />
            <TestimonialCards
              comment="I found awesome customer service from them. They fixed my rocket within a day."
              userName="Jimmy Buttler"
              image={User3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
