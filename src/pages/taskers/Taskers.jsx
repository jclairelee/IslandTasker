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
          Liverr {">"} Graphics & Design {">"}
        </span>
        <h1>AI Artists</h1>
        <p className="taskers__text">
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <PageHeader />
        <div className="taskers__cards">
          {taskers.map((gig) => (
            <PageCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Taskers;
