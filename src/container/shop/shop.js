import React, { Component } from "react";

import HomePage from "../../componenets/homepage/homepage";
import Product from "../../componenets/product/product";

import "./shop.scss";
import "../../style/typography.scss";

class Shop extends Component {
  render() {
    return (
      <main className="main">
        <HomePage />
        <Product />
      </main>
    );
  }
}

export default Shop;
