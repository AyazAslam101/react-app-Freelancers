import React, {useState} from 'react';
// import {useSelector} from 'react-redux';
import '../freelancersignup/freelancerSignup.css'
import { useSelector} from 'react-redux'
import {message , Input} from 'antd'
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
       let a = props.handleUser(userInput)
       if(a){
        message
        .loading('Action in progress..', 2.5)
        .then(() => message.success('Signed up', 2.5));
         }else{
          message
          .loading('Action in progress..', 2.5)
          .then(() => message.warn('Email already taken', 2.5));
         }
      }else{
        message.error("Please fill every input")
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
      <form onSubmit={handleSubmit}
      >
        <div className="signup-form"  >
          <h4>SIGNUP FORM</h4>
          <div className="signup-information">
            
              <Input onChange={handleData} className="signup-email-information" type="text" placeholder="name"
                id="name"></Input>
              <Input onChange={handleData} className="signup-password-information" type="email" placeholder="Email" id="email" ></Input>
              <Input onChange={handleData} className="signup-password-information" type="password"
              placeholder="password" id="password" ></Input>
                <Input onChange={handleData} className="signup-password-information" type="password" placeholder="Confirm password" id="password" ></Input>
          </div>
        <div className="signup-login-button">
          <button className="signup-button-login" onSubmit={ handleSubmit}>SignUp</button>
        </div>
        <div className="uploader"><Uploader 
        pushingDataHandler={pushingDataHandler} />s</div>
        </div>
      </form>
    )
}

export default FreelancerSignup;

