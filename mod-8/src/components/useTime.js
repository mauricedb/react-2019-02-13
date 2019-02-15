import React from 'react';

export const useTime = interval => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const handle = setInterval(() => {
      setTime(new Date());
    }, interval);
    return () => clearInterval(handle);
  }, [interval]);

  return time;
};
