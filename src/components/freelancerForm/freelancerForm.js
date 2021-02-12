import React,{useState} from 'react'
import FreelancerLoginFrom from "./freelancerLoginForm/freelancerLoginFrom"
import Clientlogin from "../Clientform/clientlogin"

function FreelancerForm(props) {
    
      let freelancerLogin = null
      let clientlogin = null
      if(props.showForm.showClientForm === true){
          return clientlogin = <Clientlogin 
          showModal={props.showModal}
           isModalVisible={props.isModalVisible}
           handleClientData={props.handleClientData}
           handleProfileData={props.handleProfileData}
           handleCancel={props.handleCancel}
           getUserData={props.getUserData}/>
      }else if(props.showForm.showFreelancerForm === true){
        return freelancerLogin = <FreelancerLoginFrom 
                showSearch={props.viewProfileHandler }
                showModal={props.showModal}
                handleOk={props.handleOk}
                handleCancel={props.handleCancel}
                isModalVisible={props.isModalVisible}
                getUserData={props.getUserData}
                handleProfileData={props.handleProfileData}
                handleUserData={props.handleUserData}
                hadleBtnRender={props.hadleBtnRender} />  
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
