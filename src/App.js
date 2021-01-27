import React,  {useState } from 'react'
import {useDispatch} from 'react-redux';
import { usersAction , userProfileAction} from './action'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/navbar'
import FreelancerLogin from "./components/freelancerForm/freelancerLoginForm/freelancerLoginFrom"
// import Freelancer from "./components/freelancers/freelancers"
import HomePage from './components/homePage/homePage';
import hirePage from './components/hirePage/hirePage';
import getHirePage from './components/getHirePage/getHirePage';


function App() {
  

  // const [data, setData] = useState([...users])
  // console.log({user s});
  const dispatch = useDispatch()
  // // useEffect(()=>{
  // //   setData(
  // //     JSON.parse(localStorage.data ? localStorage.data : [])
  // //   )
  // // })
  // console.log(users);
  
  // useEffect(()=>{
  //   localStorage.setItem("name" , JSON.stringify(data))
  // } , [data])


  const [profileData , setprofileData] = useState({
    email : "",
    password : ""
  })

  const [viewProfileButton , setviewProfileButton] = useState({
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

const viewProfileHandler = ()=>{
  let show = viewProfileButton.showSeacrh
  setviewProfileButton({
    showSearch: !show
  })
}
const handleProfileData =(data)=>{
  dispatch(userProfileAction(data))
}
const handleUserData = (userData)=>{
  dispatch(usersAction(userData))
}
const getUserData = (userData)=>{
  setprofileData({ ...profileData , userData})
}

  return (
    <div className="App">
      <Router>
        <Navbar search={viewProfileHandler} />
        <Switch>
          <Route path="/" exact component={FreelancerLogin} ><FreelancerLogin 
          showSearch={viewProfileHandler}
          showModal={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
          getUserData={getUserData}
          handleProfileData={handleProfileData}
          handleUser={handleUserData}/></Route>
          <Route path="/home" exact component={HomePage}><HomePage a={profileData}></HomePage></Route>
          <Route path="/hire" exact component={hirePage}/>
          <Route path="/getHire" exact component={getHirePage}/>
        </Switch>
      </Router>
          
    </div>
  );
}

export default App;
