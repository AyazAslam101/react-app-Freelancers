import React,{useState} from 'react'
import {Button , Input} from 'antd'
import './freelancerLogin.css'
import SignUpModal from '../../signUpModal/signUpModal'
import {Modal} from 'antd'
import {useHistory } from 'react-router-dom'
function FreelancerLoginFrom(props) {
    const history = useHistory()
    const [homePage] = useState({
        routerpage:true
    })
    const goToHomePage =()=>{
        if(homePage.routerpage === true){
            props.showSearch()
            history.push('/home')
        }
    }
    
    return (
        <div className="login-form">
            <h4>LOGIN FORM</h4>
        <div className="login-information">
        <Input className="email-information" type={Text} placeholder="Email Adress or phone number"></Input>
        <Input  className="password-information" type="Password" placeholder="password"></Input>
        </div>
        <div className="login-button">
        <button className="button-login" 
        onClick={goToHomePage} 
        >Login in</button>
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