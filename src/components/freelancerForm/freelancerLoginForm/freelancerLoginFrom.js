import React, { useState } from "react";
import { Button, Input } from "antd";
import Aux from "../../../hoc/Auxiliary";
import "./freelancerLogin.css";
import SignUpModal from "../../signUpModal/signUpModal";
import { Modal, message } from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Clientlogin from '../../Clientform/clientlogin'
function FreelancerLoginFrom(props) {
  let data = useSelector((state) => state.userDetails); 

  let users = data.users;

  const addUser = (emailData) => {
    const filter = data.users.filter(
      (element) => element.email === emailData.email
    );
    if (filter.lenght > 0) {
      message.warn("email taken");
      return false;
    } else {
      setloginData({ ...loginData, users });
    }
  };
  

  const history = useHistory();
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  const goToHomePage = (e) => {
    e.preventDefault();
    props.handleProfileData(loginData);
    let result = data.users.find((element) => {
      return (
        element.email === loginData.email &&
        element.password === loginData.password
      );
    });
    if (result) {
      props.getUserData(result);
      history.push("/home");
      message
        .loading("Action in progress..", 2.5)
        .then(() => message.success("Loading finished", 1.5));
    } else {
      message
        .loading("Action in progress..", 2.5)
        .then(() => message.warning("Email or Password is wrong", 2.5));
    }
  };
  const onChangeHandler = (e) => {
    setloginData({ ...loginData, [e.target.id]: e.target.value });
  };

  return (
    <Aux>
      <Clientlogin/>
      <div className="login-form">
        <form onSubmit={goToHomePage}>
          <h4>LOGIN Freelancer</h4>
          <div className="login-information">
            <Input
              className="email-information"
              type="email"
              placeholder="Email Adress or phone number"
              id="email"
              onChange={onChangeHandler}
            ></Input>
            <Input
              className="password-information"
              type="password"
              placeholder="Password"
              id="password"
              onChange={onChangeHandler}
            ></Input>
          </div>
          <div className="login-button">
            <button
              type="submit"
              className="button-login"
              onSubmit={goToHomePage}
              // onClick={success}
            >
              Login in
            </button>
          </div>
          <div className="line"></div>
        </form>
        <div>
          <button className="acc-button" onClick={props.showModal}>
            Create New Account
          </button>
        </div>
        <Modal
          visible={props.isModalVisible}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
          footer={null}
        >
          <div className="signup-style-in-modal">
            <SignUpModal handleUserData={props.handleUserData} addUser={addUser} />
          </div>
        </Modal>
      </div>
    </Aux>
  );
}
export default FreelancerLoginFrom;
