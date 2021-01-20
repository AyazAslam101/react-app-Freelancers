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
        <div className="signup-form">
          <h4>SIGNUP FORM</h4>
        <div className="signup-information">
        <input className="signup-email-information" type={Text} placeholder="Email Adress or phone number"></input>
        <input  className="signup-password-information" type="Password" placeholder="password"></input>
        <input  className="signup-password-information" type=" Password" placeholder="Confirm password"></input>
        </div>
        <div className="signup-login-button">
        <button className="signup-button-login" >SignUp</button>
        </div>
        <div className="a-tag">Learn More?</div>
        </div>
    )
}

export default freelancerSignup

