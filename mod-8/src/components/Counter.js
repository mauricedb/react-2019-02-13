import React from 'react';
import errorBoundary from './errorBoundary';

export const Counter = () => {
  const [count, setCount] = React.useState(1);

  return (
    <div>
      <div className="count">Count: {count.toString()}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default errorBoundary(Counter);
