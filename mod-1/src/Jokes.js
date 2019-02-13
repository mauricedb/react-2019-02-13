import React, { Component } from 'react';

const url = 'http://localhost:3001/chuck-norris';

class Jokes extends Component {
  state = {
    jokes: []
  };

  async componentDidMount() {
    const rsp = await fetch(url);
    const jokes = await rsp.json();
    this.setState({ jokes });
  }

  render() {
    return (
      <ul>
        {this.state.jokes.map((joke, index) => (
          <li key={joke.id}>{joke.joke}</li>
        ))}
      </ul>
    );
  }
}

export default Jokes;
