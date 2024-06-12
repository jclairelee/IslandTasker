import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./RightBox.scss";

function RightBox() {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  // Define an object to store all the data
  const data = {
    title: "1 Hour Deep Cleaning",
    price: "$ 59.99",
    description: `I offer thorough deep cleaning services, ensuring every nook and cranny
      of your space is meticulously cleaned. For example, a rancher with 3
      rooms and 2 bathrooms requires a minimum of 2 hours. An additional hour
      is added for each extra bathroom or room.`,
    featuresAndDetails: [
      { icon: "/img/clock.png", text: "Minimum 2 Hours Required" },
      { icon: "/img/recycle.png", text: "Package Available" },
      { icon: "/img/greencheck.png", text: "Non-toxic Cleaning Products" },
      { icon: "/img/greencheck.png", text: "Efficient Work" },
      { icon: "/img/greencheck.png", text: "Effective Trash Management" },
      { icon: "/img/greencheck.png", text: "Carpet and Curtain Cleaning" },
    ],
  };

  return (
    <div className="right">
      <div className="right-price">
        <h3>{data.title}</h3>
        <h2>{data.price}</h2>
      </div>
      <p className="right-desc">{data.description}</p>
      <div className="right-details">
        {data.featuresAndDetails.map((item, index) => (
          <div key={index} className="right-details__item">
            <img src={item.icon} alt="" className="right-details__img" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <div>
        <DatePicker
          wrapperClassName="datePicker"
          selected={startDate}
          onChange={handleDateChange}
          showTimeSelect
          dateFormat="Pp"
          popperPlacement="top-start"
        />
      </div>
      <button className="right-btn">Continue</button>
    </div>
  );
}

export default RightBox;
