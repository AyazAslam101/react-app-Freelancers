import React from 'react'
import SignUpForm from "../freelancerForm/freelancersignup/freelancerSignup"
function signUpModal(props) {
    
    return (
        <div>
            <SignUpForm handleUser={props.handleUserData} photoData={props.photoData} addUser={props.addUser} handleRadioData={props.handleRadioData}/>
        </div>
    )
}

export default signUpModal
