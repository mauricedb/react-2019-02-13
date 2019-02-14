import React, { Component } from 'react';
import GroupedLabelInput from './GroupedLabelInput';

function validateUser(user) {
  const errors = {};

  if (!user.firstName) {
    errors.firstName = 'De voornaam is verplicht.';
  } else if (user.firstName.length < 2) {
    errors.firstName = 'De voornaam is te kort.';
  }

  return errors;
}

class UserForm extends Component {
  state = {
    user: {
      firstName: 'Maurice',
      lastName: 'de Beijer',
      email: 'maurice.de.beijer@gmail.com'
    },
    errors: {}
  };

  onChange = e => {
    const user = { ...this.state.user, [e.name]: e.value };
    this.setState({ user, errors: validateUser(user) });
  };

  onSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  };

  render() {
    const hasErrors = !!Object.keys(this.state.errors).length;

    return (
      <form onSubmit={this.onSubmit}>
        <GroupedLabelInput
          label="Voornaam:"
          name="firstName"
          value={this.state.user.firstName}
          error={this.state.errors.firstName}
          onChange={this.onChange}
        />
        <GroupedLabelInput
          label="Achternaam:"
          name="lastName"
          value={this.state.user.lastName}
          error={this.state.errors.lastName}
          onChange={this.onChange}
        />
        <GroupedLabelInput
          label="email:"
          name="email"
          value={this.state.user.email}
          error={this.state.errors.email}
          onChange={this.onChange}
        />

        <div>
          <button disabled={hasErrors}>Save</button>
        </div>
      </form>
    );
  }
}

export default UserForm;
