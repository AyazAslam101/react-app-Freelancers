import React from "react";
import { Button, Dropdown } from "antd";
// import img1 from "../../assets/download(3).jpg"
import "./homePage.css";
import Aux from "../../hoc/Auxiliary";
import Logo1 from "./image3.webp"
import Logo2 from "./image2.jpg"
import Animation from './animation/animation'

const color = [ "#229954"]

function homePage() {
  return (
    <Aux>
      <div className="Home-container">
        <div className="header-container">
            <div className="left-container">
            <div className="header-header">
            <h1 className="home-h1">
              This is our <span className="span-home">site</span>
            </h1>
          </div>
          <div className="header-text">
            <p>
              Engage the largest network of trusted independent<br/> professionals to
              unlock the full potential of your<br/> business.
            </p>
          </div>
          <div className="header-btn">
            <Button className="find-Talent-button" htmlType="button" style={{color : 'white'}}>
              Find Talent
            </Button>
            <Button className="find-work-button" htmlType="button" color={color}>
              Find Work
            </Button>
          </div>
            </div>
            <div className="right-container">
              <img src={Logo1} className="home-img1"></img>
              <img src={Logo2} className="home-img2"></img>
          </div>
          </div>
          <Animation/>
          <div id="homePage" className="home-middle-content">
            <div className="home-content">
              <h4 className="h4-clients">For Clients</h4>
              <p className="p-clients">Find talent your way</p>
              <p className="p-content">Develop trusted relationships and build your own virtual talent bench for quick project turnarounds or big transformations.</p>
            </div>

          </div>
        </div>
    </Aux>
  );
}

export default homePage;
