import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Currency from './Currency';

import './currencies.scss';

// == Composant
class Currencies extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    // if param onCurrenciesListDestroy is in props, call it
    this.props.onCurrenciesListDestroy && this.props.onCurrenciesListDestroy();
  }

  render() {
    console.log('Render');
    const { currencies, onCurrencyClick } = this.props;
    return (
      <div className="currencies">
        <ul>
          <li className="currencies-item">Currencies</li>
          {currencies.map((currency) => (
            <Currency key={currency.name} name={currency.name} onClickHandler={onCurrencyClick} />
          ))}
        </ul>
      </div>
    );
  }
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onCurrencyClick: PropTypes.func.isRequired,
  onCurrenciesListDestroy: PropTypes.func,
};
// == Export
export default Currencies;
