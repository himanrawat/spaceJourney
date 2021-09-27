import React from "react";
import "../style.css";

const ProductsCards = (props) => {
  return (
    <>
      <div className="col-md-4 my-5">
        <img src={props.img} alt="solid fuel" className="mb-3" />
        <h3 className="my-2 font-weight-bold">{props.heading}</h3>
        <p>{props.info}</p>
      </div>
    </>
  );
};

export default ProductsCards;
