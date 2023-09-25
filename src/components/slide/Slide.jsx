import React, { useEffect, useState } from "react";
import "./Slide.scss";

const Slide = ({ children }) => {
  const [moveIndex, setMoveIndex] = useState(0);
  const showPrev = () => {
    if (moveIndex === 0) {
      return;
    }
    setMoveIndex((prev) => prev + 10);
  };

  const showNext = () => {
    if (moveIndex === -80) {
      return;
    } else {
      setMoveIndex((prev) => prev - 10);
    }
  };
  console.log(moveIndex);
  return (
    <div className="slideList">
      <div className="slideList-content">
        <div
          className="slideList-content__cards"
          style={{ transform: `translateX(${moveIndex}%)` }}
        >
          {children}
        </div>
        <button
          className="slideList-content__arrow slideList-content__prev"
          onClick={showPrev}
        >
          &lt;
        </button>
        <button
          className="slideList-content__arrow slideList-content__next"
          onClick={showNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slide;
