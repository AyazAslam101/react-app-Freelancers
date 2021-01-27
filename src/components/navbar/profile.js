import React from "react";
import './profile.css'
// import Logo from "./images/2X4thv_T_400x400.jpg";
import {useSelector} from "react-redux"
function Profile(props) {

  const data  = useSelector(state => state.userDetails)
    //  console.log(data.user, "listData")
  let approve = data.users.find((element)=>{
    return element.email === data.userProfile.email && element.password === data.userProfile.password
  })
  console.log(approve.data)

  return (
    <div className="Profile">
      <div className="Profile-container">
        <div className="img-profile">
          <img src={approve.data} alt=""/>
        </div>
        <div className="user-names">
          <p className="user-work">Front-end Developer</p>
          <h1>{approve.name}</h1>
        </div>
        <div className="user-information">
          <p>{approve.description}dnauifnfioamcninvc dhaizc  uWNSC DUVNANW D</p>
        </div>
        <div className="">
          <button>View More</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;