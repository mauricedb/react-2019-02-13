import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createIncrement } from '../redux/actions';

class Counter extends Component {
  onClick = () => {
    this.props.increment();
  };

  render() {
    const { count } = this.props;

    return (
      <div>
        <div>The count is {count}</div>
        <button onClick={this.onClick}>Increment</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(createIncrement())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
