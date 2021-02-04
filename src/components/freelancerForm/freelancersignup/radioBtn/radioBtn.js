import React,{useState} from "react"
import { Radio } from 'antd';

const plainOptions = ['Apple', 'Pear', 'Orange'];

const optionsWithDisabled = [
  { label: 'Client', value: 'Client' },
  { label: 'Freelancer', value: 'Freelancer' },
];

 const RadioBtn = (props)=> {
 const [radio ,  setRadio] =  useState({
    value1: 'Client',
  });

  const onChange4 = e => {
    e.preventDefault()
    console.log( e.target.value);
    setRadio({
      value4: e.target.value,
    });
    props.handleRadioData(radio)
  };

 
    const { value } = radio;
    return (
      <>
        <br />
        <Radio.Group
          options={optionsWithDisabled}
          onChange={onChange4}
          value={value}
          optionType="button"
          buttonStyle="solid"
          buttonStyle="white"
        />
      </>
    );
}

export default RadioBtn;