import React, { useState, useEffect, useRef } from "react";
import "./Taskers.scss";
import { taskers, websiteDetail } from "../../../temporaryData";
import PageCard from "../../components/pageCard/PageCard";
import PageHeader from "../../components/pageHeader/PageHeader";
import { useLocation } from "react-router-dom";

function Taskers() {
  const [catName, setCatName] = useState("");
  const [filteredTaskers, setFilteredTaskers] = useState([]);
  const section = useLocation().search;
  const rideBtnRef = useRef(null);
  const yardBtnRef = useRef(null);
  const cleanBtnRef = useRef(null);
  const handyBtnRef = useRef(null);
  const maintBtnRef = useRef(null);
  const careBtnRef = useRef(null);
  const categories = [
    { cat: "?cat=ri", label: "Ride Service", ref: rideBtnRef },
    { cat: "?cat=ya", label: "Yardwork Service", ref: yardBtnRef },
    { cat: "?cat=ca", label: "Care Service", ref: careBtnRef },
    { cat: "?cat=ha", label: "Handyman Service", ref: handyBtnRef },
    { cat: "?cat=cl", label: "Cleaning Service", ref: cleanBtnRef },
    { cat: "?cat=ma", label: "Maintenance Service", ref: maintBtnRef },
  ];
  useEffect(() => {
    const lowercasedName = section.toLowerCase();
    switch (lowercasedName) {
      case "?cat=ri":
        setCatName("Ride Service");
        break;
      case "?cat=ya":
        setCatName("Yardwork Service");
        break;
      case "?cat=ca":
        setCatName("Care Service");
        break;
      case "?cat=ha":
        setCatName("Handyman Service");
        break;
      case "?cat=cl":
        setCatName("Cleaning Service");
        break;
      case "?cat=ma":
        setCatName("Maintanence Service");
        break;
      default:
        setCatName("");
    }
  }, [location.search]);
  const changeBtnStyle = (cat) => {
    const resetBtnStyles = () => {
      rideBtnRef.current.style.color = "";
      rideBtnRef.current.style.borderBottom = "";
      yardBtnRef.current.style.borderBottom = "";
      yardBtnRef.current.style.color = "";
      careBtnRef.current.style.borderBottom = "";
      careBtnRef.current.style.color = "";
      handyBtnRef.current.style.borderBottom = "";
      handyBtnRef.current.style.color = "";
      cleanBtnRef.current.style.borderBottom = "";
      cleanBtnRef.current.style.color = "";
      maintBtnRef.current.style.borderBottom = "";
      maintBtnRef.current.style.color = "";
    };
    resetBtnStyles();
    switch (cat) {
      case "Ride":
        rideBtnRef.current.style.color = "#c59837";
        rideBtnRef.current.style.borderBottom = "2px solid #c59837";
        break;
      case "Yardwork":
        yardBtnRef.current.style.color = "#c59837";
        yardBtnRef.current.style.borderBottom = "2px solid #c59837";
        break;
      case "Care":
        careBtnRef.current.style.color = "#c59837";
        careBtnRef.current.style.borderBottom = "2px solid #c59837";
        break;
      case "Handyman":
        handyBtnRef.current.style.color = "#c59837";
        handyBtnRef.current.style.borderBottom = "2px solid #c59837";
        break;
      case "Cleaning":
        cleanBtnRef.current.style.color = "#c59837";
        cleanBtnRef.current.style.borderBottom = "2px solid #c59837";
        break;
      case "Maintenance":
        maintBtnRef.current.style.color = "#c59837";
        maintBtnRef.current.style.borderBottom = "2px solid #c59837";
        break;
      default:
        setCatName("");
    }
  };
  useEffect(() => {
    // Filter taskers based on the category
    if (catName) {
      const filtered = taskers.filter((task) =>
        task.availabletask.includes(catName)
      );
      setFilteredTaskers(filtered);

      changeBtnStyle(catName);
    } else {
      setFilteredTaskers(taskers);
    }
  }, [catName]);
  useEffect(() => {
    console.log(filteredTaskers);
  }, [filteredTaskers]);

  return (
    <div className="taskers">
      <div className="taskers-container">
        <span className="taskers__pageTitle">
          Island Tasker &gt; Find Taskers &gt;{" "}
          {catName === null || catName === "" ? "Taskers" : catName}
        </span>
        <h1 className="taskers__title">
          {catName === null || catName === "" ? "All" : catName}
        </h1>
        <p className="taskers__text">
          Explore the Range of{" "}
          {catName === null || catName === "" ? "Service" : catName} Available
          on Island Tasker
        </p>
        <div className="taskers-cat">
          {categories.map((category) => (
            <button
              key={category.cat}
              ref={category.ref}
              className={`taskers-cat__button ${
                section === category.cat ? "active" : ""
              }`}
              onClick={() => setCatName(category.label.replace(" Service", ""))}
            >
              {category.label.replace(" Service", "")}
            </button>
          ))}
        </div>
        <PageHeader />
        <div className="taskers__cards">
          {filteredTaskers.map((task) => (
            <PageCard key={task.id} card={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Taskers;
