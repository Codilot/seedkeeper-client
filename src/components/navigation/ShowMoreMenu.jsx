import React from 'react';
import { Dropdown, Button, Menu } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const dropdownMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/register">Register</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  );


const ShowMoreMenu = () => {
    return (
      <Dropdown key="more" overlay={dropdownMenu}>
        <Button
          style={{
            border: 'none',
            padding: '3px 5px 0 0',
            boxShadow: 'none',
            backgroundColor: 'transparent'
          }}
          type="primary"
          shape="circle"
          icon={<MoreOutlined />}
        >
        </Button>
      </Dropdown>
    );
};

export default ShowMoreMenu;