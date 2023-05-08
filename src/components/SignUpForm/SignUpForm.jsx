import React, { Component } from 'react';
import { Form, Label } from './SingUpForm.styled';

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};
const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};

export class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    const { name, value, type, checked } = e.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { login, email, password, agreed } = this.state;
    console.log(`Login:${login}`);
    console.log(`Email:${email}`);
    console.log(`Password:${password}`);
    console.log(`Agreed:${agreed}`);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender, age } = this.state;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            Name
            <input
              type="text"
              placeholder="Enter login"
              name="login"
              value={login}
              onChange={this.handleChange}
              checked={agreed}
            />
          </Label>
          <Label>
            Email
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={this.handleChange}
              checked={agreed}
            />
          </Label>
          <Label>
            Password
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={this.handleChange}
              checked={agreed}
            />
          </Label>
          <Label>
            Agree to temps
            <input
              type="checkbox"
              name="agreed"
              checked={agreed}
              onChange={this.handleChange}
            />
          </Label>
          <div>
            <h2>Choose your gender</h2>
            <label>
              Male
              <input
                type="radio"
                checked={gender === Gender.MALE}
                name="gender"
                value={Gender.MALE}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Female
              <input
                type="radio"
                checked={gender === Gender.FEMALE}
                name="gender"
                value={Gender.FEMALE}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <label>
            Choose your age
            <select name="age" value={age} onChange={this.handleChange}>
              <option value="" disabled>
                ...
              </option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
            </select>
          </label>
          <button type="submit" disabled={!agreed}>
            Sign up as{login}
          </button>
        </Form>
      </div>
    );
  }
}
