import React, { Component } from 'react';

class Jokes extends Component {
  state = {
    jokes: [],
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const rsp = await fetch('http://localhost:3001/chuck-norris');
      if (!rsp.ok) {
        throw rsp;
      }
      if (rsp.headers.get('content-type').startsWith('application/json')) {
        const jokes = await rsp.json();
        this.setState({ jokes });
      } else {
        const jokes = await rsp.text();
        this.setState({ jokes });
      }
    } catch (error) {
      this.setState({ error });
    }
    this.setState({ loading: false });
  }

  render() {
    const { loading, error, jokes } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    return (
      <ul>
        {jokes.map((joke, index) => (
          <li key={joke.id}>{joke.joke}</li>
        ))}
      </ul>
    );
  }
}

export default Jokes;
