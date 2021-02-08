import React,{useState} from 'react'
import {Button} from "antd"
import FreelancerLoginFrom from "./freelancerLoginForm/freelancerLoginFrom"
import Clientlogin from "../Clientform/clientlogin"
import FormHandleBtn from "../button/button"

function FreelancerForm(props) {
    
      let freelancerLogin = null
      let clientlogin = null
      if(props.showForm.showClientForm === true){
          return clientlogin = <Clientlogin 
          showSearch={props.viewProfileHandler }
          showModal={props.showModal}
          handleOk={props.handleOk}
          handleCancel={props.handleCancel}
          isModalVisible={props.isModalVisible}
          getUserData={props.getUserData}
          handleProfileData={props.handleProfileData}
          handleUser={props.handleUserData} />
      }else if(props.showForm.showFreelancerForm === true){
        return freelancerLogin =  <FreelancerLoginFrom 
        showSearch={props.viewProfileHandler }
        showModal={props.showModal}
        handleOk={props.handleOk}
        handleCancel={props.handleCancel}
        isModalVisible={props.isModalVisible}
        getUserData={props.getUserData}
        handleProfileData={props.handleProfileData}
        handleUser={props.handleUserData} />
      }
    return (
        <div>
            
            {/* <FormHandleBtn handleClientForm={handleClientForm} handleFreelancerForm={handleFreelancerForm}/> */}
            <div>
                {clientlogin}
                {freelancerLogin}
            </div>
        </div>
    )
}

export default FreelancerForm
