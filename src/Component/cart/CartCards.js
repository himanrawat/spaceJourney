import React from "react";
import { useCart } from "react-use-cart";

const CartCards = (props) => {
  const { addItem } = useCart();
  return (
    <>
      <div
        className={props.className}
        id={props.href}
        role="tabpanel"
        aria-labelledby="0-tab"
      >
        <img src={props.img} alt="cards" className="cart-cardImg mb-3" />
        <div className="glass-para p-3">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <button
            type="button"
            className="btn btn-custom"
            onClick={() => addItem(props.item)}
          >
            &#8377; {props.price}
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCards;
