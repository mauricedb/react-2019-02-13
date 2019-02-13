import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import Cat from './components/Cat';
import Dog from './components/Dog';

const user = null;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <nav>
            <Link to="/cats">Cats</Link>
            {' | '}
            <Link to="/cats/zorro">Zorro</Link>
            {' | '}
            <Link to="/cats/diego">Diego</Link>
            {' | '}
            {user && <Link to="/dogs">Dogs</Link>}
            {' | '}
            <Link to="/oops">Oops</Link>
          </nav>
          <Switch>
            <Route path="/cats/zorro" render={() => <div>Zorro</div>} />
            <Route path="/cats/:catName" component={Cat} />
            {user && <Route path="/dogs" component={Dog} />}
            <Redirect to="/cats" />
            {/* <Route render={() => <div>Not found</div>} /> */}
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
