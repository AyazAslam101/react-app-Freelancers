import React from 'react'
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
            <Home/>
            <Hire />
            <GetHire />
            {searchBar}
        </div>
    )
}

export default navItems;
