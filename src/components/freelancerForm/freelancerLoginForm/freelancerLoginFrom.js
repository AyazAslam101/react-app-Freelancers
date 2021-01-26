import React,{useState} from 'react'
import { Modal, Button , message , Input } from 'antd';
import './freelancerLogin.css'
import {useHistory } from 'react-router-dom'
import Aux from "../../../hoc/Auxiliary"
import {useSelector} from 'react-redux'
import SignUpModal from "../../signUpModal/signUpModal"
function FreelancerLoginFrom(props) {

    let data = useSelector(state => state.userDetails)

    let users = data.users

    const addUser = (emailData)=>{
        const filter = data.users.filter((element)=> element.email === emailData.email )
        if(filter.lenght > 0){
            message.warn("email taken")
            return false
        }else{
            setloginData({...loginData , users })
        }
    }
    const [loginData, setloginData] = useState({
        email : "",
        password : ""
    })
    
    const history = useHistory()
    const [homePage] = useState({
        routerpage:true
    })
    const goToHomePage =(e)=>{
        e.preventDefault()
        console.log(e, 'console here')
        let result = data.users.find((element) => {
            return (element.email === loginData.email && element.password === loginData.password)
        })
        if(result){
            history.push('/home')
        }
    }
    const onChangeHandler=(e)=>{
        setloginData({
            ...loginData,
            [e.target.id] : e.target.value
        })
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    
    return (
        <Aux>

            <div className="login-form">
            <form onSubmit={goToHomePage} >
                <h4>LOGIN FORM</h4>
            <div className="login-information">
                    <Input className="email-information" type="email" placeholder="Email Adress or phone number" id="email" onChange={onChangeHandler}></Input>
                    <Input  className="password-information" type="password" placeholder="password" id="password"onChange={onChangeHandler}></Input>
            </div>
            <div className="login-button">
            <button type='submit' className="button-login" 
            onSubmit={goToHomePage} 
            // onClick={success}
            >Login in</button>
            </div>
            <div className="a-tag"><Button>Forgotten Password?</Button></div>
            <div className="line">
            </div>
            </form>
                <div>
                <button className="acc-button"
                onClick={props.showModal}>Create New Account</button>
                </div>
            <Modal  visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel} footer={null}>
                <div className="signup-style-in-modal">
                    <SignUpModal handleUserData={props.handleUser}/>
                </div>
             </Modal>
            </div>
        </Aux>
    
    )
}
export default FreelancerLoginFrom;