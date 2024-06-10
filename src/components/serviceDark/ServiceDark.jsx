import React from "react";
import "./ServiceDark.scss";
import task from "/src/img/task.png";
function ServiceDark() {
  return (
    <div className="serviceDark">
      <div className="serviceDark-container">
        <div className="serviceDark__item">
          <h1
            className="serviceDark__header serviceDark__sitename"
            translate="no"
          >
            Island <i>Tasker</i>
          </h1>
          <h1 className="serviceDark__header">
            Simplify Your Daily Tasks with Island Tasker
          </h1>
          <p className="serviceDark__text">
            Join us to connect with local service providers who are certified
            and trusted, ready to assist you with your daily chores and tasks.
            Streamline your island living experience by accessing reliable help
            and supporting your community.
          </p>

          <div className="serviceDark__title">
            <img src="./img/check.png" alt="" />
            Connect with skilled locals ready to assist with daily chores and
            tasks
          </div>

          <div className="serviceDark__title">
            <img src="./img/check.png" alt="" />
            Find the perfect service provider to help with your daily routines
          </div>

          <div className="serviceDark__title">
            <img src="./img/check.png" alt="" />
            Support local service businesses and boost the island's economy
          </div>
          <button className="serviceDark__btn">
            Join as a Service Provider
          </button>
        </div>
        <div className="serviceDark__item serviceDark__imgBox">
          <img src={task} alt="" className="serviceDark__img" />
        </div>
      </div>
    </div>
  );
}

export default ServiceDark;
