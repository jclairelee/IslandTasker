import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const { pathname } = useLocation();

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const checkScroll = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
  }, []);

  const currentUser = {
    id: 1,
    username: "Ce",
    isSeller: true,
  };

  function getFirstChar(name) {
    return name.charAt(0);
  }

  return (
    <div className={isActive || pathname !== "/" ? "nav navActive" : "nav"}>
      <div className="nav-top">
        <div className="nav-topLogo">
          <Link
            to="/"
            className={
              isActive ? "nav-topLogo__linkActive" : "nav-topLogo__link"
            }
          >
            <span className="nav-topLogo__text">Islands</span>
            <span className="nav-topLogo__dot">MarketPlace</span>
          </Link>
        </div>
        <div className="nav-topMenu">
          <span className="nav-topMenu__text">Local Business</span>
          <span className="nav-topMenu__text">Explore</span>
          <span className="nav-topMenu__text">English</span>
          {!currentUser?.isSeller && (
            <span className="nav-topMenu__text">Become a Seller</span>
          )}
          {currentUser ? (
            <div className="nav-user" onClick={() => setIsOpen(!isOpen)}>
              <div className="nav-user__initial">
                {getFirstChar(currentUser?.username)}
              </div>
              <span>{currentUser?.username}</span>
              {isOpen && (
                <div className="nav-user__options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="nav-user__optionsLink" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="nav-user__optionsLink" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="nav-user__optionsLink" to="/orders">
                    Orders
                  </Link>
                  <Link className="nav-user__optionsLink" to="/messages">
                    Messages
                  </Link>
                  <Link className="nav-user__optionsLink" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="nav-user__optionsLink" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>

      {(isActive || pathname !== "/") && (
        <>
          <hr className="nav-divider" />
          <div className="nav-bttm">
            <Link className="nav-user__optionsLink" to="/">
              Boats & RVs
            </Link>
            <Link className="nav-user__optionsLink" to="/">
              Camping & Outdoor Gear
            </Link>
            <Link className="nav-user__optionsLink" to="/">
              Sports
            </Link>
            <Link className="nav-user__optionsLink" to="/">
              Health & Wellness
            </Link>
            <Link className="nav-user__optionsLink" to="/">
              Local Art
            </Link>
            <Link className="nav-user__optionsLink" to="/">
              Adventure Tours
            </Link>
            <Link className="nav-user__optionsLink" to="/">
              Cycling & Biking
            </Link>
            <Link className="nav-user__optionsLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
