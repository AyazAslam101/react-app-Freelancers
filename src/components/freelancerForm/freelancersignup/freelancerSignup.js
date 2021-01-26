import React, {useState} from 'react';
// import {useSelector} from 'react-redux';
import '../freelancersignup/freelancerSignup.css'
import {Input , Form} from 'antd'
import { useSelector} from 'react-redux'
import Uploader from '../../photoUploader/photoUploader'
import {message} from 'antd'
// import {useHistory} from 'react-router-dom'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

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

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  

  // console.log(user)
    return (
      <Form onSubmit={handleSubmit}
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      >
        <div className="signup-form"  >
          <h4>SIGNUP FORM</h4>
          <div className="signup-information">
            <Form.Item
            style={{marginLeft : "35px"}}
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}>
              <Input onChange={handleData} className="signup-email-information" type="text" placeholder="name"
                id="name"></Input>
            </Form.Item>
            <Form.Item
            style={{marginLeft : "35px"}}
            name="Email"
            rules={[
              {
                required : true,
                message : 'Please input your Email!'
              }
            ]}>
              <Input onChange={handleData} className="signup-password-information" type="email" placeholder="Email" id="email" ></Input>
            </Form.Item>
            <Form.Item 
            style={{marginLeft : "35px"}}
            name="Password"
            rules={[
              {
                required : true,
                message : 'Please input your Password!'
              }
            ]}>
              <Input onChange={handleData} className="signup-password-information" type="password"
              placeholder="password" id="password" ></Input>            
            </Form.Item>
            <Form.Item
            style={{marginLeft : "35px"}}
            name="Comform Password"
            rules={[
              {
                required : true,
                message : 'Please input valid Password!'
              }
            ]}>
                <Input onChange={handleData} className="signup-password-information" type="password" placeholder="Confirm password" id="password" ></Input>
            </Form.Item>
          </div>
        <div className="signup-login-button">
          <button className="signup-button-login" onSubmit={ handleSubmit}>SignUp</button>
        </div>
        </div>
        <div className="uploader"><Uploader 
        pushingDataHandler={pushingDataHandler} 
        /></div>

      </Form>
    )
}

export default FreelancerSignup;

