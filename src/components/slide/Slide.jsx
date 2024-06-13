import React, { useState, useEffect } from "react";
import "./Slide.scss";

const Slide = ({ children }) => {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [displayedIndex, setDisplayedIndex] = useState(0);

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

    const handleResize = () => {
      updateSlidesToShow();
      setDisplayedIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the number of children to display based on slidesToShow
  const childrenToDisplay = children.slice(
    displayedIndex,
    displayedIndex + slidesToShow
  );

  return (
    <div className="slideList">
      <div className="slideList-content">
        <div className="slideList-content__cards">
          {childrenToDisplay.map((card, index) => (
            <div key={index} className="slide-content__cardsItems">
              {card}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
