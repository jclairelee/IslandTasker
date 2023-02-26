import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const checkScroll = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
  }, []);

  return (
    // when the state of isActive changes to ture, it nav bar turn its bg color to white
    <div className={isActive ? "nav navActive" : "nav"}>
      <div className="nav-top">
        <div className="nav-topLogo">
          <span className="nav-topLogo__text">fiverr</span>
          <span className="nav-topLogo__dot">.</span>
        </div>
        <div className="nav-topMenu">
          <span className="nav-topMenu__text">Fiverr Business</span>
          <span className="nav-topMenu__text">Explore</span>
          <span className="nav-topMenu__text">English</span>
          <span className="nav-topMenu__text">Sign in</span>
          <span className="nav-topMenu__text">Become a Seller</span>
          <button className="nav-topMenu__btn">Join</button>
        </div>
      </div>
      {/*   when the state of isActive changes to ture, bottom nav bar appears */}
      {isActive && (
        <>
          <hr className="nav-divider" />
          <div className="nav-bttm">
            <span className="nav-bttm__list">Graphics & Design</span>
            <span className="nav-bttm__list">Video & Animation</span>
            <span className="nav-bttm__list">Writing & Translation</span>
            <span className="nav-bttm__list">AI Services</span>
            <span className="nav-bttm__list">Digital Marketing</span>
            <span className="nav-bttm__list">Programming & Tech</span>
            <span className="nav-bttm__list">Business</span>
            <span className="nav-bttm__list">Lifestyle</span>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
