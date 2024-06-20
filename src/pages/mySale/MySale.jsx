import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MySale.scss";
import { tasksList } from "../../../temporaryData";

function MySale() {
  const [myTaskList, setMyTaskList] = useState([]);

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: false, // Corrected the property name
  };

  useEffect(() => {
    const findMyTaskOffer = tasksList.filter(
      (task) => task.taskerId === currentUser.id
    );
    setMyTaskList(findMyTaskOffer);
  }, [currentUser.id]);

  return (
    <div className="mySale">
      <div className="mySale-container">
        <div className="mySale__title">
          <h1>My Sales</h1>
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
              <th>Category</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myTaskList.length === 0 ? (
              // Case: No tasks found
              <tr>
                <td colSpan="6">No tasks found</td>
              </tr>
            ) : myTaskList.length > 1 ? (
              // Case: Multiple tasks found
              myTaskList.map((task) => (
                <tr key={task.id}>
                  <td>
                    <img src={task.image} alt="image of the service" />
                  </td>
                  <td>{task.title}</td>
                  <td>{task.cat}</td>
                  <td>{task.hourlyPrice.toFixed(2)}</td>
                  <td>{task.sales.length}</td>
                  <td>
                    <img
                      className="delete"
                      src="./img/delete.png"
                      alt="delete icon"
                    />
                  </td>
                </tr>
              ))
            ) : (
              // Case: Only one task found
              <tr key={myTaskList[0].id}>
                <td>
                  <img src={myTaskList[0].image} alt="image of the service" />
                </td>
                <td>{myTaskList[0].title}</td>
                <td>{myTaskList[0].cat}</td>
                <td>{myTaskList[0].hourlyPrice.toFixed(2)}</td>
                <td>{myTaskList[0].sales.length}</td>
                <td>
                  <img
                    className="delete"
                    src="./img/delete.png"
                    alt="delete icon"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MySale;
