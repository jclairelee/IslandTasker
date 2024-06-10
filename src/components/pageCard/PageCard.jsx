import React from "react";
import "./PageCard.scss";
import { Link } from "react-router-dom";

function PageCard({ item }) {
  return (
    <Link to="/gig/123" className="pageCard__link">
      <div className="pageCard">
        <img src={item.img} alt="" className="pageCard__pic" />
        <div className="pageCard-detail">
          <div className="pageCard-detail__user">
            <img src={item.pp} alt="" className="pagecard-detail__userPic" />
            <span className="pagecard-detail__username">{item.username}</span>
          </div>
          <span className="pageCard-desc">{item.desc}</span>
          <div className="pageCard-star">
            <img src="./img/star.png" alt="" className="pageCard-star__img" />
            <span className="pageCard-star__num">{item.star}</span>
          </div>
          ``
        </div>
        <hr />
        <div className="pageCard-price">
          <img src="./img/heart.png" alt="" />
          <div className="pageCard-price__num">
            <span className="pageCard-price__numTitle">STARTING AT</span>
            <h2>
              $ {item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default PageCard;
