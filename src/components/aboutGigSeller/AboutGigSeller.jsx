import React from "react";
import "./AboutGigSeller.scss";

function AboutGigSeller() {
  return (
    <>
      <div className="seller">
        <h2>About The Seller</h2>
        <div className="seller__user">
          <img
            src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className="seller__userinfo">
            <span>Anna Bell</span>
            <div className="seller__userinfo__stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
            <button>Contact Me</button>
          </div>
        </div>
        <div className="seller__box">
          <div className="seller__boxContainer">
            <div className="seller__boxItem">
              <span className="seller__boxItem__title">From</span>
              <span className="seller__boxItem__desc">USA</span>
            </div>
            <div className="seller__boxItem">
              <span className="seller__boxItem__title">Member since</span>
              <span className="seller__boxItem__desc">Aug 2022</span>
            </div>
            <div className="seller__boxItem">
              <span className="seller__boxItem__title">Avg. response time</span>
              <span className="seller__boxItem__desc">4 hours</span>
            </div>
            <div className="seller__boxItem">
              <span className="seller__boxItem__title">Last delivery</span>
              <span className="seller__boxItem__desc">1 day</span>
            </div>
            <div className="seller__boxItem">
              <span className="seller__boxItem__title">Languages</span>
              <span className="seller__boxItem__desc">English</span>
            </div>
          </div>
          <hr />
          <p>
            My name is Anna, I enjoy creating AI generated art in my spare time.
            I have a lot of experience using the AI program and that means I
            know what to prompt the AI with to get a great and incredibly
            detailed result.
          </p>
        </div>
      </div>
    </>
  );
}
export default AboutGigSeller;
