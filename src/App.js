import React from "react";
import Nav from "./Component/Nav";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartSection from "./Component/cart/CartSection";
import { CartProvider } from "react-use-cart";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <CartProvider>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route exact path="/Cart" component={CartSection}>
            <CartSection />
          </Route>
        </CartProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
