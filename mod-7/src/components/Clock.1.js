import React, { Component } from 'react';
import Greeter from './Greeter';

const Clock = () => {

  return (
    <div>
      <Greeter name="clock" />
      <div>Het is nu: {time.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;
