import React from "react";

import Sprite from "../../../assets/images/sprite.svg";
import "./singUp.scss";

const singUp = () => {
  return (
    <div className="singUp">
      <div className="singUp__content">
        <form action="#" className="singUp__content--form">
          <h3>Sign Up For Emails</h3>
          <input type="email" name="email" placeholder="Enter Your Email" />
          <button type="submit">
            <svg>
              <use xlinkHref={`${Sprite}#icon-mail`} />
            </svg>
            <span>Subscribe</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default singUp;
