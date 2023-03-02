import React, { useRef, useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../../temporaryData";
import PageCard from "../../components/pageCard/PageCard";
import PageHeader from "../../components/pageHeader/PageHeader";

function Gigs() {
  return (
    <div className="gigs">
      <div className="gigs-container">
        <span className="gigs__pageTitle">
          Liverr {">"} Graphics & Design {">"}
        </span>
        <h1>AI Artists</h1>
        <p className="gigs__text">
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <PageHeader />
        <div className="gigs__cards">
          {gigs.map((gig) => (
            <PageCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
