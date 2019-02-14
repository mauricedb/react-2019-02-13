import React, { Component } from 'react';
import UserForm from './components/UserForm';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <UserForm />
      </div>
    );
  }
}

export default App;
