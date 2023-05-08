import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value.trim(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', email: '' });
  };

  //   handleNameChange = event => {
  //     console.log(event.target.value);

  //     this.setState({ name: event.target.value.trim() });
  //   };

  //   handleEmailChange = event => {
  //     console.log(event.target.value);

  //     this.setState({ email: event.target.value.trim() });
  //   };

  render() {
    const { name, email } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
