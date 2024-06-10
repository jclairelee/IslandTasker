import React from "react";
import "./AboutTaskSeller.scss";

function AboutTaskSeller() {
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
            <span>Anna Jane</span>
            <div className="seller__userinfo__stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
            <button>Schedule with Me</button>
          </div>
        </div>
        <div className="seller__box">
          <div className="seller__boxContainer">
            <div className="seller__boxItem">
              <span className="seller__boxItem__title">From</span>
              <span className="seller__boxItem__desc">LadySmith</span>
            </div>
            <div className="seller__boxItem">
              <span className="seller__boxItem__title">Member since</span>
              <span className="seller__boxItem__desc">Aug 2023</span>
            </div>
            <div className="seller__boxItem">
              <span className="seller__boxItem__title">Avg. response time</span>
              <span className="seller__boxItem__desc">4 hours</span>
            </div>
            <div className="seller__boxItem">
              <span className="seller__boxItem__title">
                Last Task Completed
              </span>
              <span className="seller__boxItem__desc">1 day</span>
            </div>
            <div className="seller__boxItem">
              <span className="seller__boxItem__title">Languages</span>
              <span className="seller__boxItem__desc">English</span>
            </div>
          </div>
          <hr />
          <p>
            I am a certified babysitter with extensive training and hands-on
            experience in caring for children of all ages. My certification
            ensures that I am equipped with the necessary skills and knowledge
            to create a safe, nurturing, and engaging environment for children
            under my supervision. I have undergone specialized training in child
            development, safety protocols, and emergency procedures, allowing me
            to respond effectively to any situation that may arise. My passion
            for working with children drives me to provide the highest level of
            care, ensuring that each child feels valued, supported, and happy
            under my care.
          </p>
        </div>
      </div>
    </>
  );
}
export default AboutTaskSeller;
