import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Store';
import List from './Components/list';
import AddItem from './Components/addItem';

class App extends Component {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AddItem />
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
