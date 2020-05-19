import React from "react";

import "./modals.scss";
import Sprite from "../../assets/images/sprite.svg";

const modal = (props) => {
  return (
    <label className="NavMobile__button">
      <ul htmlFor="navi-toggle">
        <li className="Nav__detail--home">
          <a href="#">
            <svg>
              <use xlinkHref={`${Sprite}#icon-home`} />
            </svg>
            <span className="categories">Home</span>
            <svg>
              <use xlinkHref={`${Sprite}#icon-chevron-small-right`} />
            </svg>
          </a>
        </li>
        <li className="Nav__detail--home">
          <a href="#">
            <svg>
              <use xlinkHref={`${Sprite}#icon-gift`} />
            </svg>
            <span className="categories">Dresses</span>
            <svg>
              <use xlinkHref={`${Sprite}#icon-chevron-small-right`} />
            </svg>
          </a>
        </li>
        <li className="Nav__detail--home">
          <a href="#">
            <svg>
              <use xlinkHref={`${Sprite}#icon-suitcase`} />
            </svg>
            <span className="categories">Tops</span>
            <svg>
              <use xlinkHref={`${Sprite}#icon-chevron-small-right`} />
            </svg>
          </a>
        </li>
        <li className="Nav__detail--home">
          <a href="#">
            <svg>
              <use xlinkHref={`${Sprite}#icon-camera`} />
            </svg>
            <span className="categories">ETHINIC WEAR</span>
            <svg>
              <use xlinkHref={`${Sprite}#icon-chevron-small-right`} />
            </svg>
          </a>
        </li>
        <li className="Nav__detail--home">
          <a href="#">
            <svg>
              <use xlinkHref={`${Sprite}#icon-bed`} />
            </svg>
            <span className="categories">Party Wear</span>
          </a>
        </li>
        <li className="Nav__detail--home">
          <a href="#">
            <svg>
              <use xlinkHref={`${Sprite}#icon-child`} />
            </svg>
            <span className="categories">Wester wear</span>
          </a>
        </li>
        <li className="Nav__detail--home">
          <a href="#">
            <svg>
              <use xlinkHref={`${Sprite}#icon-bubbles2`} />
            </svg>
            <span className="categories">Blog</span>
          </a>
        </li>
      </ul>

      <div className="NavMobile__close" onClick={props.openHandler}>
        <p>close</p>
      </div>
    </label>
  );
};

export default modal;
