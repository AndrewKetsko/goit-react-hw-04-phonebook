import React from 'react';
import PropTypes from 'prop-types';
import { Delete, Card, Name, Tel } from './ContactEl.styled';

export default function ContactEl({ contact, delFunc }) {
  // console.log(contact.id);
  return (
    <Card data-key={contact.id}>
      <Delete type="button" onClick={delFunc}>
        X
      </Delete>
      <Name>{contact.name}:</Name>
      <Tel> {contact.number}</Tel>
    </Card>
  );
};

ContactEl.propTypes = {
  contact: PropTypes.object.isRequired,
  delFunc: PropTypes.func.isRequired
};
