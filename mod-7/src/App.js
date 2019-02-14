import React, { Component } from 'react';
import './App.css';
import Greeter from './components/Greeter';
import Counter from './components/Counter';
import Clock from './components/Clock';
import Jokes from './components/Jokes';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Greeter name="Maurice" />
          <hr />
          <Counter />
          <hr />
          <Clock />
        </div>
        <hr />
        <Jokes />
      </div>
    );
  }
}

export default App;
