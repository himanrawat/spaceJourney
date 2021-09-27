import React, { useRef } from "react";
import "../style.css";
import FeatureCards from "./FeatureCards";
import Img1 from "./assets/1.jpg";
import Img2 from "./assets/2.jpg";
import Img3 from "./assets/3.jpg";
import Img4 from "./assets/4.jpg";

const FeatureSection = () => {
  const ref = useRef(null);
  return (
    <>
      <div className="container py-5 mt-5" id="feature" ref={ref}>
        <h2 className="my-5 pt-5 text-center font-weight-bold">
          Affordable, good quality.
        </h2>
        <p className="text-center mx-auto mb-5 px-5">
          Lacus purus eu, mauris pretium mollis ac id mauris eget. Id diam enim
          faucibus pellentesque mi massa. Nmet nullam sed habitasse dignissim
          viverra congue nisl
        </p>
        <div className="row">
          <FeatureCards
            img={Img1}
            head="Million pounds of thrust"
            info="Eget mattis viverra in lorem dictum consequat etiam non pellentesque mauris diamprice ore"
          />
          <FeatureCards
            img={Img2}
            head="More than 1,300 missions"
            info="Eget mattis viverra in lorem dictum consequat etiam non pellentesque mauris diamprice ore"
          />
          <FeatureCards
            img={Img3}
            head="Atlas launched Friendship"
            info="Eget mattis viverra in lorem dictum consequat etiam non pellentesque mauris diamprice ore"
          />
          <FeatureCards
            img={Img4}
            head="Separate spacecraft"
            info="Eget mattis viverra in lorem dictum consequat etiam non pellentesque mauris diamprice ore"
          />
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
