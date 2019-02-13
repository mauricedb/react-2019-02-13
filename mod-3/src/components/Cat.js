import React, { Component } from 'react';

class Cat extends Component {
  render() {
    return (
      <div>
        <h2>Cat</h2>
        <h3>{this.props.match.params.catName}</h3>
      </div>
    );
  }
}

export default Cat;
