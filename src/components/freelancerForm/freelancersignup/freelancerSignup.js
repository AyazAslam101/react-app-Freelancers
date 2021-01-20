import React from 'react';
import '../freelancersignup/freelancerSignup.css'
function freelancerSignup() {
    return (
        // <div className="signup-page">
        //   <h4>SignUp</h4>
        // <div className="signup-information">
        // <input className="email-information" type={Text} placeholder="Email Adress or phone number"></input>
        // <input  className="signup-" type="Password" placeholder="password"></input>
        // </div>
        // </div>
        <div className="login-form">
          <h4>SIGNUP FORM</h4>
        <div className="login-information">
        <input className="email-information" type={Text} placeholder="Email Adress or phone number"></input>
        <input  className="password-information" type="Password" placeholder="password"></input>
        <input  className="password-information" type=" Password" placeholder="Confirm password"></input>
        </div>
        <div className="login-button">
        <button className="button-login" >SignUp</button>
        </div>
        <div className="a-tag">Learn More?</div>
        </div>
    )
}

export default freelancerSignup

