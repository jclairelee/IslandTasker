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

  return (
    <div className="card-wrapper">
      {taskers.map((tasker, index) => (
        <div className="card">
          {index % 2 === 0 ? (
            <div className="card-pic">
              <img
                src={tasker.pp}
                alt=""
                className="card-pic__img"
                style={{ borderRadius: "16px 0 0 16px" }}
              />
            </div>
          ) : null}
          <div className="card-data">
            <div className="card-data__upper">
              <h2 className="card-data__upper__header">{tasker.username}</h2>
              <span className="card-data__upper__price">
                $ {tasker.price} Hourly
              </span>
              <span className="card-data__upper__txt">
                {renderStarEmojis(tasker.star)}
              </span>
            </div>

            <div className="card-data card-data__middle">
              <span className="card-data__middle__desc">{tasker.desc}</span>
            </div>
            <div className="card-data card-data__bottom">
              <span className="card-data__bottom__txt">
                {tasker.availabletask}
              </span>
            </div>
            <button className="card__btn">Schedule</button>
          </div>
          {index % 2 !== 0 ? (
            <div className="card-pic">
              <img
                src={tasker.pp}
                alt=""
                className="card-pic__img"
                style={{ borderRadius: "0 16px 16px 0px" }}
              />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Card;
