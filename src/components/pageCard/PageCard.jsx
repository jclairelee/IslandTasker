import React, { useState, useEffect } from "react";
import "./PageCard.scss";
import { Link } from "react-router-dom";

function PageCard({ card }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getShortenedDesc = (text) => {
    let maxLength;
    if (screenWidth <= 767) {
      maxLength = 140;
    } else if (screenWidth >= 768 && screenWidth <= 1279) {
      maxLength = 150;
    } else {
      maxLength = 160;
    }
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
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
          style={{ width: "16px", height: "16px" }}
        />
      );
    }
    return stars;
  };

  return (
    <Link to={`/profile/${card.id}`} className="pageCard__link">
      <div className="pageCard">
        <img src={card.img} alt="" className="pageCard__pic" />
        <div className="pageCard-detail">
          <div className="pageCard-detail__user">
            <img src={card.pp} alt="" className="pagecard-detail__userPic" />
            <span className="pagecard-detail__username">{card.username}</span>
            <div className="pageCard-detail__star">
              {renderStarImg(card.star)}
            </div>
          </div>
          <span className="pageCard-detail__desc">
            {getShortenedDesc(card.desc)}
          </span>
        </div>
        <div className="pageCard-price">
          <div className="pageCard-price__num">
            <span className="pageCard-price__numTitle">DISTANCE BETWEEN</span>
            <h2>
              {card.distance}
              <sup>M</sup>
            </h2>
          </div>
          <div className="pageCard-price__num">
            <span className="pageCard-price__numTitle">STARTING AT</span>
            <h2>
              $ {card.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PageCard;
