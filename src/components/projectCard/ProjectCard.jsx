import React from "react";
import "./ProjectCard.scss";
import { Link } from "react-router-dom";

function ProjectCard({ card }) {
  return (
    <Link to="/" className="projectCard__link">
      <div className="projectCard">
        <img src={card.img} alt="" className="projectCard__pic" />
        <div className="projectCard__info">
          <img src={card.pp} alt="" className="projectCard__info__img" />
          <div className="projectCard__text">
            <h2 className="projectCard__text__cat">{card.cat}</h2>
            <span className="projectCard__text__name">{card.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
