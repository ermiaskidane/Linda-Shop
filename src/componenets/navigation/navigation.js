import React, { Component } from "react";

import Modal from "../modals/modals";
import Backdrop from "../backdrop/backdrop";
import Sprite from "../../assets/images/sprite.svg";
import "./navigation.scss";

class Navigation extends Component {
  state = {
    open: false,
    show: false,
  };

  clickHandler = () => {
    this.setState((prevState) => {
      return {
        open: !prevState.open,
      };
    });
  };

  openHandler = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show,
      };
    });
  };
  render() {
    console.log(this.state.open);
    let show = null;
    let modal = null;

    if (this.state.show) {
      show = (
        <div className="Nav__header--trolley">
          <svg>
            <use xlinkHref={`${Sprite}#icon-shopping-bag`} />
          </svg>
          <p>Your Shopping Cart is Empty</p>
        </div>
      );
    } else if (this.state.open) {
      modal = (
        <React.Fragment>
          <Modal openHandler={this.clickHandler} />
          <Backdrop open={this.clickHandler} />
        </React.Fragment>
      );
    }

    const assignedClasses = [];
    if (this.state.open) {
      assignedClasses.push("show");
    } else {
      assignedClasses.push("hide");
    }
    return (
      <header>
        <div className="navigation">
          <div className="navigation__logo">
            <h2>Linda Shop</h2>
          </div>
          <div className="navigation__search">
            <form action="#" className="navigation__search--box">
              <input
                type="text"
                name="search"
                placeholder="Search Your clothes here..."
                autoComplete="off"
              />
              <button type="submit">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
                </svg>
              </button>
            </form>
          </div>
          <div className="navigation__cart">
            <div className="navigation__cart--items">
              <div className="svg--bag">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-shopping-bag`} />
                </svg>
              </div>

              <span>Shopping Cart</span>
              <span>0 items / $0.00</span>
            </div>
          </div>
        </div>
        <nav className="Nav">
          <div className="Nav__menu">
            <div className="Nav__menu--burger" onClick={this.clickHandler}>
              <h3>
                <svg>
                  <use xlinkHref={`${Sprite}#icon-menu`} />
                </svg>
                <span>ALL CATEGORIES</span>
              </h3>
            </div>
            <label
              htmlFor="navi-toggle"
              className="Nav__button"
              id={assignedClasses.join(" ")}
            >
              <ul htmlFor="navi-toggle">
                <li className="Nav__detail--home">
                  <a href="#">
                    <svg className="svg--icon">
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
                    <svg className="svg--icon">
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
                    <svg className="svg--icon">
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
                    <svg className="svg--icon">
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
                    <svg className="svg--icon">
                      <use xlinkHref={`${Sprite}#icon-bed`} />
                    </svg>
                    <span className="categories">Party Wear</span>
                  </a>
                </li>
                <li className="Nav__detail--home">
                  <a href="#">
                    <svg className="svg--icon">
                      <use xlinkHref={`${Sprite}#icon-child`} />
                    </svg>
                    <span className="categories">Wester wear</span>
                  </a>
                </li>
                <li className="Nav__detail--home">
                  <a href="#">
                    <svg className="svg--icon">
                      <use xlinkHref={`${Sprite}#icon-bubbles2`} />
                    </svg>
                    <span className="categories">Blog</span>
                  </a>
                </li>
              </ul>
            </label>

            {/* ##### the mobile version ######## */}
            {modal}
          </div>
          <div className="Nav__header">
            <div className="Nav__header--content">
              <div className="Nav__header--item">
                <h3>Free Shipping Worldwide</h3>
              </div>
              <span className="seperator">/</span>
              <div className="Nav__header--item">
                <h3>money back guarantee</h3>
              </div>
              <span className="seperator">/</span>
              <div className="Nav__header--item">
                <h3>instagram LindaShop</h3>
              </div>
            </div>
            <div className="Nav__header--bag">
              <svg onClick={this.openHandler}>
                <use xlinkHref={`${Sprite}#icon-shopping-bag`} />
              </svg>
              {show}
            </div>
          </div>
          <div className="Nav__offer">
            <div className="Nav__offer--item">
              <h3>Some Offer</h3>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navigation;
