import React, { useState, useEffect } from "react";
import "./Slide.scss";

const Slide = ({ children, slidesToShow = 5 }) => {
  const [displayedCards, setDisplayedCards] = useState([]);

  useEffect(() => {
    const selectedCards = children
      .sort(() => 0.5 - Math.random())
      .slice(0, slidesToShow);
    setDisplayedCards(selectedCards);
  }, [children, slidesToShow]);

  return (
    <div className="slideList">
      <div className="slideList-content">
        <div className="slideList-content__cards">
          {displayedCards.map((card, index) => (
            <div key={index} className="slide-content__cardItems">
              {card}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
