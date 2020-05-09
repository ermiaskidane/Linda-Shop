import React from "react";

import Fashion3 from "../../assets/images/fashion-3.jpg";
import Fashion6 from "../../assets/images/fashion-6.jpg";
import Fashion8 from "../../assets/images/fashion-9.webp";
import Fashion9 from "../../assets/images/fashion-10.webp";

import Sprite from "../../assets/images/sprite.svg";

const utility = () => {
  return (
    <div className="menu__newProduct--options">
      <ul className="newProduct__options--lists bestSeller--grid">
        <li className="options__lists--item">
          <div className="options__list--wrapper">
            <figure className="options__lists--img">
              <img src={Fashion6} alt="item" />
            </figure>
            <div className="options__lists--info">
              <div className="options__lists--grid">
                <div className="icon__option icon--wrap">
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-circle-with-plus`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-heart`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                </div>
                <a href="#">Fashion Casual sleeve...</a>
                <div className="rating--box">
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                </div>
                <div className="options__price">
                  <p>$110.00</p>
                </div>
                <div className="action__button">
                  <button type="button" className="button__cart">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="options__lists--item">
          <div className="options__list--wrapper">
            <figure className="options__lists--img">
              <img src={Fashion9} alt="item" />
            </figure>
            <div className="options__lists--info">
              <div className="options__lists--grid">
                <div className="icon__option icon--wrap">
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-circle-with-plus`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-heart`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                </div>
                <a href="#">casual short sleeve solid..</a>
                <div className="rating--box">
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                </div>
                <div className="options__price">
                  <p>$105.00</p>
                </div>
                <div className="action__button">
                  <button type="button" className="button__cart">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="options__lists--item">
          <div className="options__list--wrapper">
            <figure className="options__lists--img">
              <img src={Fashion8} alt="item" />
            </figure>
            <div className="options__lists--info">
              <div className="options__lists--grid">
                <div className="icon__option icon--wrap">
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-circle-with-plus`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-heart`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                </div>
                <a href="#">United Colors Of Benetto...</a>
                <div className="rating--box">
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                </div>
                <div className="options__price">
                  <p>$120.00</p>
                </div>
                <div className="action__button">
                  <button type="button" className="button__cart">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="options__lists--item">
          <div className="options__list--wrapper">
            <figure className="options__lists--img">
              <img src={Fashion3} alt="item" />
            </figure>
            <div className="options__lists--info">
              <div className="options__lists--grid">
                <div className="icon__option icon--wrap">
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-circle-with-plus`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-heart`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                </div>
                <a href="#">casual sleeveless solid...</a>
                <div className="rating--box">
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-star`} />
                    </svg>
                  </span>
                </div>
                <div className="options__price">
                  <p>$149.99</p>
                </div>
                <div className="action__button">
                  <button type="button" className="button__cart">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default utility;
