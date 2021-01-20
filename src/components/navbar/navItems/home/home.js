import React from 'react'
import Radium from 'radium'
import {Button} from 'antd'

function home() {
    let style = {
        /* marginLeft:"10px" */
        textDecoration: "none",
        color: "#229954",
        transition: "0.3s",
    ':hover':{
        color: "black"
    }
}
    return (
        <div>
            <Button type="link" style={style} inline >Home</Button>
        </div>
    )
}

export default Radium(home)
