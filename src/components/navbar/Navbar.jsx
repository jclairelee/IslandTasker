import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const { pathname } = useLocation();

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const checkScroll = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize(); // Initial resizing
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const currentUser = {
    id: 1,
    username: "Cathy",
    isSeller: true,
  };

  function getFirstChar(name) {
    return name.charAt(0);
  }
  const shorterText = (text) => {
    if (window.innerWidth < 1064) {
      switch (text) {
        case "Boats & RVs":
          return "RVs";
        case "Camping & Outdoor Gear":
          return "Outdoor";
        case "Health & Wellness":
          return "Wellness";
        case "Local Art":
          return "Art";
        case "Adventure Tours":
          return "Travel";
        case "Cycling & Biking":
          return "Biking";
        case "Sports":
          return "Sports";
        default:
          return text;
      }
    } else {
      return text;
    }
  };

  return (
    <div className={`nav ${isActive || pathname !== "/" ? "navActive" : ""}`}>
      <div
        className={`nav-top ${
          isActive || pathname !== "/" ? "nav-topActive" : ""
        }`}
      >
        <div className="nav-topLogo">
          <Link
            to="/"
            className={
              isActive ? "nav-topLogo__linkActive" : "nav-topLogo__link"
            }
          >
            <span className="nav-topLogo__text">Island</span>
            <span className="nav-topLogo__dot">MarketPlace</span>
          </Link>
        </div>
        <div className="nav-topMenu">
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
          <hr
            className={`nav-divider ${
              isActive || pathname !== "/" ? "nav-dividerActive" : ""
            }`}
          />
          <div
            className={`nav-bttm ${
              isActive || pathname !== "/" ? "nav-bttmActive" : ""
            }`}
          >
            <Link className="nav-user__optionsLink" to="/">
              {shorterText("Boats & RVs")}
            </Link>
            <Link className="nav-user__optionsLink" to="/">
              {shorterText("Camping & Outdoor Gear")}
            </Link>
            <Link className="nav-user__optionsLink" to="/">
              {shorterText("Sports")}
            </Link>
            <Link className="nav-user__optionsLink" to="/">
              {shorterText("Health & Wellness")}
            </Link>
            <Link className="nav-user__optionsLink" to="/">
              {shorterText("Local Art")}
            </Link>
            <Link className="nav-user__optionsLink" to="/">
              {shorterText("Adventure Tours")}
            </Link>
            <Link className="nav-user__optionsLink" to="/">
              {shorterText("Cycling & Biking")}
            </Link>
            <Link className="nav-user__optionsLink" to="/">
              {shorterText("Lifestyle")}
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
