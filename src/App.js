import React,  {useState } from 'react'
import {useDispatch , useSelector} from 'react-redux';
import { usersAction , userProfileAction , clientDataAction} from './action'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import {message} from "antd"
import './App.css';
import Navbar from './components/navbar/navbar'
import {Button} from "antd"
import FreelancerLogin from "./components/freelancerForm/freelancerLoginForm/freelancerLoginFrom"
import Freelancer from "./components/freelancers/freelancers"
import HomePage from './components/homePage/homePage';
import hirePage from './components/hirePage/hirePage';
import ApplyJobs from './components/freelancers/apply-jobs/applyJobs'
import FreelancerForm from "./components/freelancerForm/freelancerForm"
import getHirePage from './components/getHirePage/getHirePage';
import FormHandleBtn from './components/button/button'
function App() {
  
  const data = useSelector(state => state.userDetails)
  console.log(data)
  const dispatch = useDispatch()
  const clientData = useSelector(state => state.userDetails)
  console.log(clientData , "CHECK")
 
const [profileData , setprofileData] = useState({
  email : "",
  password : ""
})

const [viewProfileButton , setviewProfileButton] = useState({
    showProfile : false
})
const [isModalVisible, setIsModalVisible] = useState(false);


const showModal = () => {
  setIsModalVisible(true);
};
const [showForm, setshowForm] = useState({
  showClientForm : false,
  showFreelancerForm : false

})

const handleClientForm =()=>{
  setshowForm({
    showClientForm : true,
    showFreelancerForm : false
  })
}

const handleFreelancerForm = ()=>{
  setshowForm({
    showClientForm: false,
    showFreelancerForm : true
  })
}


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
const [buttona,setButtona]=useState(true)
const handleProfileData =(data)=>{
  setButtona(!buttona)
  dispatch(userProfileAction(data))
}
const handleUserData = (userData)=>{
  const asdf = data.users.find((e)=>{
    return e.email == userData.email
  })
  if(asdf){

    message
          .loading("Action in progress..", 0.5)
          .then(() => message.warn("Email Taken", 0.5));
  }else{
    message
    .loading("Action in progress..", 0.5)
    .then(() => message.success("Signed up", 0.5));
    dispatch(usersAction(userData))
  }
}

const handleClientData = (clientData)=>{
  console.log(clientData , "check")
  // const clients = data.clientUsers.find((e)=>{
  //   return e.email == clientData.email
  // })
  // if(clients){

  //   message
  //         .loading("Action in progress..", 0.5)
  //         .then(() => message.warn("Email Taken", 0.5));
  // }else{
  //   message
  //   .loading("Action in progress..", 0.5)
  //   .then(() => message.success("Signed up", 0.5));
  //   dispatch(usersAction(clientData))
  // }
}
const getUserData = (userData)=>{
  setprofileData({ ...profileData , userData})
}

  return (
    <div className="App">
      <Router>        
        <Navbar search={viewProfileHandler} />
        <div style={{textAlign:'center' , marginBottom:10}}>
            <Button onClick={handleClientForm} >Log in as Client</Button>
            <Button onClick={handleFreelancerForm} >log in as Freelancer</Button>
        </div>
        <Switch> 
          <Route path="/" exact component={FreelancerForm} ><FreelancerForm
          showSearch={viewProfileHandler }
          handleClientData={handleClientData}
          showModal={showModal}
          handleClientForm={handleClientForm}
          handleOk={handleOk}
          handleCancel={handleCancel}
          handleFreelancerForm={handleFreelancerForm}
          showForm={showForm}
          isModalVisible={isModalVisible}
          getUserData={getUserData}
          handleProfileData={handleProfileData}
          handleUser={handleUserData}/>
          </Route>
          <Route path ="/apply-job-page" exact component={ApplyJobs}></Route>
          <Route path="/home" exact component={HomePage}><HomePage a={profileData}></HomePage></Route>
          <Route path="/hire" exact component={hirePage}/>
          <Route path="/getHire" exact component={getHirePage}/>
        </Switch>
      </Router>
          
    </div>
  );
}

export default App;
