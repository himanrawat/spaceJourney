import React from "react";
import data from "./data";
import CartCards from "./CartCards";
import CartItem from "./CartItem";

const CartSection = () => {
  return (
    <>
      <div className="cart">
        <div className="container-fluid glass-cart py-5">
          <div className="container-fluid">
            <div className="row my-5">
              <div className="col-lg-7 my-5 cart-display">
                <div className="row text-center">
                  <div className="col-md-3">
                    <div
                      className="nav flex-column nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <a
                        className="nav-link active"
                        id="1-tab"
                        data-toggle="pill"
                        href="#1"
                        role="tab"
                        aria-controls="1"
                        aria-selected="true"
                      >
                        Honeymoon
                      </a>
                      <a
                        className="nav-link"
                        id="2-tab"
                        data-toggle="pill"
                        href="#2"
                        role="tab"
                        aria-controls="2"
                        aria-selected="false"
                      >
                        Family
                      </a>
                      <a
                        className="nav-link"
                        id="3-tab"
                        data-toggle="pill"
                        href="#3"
                        role="tab"
                        aria-controls="3"
                        aria-selected="false"
                      >
                        Solo
                      </a>
                      <a
                        className="nav-link"
                        id="4-tab"
                        data-toggle="pill"
                        href="#4"
                        role="tab"
                        aria-controls="4"
                        aria-selected="false"
                      >
                        Friends
                      </a>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="tab-content" id="v-pills-tabContent">
                      {data.productData.map((item, ind) => {
                        return (
                          <CartCards
                            className={
                              "tab-pane fade " +
                              (ind !== 0 ? " " : " show active")
                            }
                            href={ind + 1}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            item={item}
                            key={ind}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12 my-5">
                <CartItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSection;
