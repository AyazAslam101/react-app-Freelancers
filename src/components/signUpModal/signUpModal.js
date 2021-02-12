import React from 'react'
import SignUpForm from "../freelancerForm/freelancersignup/freelancerSignup"
// import Clientsignup from '../../components/Clientform/clientSignup'
function signUpModal(props) {
    
    return (
        <div>
             {/* <Clientsignup  photoData={props.photoData} handleClientData={props.handleClientData} /> */}

            <SignUpForm  photoData={props.photoData} handleClientData={props.handleClientData} />
        </div>
    )
}

export default signUpModal
