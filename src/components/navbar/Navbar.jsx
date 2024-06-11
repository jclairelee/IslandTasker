import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { cards } from "../../../temporaryData";

function Navbar() {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentUser = {
    id: 1,
    username: "Cathy",
    isSeller: true,
  };

  const shorterText = (text) => {
    return window.innerWidth < 1064 ? text.replace(" Service", "") : text;
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

  return (
    <div className={`nav ${isActive || !isHomePage ? "navActive" : ""}`}>
      <div
        className={`nav-top ${isActive || !isHomePage ? "nav-topActive" : ""}`}
      >
        <div className="nav-topLogo">
          <Link
            to="/"
            className={`nav-topLogo__link ${
              isActive ? "nav-topLogo__linkActive" : ""
            }`}
          >
            <span
              className={`nav-topLogo__text ${
                !isHomePage ? "nav-topLogo__textNotHome" : ""
              }`}
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
              <div
                className={`nav-user__initial ${
                  isActive ? "nav-user__initialActive" : ""
                } ${isHomePage ? "" : "nav-user__initialNotHome"}`}
              >
                {currentUser.username.charAt(0)}
              </div>

              <span>{currentUser.username}</span>
              {isOpen && (
                <div className="nav-user__options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="nav-user__optionsLink" to="/mysale">
                        Tasks
                      </Link>
                      <Link className="nav-user__optionsLink" to="/add">
                        Add New Task
                      </Link>
                    </>
                  )}
                  <Link className="nav-user__optionsLink" to="/mypurchase">
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

      {(isActive || !isHomePage) && (
        <>
          <hr
            className={`nav-divider ${
              isActive || !isHomePage ? "nav-dividerActive" : ""
            }`}
          />
          <div
            className={`nav-bttm ${
              isActive || !isHomePage ? "nav-bttmActive" : ""
            }`}
          >
            {cards.map((cat, index) => (
              <Link
                className="nav-user__optionsLink"
                to={linkPaths[index]}
                key={index}
              >
                {window.innerWidth < 1064
                  ? cat.title.replace(" Service", "")
                  : cat.title}
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
