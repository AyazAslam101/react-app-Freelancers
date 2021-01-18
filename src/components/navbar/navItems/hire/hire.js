import React from 'react'
import Radium from 'radium'
import {Button} from 'antd'

function hire() {
    let style = {
        /* marginLeft:"10px" */
        textDecoration: "none",
        color: "#229954",
        transition: "0.3s",
    'hover':{
        color: "black"
    }
}
    return (
        <div>
            <Button type="link" style={style} inline >Hire</Button>
        </div>
    )
}

export default Radium(hire)