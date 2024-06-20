import React from "react";
import "./Profile.scss";
import Left from "../../components/left/Left";
import Right from "../../components/right/RightBox";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-container">
        <Left />
      </div>
      <Right />
    </div>
  );
}

export default Profile;
