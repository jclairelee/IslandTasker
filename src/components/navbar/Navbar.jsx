import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { websiteDetail } from "../../../temporaryData";

function Navbar() {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isHomePage = pathname === "/";
  const navi_content = websiteDetail.navigation;
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 0);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Cathy",
    isSeller: true,
  };

  return (
    <div className={`nav ${isActive || !isHomePage ? "navActive" : ""}`}>
      <div
        className={`nav-top ${isActive || !isHomePage ? "nav-topActive" : ""}`}
      >
        <div className="nav-topLogo">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className={`nav-topLogo__link ${
              isActive ? "nav-topLogo__linkActive" : ""
            }`}
          >
            <span
              className={`nav-topLogo__text ${
                !isHomePage ? "nav-topLogo__textNotHome" : ""
              }`}
              style={{ fontFamily: "Permanent Marker" }}
            >
              Island
            </span>
            <span
              className="nav-topLogo__dot"
              style={{ fontFamily: "Permanent Marker" }}
            >
              {" "}
              Tasker
            </span>
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
            {navi_content.map((cat, index) => (
              <a className="nav-user__optionsLink" href={cat.path} key={index}>
                {cat.title}
              </a>
            ))}
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
