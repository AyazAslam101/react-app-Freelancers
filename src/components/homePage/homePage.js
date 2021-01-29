import React from 'react'
import {Button , Dropdown} from "antd"
// import img1 from "../../assets/download(3).jpg"
import './homePage.css'
import Aux from "../../hoc/Auxiliary"

function homePage() {
  return (
    <Aux>
      <div className="header-container">
        <div className="header-header">
          <h1>This is our <span>site</span></h1>
        </div>
        <div className="header-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officia hic earum cum et impedit est laboriosam maiores? Expedita at voluptatem nesciunt quia. Illum totam laboriosam sunt quae delectus voluptatem.</p>
        </div>
        <div className="header-btn">
          <Button htmlType="button">learn more</Button>
        </div>
      </div>
      <div className="header-images-container">
        <img></img>   
      </div>
    </Aux>
  )
}

export default homePage;
