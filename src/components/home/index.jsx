import React from 'react';
import { Link } from "react-router-dom";
import { Button, Row, Col, Space } from 'antd';

const Home = () => (
    <Row gutter={[8, { xs: 8, md: 16 }]}>
        <Col className="gutter-row" offset={2} span={20}>
            <h1 className={"foo"}>Hello world!</h1>
            <p className={"bar"}>My text bla bla bla</p>
        </Col>
        <Col className="gutter-row" offset={2} span={20}>
            <Button size="large" type="primary" block><Link to="/register">Register</Link></Button>
        </Col>
        <Col className="gutter-row" offset={2} span={20}>   
            <Button size="large" type="default" block><Link to="/login">Login</Link></Button>
        </Col>
    </Row>
)

export default Home;