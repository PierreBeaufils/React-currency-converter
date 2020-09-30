/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
import React from 'react';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
import Toggler from 'src/components/Toggler';

import './converter.scss';

import currenciesData from 'src/data/currencies';

// eslint-disable-next-line react/prefer-stateless-function
class Converter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseAmount: 1,
      open: true,
      currency: 'United States Dollar',
      search: '',
    };
  }

  toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  makeConversion = () => {
    const { currency, baseAmount } = this.state;
    // Find the matched currency
    const currencyData = currenciesData.find((data) => data.name === currency);

    // Extract rate from founded currency
    const { rate } = currencyData;
    // Calculate the converted amount
    const result = baseAmount * rate;

    return Math.round(result * 100) / 100;
  }

  setCurrency = (currencyName) => {
    this.setState({ currency: currencyName });
  }

  setSearch = (search) => {
    this.setState({ search });
  }

  setBaseAmount = (baseAmount) => {
    const parsedAmount = parseFloat(baseAmount, 10);
    this.setState({ baseAmount: parsedAmount });
  }

  getCurrenciesData = () => {
    let { search } = this.state;

    // if search is empty
    if (!search.trim()) {
      // return everything
      return currenciesData;
    }

    search = search.toLowerCase();

    const filteredCurrencies = currenciesData.filter((currency) => {
      const currencyName = currency.name.toLowerCase();
      return currencyName.includes(search);
    });

    return filteredCurrencies;
  }

  render() {
    return (
      <div className="converter">
        <Header baseAmount={this.state.baseAmount} search={this.state.search} onSearchChange={this.setSearch} onValueChange={this.setBaseAmount} />
        <Toggler open={this.state.open} onClickHandler={this.toggle} />
        {
          this.state.open && (
            <Currencies
              onCurrenciesListDestroy={() => {
                this.setSearch('');
              }}
              currencies={this.getCurrenciesData()}
              onCurrencyClick={this.setCurrency}
            />
          )
        }
        <Amount value={this.makeConversion()} currency={this.state.currency} />
      </div>
    );
  }
}

export default Converter;
