import React, {useState} from 'react'
import Home from "./home/home";
import Hire from './hire/hire';
import GetHire from './get hire/getHire';
import SearchBar from './searchBar/searchBar'

function navItems() {
    const [searchBarRender , setSearchBarRender] = useState({
        showSeacrh : false
    })

    let search = null;
        if(searchBarRender.showSeacrh) {
            search = <div className="search-bar"><SearchBar /></div>  
          }
        
    return (
        <div className="items" style={{ display : "inline-flex"}} >
            <Home/>
            <Hire />
            <GetHire />
            
        </div>
    )
}

export default navItems;
