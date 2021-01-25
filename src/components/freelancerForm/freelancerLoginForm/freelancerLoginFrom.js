import React,{useState} from 'react'
import {Button , Input} from 'antd'
import Aux from "../../../hoc/Auxiliary"
import './freelancerLogin.css'
import SignUpModal from '../../signUpModal/signUpModal'
import {Modal} from 'antd'
import {useSelector} from 'react-redux'
import {useHistory } from 'react-router-dom'
function FreelancerLoginFrom(props) {

    let data = useSelector(state=>state.userDetails)
    
    const history = useHistory()
    const [loginData, setloginData] = useState({
        email : "",
        password : ""
    })
    const goToHomePage =(e)=>{
        e.preventDefault()
        let result = Object.keys(data).find((elemnet) => {
            return (elemnet.email === loginData.email && elemnet.password === loginData.password)
        })
        if(result){
            props.showSearch()
            history.push('/home')
        }else{
            alert("user email or password is wrong")
        }
    }
    const onChangeHandler = (e)=>{
        setloginData({...loginData , 
        [e.target.id] : e.target.value
    })
    }
    
    return (
        <Aux>

            <form onSubmit={goToHomePage}>
                <div className="login-form">
                <h4>LOGIN FORM</h4>
            <div className="login-information">
            <Input className="email-information" type={Text} placeholder="Email Adress or phone number" id="email" onChange={onChangeHandler}></Input>
            <Input  className="password-information" type="Password" placeholder="password" id="password"
            onChange={onChangeHandler}></Input>
            </div>
            <div className="login-button">
            <button className="button-login" 
            onSubmit={goToHomePage} 
            >Login in</button>
            </div>
            <div className="a-tag"><Button>Forgotten Password?</Button></div>
            <div className="line">
            </div>
                <div>
                <button className="acc-button"
                onClick={props.showModal}>Create New Account</button>
                </div>
            </div>
            </form>
                <Modal  visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel} footer={null}>
                    <div className="signup-style-in-modal">
                        <SignUpModal handleUserData={props.handleUser} /> 
                    </div>
                </Modal>
        </Aux>
    )
}
export default FreelancerLoginFrom;