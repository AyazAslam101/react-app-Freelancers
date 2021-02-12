import React , {useState} from 'react'
import Aux from "../../hoc/Auxiliary"
import {useSelector} from "react-redux"
import { Card , Rate } from 'antd'


const {Meta} = Card
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const CardStyle = {display : 'flex' ,
    flexWrap : "wrap",
    justifyContent:"space-around" ,
    alignItem: "space-around"
 }

function HirePage() {
    const data = useSelector(state => state.userDetails)
    const users = data.users
    const [value, setvalue] = useState({
        value1 : 4
    })
    console.log(users)


    const handleChange = value => {
        setvalue({ value1 });
      };


      const { value1 } = value;

    const freelancers = users.map((freelancer)=>{
        return <Card
        style={{display : 'flex' , flexWrap : "wrap", justifyContent:"space-around" , alignItem: "space-around" }}
        hoverable
        style={{ width: 240 ,  }}
        cover={<img alt="example" src={freelancer.image} style={{width : "100%" }} />}
      >
        <Meta title={freelancer.name} description="freelancer" />
        <span>
        <Rate tooltips={desc} onChange={handleChange} value={value1} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
        </span>
      </Card>
    })
    return (
        <Aux>
            <div className="cards-container" >
                <div>
                    <h1 style={{textAlign:"center"}}>Freelancers</h1>
                </div>
                <div style={CardStyle}>
                    {freelancers}

                </div>
            </div>
        </Aux>
    )
}

export default HirePage
