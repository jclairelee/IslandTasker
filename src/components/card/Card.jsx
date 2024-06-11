import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ taskers }) {
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

  // Assuming `taskers` is an array of tasker objects
  taskers.forEach((tasker) => {
    const formattedTasks = formatAvailableTask(tasker.availabletask);
    console.log(formattedTasks);
  });

  return (
    <div className="card-wrapper">
      {taskers.map((tasker, index) => (
        <div
          className={`card ${index % 2 === 0 ? "" : "card-odd"}`}
          key={index}
        >
          <div className={`card-pic card-pic${index % 2 === 0 ? "" : "__odd"}`}>
            <img src={tasker.pp} alt="" className="card-pic__img" />
          </div>
          <div
            className={`card-data card-data${index % 2 === 0 ? "" : "__odd"}`}
          >
            <h2 className="card-data__header">{tasker.username}</h2>
            <div
              className={`card-data__upper card-data__upper${
                index % 2 === 0 ? "" : "__odd"
              }`}
            >
              <span className="card-data__upper__price">
                $ {tasker.price} Hourly
              </span>
              <span className="card-data__upper__txt">
                {renderStarEmojis(tasker.star)}
              </span>
            </div>
            <span
              className={`card-data__middle card-data__middle${
                index % 2 === 0 ? "" : "__odd"
              }`}
            >
              {tasker.desc}
            </span>

            <div
              className={`card-data__bottom card-data__bottom${
                index % 2 === 0 ? "" : "__odd"
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
