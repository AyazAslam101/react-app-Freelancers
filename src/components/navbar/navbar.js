import React  from 'react'
import {NavLink} from 'react-router-dom'
// import {Layout} from 'antd'
import NavItems from './navItems/navItems'

// import FreelancerLoginFrom from "../freelancerForm/freelancerLogin/freelancerLoginFrom"  

import Title from "./title/title"    

import './navbar.css'
import Aux from '../../hoc/Auxiliary'
import Profile from './profile'
import ProfileDrawer from "../drawer/drawer"


function navbar(props) {

    let menu = null;
    if(props.search.showSearch) {
    menu = <Profile />
}


    return (
        <Aux>
            <div className="nav">
            {menu}
            <NavLink to="/home"><Title /></NavLink>
            <NavItems search={props.search} />
            <ProfileDrawer />
            </div>
            
        </Aux>
    )
}

export default navbar
