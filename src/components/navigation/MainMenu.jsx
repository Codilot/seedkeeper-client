import React from 'react'
import { Link } from "react-router-dom";
import ShowMoreMenu from './ShowMoreMenu';
import { Space, Typography, Divider } from 'antd';

const menuStyles = {
    display: "flex",
    justifyContent: "flex-end"
}

const MainMenu = () => (
    <div style={menuStyles}>
        <Space split={<Divider type="vertical" />}>
            <Link to="/register" component={Typography.Link}>Registrieren</Link>
            <Link to="/login" component={Typography.Link}>Login</Link>
            <ShowMoreMenu />
        </Space>
    </div>
)

export default MainMenu;