import React from "react";
import "./ServiceDark.scss";

function ServiceDark() {
  return (
    <div className="serviceDark">
      <div className="serviceDark-container">
        <div className="serviceDark__item">
          <h1 className="serviceDark__header">
            fiverr <i>business</i>
          </h1>
          <h1 className="serviceDark__header">
            A business solution designed for teams
          </h1>
          <p className="serviceDark__text">
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          <div className="serviceDark__title">
            <img src="./img/check.png" alt="" />
            Connect to freelancers with proven business experience
          </div>

          <div className="serviceDark__title">
            <img src="./img/check.png" alt="" />
            Get matched with the perfect talent by a customer success manager
          </div>

          <div className="serviceDark__title">
            <img src="./img/check.png" alt="" />
            Manage teamwork and boost productivity with one powerful workspace
          </div>
          <button className="serviceDark__btn">Explore Liverr Business</button>
        </div>
        <div className="serviceDark__item">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
            alt=""
            className="serviceDark__img"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceDark;
