import React , {useEffect , useState} from 'react'
import axios from "axios"
import {Card , Input ,Button , Modal , Collapse , Form} from "antd"
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux"
import {proposalAction} from "../../action"
import Aux from "../../hoc/Auxiliary"

const {Panel} = Collapse

const style = {
    display : "flex",
    flexWrap:"wrap",
    // alignItem:"space-between",
    // width:"100vw",
    justifyContent:"space-around",
    // marginBottom:"40px",
    alignItem:"space-around",
}

const inputstyle = {
    display:"flex",
    flexirection: "column",
}

function GetHirePage() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [postData , setPostData] = useState({
        post: []
    })
    const history = useHistory()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setPostData({post : response.data})
        })
    }, [])

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };

      const {TextArea} = Input
      
        const dispatch = useDispatch()
      
          const [proposalData, setproposalData] = useState({
              porposal : ""
          })
        const onChangeHandler = (event)=>{
          setproposalData({
            ...proposalData , 
            [event.target.id] : event.target.value
          })
          console.log(proposalData)
      }
      
      const handleSubmit =()=>{
        dispatch(proposalAction(proposalData))
      }   


      const showModal = (id) => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    const posts = postData.post.map((post)=>{
        return  <Card  title={post.title} style={{ width: 350 , height:300 ,marginBottom:30}} hoverable onClick={()=>showModal(post.id)} >
            <h3>client's name</h3>
            <p>{post.body}</p>
            <span>Total Proposals</span> : <br />

            {/* <Button type="link" onClick={()=>showModal(post.id)}>More details</Button> */}
            </Card>


    })
        return (
            <Aux>
                <div className="title" style={{textAlign : 'center'}}>Jobs</div>

                <div className="post" style={style}>
                    {posts}
                </div>
                <Modal title="Details"  visible={isModalVisible} onCancel={handleCancel} okType="link" onOk={handleCancel} >
                    <h1>hello</h1>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                <Collapse accordion>
                    <Panel header="apply" type="primary"> 
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        htmlType="form"
                        onSubmit={handleSubmit}
                        style={{display:"flex" , justifyContent:"center" , flexDirection : "column" , paddingRight: 50}}
                        >

                        <Form.Item
                            label="Proposal"
                            name="proposal"
                        >
                            <TextArea rows={10} style={{width : 400}} id="porposal" onChange={onChangeHandler} />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button  htmlType="submit" onClick={handleSubmit} >
                            submit proppose
                            </Button>
                        </Form.Item>
                        </Form>
                    
                     </Panel>
                </Collapse>
                </Modal>
                

            </Aux>
        )
}

export default GetHirePage
