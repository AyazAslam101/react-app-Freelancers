import React from 'react'
import SignUpForm from "../freelancerForm/freelancersignup/freelancerSignup"

function signUpModal(props) {
    
    return (
        <div>
            <SignUpForm handleUser={props.handleUserData} photoData={props.photoData}/>
        </div>
    )
}

export default signUpModal
