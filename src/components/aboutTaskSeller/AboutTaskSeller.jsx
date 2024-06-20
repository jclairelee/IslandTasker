import React from "react";
import "./AboutTaskSeller.scss";
import Map from "../map/Map";

function AboutTaskSeller({ currentPro }) {
  function renderStars(numStars) {
    const starsArray = [];
    for (let i = 0; i < numStars; i++) {
      starsArray.push(<img key={i} src="/img/star.png" alt="star" />);
    }
    return starsArray;
  }
  const extreactCity = (text) => {
    const processedTxt = text.split(",");
    return processedTxt[1];
  };

  return (
    <>
      <div className="seller">
        <h2>Tasker Profile</h2>
        <div className="seller__user">
          <img src={currentPro.pp} alt={`${currentPro.username} image`} />
          <div className="seller__userinfo">
            <span>{currentPro.username}</span>
            <div className="seller__userinfo__stars">
              {renderStars(currentPro.star)}
            </div>
            <button>Send a Message</button>
          </div>{" "}
          <Map
            customW={"100%"}
            customH={"25vh"}
            radius={800}
            currentPro={currentPro}
          />
        </div>
        <div className="seller__box">
          <div className="seller__boxContainer">
            <div className="seller__boxItem">
              <span className="seller__boxItem__title">From</span>
              <span className="seller__boxItem__desc">
                {extreactCity(currentPro.address)}
              </span>
            </div>
            <div className="seller__boxItem">
              <span className="seller__boxItem__title">Member since</span>
              <span className="seller__boxItem__desc">
                {currentPro.memberSince}
              </span>
            </div>
            <div className="seller__boxItem">
              <span className="seller__boxItem__title">Avg. response time</span>
              <span className="seller__boxItem__desc">
                {currentPro.responseTime + " "}hours
              </span>
            </div>
            <div className="seller__boxItem">
              <span className="seller__boxItem__title">
                Last Task Completed
              </span>
              <span className="seller__boxItem__desc">1 day</span>
            </div>
            <div className="seller__boxItem">
              <span className="seller__boxItem__title">Languages</span>
              <span className="seller__boxItem__desc">
                {currentPro && currentPro.language
                  ? currentPro.language.length - 1 > 0
                    ? currentPro.language.join(", ")
                    : currentPro.language
                  : "English"}
              </span>
            </div>
          </div>
          <hr />
          <p>{currentPro.desc}</p>
        </div>
      </div>
    </>
  );
}
export default AboutTaskSeller;
