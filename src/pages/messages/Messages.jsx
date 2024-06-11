import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";
import { messages, message } from "../../../temporaryData";

const Messages = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const shortenMessage = (msg) => {
    if (windowWidth < 690) {
      return msg.substring(0, 30) + "...";
    } else if (windowWidth < 400) {
      return msg.substring(0, 10) + "...";
    } else {
      return msg;
    }
  };

  return (
    <div className="messages">
      <div className="messages-container">
        <div className="messages__title">
          <h1>Messages</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <th>{currentUser.isSeller ? "Seeker" : "Tasker"}</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            {messages.map((msg) => (
              <tr key={msg.id} className="active">
                <td>{msg.sender}</td>
                <td>
                  <Link to={`/message/${msg.id}`} className="link">
                    {shortenMessage(message)}
                  </Link>
                </td>
                <td>{msg.date}</td>
                <td>
                  <button>Mark as Read</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
