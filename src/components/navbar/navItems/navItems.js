import React from 'react'
import {Button } from 'antd'
import Home from "./home/home";
import Hire from './hire/hire';
import GetHire from './get hire/getHire';
import {SearchOutlined} from '@ant-design/icons';

function navItems() {
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

export default navItems;
