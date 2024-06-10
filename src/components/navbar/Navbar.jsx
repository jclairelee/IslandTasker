import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { cards } from "../../../temporaryData";

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
    handleResize();
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
        case "Home Service":
          return "Home";
        case "Cleaning Service":
          return "Cleaning";
        case "Event/Party Service":
          return "Event";
        case "Pet Care Service":
          return "Pet";
        case "Yard Work Service":
          return "Yard Work";
        case "Other Service":
          return "Other";
        case "Child Care Service":
          return "Child Care";
        default:
          return text;
      }
    } else {
      return text;
    }
  };

  const linkPaths = [
    "/home",
    "/cleaning",
    "/event",
    "/pet",
    "/yardwork",
    "/other",
    "/childcare",
  ];

  console.log(cards[0]);

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
            <span
              className={
                isActive ? "nav-topLogo__textActive" : "nav-topLogo__text"
              }
            >
              Island
            </span>
            <span className="nav-topLogo__dot">Taskers</span>
          </Link>
        </div>
        <div className="nav-topMenu">
          {!currentUser?.isSeller && (
            <span className="nav-topMenu__text">Become a Tasker</span>
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
                      <Link className="nav-user__optionsLink" to="/mytasks">
                        Tasks
                      </Link>
                      <Link className="nav-user__optionsLink" to="/add">
                        Add New Task
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
            {cards.map((cat, index) => (
              <Link
                className="nav-user__optionsLink"
                to={linkPaths[index]}
                key={index}
              >
                {shorterText(cat.title)}
              </Link>
            ))}
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
