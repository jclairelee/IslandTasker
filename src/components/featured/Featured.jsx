import React from "react";
import "./Featured.scss";
import man from "/img/man.png";
import search from "/img/search.png";
import bg from "/img/StrathconaProvincialPark.jpg";
import BookingSearchBox from "../bookingSearchBox/BookingSearchBox";
function Featured() {
  return (
    <div className="featured">
      <div className="featured-wrapper">
        <h1 className="featured__header">
          Find Trusted Help for Your Everyday Needs
        </h1>
      </div>
    </div>
  );
}

export default Featured;
