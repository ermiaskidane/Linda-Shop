import React from "react";

import Blog1 from "../../assets/images/blog-1.jpg";
import Blog2 from "../../assets/images/blog-2.jpg";
import Sprite from "../../assets/images/sprite.svg";
import "./blog.scss";

const blog = () => {
  return (
    <div className="blog">
      <div className="blog__content">
        <div className="blog__content--title">
          <h3>Latest Blog</h3>
        </div>
        <div className="blog__recent--content">
          <article className="blog__recent--one">
            <figure className="blog__recent--img1">
              <img src={Blog1} alt="blogimg" />
            </figure>
            <div className="blog__recent--detail">
              <h3>Lorem maiores neque </h3>
              <div className="reader--options">
                <span>
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-user`} />
                  </svg>
                  posted by admin
                </span>
                <span>
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-bubbles2`} />
                  </svg>
                  0 comments
                </span>
                <span>
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-clock`} />
                  </svg>
                  May 1, 2020
                </span>
              </div>
              <p>
                facere amet consectetur adipisicing elit. Vero tempora
                voluptatum nobis quaerat cumque asperiores at veritatis, nostrum
                blanditiis !
              </p>
              <button type="button">Read More</button>
            </div>
          </article>
          <article className="blog__recent--two">
            <figure className="blog__recent--img1">
              <img src={Blog2} alt="blogimg" />
            </figure>
            <div className="blog__recent--detail">
              <h3>Lorem maiores neque </h3>
              <div className="reader--options">
                <span>
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-user`} />
                  </svg>
                  posted by admin
                </span>
                <span>
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-bubbles2`} />
                  </svg>
                  1 comments
                </span>
                <span>
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-clock`} />
                  </svg>
                  May 1, 2020
                </span>
              </div>
              <p>
                facere amet consectetur adipisicing elit. Vero tempora
                voluptatum nobis quaerat cumque asperiores at veritatis, nostrum
                blanditiis !
              </p>
              <button type="button">Read More</button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default blog;
