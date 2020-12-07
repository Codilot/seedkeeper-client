import React from 'react';
import { Link } from "react-router-dom";
import { Button, Row, Col, Typography, Space } from 'antd';
import PageLayout from '../page_layout'
import Headline from '../typography/Headline'
const { Text } = Typography;

const Home = () => (
    <PageLayout>
        <Row gutter={[8, 8]} >
            <Col style={{padding: "24px 0", textAlign: "center"}} className="gutter-row" xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
                <Headline>Saatgut erhalten<br /> durch Vermehrung</Headline>
                <Text type="secondary">Schutzen Sie die Vielfalt durch den Anbau von traditionellen Gemüsesorten und der Ernte eigenes Saatgut</Text>
            </Col>
            <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
                <Button shape="round" size="large" type="primary" block><Link to="/register">Register</Link></Button>
            </Col>
            <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>   
                <Button shape="round" size="large" type="default" block><Link to="/login">Login</Link></Button>
            </Col>
        </Row>
    </PageLayout>
)

export default Home;