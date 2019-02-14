import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  onClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <div>The count is {count}</div>
        <button onClick={this.onClick}>Increment</button>
      </div>
    );
  }
}

export default Counter;
