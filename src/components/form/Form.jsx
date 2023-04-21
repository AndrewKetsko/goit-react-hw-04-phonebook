import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Input } from '../filter/FilterField.styled';
import { Button, PhoneBook } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onFillInput = e => {
    // console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state[e.target.name]);
    e.target.innerHTML = this.state[e.target.name];
    // console.log(this.state[e.target.name]);
  };

  render() {
    return (
      <>
        <PhoneBook action="" onSubmit={this.props.submitForm}>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onFillInput}
          />
          <label htmlFor="number">Number</label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onFillInput}
          />
          <Button type="submit">Add contact</Button>
        </PhoneBook>
      </>
    );
  }
}

export { Form };
