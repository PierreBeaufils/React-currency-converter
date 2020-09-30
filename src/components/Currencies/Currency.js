import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Currency = ({ name, onClickHandler }) => {
  const onCurrencyClick = () => onClickHandler(name);
  return (
    <li className="currencies-item" onClick={onCurrencyClick}>{name}</li>
  );
};

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Currency;
