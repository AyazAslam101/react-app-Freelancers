import React from 'react'
import {Radio} from "antd"; 
import './button.css'
const Button = () => {
    return (
        <div className="Radio">
            <Radio.Group>
      <Radio.Button value="a">Log in as Client</Radio.Button>
      <Radio.Button value="b">log in as Freelancer</Radio.Button>
    </Radio.Group>
        </div>
    )
}

export default Button
