import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../filter/FilterField.styled';
import { Button, PhoneBook } from './Form.styled';

export const Form = ({ submitForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onFillName = e => {
    setName(e.target.value);
    e.target.innerHTML = name;
  };

  const onFillNumber = e => {
    setNumber(e.target.value);
    e.target.innerHTML = number;
  };

  return (
    <>
      <PhoneBook action="" onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onFillName}
        />
        <label htmlFor="number">Number</label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onFillNumber}
        />
        <Button type="submit">Add contact</Button>
      </PhoneBook>
    </>
  );
};

Form.propTypes = {
  submitForm: PropTypes.func.isRequired
};
