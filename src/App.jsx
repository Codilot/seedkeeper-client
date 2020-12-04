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

const App = () => (
    <Router>
        <div className="App">
            <nav style={{position: "relative"}}>
                <Brand />
                <MainMenu />
            </nav>
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
    </Router>
);

export default App;