import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

// == Composant
// eslint-disable-next-line arrow-body-style
const Header = ({
  baseAmount,
  search,
  onSearchChange,
  onValueChange,
}) => (
    // eslint-disable-next-line react/jsx-indent
    <div className="header">
      <h1>Converter</h1>
      <p>
        <input
          type="number"
          className="header-amount-value"
          value={baseAmount}
          onChange={(event) => onValueChange(event.target.value)}
        />{baseAmount > 1 ? 'euros' : 'euro'}
      </p>
      <input
        type="text"
        className="currencies-search"
        placeholder="Search a currency..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
    // eslint-disable-next-line indent
  );

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default Header;
