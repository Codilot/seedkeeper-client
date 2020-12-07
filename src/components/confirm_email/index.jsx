import React from 'react';
import { Link } from "react-router-dom";
import { Button, Row, Col, Typography } from 'antd';
import MainLayout from '../main_layout'
import Headline from '../typography/Headline'
const { Text, Paragraph, Title } = Typography;

const ConfirmEmail = ({ email, resend }) => {
    
    const text = email ? ' ' + email + ' ' : ' Deine Emailadresse '
    const headline = resend ? 'Bestätigungsmail erneut gesendet' : ' Fast geschafft'

    return (
        <MainLayout>
            <Row gutter={[8, 8]}>
                <Col style={{padding: "24px 0", textAlign: "center"}} className="gutter-row" xs={{ span: 24 }} md={{ span: 14, offset: 5 }} xl={{ span: 10, offset: 7 }}>
                    <Headline>{headline}</Headline>
                    <Title level={3}>
                        Wir haben eine Email an {text} gesendet.
                    </Title>
                </Col>
                <Col style={{textAlign: "center"}} className="gutter-row" xs={{ span: 24 }} md={{ span: 14, offset: 5 }} xl={{ span: 10, offset: 7 }}>
                    <Paragraph>
                        <Text strong>Bitte klicke auf den Link in dieser Email und aktiviere Deinen Account.</Text>
                    </Paragraph>
                </Col>    
                <Col style={{textAlign: "center"}} className="gutter-row" xs={{ span: 24 }} md={{ span: 14, offset: 5 }} xl={{ span: 10, offset: 7 }}>
                    <Paragraph>
                        <Text type="secondary">Haben Sie unsere E-Mail nicht innerhalb weniger Minuten erhalten?</Text>
                    </Paragraph>
                    <Button type="link">Bestätigungsmail erneut senden</Button>    
                </Col>
            </Row>
        </MainLayout>
    )
}

export default ConfirmEmail;