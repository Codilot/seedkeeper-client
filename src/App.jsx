import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import PrivateRoute from './components/private_route'
import ConfirmEmail from './components/confirm_email'
import Register from './components/register'
import Login from './components/login'
import Home from './components/home'
import ValuationTemplateList from './features/valuation_templates/ValuationTemplateList'
import MainMenu from './components/navigation/MainMenu'
import Brand from './components/brand'
import './App.less';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const styles = {
    header: { position: 'fixed', zIndex: 1, width: '100%', padding: '0 10px' },
    navbar: { position: "relative" },
    contentInner: { paddingTop: 64,},
    footer: { textAlign: 'center' },
    layout: { height: '100%'}
}



const App = () => (
    <Router>
        <Layout style={styles.layout} className="App">
            <Header style={styles.header}>
                <nav style={styles.navbar}>
                    <Brand />
                    <MainMenu />
                </nav>
            </Header>
            <Content>
                <div style={styles.contentInner}>
                    <Switch>
                        <PrivateRoute path="/valuation-templates" component={ValuationTemplateList} />
                        <Route path="/confirm">
                            <ConfirmEmail />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Redirect from="*" to="/" />
                    </Switch>
                </div>
            </Content>
            <Footer style={styles.footer}>©2020 Created by Codilot</Footer>
        </Layout>
    </Router>
);

export default App;