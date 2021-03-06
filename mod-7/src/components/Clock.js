import React, { Component } from 'react';
import Greeter from './Greeter';
import { useTime } from './useTime';
import TimeContext from './TimeContext';

// class Clock extends Component {
//   handle = 0;
//   state = {
//     time: new Date()
//   };
//   componentDidMount() {
//     this.handle = setInterval(() => {
//       this.setState({
//         time: new Date()
//       });
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.handle);
//   }
//   render() {
//     const { time } = this.state;
//     return (
//       <div>
//         <Greeter name="clock" />
//         <div>Het is nu: {time.toLocaleTimeString()}</div>
//       </div>
//     );
//   }
// }

const Clock = () => {
  // const time = useTime(1000);
  const time = React.useContext(TimeContext);

  return (
    <div>
      <Greeter name="clock" />
      <div>Het is nu: {time.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;
