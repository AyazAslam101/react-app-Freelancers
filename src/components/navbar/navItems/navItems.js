import React from 'react'
import {Button } from 'antd'
import Home from "./home/home"
import Hire from './hire/hire'
import GetHire from './get hire/getHire'
import Radium from 'radium'
import {SearchOutlined} from '@ant-design/icons';

function navItems() {
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
        <div className="items" style={{ display : "inline-flex"}} >
            <Home/>
            <Hire />
            <GetHire />
            <input type="text" placeholder="Search" />
            <Button className="search" icon={<SearchOutlined />} shape="circle"></Button>
        </div>
    )
}

export default Radium(navItems);
