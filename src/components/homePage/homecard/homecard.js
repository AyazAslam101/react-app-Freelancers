import React from 'react'
import { Card, Col, Row } from 'antd';


const homecard = () => {
    return (
        <div>
            <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" >
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" >
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
        </Card>
      </Col>
        <Card title="Card title" >
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
        </Card>
    </Row>
  </div>,
        </div>
    )
}
export default homecard
