import React from "react";
import "./Service.scss";

function Service() {
  return (
    <div className="service">
      <div className="service-container">
        <div className="service__item">
          <h1 className="service__item__header">
            A whole world of freelance talent at your fingertips
          </h1>
          <div className="service__item__title">
            <img
              src="./img/check.png"
              alt=""
              className="service__item__checkmark"
            />
            The best for every budget
          </div>
          <p className="service__item__desc">
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
          <div className="service__item__title">
            <img
              src="./img/check.png"
              alt=""
              className="service__item__checkmark"
            />
            Quality work done quickly
          </div>
          <p className="service__item__desc">
            Find the right freelancer to begin working on your project within
            minutes.
          </p>
          <div className="service__item__title">
            <img
              src="./img/check.png"
              alt=""
              className="service__item__checkmark"
            />
            Protected payments, every time
          </div>
          <p className="service__item__desc">
            Always know what you'll pay upfront. Your payment isn't released
            until you approve the work.
          </p>
          <div className="service__title">
            <img
              src="./img/check.png"
              alt=""
              className="service__item__checkmark"
            />
            24/7 support
          </div>
          <p className="service__item__desc">
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
        </div>
        <div className="service__item">
          <video
            src="./img/video.mp4"
            controls
            className="service__item__video"
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
