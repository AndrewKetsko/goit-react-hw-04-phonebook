import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './form/Form';
import { FilterField } from './filter/FilterField';
import ContactList from './contacts/ContactList';
import { Container, Header } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const submitForm = e => {
    e.preventDefault();
    if (!!contacts.find(contact => contact.name === e.target.name.value)) {
      alert(`${e.target.name.value} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name: e.target.name.value,
      number: e.target.number.value,
    };
    setContacts(prev => [...contacts, contact]);
    e.currentTarget.reset();
  };

  const searchFunc = e => {
    setFilter(e.target.value.toLowerCase());
  };

  const delFunc = e => {
    setContacts(prev =>
      prev.filter(contact => contact.id !== e.target.parentNode.dataset.key)
    );
  };

  useEffect(() => {
    const dataLS = JSON.parse(localStorage.getItem('contacts'));
    if (dataLS) {
      setContacts(dataLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Header>PhoneBook</Header>
      <Form submitForm={submitForm} />

      <Header>Contacts</Header>
      <FilterField searchFunc={searchFunc} />

      <ContactList contacts={contacts} filter={filter} delFunc={delFunc} />
    </Container>
  );
};
