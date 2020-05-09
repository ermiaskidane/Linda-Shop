import React from "react";

import Download from "../../assets/images/download.webp";
import Fashion17 from "../../assets/images/fashion-17.webp";
import Fashion18 from "../../assets/images/fashion-18.webp";
import Fashion20 from "../../assets/images/fashion-20.webp";
import Tamara6 from "../../assets/images/tamara-bellis-6.jpg";
import Tamara9 from "../../assets/images/tamara-bellis-9.jpg";

import "./homepage.scss";

const homePage = () => {
  return (
    <div className="main__shop">
      <div className="main__shop--homescreen">
        <figure className="main__shop--figure xs__left--figure1">
          <img src={Tamara9} alt="ads" />
        </figure>
        <figure className="main__shop--figure xl__right--figure1">
          <img src={Tamara6} alt="ads" />

          <figcaption>
            <h4 className="heading-secondary">Super Sale</h4>
            <h2 className="heading-primary">Season Sale</h2>
            <p className="para">
              Lorem ipsum dolor amet consectetur adipisicing.
            </p>
            <button type="submit">
              Buy Now <span className="arrow">&gt;</span>
            </button>
          </figcaption>
        </figure>

        <figure className="main__shop--figure xs__left--figure2">
          <img src={Download} alt="ads" />
          <figcaption>
            <h3>Mega Deal</h3>
            <p>
              Save up to <strong>70% off </strong>fashion collections
            </p>
          </figcaption>
        </figure>
        <figure className="main__shop--figure xs__right--figure2">
          <img src={Fashion17} alt="ads" />
        </figure>
        <figure className="main__shop--figure xs__right--figure3">
          <img src={Fashion18} alt="ads" />
        </figure>
        <figure className="main__shop--figure xs__right--figure13">
          <img src={Fashion20} alt="ads" />
        </figure>
      </div>
    </div>
  );
};

export default homePage;
