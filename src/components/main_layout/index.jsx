import React from "react";
import { Row, Col } from "antd";

const MainLayout = ({ children }) => (
    <Row>
        <Col
            xs={{ span: 20, offset: 2 }}
            lg={{ span: 12, offset: 6 }}
        >
            {children}
        </Col>
    </Row>
);

export default MainLayout;
