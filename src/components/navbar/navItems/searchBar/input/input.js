import React  from 'react'
import {Input , AutoComplete} from 'antd'

function input() {
    return (
        <div>
            <AutoComplete dropdownMatchSelectWidth={252}
             style={{
                width: 300,
              }}>
                    
                <Input type="text" placeholder="Search"  className="input"/>
            </AutoComplete>
        </div>
    )
}

export default input
