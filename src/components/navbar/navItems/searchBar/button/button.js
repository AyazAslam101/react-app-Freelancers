import React from 'react'
import Radium from 'radium'
import {Button} from 'antd'
import {SearchOutlined} from '@ant-design/icons';

function button() {
    return (
        <div>
            <Button className="search" icon={<SearchOutlined />} shape="circle"></Button>
        </div>
    )
}

export default Radium(button);
