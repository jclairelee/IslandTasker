import React from "react";
import "./RightBox.scss";
function RightBox() {
  return (
    <div className="right">
      <div className="right-price">
        <h3>1 AI generated image</h3>
        <h2>$ 59.99</h2>
      </div>
      <p className="right-desc">
        I will create a unique high quality AI generated image based on a
        description that you give me
      </p>
      <div className="right-details">
        <div className="right-details__item">
          <img src="/img/clock.png" alt="" className="right-details__img" />
          <span>2 Days Delivery</span>
        </div>
        <div className="right-details__item">
          <img src="/img/recycle.png" alt="" className="right-details__img" />
          <span>3 Revisions</span>
        </div>
      </div>
      <div className="right-features">
        <div className="right-features__item">
          <img
            src="/img/greencheck.png"
            alt=""
            className="right-features__img"
          />
          <span>Prompt writing</span>
        </div>
        <div className="item">
          <img
            src="/img/greencheck.png"
            alt=""
            className="right-features__img"
          />
          <span>Artwork delivery</span>
        </div>
        <div className="item">
          <img
            src="/img/greencheck.png"
            alt=""
            className="right-features__img"
          />
          <span>Image upscaling</span>
        </div>
        <div className="item">
          <img
            src="/img/greencheck.png"
            alt=""
            className="right-features__img"
          />
          <span>Additional design</span>
        </div>
      </div>
      <button className="right-btn">Continue</button>
    </div>
  );
}

export default RightBox;
