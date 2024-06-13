import React, { useRef, useState, useEffect } from "react";
import "./Taskers.scss";
import { taskers, cards } from "../../../temporaryData";
import PageCard from "../../components/pageCard/PageCard";
import PageHeader from "../../components/pageHeader/PageHeader";
import { useLocation } from "react-router-dom";
function Taskers() {
  const [catName, setCatName] = useState(null);
  const section = useLocation().search;

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
      case "?cat=ev":
        setCatName("Event Service");
        break;
      case "?cat=cl":
        setCatName("Cleaning Service");
        break;
      case "?cat=ho":
        setCatName("Housework Service");
        break;
      default:
        setCatName("");
    }
  }, [section]);
  useEffect(() => {
    console.log(catName);
  }, []);

  return (
    <div className="taskers">
      <div className="taskers-container">
        <span className="taskers__pageTitle">
          Island Tasker &gt; {catName} &gt;
        </span>
        <h1 className="taskers__title">{catName}</h1>
        <p className="taskers__text">
          Explore the boundaries of art and {catName} with Island Taskers
        </p>
        <PageHeader />
        <div className="taskers__cards">
          {taskers.map((task) => (
            <PageCard key={task.id} item={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Taskers;
