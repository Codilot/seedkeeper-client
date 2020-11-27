import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class App extends React.Component {
    render() {
      return (
        <div id="app">
          <div>Hello World</div>
        </div>
      );
    }
  }

const app = document.getElementById('app');

ReactDOM.render(
    <App />,
    app
  );