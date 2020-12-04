import React from 'react';
import { Button } from 'antd';
import './App.less';

const App = () => (
    <div className="App">
        <h1 className={"foo"}>Hello world!</h1>
        <p className={"bar"}>My text bla bla bla</p>
        <Button type="primary">Button</Button>
    </div>
);

export default App;