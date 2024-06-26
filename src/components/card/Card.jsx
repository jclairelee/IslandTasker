import React, { useState, useEffect } from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ taskers }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 485);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 485);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const renderStarEmojis = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <span key={i} role="img" aria-label="star">
          ⭐️
        </span>
      );
    }
    return stars;
  };

  const formatAvailableTask = (task) => {
    const taskString = JSON.stringify(task).replace(/[\[\]""]/g, "");

    const words = taskString.split(" ");

    const formattedWords = words.map(
      (word) => ` ${word.charAt(0).toUpperCase()}${word.slice(1)} `
    );

    return formattedWords.join(", ");
  };

  // taskers.forEach((tasker) => {
  //   const formattedTasks = formatAvailableTask(tasker.availabletask);
  // });

  return (
    <div className="card-wrapper">
      {taskers.map((tasker, index) => (
        <div
          className={`card ${index % 2 === 0 ? "" : "card-odd"}`}
          key={index}
        >
          <div className={`card-pic ${index % 2 === 0 ? "" : "card-pic__odd"}`}>
            <img src={tasker.pp} alt="" className="card-pic__img" />
          </div>
          <div
            className={`card-data ${index % 2 === 0 ? "" : "card-data__odd"}`}
          >
            <h2 className="card-data__header">{tasker.username}</h2>
            <div
              className={`card-data__upper card-data__upper${
                index % 2 === 0 ? "" : "__odd"
              }`}
            >
              <span className="card-data__upper__price">
                {isMobile ? `$ ${tasker.price}` : `$ ${tasker.price} Hourly`}
              </span>
              <span className="card-data__upper__txt">
                {renderStarEmojis(tasker.star)}
              </span>
            </div>
            <span
              className={`card-data__middle ${
                index % 2 === 0 ? "" : "card-data__middle__odd"
              }`}
            >
              {isMobile
                ? `${tasker.desc.slice(0, 100)}...`
                : `${tasker.desc.slice(0, 230)}...`}
            </span>

            <div
              className={`card-data__bottom ${
                index % 2 === 0 ? "" : "card-data__bottom__odd"
              }`}
            >
              {tasker.availabletask.map((task, index) => (
                <span key={index} className="card-data__bottom__item">
                  {task}
                </span>
              ))}
            </div>

            <button className="card__btn">Schedule</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
