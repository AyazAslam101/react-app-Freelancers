import React,{useState} from 'react'
import {Button , Input} from 'antd'
import Aux from "../../../hoc/Auxiliary"
import './freelancerLogin.css'
import SignUpModal from '../../signUpModal/signUpModal'
import {Modal , message , Form} from 'antd'
import {useSelector} from 'react-redux'
import {useHistory } from 'react-router-dom'
function FreelancerLoginFrom(props) {

    let data = useSelector(state=>state.userDetails)

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

    // const success = () => {
    //     message
    //       .loading('Action in progress..', 2.5)
    //       .then(() => message.success('Loading finished', 2.5))
    //       .then(() => message.info('Loading finished is finished', 2.5));
    //   };
    
    const history = useHistory()
    const [loginData, setloginData] = useState({
        email : "",
        password : ""
    })
    const goToHomePage =(e)=>{
        e.preventDefault()
        console.log(data.users);
        let result = data.users.find((element) => {
            return (element.email === loginData.email && element.password === loginData.password)
        })
        console.log(result)
        if(result){
            history.push('/home')
            message
            .loading('Action in progress..', 2.5)
            .then(() => message.success('Loading finished', 2.5));
        }else{
            message
            .loading('Action in progress..', 2.5)
            .then(()=> message.warning('Email or Password is wrong' , 2.5))
        }
    }
    const onChangeHandler = (e)=>{
        setloginData({...loginData , 
        [e.target.id] : e.target.value
    })
    }
    
    return (
        <Aux>
            <div className="login-form">
            <Form onSubmit={goToHomePage} >
                <h4>LOGIN FORM</h4>
            <div className="login-information">
                <Form.Item
                name="Email"
                rules={[
                    {
                      required : true,
                      message : 'Please input your Email!'
                    }
                  ]}>
                    <Input className="email-information" type={Text} placeholder="Email Adress or phone number" id="email" onChange={onChangeHandler}></Input>
                </Form.Item>
                <Form.Item
                name="Password"
                rules={[
                    {
                      required : true,
                      message : 'Please input valid Password!'
                    }
                  ]}>
                    <Input  className="password-information" type="Password" placeholder="password" id="password"onChange={onChangeHandler}></Input>
                </Form.Item>
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
            </Form>
                <div>
                <button className="acc-button"
                onClick={props.showModal}>Create New Account</button>
                </div>
            <Modal  visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel} footer={null}>
                <div className="signup-style-in-modal">
                    <SignUpModal handleUserData={props.handleUser} 
                    addUser={addUser} /> 
                </div>
            </Modal>
        </div>
        </Aux>
    )
}
export default FreelancerLoginFrom;