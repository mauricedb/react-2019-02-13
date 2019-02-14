const incrementType = 'increment';

function createIncrementAction(amount = 1) {
  const action = {
    type: incrementType,
    payload: amount
  };

  return action;
}

const store = {
  state: {
    count: 0
  }
};

const listeners = [];

function dispatch(action) {
  switch (action.type) {
    case incrementType:
      store.state.count += action.payload;
      break;
  }

  listeners.forEach(l => l(store.state));
  //   console.log(store.state.count)
}

listeners.push(console.log);

dispatch(createIncrementAction(5));

setInterval(() => dispatch(createIncrementAction()), 1000);

setTimeout(() => (listeners.length = 0), 5000);
setTimeout(() => listeners.push(console.log), 10000);
