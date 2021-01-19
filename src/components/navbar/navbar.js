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
            <div className="decription">
                <div className="info">
                    <h1 className="info-title">Lorem ipsum dolor sit amet consectetur.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias hic laboriosam quam eum ducimus distinctio autem quaerat itaque fugit saepe veritatis reiciendis.</p>
                </div>
                <div className="img">
                    <img src={img1} alt="" className="img-1"/>
                </div>
            </div>
        </Aux>
    )
}

export default navbar
