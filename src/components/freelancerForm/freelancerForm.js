import React,{useState} from 'react'
import {Button} from "antd"
import FreelancerLoginFrom from "./freelancerLoginForm/freelancerLoginFrom"
import Clientlogin from "../Clientform/clientlogin"
import FormHandleBtn from "../button/button"

function FreelancerForm(props) {
    
    //   let freelancerLogin = null
    //   let clientlogin = null
    //   if(props.showForm.showClientForm === true){
    //       return clientlogin = <Clientlogin/>
    //   }else if(props.showForm.showFreelancerForm === true){
    //     return freelancerLogin =  
    //   }
    return (
        <div>
            
            {/* <FormHandleBtn handleClientForm={handleClientForm} handleFreelancerForm={handleFreelancerForm}/> */}
            <div>
                    <FreelancerLoginFrom 
                showSearch={props.viewProfileHandler }
                showModal={props.showModal}
                handleOk={props.handleOk}
                handleCancel={props.handleCancel}
                isModalVisible={props.isModalVisible}
                getUserData={props.getUserData}
                handleProfileData={props.handleProfileData}
                handleUserData={props.handleUserData} />
            </div>
        </div>
    )
}

export default FreelancerForm
