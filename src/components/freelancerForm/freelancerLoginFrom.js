import React from 'react'
import './freelancerLogin.css'
function FreelancerLoginFrom() {
    return (
        <div className="login-form">
        <div className="login-information">
        <input className="email-information" type={Text} placeholder="Email Adress or phone number"></input>
        <input  className="password-information" type={Text} placeholder="Password"></input>
        </div>
        <div className="login-button">
<button className="button-login">Login In</button>
        </div>
        <div className="a-tag"><a href="">Forgotten Password?</a></div>
        <div className="line">
        </div>
        <button className="acc-button">Create New Account</button>
        </div>
    )
}
export default FreelancerLoginFrom;