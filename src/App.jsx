import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import Register from './components/register'
import Login from './components/login'
import Home from './components/home'
import MainMenu from './components/navigation/MainMenu'
import Brand from './components/brand'
import './App.less';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const styles = {
    header: { position: 'fixed', zIndex: 1, width: '100%', padding: '0 10px' },
    navbar: { position: "relative" },
    content: { marginTop: 64, minHeight: '100%' },
    contentInner: { paddingTop: 20},
    footer: { textAlign: 'center' }
}

const App = () => (
    <Router>
        <Layout className="App">
            <Header style={styles.header}>
                <nav style={styles.navbar}>
                    <Brand />
                    <MainMenu />
                </nav>
            </Header>
            <Content style={styles.content}>
                <div style={styles.contentInner}>
                <Switch>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    </Switch>
                </div>
            </Content>
            <Footer style={styles.footer}>©2020 Created by Codilot</Footer>
        </Layout>
    </Router>
);

export default App;