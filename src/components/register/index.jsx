import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Button, Row, Col, Typography, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MainLayout from '../main_layout'
import Headline from '../typography/Headline'
const { Text } = Typography;
import { auth } from '../../features/auth/auth'

const Register = (props) => {
    const history = useHistory();
    const onFinish = values => {
        const response = auth.register(values.username, values.email, values.password)
        console.log(response)
        if (response) {
            history.push("/confirm");
        }
        
    };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    return (
        <MainLayout>
            <Row gutter={[8, 8]} align="middle">
                <Col style={{padding: "24px 0 0", textAlign: "center"}} className="gutter-row" xs={{ span: 24 }} md={{ span: 14, offset: 5 }} xl={{ span: 10, offset: 7 }}>
                    <Headline>Registrieren</Headline>
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
                                placeholder="Jane Doe"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Email-Adresse"
                            name="email"
                            rules={[{ required: true, message: 'Bitte gebe Dein Email-Adresse ein.' }]}>
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="jane@example.com"
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
                            <Button shape="round" size="large" type="primary" htmlType="submit" block>Registrieren</Button>
                        </Form.Item>
                    </Form>
                    
                </Col>
                <Col style={{textAlign: "center"}} className="gutter-row" xs={{ span: 24 }} md={{ span: 14, offset: 5 }} xl={{ span: 10, offset: 7 }}>
                    <Text >Oder <Link to="/login" component={Typography.Link}>hier einloggen</Link>.</Text>
                </Col>
            </Row>
        </MainLayout>
    )
}

export default Register