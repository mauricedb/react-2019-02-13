import React, { Component } from 'react';

const x = document.getElementById('bla');
if (x) {
  x.textContent = 'Iets';
}

type ClockState = {
  time: string;
};

type ClockProps = {
  howOften: 1000 | 2000 | 'auto';
};

// var xx = "1"
// if (1 == xx ){

// }
class Clock extends Component<ClockProps, ClockState> {
  state = {
    time: new Date().toLocaleTimeString()
  };

  componentDidMount() {
    const { howOften: interval } = this.props;

    setInterval(
      () => {
        this.setState({
          time: new Date().toLocaleTimeString()
        });
      },
      interval == 'auto' ? 200 : interval
    );
  }

  render() {
    const { time } = this.state;
    return <div>Het is: {time}</div>;
  }
}

export default Clock;
