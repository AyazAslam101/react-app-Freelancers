import React, { useState } from "react";
import "../freelancersignup/freelancerSignup.css";
import { Input, Form } from "antd";
import { useSelector } from "react-redux";
import Uploader from "../../photoUploader/photoUploader";
import { message } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


const FreelancerSignup = (props) => {
  console.log(props, "dispatchFunctions")
  const dataUser = useSelector((state) => state.userDetails);

  console.log(dataUser);

  const [FreelancerInput, setFreelancerInput] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
    value : "",
    description: "",
  });

  const [radio, setradio] = useState({
    value4  :"client"
  })

  const onChange4 = e => {
    console.log('radio4 checked', e.target.value);
    this.setState({
      value4: e.target.value,
    });
  };

  const [showNewForm, setshowNewForm] = useState({
    showPhotoUploader: false,
  });

  const pushingDataHandler = (data) => {
    console.log(data, "image data");
    setFreelancerInput({ ...FreelancerInput, image: data });
  };

  const handleRadioData =(RadioData)=>{
    console.log(RadioData)
    FreelancerInput({...FreelancerInput , value: RadioData
    })
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (FreelancerInput.name &&FreelancerInput.email &&FreelancerInput.password) {
       props.handleUser({
        ...FreelancerInput,
        id: Math.floor(Math.random() * 1000),
      });
    } else {
      message.error("Please fill every input");
    }


    let showUploader = showNewForm.showPhotoUploader;
    setshowNewForm({
      showPhotoUploader: !showUploader,
    });
  };

  const handleData = (event) => {
    setFreelancerInput({
      ...FreelancerInput,
      [event.target.id]: event.target.value,
    });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
 
  // console.log(user)
  return (
    <form
      onSubmit={handleSubmit}
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className="signup-form">
        <h4>SIGNUP FORM</h4>
        <div className="signup-information">
          <Input
            onChange={handleData}
            className="signup-email-information"
            type="text"
            placeholder="Name"
            id="name"
          ></Input>
          <Input
            onChange={handleData}
            className="signup-password-information"
            type="email"
            placeholder="Email Address"
            id="email"
          ></Input>
          <Input
            onChange={handleData}
            className="signup-password-information"
            type="password"
            placeholder="New Password"
            id="password"
          ></Input>
          <Input
            onChange={handleData}
            className="signup-password-information"
            type="password"
            placeholder="Confirm Password"
            id="password"
          ></Input>
        </div>
        <div className="radio">
        </div>
        <div className="uploader">
        <br/>
        {/* <RadioBtn handleRadioData={handleRadioData}/> */}
          <Uploader pushingDataHandler={pushingDataHandler} />
        </div>
        <div className="signup-login-button">
          <button className="signup-button-login" onSubmit={handleSubmit}>
            SignUp
          </button>
        </div>
      </div>
    </form>
  );
};

export default FreelancerSignup;
