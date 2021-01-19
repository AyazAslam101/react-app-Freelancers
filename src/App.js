import React,{useState} from 'react'
import './App.css';
import Navbar from './components/navbar/navbar'
// import Freelancer from "./components/freelancers/freelancers"

function App() {
  const [searchBarRender , setSearchBarRender] = useState({
    showSearch : true
})
// const showSearchHandler = ()=>{
//   let show = searchBarRender.showSeacrh
//   setSearchBarRender({
//     showSearch: !show
//   })
// }

  return (
    <div className="App">
      <Navbar search={searchBarRender} />
    </div>
  );
}

export default App;
