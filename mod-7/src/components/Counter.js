import React, { Component } from 'react';
import errorBoundary from './errorBoundary';

// class Counter extends Component {
//   state = { count: 0 };

//   onClick = () => {
//     const { count } = this.state;
//     this.setState(state => ({ count: state.count + 1 }));
//     this.setState(state => ({ count: state.count + 2 }));
//     this.setState(state => ({ count: state.count + 3 }));

//     // this.setState({ count: null });
//   };

//   render() {
//     const { count } = this.state;

//     return (
//       <div>
//         <div>Count:{count.toString()}</div>
//         <button onClick={this.onClick}>Increment</button>
//       </div>
//     );
//   }
// }

const Counter = () => {
  const [count, setCount] = React.useState(42);

  return (
    <div>
      <div>Count:{count.toString()}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default errorBoundary(Counter);
