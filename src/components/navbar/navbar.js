import React  from 'react'
import './navbar.css'
import Aux from '../../hoc/Auxiliary'

function navbar() {

    return (
        <Aux>
            <div className="nav">
                <h2 className="title">Freelancers<span>.co</span></h2> 
                <div className="items">
                    <a href="">Home</a>
                    <a href="#">Hire</a>
                    <a href="#">Get Hired</a>
                    <a href="#">Articles</a>
                    <input type="text" placeholder="Search"/>
                    <button className="search">Search</button>
                </div>
            </div>
            <div className=""></div>
        </Aux>
    )
}

export default navbar
