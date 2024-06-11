import React from "react";
import { Link } from "react-router-dom";
import "./MySale.scss";
import { tasksList } from "../../../temporaryData";
function MySale() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isTasker: false,
  };

  return (
    <div className="mySale">
      <div className="mySale-container">
        <div className="mySale__title">
          <h1>My Bookings</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button className="mySale__btn">Add New Offer</button>
            </Link>
          )}
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasksList.map((task) => (
              <tr key={task.id}>
                <td>
                  <img src={task.image} alt="" />
                </td>
                <td>{task.title}</td>
                <td>{task.price.toFixed(2)}</td>
                <td>{task.sales}</td>
                <td>
                  <img className="delete" src="./img/delete.png" alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MySale;
