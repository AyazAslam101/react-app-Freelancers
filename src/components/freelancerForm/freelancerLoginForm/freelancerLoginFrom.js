import React,{useState} from 'react'
import {Button} from 'antd'
import './freelancerLogin.css'
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
        <div className="login-information">
        <input className="email-information" type={Text} placeholder="Email Adress or phone number"></input>
        <input  className="password-information" type={Text} placeholder="Email Adress or phone number"></input>
        </div>
        <div className="login-button">
        <button className="button-login" onClick={goToHomePage} 
        >Login in</button>
        </div>
        <div className="a-tag"><Button>Forgotten Password?</Button></div>
        <div className="line">
        </div>
        <button className="acc-button">Create New Account</button>
        </div>
    )
}
export default FreelancerLoginFrom;