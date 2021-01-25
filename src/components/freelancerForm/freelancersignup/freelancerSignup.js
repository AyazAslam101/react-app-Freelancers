import React, {useState} from 'react';
// import {useSelector} from 'react-redux';
import '../freelancersignup/freelancerSignup.css'
import { useSelector} from 'react-redux'
import Uploader from '../../photoUploader/photoUploader'
// import {useHistory} from 'react-router-dom'


const  FreelancerSignup =(props) => {

  const dataUser = useSelector(state=>state.userDetails)

  console.log(dataUser );

  const [userInput, setUserInput] = useState({
    name : "",
    email : "",
    password : "",  
    description : ""
  })
  
  const [showNewForm, setshowNewForm] = useState({
    showPhotoUploader : false 
  })

 const pushingDataHandler = (data)=>{
   setUserInput({...userInput ,data})
 }

  
  const handleSubmit = (e) =>{
   e.preventDefault()
    

    if(userInput.name && userInput.email && userInput.password ){
       let a = props.addUser(userInput)
       props.handleUser(userInput)
       if(a){
           alert("Signed up successfully")
         }else{
           alert("email already taken")
         }
      }else{
        alert("all fields are required to be filled")
      }

    let showUploader = showNewForm.showPhotoUploader;
    setshowNewForm({
      showPhotoUploader : !showUploader
    })
    
  }

  const handleData =(event)=>{
    setUserInput({
      ...userInput,
      [event.target.id] : event.target.value
    })
  }
  

  // console.log(user)
    return (
      <form onSubmit={handleSubmit}>
        <div className="signup-form"  >
          <h4>SIGNUP FORM</h4>
          <div className="signup-information">
            <input onChange={handleData} className="signup-email-information" type="text" placeholder="name" id="name"></input>
            <input onChange={handleData} className="signup-password-information" type="text" placeholder="Email" id="email" ></input>
            <input onChange={handleData} className="signup-password-information" type="password" placeholder="password" id="password" ></input>
            <input onChange={handleData} className="signup-password-information" type="password" placeholder="Confirm password" id="password" ></input>
          </div>
        <div className="signup-login-button">
          <button className="signup-button-login" onSubmit={ handleSubmit}>SignUp</button>
        </div>
        </div>
        <div className="uploader"><Uploader 
        pushingDataHandler={pushingDataHandler} /></div>

      </form>
    )
}

export default FreelancerSignup;

