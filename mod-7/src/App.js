import React, { Component } from 'react';
import './App.css';
import Greeter from './components/Greeter';
import Counter from './components/Counter';
import Clock from './components/Clock';
// import Jokes from './components/Jokes';
import JokesPresentation from './components/JokesPresentation';
import Ajax from './components/Ajax';

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
        {/* <Jokes /> */}
        <Ajax url="http://localhost:3001/chuck-norris">
          {jokes => <JokesPresentation jokes={jokes} />}
        </Ajax>
      </div>
    );
  }
}

export default App;
