import React, { useRef, useState } from "react";
import "./PageHeader.scss";

function PageHeader() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const setBudget = () => {
    conosole.log("budget");
  };
  console.log(open);
  return (
    <div className="pageHeader">
      <div className="pageHeader__left">
        <span className="pageHeader__left-text">Budget</span>
        <input type="number" placeholder="min" />
        <input type="number" placeholder="max" />
        <button onClick={setBudget}>Apply</button>
      </div>
      <div className="pageHeader__right">
        <span className="pageHeader__right__sortBy">Sort by</span>
        <span className="pageHeader__right__sortType">
          {sort === "sales" ? "Best Selling" : "Newest"}
        </span>
        <img src="./img/down.png" alt="" onclick={() => setOpen(!open)} />
        {open && (
          <div className="pageHeader__right-menu">
            <span>Newest</span>
            <span>Best Selling</span>
            <span>Popular</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default PageHeader;
