import React from 'react'
// import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import './App.css';
// import Navbar from './components/navbar/navbar'
// import FreelancerLogin from "./components/freelancerForm/freelancerLoginForm/freelancerLoginFrom"
// // import Freelancer from "./components/freelancers/freelancers"
// import HomePage from './components/homePage/homePage';
// import hirePage from './components/hirePage/hirePage';
// import getHirePage from './components/getHirePage/getHirePage';
import SignUpModal from './components/signUpModal/signUpModal'
function App() {

//   const [searchBarRender , setSearchBarRender] = useState({
//     showSearch : false
// })
// const showSearchHandler = ()=>{
//   let show = searchBarRender.showSeacrh
//   setSearchBarRender({
//     showSearch: !show
//   })
// }

  return (
    <div className="App">
      {/* <Router>
        <Navbar search={searchBarRender} />
        <Switch>
          <Route path="/" exact component={FreelancerLogin} ><FreelancerLogin 
          showSearch={showSearchHandler}/></Route>
          <Route path="/home" exact component={HomePage}/>
          <Route path="/hire" exact component={hirePage}/>
          <Route path="/getHire" exact component={getHirePage}/>
        </Switch>
      </Router> */}
          <SignUpModal/>
    </div>
  );
}

export default App;
