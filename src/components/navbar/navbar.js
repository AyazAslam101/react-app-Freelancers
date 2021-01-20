import React  from 'react'
// import {Layout} from 'antd'
import NavItems from './navItems/navItems'
import Title from "./title/title"    
import './navbar.css'
import Aux from '../../hoc/Auxiliary'

function navbar(props) {

    return (
        <Aux>
            <div className="nav">
            <Title />
            <NavItems search={props.search} />
            </div>
        </Aux>
    )
}

export default navbar
