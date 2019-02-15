import React, { Component } from 'react';

import Context from './TimeContext';

class TimeProvider extends Component {
  handle = 0;
  state = {
    time: new Date()
  };
  componentDidMount() {
    this.handle = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    return (
      <div>
        <Context.Provider value={this.state.time}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export default TimeProvider;
