import React from "react";
import "./Task.scss";
import Left from "../../components/left/Left";
import Right from "../../components/right/RightBox";

function Task() {
  return (
    <div className="task">
      <div className="task-container">
        <Left />
      </div>
      <Right />
    </div>
  );
}

export default Task;
