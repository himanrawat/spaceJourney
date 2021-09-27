import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./Component/Hero";
import FeatureSection from "./Component/FeatureSection";
import CEOquote from "./Component/CEOquote";
import ProductSection from "./Component/ProductSection";
import BlogSection from "./Component/BlogSection";
import TestimonialSection from "./Component/TestimonialSection";
import FooterSection from "./Component/FooterSection";

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureSection />
      <CEOquote />
      <ProductSection />
      <BlogSection />
      <TestimonialSection />
      <FooterSection />
    </>
  );
};

export default Home;
