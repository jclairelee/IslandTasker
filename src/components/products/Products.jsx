import React, { useState, useEffect } from "react";
import "./Products.scss";

const Products = ({ children }) => {
  const [cardsPerRow, setCardsPerRow] = useState(1);
  const [addStyleForTwo, setAddStyleForTwo] = useState(false);
  const [isOddNum, setIsOddNum] = useState(false);

  useEffect(() => {
    const updateCardsPerRow = () => {
      const screenWidth = window.innerWidth;
      let newCardsPerRow = 1;

      if (screenWidth >= 976) {
        newCardsPerRow = 4;
        setIsOddNum(false);
      } else if (screenWidth >= 660 && screenWidth <= 966) {
        newCardsPerRow = 3;
        setIsOddNum(true);
      } else if (screenWidth >= 550) {
        setIsOddNum(false);
        newCardsPerRow = 2;
        setAddStyleForTwo(true);
      }

      setCardsPerRow(newCardsPerRow);
    };

    updateCardsPerRow();

    window.addEventListener("resize", updateCardsPerRow);

    return () => {
      window.removeEventListener("resize", updateCardsPerRow);
    };
  }, []);

  // Chunk the children array into groups based on the number of cards per row
  const chunkedCards = [];
  for (let i = 0; i < children.length; i += cardsPerRow) {
    chunkedCards.push(children.slice(i, i + cardsPerRow));
  }

  return (
    <div className="productsList">
      <div className="productsList-content">
        <div className="productsList-content__cards">
          {chunkedCards.map((group, groupIndex) => {
            return (
              <div
                className={`productsList-content__row ${
                  addStyleForTwo ? "addStyleForTwo" : ""
                }`}
                key={groupIndex}
              >
                {group.map((card, cardIndex) => {
                  return (
                    <div className="productsList-content__card" key={cardIndex}>
                      {card}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
