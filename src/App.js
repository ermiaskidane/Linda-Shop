import React from "react";
import "./App.scss";
import Navigation from "./componenets/navigation/navigation";
import Shop from "./container/shop/shop";
import Footer from "./componenets/footer/footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
