import React ,{useState} from "react"
import { Form, Input, Button, Checkbox } from 'antd';
import {useDispatch} from "react-redux"
import {proposalAction} from "../../../action/index"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const {TextArea} = Input

const ApplyJobs = () => {

  const dispatch = useDispatch()

    const [proposalData, setproposalData] = useState({
        topic : "",
        porposal : ""
    })
  const onChangeHandler = (event)=>{
    setproposalData({
      ...proposalData , 
      [event.target.id] : event.target.value
    })
    console.log(proposalData)
}

const handleSubmit = ()=>{
  dispatch(proposalAction(proposalData))
}

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      htmlType="form"
      onSubmit={handleSubmit}
    >
      <Form.Item
        label="Freelancer's Name"
        name="username"
      >
        <Input  style={{width : 400}} id="topic" onChange={onChangeHandler}  style={{textAlign:"start" , width : 400}} />
      </Form.Item>

      <Form.Item
        label="Proposal"
        name="proposal"
      >
        <TextArea rows={10} style={{width : 400}} id="porposal" onChange={onChangeHandler} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button  htmlType="submit" onChange={handleSubmit} >
         submit proppose
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ApplyJobs
