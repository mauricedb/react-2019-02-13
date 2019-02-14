import React, { Component } from 'react';

class UserForm extends Component {
  state = { user: { firstName: '', lastName: '', enail: '' } };
  render() {
    return (
      <div>
        <div>
          <label>Voornaam:</label>
          <input />
        </div>
      </div>
    );
  }
}

export default UserForm;
