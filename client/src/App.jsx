import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Store';
import List from './Components/list';

class App extends Component {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
