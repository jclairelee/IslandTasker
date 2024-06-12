import React, { useRef, useState } from "react";
import "./Taskers.scss";
import { taskers } from "../../../temporaryData";
import PageCard from "../../components/pageCard/PageCard";
import PageHeader from "../../components/pageHeader/PageHeader";

function Taskers() {
  return (
    <div className="taskers">
      <div className="taskers-container">
        <span className="taskers__pageTitle">
          Island Tasker {">"} Cleaning {">"}
        </span>
        <h1 className="taskers__title">Cleaning</h1>
        <p className="taskers__text">
          Explore the boundaries of art and cleaning with Island Taskers
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
