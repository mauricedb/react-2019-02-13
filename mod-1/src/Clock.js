import React from 'react';

// function getTime() {
//   return new Date().toLocaleTimeString();
// }

class Clock extends React.Component {
  handle = 0;
  state = {
    time: new Date().toLocaleTimeString()
  };

  componentDidMount() {
    this.handle = setInterval(() => {
      //   this.forceUpdate();
      // this.state.time = new Date().toLocaleTimeString();
      // console.log(this.state.time)

      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    const { time } = this.state;

    return <div>Het is nu: {time}</div>;
  }
}

export default Clock;
