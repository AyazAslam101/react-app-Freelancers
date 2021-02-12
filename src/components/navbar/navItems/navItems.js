import React from 'react'
import {NavLink} from 'react-router-dom'
import Home from "./home/home";
import Hire from './hire/hire';
import GetHire from './get hire/getHire';
import PostJobs from "./postJobs/postJobs"
import {useSelector} from "react-redux"


function NavItems(props) {

    const data = useSelector(state => state.userDetails)

    
        
    return (
        <div className="items" style={{ display : "inline-flex"}} >
            <NavLink to='./home'><Home/></NavLink>
            <NavLink to='./hire'><Hire /></NavLink>
            <NavLink to='./getHire'><GetHire /></NavLink>
            <NavLink to="./postJobs"><PostJobs /></NavLink>
        </div>
    )
}

export default NavItems;
