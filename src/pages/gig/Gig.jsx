import React from "react";
import "./Gig.scss";
import Left from "../../components/left/Left";
import Right from "../../components/right/RightBox";

function Gig() {
  return (
    <div className="gig">
      <div className="gig-container">
        <Left />
      </div>
      <Right />
    </div>
  );
}

export default Gig;
