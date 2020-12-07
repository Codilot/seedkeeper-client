import React from 'react';
import { Link } from "react-router-dom";
import { Button, Row, Col, Typography, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import PageLayout from '../main_layout'
import Headline from '../typography/Headline'
import MainLayout from '../main_layout';
const { Text } = Typography;

const Login = (props) => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    return (
        <MainLayout>
            <Row gutter={[8, 8]}>
                <Col style={{paddingTop: 48, textAlign: "center"}} className="gutter-row" xs={{ span: 24 }} md={{ span: 14, offset: 5 }} xl={{ span: 10, offset: 7 }}>
                    <Headline>Login</Headline>
                </Col>
                <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 14, offset: 5 }} xl={{ span: 10, offset: 7 }}>   
                    <Form
                        layout="vertical"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Benutzername"
                            name="username"
                            rules={[{ required: true, message: 'Bitte gebe Dein Benutzername ein.' }]}>
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Dein Benutzername"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Passwort"
                            name="password"
                            rules={[{ required: true, message: 'Bitte gebe Dein Passwort ein.' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Dein Passwort"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button shape="round" size="large" type="primary" htmlType="submit" block>Login</Button>
                        </Form.Item>
                    </Form>
                    
                </Col>
                <Col style={{textAlign: "center"}} className="gutter-row" xs={{ span: 24 }} md={{ span: 14, offset: 5 }} xl={{ span: 10, offset: 7 }}>
                    <Text >Oder <Link to="/register" component={Typography.Link}>hier registrieren</Link>.</Text>
                </Col>
            </Row>
        </MainLayout>
    )
}

export default Login;