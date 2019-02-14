import React, { Component } from 'react';

class UserForm extends Component {
  el;

  state = {
    user: {
      firstName: 'Maurice',
      lastName: 'de Beijer',
      email: 'maurice.de.beijer@gmail.com'
    }
  };

  onSubmit = e => {
    e.preventDefault();

    // console.log(e.target)

    // alert(this.el.value)
    alert(e.target.elements.firstName.value);
  };

  // componentDidMount() {
  //   this.el.value = this.state.user.firstName;
  // }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Voornaam:</label>
          {/* <input name="firstName" ref={e => (this.el = e)} /> */}
          <input name="firstName" defaultValue={this.state.user.firstName} />
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    );
  }
}

export default UserForm;
