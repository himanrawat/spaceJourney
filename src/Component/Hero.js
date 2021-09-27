import React from "react";
import HeroText from "./HeroText";
import "../style.css";
import HeroVideo from "./assets/I4_Splashdown_01b.mp4";

const Hero = () => {
  return (
    <>
      <div className="hero" id="home">
        <video
          className="video"
          src={HeroVideo}
          autoPlay={true}
          loop={true}
          width="100%"
          // height="100%"
        />
        <HeroText />
      </div>
    </>
  );
};

export default Hero;
