import React , {useEffect , useState} from 'react'
import axios from "axios"
import {Card , Input ,Button , Modal} from "antd"
import {useHistory} from 'react-router-dom'
import Aux from "../../hoc/Auxiliary"

const {TextArea} = Input

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

    
  const showModal = (id) => {
      console.log(id)
    setIsModalVisible(true);
  };

  const handleOk = () => {
    history.push("./apply-job-page")
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    const posts = postData.post.map((post)=>{
        return  <Card title={post.title} style={{ width: 350 , height:300 ,marginBottom:30}} hoverable >
            <h3>client's name</h3>
            <p>{post.body}</p>
            <span>Total Proposals</span> : <br />

            <Button type="link" onClick={()=>showModal(post.id)}>More details</Button>
            </Card>


    })
        return (
            <Aux>
                <div className="post" style={style}>
                    {posts}
                </div>
                <Modal title="Details" visible={isModalVisible} onOk={handleOk} okText="apply" okType="link" onCancel={handleCancel}>
                    <h1>hello</h1>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>

            </Aux>
        )
}

export default GetHirePage
