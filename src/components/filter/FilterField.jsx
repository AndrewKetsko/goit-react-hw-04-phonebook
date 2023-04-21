import React from 'react';
import PropTypes from 'prop-types';
import { Input, Name } from './FilterField.styled';

const FilterField = ({ searchFunc }) => {
  return (
    <>
      <Name htmlFor="search">Find contacts by name</Name>
      <Input type="text" name="filter" onInput={searchFunc} />
    </>
  );
};

export { FilterField };
  
FilterField.propTypes = {
  searchFunc: PropTypes.func.isRequired
};
