import React, { Component } from 'react';
import errorBoundary from './errorBoundary';

class Counter extends Component {
  state = { count: 0 };

  onClick = () => {
    const { count } = this.state;
    // this.setState({ count: count + 1 });
    this.setState({ count: null });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <div>Count:{count.toString()}</div>
        <button onClick={this.onClick}>Increment</button>
      </div>
    );
  }
}

export default errorBoundary(Counter);
