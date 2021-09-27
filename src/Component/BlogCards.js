import React from "react";
import "../style.css";

const BlogCards = (props) => {
  return (
    <>
      <div className="card card-custom">
        <img
          className="card-img-top blogImg"
          src={props.blogImg}
          alt="BlogCard "
        />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{props.bloagHead}</h5>
          <p className="card-text">{props.blogInfo}</p>
          <button type="button" className="btn btn-custom">
            Read Story
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogCards;
