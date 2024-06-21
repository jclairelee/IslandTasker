import React, { useState, useEffect, useRef } from "react";
import "./Taskers.scss";
import { taskers } from "../../../temporaryData";
import PageCard from "../../components/pageCard/PageCard";
import PageHeader from "../../components/pageHeader/PageHeader";

function Taskers() {
  const [catName, setCatName] = useState("");
  const [filteredTaskers, setFilteredTaskers] = useState([]);
  const rideBtnRef = useRef(null);
  const yardBtnRef = useRef(null);
  const cleanBtnRef = useRef(null);
  const handyBtnRef = useRef(null);
  const maintBtnRef = useRef(null);
  const careBtnRef = useRef(null);
  const categories = [
    { cat: "ri", label: "Ride Service", ref: rideBtnRef },
    { cat: "ya", label: "Yardwork Service", ref: yardBtnRef },
    { cat: "ca", label: "Care Service", ref: careBtnRef },
    { cat: "ha", label: "Handyman Service", ref: handyBtnRef },
    { cat: "cl", label: "Cleaning Service", ref: cleanBtnRef },
    { cat: "ma", label: "Maintenance Service", ref: maintBtnRef },
  ];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get("cat");

    switch (catParam) {
      case "ri":
        setCatName("Ride Service");
        break;
      case "ya":
        setCatName("Yardwork Service");
        break;
      case "ca":
        setCatName("Care Service");
        break;
      case "ha":
        setCatName("Handyman Service");
        break;
      case "cl":
        setCatName("Cleaning Service");
        break;
      case "ma":
        setCatName("Maintenance Service");
        break;
      default:
        setCatName("");
    }
  }, []);

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
      case "Ride Service":
        rideBtnRef.current.style.color = "#c59837";
        rideBtnRef.current.style.borderBottom = "2px solid #c59837";
        break;
      case "Yardwork Service":
        yardBtnRef.current.style.color = "#c59837";
        yardBtnRef.current.style.borderBottom = "2px solid #c59837";
        break;
      case "Care Service":
        careBtnRef.current.style.color = "#c59837";
        careBtnRef.current.style.borderBottom = "2px solid #c59837";
        break;
      case "Handyman Service":
        handyBtnRef.current.style.color = "#c59837";
        handyBtnRef.current.style.borderBottom = "2px solid #c59837";
        break;
      case "Cleaning Service":
        cleanBtnRef.current.style.color = "#c59837";
        cleanBtnRef.current.style.borderBottom = "2px solid #c59837";
        break;
      case "Maintenance Service":
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
          Island Tasker &gt; Find Taskers &gt; {catName ? catName : "Taskers"}
        </span>
        <h1 className="taskers__title">{catName ? catName : "All"}</h1>
        <p className="taskers__text">
          Explore the Range of {catName ? catName : "Service"} Available on
          Island Tasker
        </p>
        <div className="taskers-cat">
          {categories.map((category) => (
            <button
              key={category.cat}
              ref={category.ref}
              className={`taskers-cat__button ${
                catName === category.label ? "active" : ""
              }`}
              onClick={() => setCatName(category.label)}
            >
              {category.label}
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
