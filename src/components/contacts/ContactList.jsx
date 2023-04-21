import React from 'react';
import PropTypes from 'prop-types';
import ContactEl from './ContactEl';
import { Element, List } from './ContactList.styled';

export default function ContactList({ contacts, filter, delFunc }) {
  return (
    <>
      <List>
        {contacts
          .filter(contact => {
            return contact.name.toLowerCase().includes(filter);
          })
          .map(contact => {
            return (
              <Element key={contact.id}>
                <ContactEl contact={contact} delFunc={delFunc} />
              </Element>
            );
          })}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  delFunc: PropTypes.func.isRequired
};
