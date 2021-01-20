import React,{useState} from 'react'
import {Button} from 'antd'
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
        <input className="email-information" type={Text} placeholder="Email Adress or phone number"></input>
        <input  className="password-information" type="Password" placeholder="password"></input>
        </div>
        <div className="login-button">
        <button className="button-login" 
        onClick={goToHomePage} 
        >Login in</button>
        </div>
        <div className="a-tag"><Button>Forgotten Password?</Button></div>
        <div className="line">
        </div>
        <button className="acc-button"
        onClick={props.showModal}>Create New Account</button>
            <Modal title="Basic Modal" visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel}>
                <SignUpModal/>
             </Modal>
        </div>
    )
}
export default FreelancerLoginFrom;