import React from "react";
import "./profile.css";
import Logo from "./images/2X4thv_T_400x400.jpg";
import { useSelector } from "react-redux";
function Profile(props) {
  const data = useSelector((state) => state.userDetails);
  //  console.log(data.user, "listData")
  let approve = data.users.find((element) => {
    return (
      element.email === data.userProfile.email &&
      element.password === data.userProfile.password
    );
  });
  console.log(approve.image);

  return (
    <div className="Profile">
      <div className="Profile-container">
        <div className="img-profile">
          <img src={approve.image} alt="" className="img-profile" />
        </div>
        <div className="user-names">
          <p className="user-work">Front-end Developer</p>
          <h2 className="profile-h2">{approve.name}</h2>
        </div>
        <div className="user-information">
          <p>
            {approve.description}Hello My Name Is {approve.name}, From Salmanabd
            Hunza
          </p>
          <p>Experiecne More Than 6 Month</p>
        </div>
        <div className="">
          <button>View More</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
