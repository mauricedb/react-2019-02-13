import React, { PureComponent } from 'react';

// class Greeter extends PureComponent {
//   render() {
//     const { name } = this.props;

//     console.count('Greeter');

//     return <div>Hello {name}</div>;
//   }
// }

// function Greeter(props) {
//   const { name } = props;

//   console.count('Greeter');

//   return <div>Hello {name}</div>;
// }

const Greeter = ({ name }) => <div>Hello {name}</div>;

export default Greeter;
