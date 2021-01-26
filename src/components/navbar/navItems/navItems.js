import React from 'react'
import {NavLink} from 'react-router-dom'
import Home from "./home/home";
import Hire from './hire/hire';
import GetHire from './get hire/getHire';


function navItems(props) {



        
    return (
        <div className="items" style={{ display : "inline-flex"}} >
            <NavLink to='./home'><Home/></NavLink>
            <NavLink to='./hire'><Hire /></NavLink>
            <NavLink to='./getHire'><GetHire /></NavLink>
        </div>
    )
}

export default navItems;
