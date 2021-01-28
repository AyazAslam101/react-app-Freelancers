import React, { useState } from 'react'
import { Upload, message , Button } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import "./photoUploader.css"

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
    console.log(reader)
}

function beforeUpload(file) {
    console.log(file.size)
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 4;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

function PhotoUploader(props) {
    const [newUploader, setnewUploader] = useState({
        loading: false
    })
    const [uploadUrl, setuploadUrl] = useState({})

    const pushingDataHandler= (data)=>{
        const newUrl = uploadUrl.imageUrl
        if(data == newUrl){
            props.pushingDataHandler(data)
        }
    }
    const handleChange = info => {
        console.log(info)
        if (info.file.status === 'uploading') {
            setnewUploader({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                setuploadUrl({
                    imageUrl
                }),
            );
        }
    };
    const { loading, imageUrl } = uploadUrl;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>

);
    return (
        <div classname="photo-uploader">
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
               
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%',display: 'inline-flex'}} id="img" /> : uploadButton}
            </Upload>
            <Button  onClick ={() => {pushingDataHandler(uploadUrl.imageUrl)}}>Save Image</Button>
        </div>
    )
}

export default PhotoUploader;
