import React from 'react'
import {Radio} from "antd"; 
import './button.css'
const Button = (props) => {
    return (
        <div className="Radio">
            <Radio.Group>
      <Radio.Button value="a" onClick={props.handleClientForm}>Log in as Client</Radio.Button>
      <Radio.Button value="b" onClick={props.handleFreelancerForm}>log in as Freelancer</Radio.Button>
    </Radio.Group>
        </div>
    )
}

export default Button
