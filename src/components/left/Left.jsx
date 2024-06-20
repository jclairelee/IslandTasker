import React, { useState, useEffect } from "react";
import "./Left.scss";
import AboutTaskSeller from "../aboutTaskSeller/AboutTaskSeller";
import Reviews from "../reviews/Reviews";
import { useLocation } from "react-router-dom";
import { taskers, projects } from "../../../temporaryData";

function Left() {
  const currentProId = useLocation().pathname;
  const [currentPro, setCurrentPro] = useState(null);

  useEffect(() => {
    const isnum = parseInt(currentProId.replace("/profile/", ""), 10);
    const searchPro = taskers.find((tasker) => tasker.id === isnum);

    setCurrentPro(searchPro);
  }, [currentProId]);

  function renderStars(numStars) {
    const starsArray = [];
    for (let i = 0; i < numStars; i++) {
      starsArray.push(<img key={i} src="/img/star.png" alt="" />);
    }
    return starsArray;
  }

  if (!currentPro) {
    return <div>Loading...</div>;
  }
  const findAd = projects.filter((project) => {
    return project.username === currentPro.username;
  });

  return (
    <div className="left">
      <span className="left__breadcrumbs">
        {currentPro.availabletask.length - 1 > 0
          ? currentPro.availabletask.join(", ")
          : currentPro.availabletask}
      </span>
      {findAd.map((item, idx) => (
        <React.Fragment key={idx}>
          <h1 className="left__title">{item.title}</h1>
          <div className="left__user">
            <img className="left__pp" src={currentPro.pp} alt="" />
            <span>{currentPro.username}</span>
            <div className="left__stars">{renderStars(currentPro.star)}</div>
          </div>
          <h2>Task Description</h2>
          <p>{item.content}</p>
        </React.Fragment>
      ))}

      <AboutTaskSeller currentPro={currentPro} />
      <Reviews currentProName={currentPro.username} />
    </div>
  );
}

export default Left;
