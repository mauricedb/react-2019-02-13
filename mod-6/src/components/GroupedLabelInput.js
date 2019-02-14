import React, { Component } from 'react';

class GroupedLabelInput extends Component {
  onChange = e => {
    this.props.onChange({ name: e.target.name, value: e.target.value });
  };

  render() {
    const { value, label, name, error } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          className="form-control"
          name={name}
          value={value}
          onChange={this.onChange}
        />
        {error &&  <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default GroupedLabelInput;
