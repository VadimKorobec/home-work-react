import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    email: '',
    experience: '',
    licence: false,
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

  handleLicenceChange = event => {
    console.log(event.currentTarget.checked);
    this.setState({ licence: event.currentTarget.checked });
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
          <p>Your level</p>
          <label>
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === 'junior'}
            />
            Junior
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="midle"
              onChange={this.handleChange}
              checked={this.state.experience === 'midle'}
            />
            Midle
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === 'senior'}
            />
            Senior
          </label>
          <label>
            <input
              type="checkbox"
              name="licence"
              onChange={this.handleLicenceChange}
              checked={this.state.licence}
            />
            I want -)
          </label>
          <button type="submit" disabled={!this.state.licence}>
            Send
          </button>
        </form>
      </div>
    );
  }
}
