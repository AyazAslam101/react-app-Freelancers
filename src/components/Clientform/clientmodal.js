import React from 'react'
import Clientsignup from "../Clientform/clientSignup";

function Clientmodal(props) {
    
    return (
        <div>
             <Clientsignup  handleUser={props.handleUserData} photoData={props.photoData} addUser={props.addUser}/>
        </div>
    )
}

export default  Clientmodal
 