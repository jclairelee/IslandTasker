import React, { Component } from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";
import * as style_star from "../../../node_modules/infinite-react-carousel/lib/carousel/style.css?inline";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slideList">
      <div className="slideList-content">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
