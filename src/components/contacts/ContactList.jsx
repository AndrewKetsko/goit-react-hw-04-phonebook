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
            // console.log(contact);
            // console.log(contact.name);
            // console.log(this.state.filter);
            // console.log(contact.name.includes(this.state.filter));
          })
          .map(contact => {
            //   console.log(contact.id);
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
