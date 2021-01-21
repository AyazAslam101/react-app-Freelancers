import React,  {useState} from 'react'
import {useSelector} from 'react-redux';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/navbar'
import FreelancerLogin from "./components/freelancerForm/freelancerLoginForm/freelancerLoginFrom"
// import Freelancer from "./components/freelancers/freelancers"
import HomePage from './components/homePage/homePage';
import hirePage from './components/hirePage/hirePage';
import getHirePage from './components/getHirePage/getHirePage';
function App() {
  const users = useSelector(state => state.user)

  const [searchBarRender , setSearchBarRender] = useState({
    showSearch : false
})
const [isModalVisible, setIsModalVisible] = useState(false);

const showModal = () => {
  setIsModalVisible(true);
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};

const showSearchHandler = ()=>{
  let show = searchBarRender.showSeacrh
  setSearchBarRender({
    showSearch: !show
  })
}
const handleUserData = (userData)=>{
  userData.id = Math.random();
  let data = [...users, userData]
  
}

  return (
    <div className="App">
      <Router>
        <Navbar search={searchBarRender} />
        <Switch>
          <Route path="/" exact component={FreelancerLogin} ><FreelancerLogin 
          showSearch={showSearchHandler}
          showModal={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
          handleUser={handleUserData}/></Route>
          <Route path="/home" exact component={HomePage}/>
          <Route path="/hire" exact component={hirePage}/>
          <Route path="/getHire" exact component={getHirePage}/>
        </Switch>
      </Router>
          
    </div>
  );
}

export default App;
