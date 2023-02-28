import React from "react";
import "./CatCard.scss";
import { Link } from "react-router-dom";

function CatCard({ card }) {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={card.img} alt="" className="catCard__pic" />
        <span className="catCard__desc">{card.desc}</span>
        <span className="catCard__title">{card.title}</span>
      </div>
    </Link>
  );
}

export default CatCard;
