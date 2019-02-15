import React from 'react';
import Greeter from './Greeter';
import { useTime } from './useTime';

const Clock = () => {
  const time = useTime();

  return (
    <div>
      <Greeter name="clock" />
      <div>Het is nu: {time.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;
