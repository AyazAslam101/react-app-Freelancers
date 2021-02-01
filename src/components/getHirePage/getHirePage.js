import React , {useEffect , useState} from 'react'
import axios from "axios"
import {Card , Input ,Button} from "antd"
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
    const [postData , setPostData] = useState({
        post: []
    })

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setPostData({post : response.data})
        })
    }, [])
    const posts = postData.post.map((post)=>{
        return  <Card title={post.title} style={{ width: 400 , height:300 ,marginBottom:30}} hoverable >
            <h3>client's name</h3>
            <p>{post.body}</p>
            <Button type="link"></Button>
            </Card>


    })
        return (
            <Aux>
                <div className="post" style={style}>
                    {posts}
                </div>
            </Aux>
        )
}

export default GetHirePage
