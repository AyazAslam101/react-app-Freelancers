import React ,{useState} from "react"
import { Form, Input, Button  } from 'antd';
import {useDispatch} from "react-redux"
import {jobAction} from "../../../action"

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
        title : "",
        body : "",
        id : Math.random 
    })
  const onChangeHandler = (event)=>{
    setproposalData({
      ...proposalData , 
      [event.target.id] : event.target.value
    })
    console.log(proposalData)
}

const handleSubmit =()=>{
  dispatch(jobAction(proposalData))
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
        label="title"
        name="username"
      >
        <Input  style={{width : 400}} id="title" onChange={onChangeHandler}  style={{textAlign:"start" , width : 400}} />
      </Form.Item>

      <Form.Item
        label="Job"
        name="proposal"
      >
        <TextArea rows={10} style={{width : 400}} id="body" onChange={onChangeHandler} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button  htmlType="submit" onClick={handleSubmit} >
         submit proppose
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ApplyJobs
