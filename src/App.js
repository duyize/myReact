import React, { Component } from 'react';
import RootRouter from "./router/index.jsx";
import './App.css';
import store from './redux/index.jsx';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootRouter />
      </Provider>
    );
  }
}

export default App;