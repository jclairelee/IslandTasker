import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MyPurchase.scss";
import { taskers, tasksList } from "../../../temporaryData";

const MyPurchase = () => {
  const [myOrder, setMyOrder] = useState([]);
  const [taskerInfo, setTaskerInfo] = useState(null);

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };
  useEffect(() => {
    let res = [];
    tasksList.forEach((task) => {
      const filteredSales = task.sales.filter(
        (sale) => sale.seekerId === currentUser.id
      );
      if (filteredSales.length > 0) {
        console.log("filteredSales result:", filteredSales);
        const newTask = {
          id: task.id,
          taskerId: task.taskerId,
          title: task.title,
          image: task.image,
          cat: task.cat,
          hourlyPrice: task.hourlyPrice,
          sales: filteredSales.map((sale) => ({
            taskId: task.id,
            hour: sale.hour,
            bookingStatus: sale.bookingStatus,
            serviceBookingDate: {
              year: sale.serviceBookingDate.year,
              date: sale.serviceBookingDate.date,
              time: sale.serviceBookingDate.time,
            },
          })),
        };
        res.push(newTask);
        console.log("Intermediate result:", res);
      }
    });

    setMyOrder(res);
  }, [currentUser.id]);

  useEffect(() => {
    console.log("Final myOrder:", myOrder);
  }, [myOrder]);

  useEffect(() => {
    console.log("tasker info :", taskerInfo);
  }, [taskerInfo]);

  const findTaskername = (id) => {
    const tasker = taskers.find((item) => item.id === id);
    if (tasker) {
      return {
        username: tasker.username,
        address: tasker.address,
        phone: tasker.contactInfo.phone,
        email: tasker.contactInfo.email,
      };
    } else {
      console.log("Tasker not found");
      return "Unknown";
    }
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
              <th>Image</th>
              <th>Service</th>
              <th>Price</th>
              <th>Hours</th>
              {<th>{currentUser.isSeller ? "Tasker" : "Seeker"}</th>}
              <th>Contact</th>
            </tr>
            {myOrder.map((order, index) => (
              <tr key={index}>
                <td>
                  <img src={order.image} alt="image of service advertisement" />
                </td>
                <td>{order.title}</td>
                <td>{order.hourlyPrice}</td>
                <td>
                  {order.sales.map((item, index) => {
                    return item.hour;
                  })}
                </td>
                <td>{findTaskername(order.taskerId).username}</td>

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
