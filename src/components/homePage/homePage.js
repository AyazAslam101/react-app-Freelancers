import React from "react";
import './homePage.css'
import {Logo} from "./images/2X4thv_T_400x400.jpg";
function homePage() {
  return (
    <div className="Profile">
      <div className="Profile-container">
        <div className="img-profile">
          <img src="{Logo}" className="img-profile"></img>
        </div>
        <div className="user-names">
          <p className="user-work">Front-end Developer</p>
          <h2>Ayaz Dattuu</h2>
        </div>
        <div className="user-information">
          <p>The first company founded services was the Computer Usage Company, in 1955.</p>
          <p>Experience more than 6 months</p>
        </div>
        <div className="">
          <button>View More</button>
        </div>
      </div>
    </div>
  );
}

export default homePage;
