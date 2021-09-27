import React from "react";
import "../style.css";
import ProductsCards from "./ProductsCards";
import SolidFuel from "./assets/solid-fuel.svg";
import LiquidFuel from "./assets/liquid-fuel.svg";
import IonRocket from "./assets/ion-rockets.svg";
import PlasmaRocket from "./assets/plasma-rocket.svg";
import SupersonicRocket from "./assets/supersonic.svg";
import UltraRocket from "./assets/ultra.svg";

const ProductSection = () => {
  return (
    <div className="container-fluid pt-5" id="product">
      <div className="container text-center mt-5 pt-5 pb-2">
        <h2 className="font-weight-bold">Our Products</h2>
        <div className="row my-5">
          <ProductsCards
            img={SolidFuel}
            heading="Solid Fuel"
            info="Eget mattis viverra in lorem dictum consequat etiam non pellentesque mauris diamprice ore"
          />
          <ProductsCards
            img={LiquidFuel}
            heading="Liquid Fuel"
            info="Eget mattis viverra in lorem dictum consequat etiam non pellentesque mauris diamprice ore"
          />
          <ProductsCards
            img={IonRocket}
            heading="Ion Rocket"
            info="Eget mattis viverra in lorem dictum consequat etiam non pellentesque mauris diamprice ore"
          />
          <ProductsCards
            img={PlasmaRocket}
            heading="Plasma Rocket"
            info="Eget mattis viverra in lorem dictum consequat etiam non pellentesque mauris diamprice ore"
          />
          <ProductsCards
            img={SupersonicRocket}
            heading="Supersonic Rocket"
            info="Eget mattis viverra in lorem dictum consequat etiam non pellentesque mauris diamprice ore"
          />
          <ProductsCards
            img={UltraRocket}
            heading="Ultra Rocket"
            info="Eget mattis viverra in lorem dictum consequat etiam non pellentesque mauris diamprice ore"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
