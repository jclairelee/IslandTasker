import React from "react";
import "./Left.scss";
import AboutTaskSeller from "../aboutTaskSeller/AboutTaskSeller";
import Reviews from "../reviews/Reviews";

function renderStars(numStars) {
  const starsArray = [];
  for (let i = 0; i < numStars; i++) {
    starsArray.push(<img key={i} src="/img/star.png" alt="" />);
  }
  return starsArray;
}

function Left() {
  const taskerData = {
    breadcrumbs: ["Island Taskers", "Home Service"],
    title: "Let Me Help Keep Your Home Running Smoothly",
    userData: {
      pp: "https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Anna Bell",
      stars: 5,
    },
    aboutTasker: {
      heading: "About This Tasker",
      description:
        "I offer home maintenance services that cater to your needs, which could be something like fixing a leaky faucet, painting a room, or tackling a larger project. It doesn't matter what you are facing to. I've got you covered. Let me take care of the upkeep so you can enjoy a well-maintained home hassle-free. If you have any questions or specific requests, feel free to reach out. Your satisfaction is my priority.",
    },
  };

  return (
    <div className="left">
      <span className="left__breadcrumbs">
        {taskerData.breadcrumbs.join(" > ")}
      </span>
      <h1 className="left__title">{taskerData.title}</h1>
      <div className="left__user">
        <img className="left__pp" src={taskerData.userData.pp} alt="" />
        <span>{taskerData.userData.name}</span>
        <div className="left__stars">
          {renderStars(taskerData.userData.stars)}
          <span>{taskerData.userData.stars}</span>
        </div>
      </div>

      <h2>{taskerData.aboutTasker.heading}</h2>
      <p>{taskerData.aboutTasker.description}</p>
      <AboutTaskSeller />
      <Reviews />
    </div>
  );
}

export default Left;
