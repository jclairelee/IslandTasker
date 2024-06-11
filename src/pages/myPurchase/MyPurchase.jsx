import React from "react";
import { Link } from "react-router-dom";
import "./MyPurchase.scss";
import { orders } from "../../../temporaryData";

const MyPurchase = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="orders-container">
        <div className="orders__title">
          <h1>Orders</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Setvice</th>
              <th>Price</th>
              <th>Hours</th>
              {<th>{currentUser.isSeller ? "Seeker" : "Tasker"}</th>}
              <th>Contact</th>
            </tr>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.service}</td>
                <td>{order.price}</td>
                <td>{order.hours}</td>
                <td>
                  {currentUser.isSeller ? order.seeker : currentUser.username}
                </td>
                <td>
                  <img className="message" src="./img/message.png" alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPurchase;
