import React from "react";
import "../style.css";
import BlogCards from "./BlogCards";
import Blog1 from "./assets/blog1.jpg";
import Blog2 from "./assets/blog2.jpg";

const BlogSection = () => {
  return (
    <div className="container-fluid my-5 py-5 bg" id="blog">
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-5 text-center my-auto text-white">
            <h2 className="font-weight-bold my-5">
              Don't miss ROCKET SCIENCE blog
            </h2>
            <p>
              Nmet nullam sed habitasse dignissim viverra congue nisl. Lacus
              purus eu, mauris pretium mollis ac id mauris eget.
            </p>
            <button type="button" className="btn btn-custom mb-5">
              All Stories
            </button>
          </div>
          <div className="col-md-7">
            <div className="card-deck">
              <BlogCards
                blogImg={Blog1}
                bloagHead="&#8220;Rocket lab boots its space system&#8221;"
                blogInfo="Nmet nullam sed habitasse dignissim viverra congue nisl. Lacus purus eu."
              />
              <BlogCards
                blogImg={Blog2}
                bloagHead="&#8220;NASA’s big rocket misses deadline&#8221;"
                blogInfo="Nmet nullam sed habitasse dignissim viverra congue nisl. Lacus purus eu."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
