import React from "react";
import sassImg from "../images/sass.png";
import jqueryImg from "../images/jquery.png";
import bootstrapImg from "../images/prv-features-4.png";
import flatIconImg from "../images/woo-commarce-1.png";
import fontAwesomeImg from "../images/fontawesome.png";
import swiperImg from "../images/swiper.png";
import docImg from "../images/document.png";
import fullResponsiveImg from "../images/prv-features-12.png";
import lifeTimeImg from "../images/prv-features-7.png";
import fontsImg from "../images/prv-features-8.png";

// style file link
import "../style/features.css";

function Features() {
  return (
    <>
      <div className="features-container">
        <div className="feature-text">
          <h2>Exclusive Features</h2>
          <p>
            You will find what you need in one of our distinct and unique demos
            perfectly designed to start building your website.
          </p>
        </div>

        <div className="feature-cards">
          <div className="feature-card">
            <img src={sassImg} />
            <h2>SASS</h2>
          </div>

          <div className="feature-card">
            <img src={jqueryImg} />
            <h2>JQUERY</h2>
          </div>

          <div className="feature-card">
            <img src={bootstrapImg} />
            <h2>Bootstrap</h2>
          </div>

          <div className="feature-card">
            <img src={flatIconImg} />
            <h2>Wooicon</h2>
          </div>

          <div className="feature-card">
            <img src={fontAwesomeImg} />
            <h2>Fonts</h2>
          </div>

          <div className="feature-card">
            <img src={swiperImg} />
            <h2>Swiper</h2>
          </div>

          <div className="feature-card">
            <img src={docImg} />
            <h2>Document</h2>
          </div>

          <div className="feature-card">
            <img src={fullResponsiveImg} />
            <h2>Responsive</h2>
          </div>

          <div className="feature-card">
            <img src={lifeTimeImg} />
            <h2>Updated</h2>
          </div>

          <div className="feature-card">
            <img src={fontsImg} />
            <h2>Fonts</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;