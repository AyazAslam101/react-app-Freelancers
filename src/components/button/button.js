import React from 'react'
import {Radio} from "antd"; 
import './button.css'
const Button = () => {
    return (
        <div className="Radio">
            <Radio.Group>
      <Radio.Button value="a">Clients</Radio.Button>
      <Radio.Button value="b">Freelancer</Radio.Button>
    </Radio.Group>
        </div>
    )
}

export default Button
