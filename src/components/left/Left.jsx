import React from "react";
import "./Left.scss";
import AboutTaskSeller from "../aboutTaskSeller/AboutTaskSeller";
import Reviews from "../reviews/Reviews";
function Left() {
  return (
    <div className="left">
      <span className="left__breadcrumbs">
        Island Taskers {">"} Home Service {">"}
      </span>
      <h1>Let Me Help Keep Your Home Running Smoothly</h1>
      <div className="left__user">
        <img
          className="pp"
          src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <span>Anna Bell</span>
        <div className="stars">
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <span>5</span>
        </div>
      </div>
      {/* <Slider slidesToShow={1} arrowsScroll={1} className="left__slider"> */}
      {/* <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </Slider> */}
      <h2>About This Tasker</h2>
      <p>
        I offer home maintenance services that cater to your needs, which could
        be something like fixing a leaky faucet, painting a room, or tackling a
        larger project. It doesn't matter what you are facing to. I've got you
        covered. Let me take care of the upkeep so you can enjoy a
        well-maintained home hassle-free. If you have any questions or specific
        requests, feel free to reach out. Your satisfaction is my priority.
      </p>
      <AboutTaskSeller />
      <Reviews />
    </div>
  );
}

export default Left;
