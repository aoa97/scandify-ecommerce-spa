import { Component } from "react";
import { connect } from "react-redux";
import {
  setActiveCurrency,
} from "../../redux/actions/currenciesActions";
import Dropdown from "../Dropdown/Dropdown";
import StyledCurrencyMenu from "./CurrencyMenuStyled";

class CurrencyMenu extends Component {
  render() {
    const { currencies, activeCurrency, setActiveCurrency } = this.props;

    return (
      <Dropdown>
        <StyledCurrencyMenu>
          {currencies.map((c, i) => (
            <div
              key={i}
              className={`${
                activeCurrency === c
                  ? "currency__item active"
                  : "currency__item"
              }`}
              onClick={() => setActiveCurrency(c)}
            >
              <span>{c.symbol}</span>
              <span>{c.label}</span>
            </div>
          ))}
        </StyledCurrencyMenu>
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

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyMenu);
