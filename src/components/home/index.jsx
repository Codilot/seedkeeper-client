import React from 'react';
import { Link } from "react-router-dom";
import { Button, Row, Col, Space } from 'antd';

const Home = () => (
    <Row gutter={[8, { xs: 8, md: 16 }]}>
        <Col className="gutter-row" xs={{ span: 20, offset: 2 }} lg={{ span: 12, offset: 6 }}>
            <h1 className={"foo"}>Saatgut erhalten durch Vermehrung</h1>
            <p className={"bar"}>My text bla bla bla</p>
            <Row gutter={[8, 8]}>
            <Col className="gutter-row" xs={{ span: 20, offset: 2 }} lg={{ span: 12, offset: 6 }}>
                <Button size="large" type="primary" block><Link to="/register">Register</Link></Button>
            </Col>
             <Col className="gutter-row" xs={{ span: 20, offset: 2 }} lg={{ span: 12, offset: 6 }}>   
                <Button size="large" type="default" block><Link to="/login">Login</Link></Button>
            </Col>
            </Row>
        </Col>
        
    </Row>
)

export default Home;