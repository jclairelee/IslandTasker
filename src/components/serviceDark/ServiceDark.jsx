import React from "react";
import "./ServiceDark.scss";

function ServiceDark() {
  return (
    <div className="serviceDark">
      <div className="serviceDark-container">
        <div className="serviceDark__item">
          <h1 className="serviceDark__header">
            Island <i>Marketplace</i>
          </h1>
          <h1 className="serviceDark__header">
            Your platform for buying and selling outdoor gear on the island
          </h1>
          <p className="serviceDark__text">
            Participate in our platform to support your community by selling
            your items. Make your island life more convenient and active while
            experiencing the benefits of local commerce.
          </p>

          <div className="serviceDark__title">
            <img src="./img/check.png" alt="" />
            Connect with local sellers offering outdoor gear and equipment
          </div>

          <div className="serviceDark__title">
            <img src="./img/check.png" alt="" />
            Find the perfect gear for your island adventures
          </div>

          <div className="serviceDark__title">
            <img src="./img/check.png" alt="" />
            Support local businesses and boost the island's economy
          </div>
          <button className="serviceDark__btn">Become a Seller</button>
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
