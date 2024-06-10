import React, { useState, useEffect } from "react";
import "./Slide.scss";

const Slide = ({ children }) => {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [displayedCards, setDisplayedCards] = useState([]);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      let newSlidesToShow = 4;

      if (screenWidth <= 768 && screenWidth >= 560) {
        newSlidesToShow = 2;
      } else if (screenWidth < 560) {
        newSlidesToShow = 1;
      }

      setSlidesToShow(newSlidesToShow);
    };

    updateSlidesToShow();

    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

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
