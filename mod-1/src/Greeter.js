import React, { Component } from 'react';

class Greeter extends Component {
  onFirstnameChanged = e => {
    this.props.onFirstnameChanged(e.target.value);
  };

  render() {
    const { firstName, lastName } = this.props;

    return (
      <div>
        Hallo: {firstName || 'Stranger'} {lastName}
        <input value={firstName} onChange={this.onFirstnameChanged} />
      </div>
    );
  }
}

export default Greeter;
