import React, { useState } from "react";
import { Button } from "antd";

function PhotoUploader(props) {
  const [BaseImage, setBaseImage] = useState("");
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    }); 
  };
  const handleImageData = (e) => {
    e.preventDefault();
    props.pushingDataHandler(BaseImage);
  };

  return (
    <div id="App">
      <input
        type="file"
        id="image"
        onChange={(e) => {
          uploadImage(e);
        }}
      />
      <img src={BaseImage} width="110px;" border-radius="60px" margin="auto" />
      <Button onClick={handleImageData}>Save Image</Button>
    </div>
  );
}

export default PhotoUploader;
