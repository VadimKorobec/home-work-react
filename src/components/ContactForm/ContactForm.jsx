import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from 'components/ContactList/ContactList';

export class ContactForm extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    this.reset();
  };

  handleChange = e => {
    console.log(e.currentTarget.value);
    this.setState({ name: e.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <ContactList />
      </div>
    );
  }
}
