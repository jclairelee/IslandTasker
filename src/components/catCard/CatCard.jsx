import React from "react";
import "./CatCard.scss";
import { Link } from "react-router-dom";

function CatCard({ card }) {
  return (
    <Link to={`/taskers?cat=${card.title.substr(0, 2).toLowerCase()}`}>
      <div className="catCard">
        <img src={card.img} alt={card.title} className="catCard__pic" />
        <span className="catCard__title">{card.title}</span>{" "}
        {/* <span className="catCard__desc">{card.desc}</span> */}
      </div>
    </Link>
  );
}

export default CatCard;
