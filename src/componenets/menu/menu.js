import React from "react";

import Utility1 from "../../style/utility/utility1";
import Utility2 from "../../style/utility/utility2";
import Utility3 from "../../style/utility/utility3";
import Sprite from "../../assets/images/sprite.svg";
import "./menu.scss";

const menu = () => {
  return (
    <div className="menu">
      <div className="menu__content">
        <div className="menu__content--newProduct">
          <div className="menu__newProduct--title">
            <div className="newProducts--title">
              <h3>New Products</h3>
            </div>
            <ul className="menu__newProducts--lists">
              <li className="newProducts__lists--item">
                <a href="#">Dresses</a>
              </li>
              <li className="newProducts__lists--item">
                <a href="#">Tops</a>
              </li>
              <li className="newProducts__lists--item">
                <a href="#">EThic Wears</a>
              </li>
              <li className="newProducts__lists--item">
                <a href="#">Party Wear</a>
              </li>
            </ul>
          </div>
          {/*##### about the menu__newProduct--options ######*/}
          <Utility1 />
          {/*##### about the menu__newProduct--options ######*/}
        </div>
        <div className="menu__content--bestSellers">
          <div className="menu__bestSellers--title">
            <div className="bestSellers--title">
              <h3>Best Sellers</h3>
            </div>
            <div className="bestSellers--arrow">
              <span>
                <svg>
                  <use xlinkHref={`${Sprite}#icon-chevron-thin-left`} />
                </svg>
              </span>
              <span>||</span>
              <span>
                <svg>
                  <use xlinkHref={`${Sprite}#icon-chevron-thin-right`} />
                </svg>
              </span>
            </div>
          </div>
          <Utility2 />
        </div>
        <div className="menu__content--featuredProducts">
          <div className="menu__featuredProducts--title">
            <div className="featuredProducts--title">
              <h3>Feature Products</h3>
            </div>
            <div className="featuredProducts--arrow">
              <span>
                <svg>
                  <use xlinkHref={`${Sprite}#icon-chevron-thin-left`} />
                </svg>
              </span>
              <span>||</span>
              <span>
                <svg>
                  <use xlinkHref={`${Sprite}#icon-chevron-thin-right`} />
                </svg>
              </span>
            </div>
          </div>
          <Utility3 />
        </div>
      </div>
    </div>
  );
};

export default menu;
