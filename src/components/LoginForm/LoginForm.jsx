import React, { Component } from 'react';
import { Container, Forma } from './LoginForm.styled';

export class LoginForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    console.log(login, password);
    this.props.onSubmit({ login, password });
    form.reset();
  };
  render() {
    return (
      <Container>
        <Forma onSubmit={this.handleSubmit}>
          <input type="text" name="login" placeholder="login" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit">Login</button>
        </Forma>
      </Container>
    );
  }
}
