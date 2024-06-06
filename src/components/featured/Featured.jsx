import React from "react";
import "./Featured.scss";
import man from "/img/man.png";
import search from "/img/search.png";
import bg from "/img/StrathconaProvincialPark.jpg";
function Featured() {
  return (
    <div className="featured">
      <div className="featured-wrapper">
        <div className="featured__left">
          <h1 className="featured__left__header">Marketplace</h1>
          <div className="featured__left__search">
            <div className="featured__left__search-input">
              <img src={search} alt="" className="featured__left__search-img" />
              <input
                type="text"
                placeholder='Try "building mobil app"'
                className="featured__left__search-textarea"
              />
            </div>
            <button className="featured__left__search-btn">Search</button>
          </div>
          <div className="featured__popular">
            <span className="featured__popular__txt">Popular:</span>
            <button className="featured__popular__category">RV Rental</button>
            <button className="featured__popular__category">Snorkeling</button>
            <button className="featured__popular__category">Logo Design</button>
            <button className="featured__popular__category">AI Services</button>
          </div>
        </div>
        {/* <div className="featured__right">
          <img src={man} alt="" className="featured__right__pic" />
        </div> */}
      </div>
    </div>
  );
}

export default Featured;
