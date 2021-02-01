import React, { useState } from "react";
// import {useSelector} from 'react-redux';
import "../freelancersignup/freelancerSignup.css";
import { Input, Form } from "antd";
import { useSelector } from "react-redux";
import Uploader from "../../photoUploader/photoUploader";
import { message , Radio  } from "antd";
// import {useHistory} from 'react-router-dom'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];

const FreelancerSignup = (props) => {
  const dataUser = useSelector((state) => state.userDetails);

  console.log(dataUser);

  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
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
    setUserInput({ ...userInput, image: data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.name && userInput.email && userInput.password) {
      let a = props.handleUser({
        ...userInput,
        id: Math.floor(Math.random() * 1000),
      });
      if (a) {
        message
          .loading("Action in progress..", 2.5)
          .then(() => message.warn("Email Taken", 2.5));
      } else {
        message
          .loading("Action in progress..", 1.5)
          .then(() => message.success("Signed up", 1.5));
      }
    } else {
      message.error("Please fill every input");
    }

    let showUploader = showNewForm.showPhotoUploader;
    setshowNewForm({
      showPhotoUploader: !showUploader,
    });
  };

  const handleData = (event) => {
    setUserInput({
      ...userInput,
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
            placeholder="name"
            id="name"
          ></Input>
          <Input
            onChange={handleData}
            className="signup-password-information"
            type="email"
            placeholder="Email"
            id="email"
          ></Input>
          <Input
            onChange={handleData}
            className="signup-password-information"
            type="password"
            placeholder="password"
            id="password"
          ></Input>
          <Input
            onChange={handleData}
            className="signup-password-information"
            type="password"
            placeholder="Confirm password"
            id="password"
          ></Input>
        </div>
        <div className="radio">
        <Radio.Group
          options={optionsWithDisabled}
          onChange={onChange4}
          value={value4}
          optionType="button"
          buttonStyle="solid"
        />
        </div>
        <div className="uploader">
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
