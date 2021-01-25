import React,{useState} from 'react'
import SignUpModal from '../signUpModal/signUpModal'
import PhotoUploader from '../photoUploader/photoUploader'

import { Carousel, Radio , Button } from 'antd';

const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

const PositionCarousel = (props) => {
  const [dotPosition, setDotPosition] = useState('top');

  const [photoData, setphotoData] = useState({
    src : ""
  })

  const handlePhotoData = (data)=>{
    setphotoData({...photoData , data})
  };

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  return (
    <>
      <Radio.Group onChange={handlePositionChange} value={dotPosition} style={{ marginBottom: 8 , background:"black" }}>
      <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button>
      </Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div>
          <h3><SignUpModal handleUserData={props.handleUser} ></SignUpModal><Button>NEXT</Button></h3>
        </div>
        
        <div>
          <h3><PhotoUploader handlePhotoData={handlePhotoData} /></h3>
        <Button>NEXT</Button>
        </div>
        <div>
          <h3>3</h3>
        </div> 
        <Button>NEXT</Button>
        <div>
          <h3>4</h3>
        </div>
        
      </Carousel>
    </>
  );
};

export default PositionCarousel ;