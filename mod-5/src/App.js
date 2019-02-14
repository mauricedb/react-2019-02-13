import React, { Component } from 'react';
import Counter from './components/Counter';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

function reducer(state = { count: 42 }, action) {
  console.log(state, action);

  switch (action.type) {
    case 'increment':
      // state.count += action.payload;

      // return Object.assign({}, state, { count: state.count + action.payload });

      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </Provider>
      </div>
    );
  }
}

export default App;
