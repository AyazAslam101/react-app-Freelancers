import React from 'react'
import {NavLink} from 'react-router-dom'
import Home from "./home/home";
import Hire from './hire/hire';
import GetHire from './get hire/getHire';
import SearchBar from './searchBar/searchBar'

function navItems(props) {
    

let searchBar = null;
if(props.search.showSearch) {
    searchBar = <SearchBar />  
}
        
    return (
        <div className="items" style={{ display : "inline-flex"}} >
            <NavLink to='./home'><Home/></NavLink>
            <NavLink to='./hire'><Hire /></NavLink>
            <NavLink to='./getHire'><GetHire /></NavLink>
            {searchBar}
        </div>
    )
}

export default navItems;
