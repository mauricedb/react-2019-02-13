import React, { Component } from 'react';
import './App.css';
import Greeter from './components/Greeter';
import Counter from './components/Counter';
import Clock from './components/Clock';
// import Jokes from './components/Jokes';
import JokesPresentation from './components/JokesPresentation';
import Ajax from './components/Ajax';
import TimeProvider from './components/TimeProvider';

class App extends Component {
  render() {
    return (
      <div>
        <TimeProvider>
          <div className="App">
            <Greeter name="Maurice" />
            <hr />
            <Counter />
            <hr />
            <Clock />
            <Clock />
            <Clock />
            <Clock />
          </div>
          <hr />
          {/* <Jokes /> */}
        </TimeProvider>
        <Ajax url="http://localhost:3001/chuck-norris">
          {jokes => <JokesPresentation jokes={jokes} />}
        </Ajax>
      </div>
    );
  }
}

export default App;
