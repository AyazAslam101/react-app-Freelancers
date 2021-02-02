import React  from 'react'
import {NavLink} from 'react-router-dom'
// import {Layout} from 'antd'
import NavItems from './navItems/navItems'
import {useSelector} from "react-redux"

// import FreelancerLoginFrom from "../freelancerForm/freelancerLogin/freelancerLoginFrom"  

import Title from "./title/title"    

import './navbar.css'
import Aux from '../../hoc/Auxiliary'
import ProfileDrawer from "../drawer/drawer"


function Navbar(props) {


    return (
        <Aux>
            <div className="nav">
            <NavLink to="/home"><Title /></NavLink>
            <NavItems search={props.search} />
            <ProfileDrawer />
            </div>
            
        </Aux>
    )
}

export default Navbar
