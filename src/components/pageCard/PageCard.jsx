import React, { useState, useEffect } from "react";
import "./PageCard.scss";
import { Link } from "react-router-dom";

function PageCard({ item }) {
  const [isScreen, setIsScreen] = useState(window.innerWidth);
  const shortenedDesc = (text) => {
    if (isScreen <= 767) {
      return `${text.slice(0, 200)}...`;
    } else if (isScreen >= 768 && isScreen <= 1279) {
      return `${text.slice(0, 130)}...`;
    } else {
      return `${text.slice(0, 100)}...`;
    }
  };
  const renderStarImg = (num) => {
    const stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(
        <img
          key={i}
          src="./img/star.png"
          alt="stars"
          className="pageCard-star__img"
        />
      );
    }
    return stars;
  };
  useEffect(() => {
    const handleResize = () => {
      setIsScreen(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Link to="/task/123" className="pageCard__link">
      <div className="pageCard">
        <img src={item.img} alt="" className="pageCard__pic" />
        <div className="pageCard-detail">
          <div className="pageCard-detail__user">
            <img src={item.pp} alt="" className="pagecard-detail__userPic" />
            <span className="pagecard-detail__username">{item.username}</span>
          </div>
          <span className="pageCard-desc">{shortenedDesc(item.desc)}</span>
          <div className="pageCard-star">
            <span className="pageCard-star__num">
              {renderStarImg(item.star)}
            </span>
          </div>
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
