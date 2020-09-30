import React from 'react';
import PropType from 'prop-types';

import './amount.scss';

const Amount = ({ value, currency }) => (
  <div className="amount">
    <div className="amount-value">{value}</div>
    <div className="amount-currency">{currency}</div>
  </div>
);

Amount.propTypes = {
  value: PropType.number.isRequired,
  currency: PropType.string.isRequired,
};

// == Export
export default Amount;
