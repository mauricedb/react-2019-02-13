import React, { Component } from 'react';

class Greeter extends Component {
  render() {
    const { name } = this.props;

    return <div>Hello {name}</div>;
  }
}

export default Greeter;
