import React  from 'react'
// import {Layout} from 'antd'
import NavItems from './navItems/navItems'
import Title from "./title/title"
import img1 from '../../assets/new.jpg' 
// import FreelancerLoginFrom from "../freelancerForm/freelancerLogin/freelancerLoginFrom"  
import './navbar.css'
import Aux from '../../hoc/Auxiliary'

function navbar() {

    return (
        <Aux>
            <div className="nav"> 
            <Title />
            <NavItems/>
            </div>
            <div className="form">
                {/* <FreelancerLoginFrom /> */}
            </div>
            
        </Aux>
    )
}

export default navbar
