import React from "react";
import { Row, Col } from "antd";

const PageLayout = ({ children }) => (
    <Row gutter={[8, { xs: 8, md: 16 }]}>
        <Col
            className="gutter-row"
            xs={{ span: 20, offset: 2 }}
            lg={{ span: 12, offset: 6 }}
        >
            {children}
        </Col>
    </Row>
);

export default PageLayout;
