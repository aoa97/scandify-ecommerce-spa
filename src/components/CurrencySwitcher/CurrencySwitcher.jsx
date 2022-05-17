import { Component } from "react";
import { connect } from "react-redux";
import { setActiveCurrency } from "../../redux/actions/currenciesActions";
import Dropdown from "../Dropdown/Dropdown";
import { CurrencyItem } from "./CurrencySwitcher.styles";

class CurrencySwitcher extends Component {
  handleCurrencySelect(c) {
    const { setActiveCurrency, closeMenu } = this.props;
    setActiveCurrency(c);
    closeMenu();
  }

  render() {
    const { currencies, activeCurrency, closeMenu } = this.props;

    return (
      <Dropdown closeMenu={closeMenu}>
        {currencies.map((c, i) => (
          <CurrencyItem
            key={i}
            active={activeCurrency === c}
            onClick={() => this.handleCurrencySelect(c)}
          >
            <span>{c.symbol}</span>
            <span>{c.label}</span>
          </CurrencyItem>
        ))}
      </Dropdown>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currencies: state.currencyData.currencies,
    activeCurrency: state.currencyData.activeCurrency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveCurrency: (c) => dispatch(setActiveCurrency(c)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);
