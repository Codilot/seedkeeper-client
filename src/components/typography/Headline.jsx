import React from 'react';
import { Typography } from 'antd';
const { Title} = Typography;

const styles = {
    fontWeight: 100,
    fontSize: 40,
    lineHeight: "56px"
}

const Headline = ({ children }) => (
    <Title style={styles}>{children}</Title>
)

export default Headline;