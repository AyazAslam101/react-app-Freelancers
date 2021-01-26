import React,{useState} from 'react'
import { Modal, Button } from 'antd';
import './freelancerLogin.css'
import {useHistory } from 'react-router-dom'
import SignUpModal from "../../signUpModal/signUpModal"
function FreelancerLoginFrom(props) {
    const history = useHistory()
    const [homePage] = useState({
        routerpage:true
    })
    const goToHomePage =()=>{
        if(homePage.routerpage === true){
            history.push('/home')
        }
    }

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
    
    return (
        <div className="login-form">
          {/* <h4>Login</h4> */}
        <div className="login-information">
        <input className="email-information" type={Text} placeholder="Email Adress or phone number"></input>
        <input  className="password-information" type="password" placeholder="password"></input>
        </div>
        <div className="login-button">
        <button className="button-login" onClick={goToHomePage}>Login in</button>
        </div>
        <div className="a-tag"><Button>Forgotten Password?</Button></div>
        <div className="line">
        </div>
            <div>
            <button className="acc-button"
            onClick={props.showModal}>Create New Account</button>
            <Modal  visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel} footer={null} >
                <div className="signup-style-in-modal">
                    <SignUpModal handleUserData={props.handleUser}/>
                </div>
             </Modal>
            </div>
        </div>
    )
}
export default FreelancerLoginFrom;