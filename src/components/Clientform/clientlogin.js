// import React from 'react'
// import Aux from "../../hoc/Auxiliary";
// import SignUpModal from "../../components/signUpModal/signUpModal";
// import { Button, Input } from "antd";
// const clientlogin = (props) => {
//     return (
//         <Aux>
//         <div className="login-form">
//           <form>
//             <h4>LOGIN FORM</h4>
//             <div className="login-information">
//               <Input
//                 className="email-information"
//                 type="email"
//                 placeholder="Email Adress or phone number"
//                 id="email"
//               ></Input>
//               <Input
//                 className="password-information"
//                 type="password"
//                 placeholder="Password"
//                 id="password"
//               ></Input>
//             </div>
//             <div className="login-button">
//               <button
//                 type="submit"
//                 className="button-login"
//               >
//                 Login in
//               </button>
//             </div>
//             <div className="line"></div>
//           </form>
//           <div>
//             <button className="acc-button" onClick={props.showModal}>
//               Create New Account
//             </button>
//           </div>
//           <Modal
//           visible={props.isModalVisible}
//           onOk={props.handleOk}
//           onCancel={props.handleCancel}
//           footer={null}
//         >
//           <div className="signup-style-in-modal">
//             <SignUpModal handleUserData={props.handleUser} addUser={addUser} />
//           </div>
//         </Modal>
//         </div>
//       </Aux>
//     )
// }

// export default clientlogin
